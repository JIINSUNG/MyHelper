'use client';
import React, { useState } from 'react';
import { InputModal, Input } from '@/shared/component/';
import { Button } from '@/shared/component';
import { Item, useFormHandler } from '@/shared/hooks/useFormHandler';
import { useBudgetContext } from '@/app/context/BudgetContext';

type Combination = {
	items: { name: string; quantity: number; price: number }[];
	totalCost: number;
};

const BudgetRecommendList: React.FC = () => {
	const { itemList, editMode, setEditMode, setItemList, handleSubmit } =
		useFormHandler();
	const [combinations, setCombinations] = useState<Combination[]>([]);
	const { budget } = useBudgetContext();
	const handleButton = () => {
		setCombinations(findTopCombinations(budget, itemList));
	};

	function findTopCombinations(budget: number, items: Item[]): Combination[] {
		const dp: Combination[][] = Array.from({ length: budget + 1 }, () => []);

		items.forEach((item) => {
			for (let cost = budget; cost >= 0; cost--) {
				for (let qty = 1; qty <= item.quantity; qty++) {
					const totalPrice = qty * item.price;
					if (cost >= totalPrice) {
						const newCombination = [
							...dp[cost - totalPrice].map((combination) => ({
								items: [
									...combination.items,
									{ name: item.name, quantity: qty, price: totalPrice },
								],
								totalCost: combination.totalCost + totalPrice,
							})),
							{
								items: [{ name: item.name, quantity: qty, price: totalPrice }],
								totalCost: totalPrice,
							},
						];

						dp[cost] = [...dp[cost], ...newCombination]
							.sort((a, b) => b.totalCost - a.totalCost)
							.slice(0, 3);
					}
				}
			}
		});

		return dp[budget].slice(0, 3);
	}

	return (
		<section className="flex w-full justify-between max-md:flex-wrap">
			<table className="table-auto w-full border-collapse">
				<thead>
					<tr className="flex justify-between w-full border-b border-black">
						<th className="flex items-center justify-center gap-2 w-1/2 py-2">
							<p>구매품목</p>
							<Button
								label={editMode ? '-' : '+'}
								color={editMode ? 'warn' : 'slateBlue'}
								onClick={() => setEditMode((mode) => !mode)}
								shape="circle"
							/>
						</th>
						<th className="flex items-center justify-center border-l border-black gap-2 w-1/2 py-2">
							추천품목
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="flex justify-between w-full  border-b border-black">
						<td className="flex w-full">
							<div className="flex w-full justify-between items-center px-2 text-center">
								<p className="w-1/3">물품명</p>
								<p className="w-1/3">가격</p>
								<p className="w-1/3">수량</p>
							</div>
						</td>
						<td className="flex w-full border-l border-black">
							<div className="flex w-full justify-center py-2">
								<Button
									label={'계산하기'}
									color={
										budget > 0 && itemList.length > 0
											? 'slateBlue'
											: 'frenchGray'
									}
									onClick={() => (budget > 0 ? handleButton() : undefined)}
								/>
							</div>
						</td>
					</tr>
					<tr className="flex justify-between w-full">
						<td className="flex flex-col w-1/2">
							{itemList.map((item, index) => (
								<div
									key={item.name || index}
									className="flex w-full justify-between items-center px-2 text-center cursor-pointer"
									onClick={() => {
										if (confirm('삭제하시겠습니까?')) {
											setItemList((prev) =>
												prev.filter((i) => i.name !== item.name),
											);
										}
									}}
								>
									<span className="w-1/3 truncate">{item.name}</span>
									<span className="w-1/3">{item.price}</span>
									<span className="w-1/3">{item.quantity}</span>
								</div>
							))}
						</td>
						<td className="flex flex-col w-1/2 border-l border-black">
							{combinations.map((combination, idx) => (
								<div
									className="flex w-full max-md:items-center flex-col gap-1 p-2 border border-gray-300 rounded-lg shadow-md"
									key={idx}
								>
									<p className="font-semibold text-lg">추천 조합 {idx + 1}</p>

									<div className="flex flex-col gap-2 mt-2">
										{combination.items.map((item, itemIdx) => (
											<div
												className="flex justify-between w-full"
												key={itemIdx}
											>
												<span>
													{item.name} (수량: {item.quantity}) : {item.price}원
												</span>
											</div>
										))}
									</div>

									<p className="font-bold mt-3 text-right">
										총 가격: {combination.totalCost}원
									</p>
								</div>
							))}
						</td>
					</tr>
				</tbody>
			</table>
			{editMode && (
				<InputModal
					isOpen={editMode}
					onClose={() => setEditMode(false)}
					onSubmit={handleSubmit}
					label="물품 추가"
				>
					<Input type="text" placeholder="물품명" name="name" />
					<Input type="number" placeholder="물품가격" name="price" />
					<Input type="number" placeholder="물품 개수" name="quantity" />
				</InputModal>
			)}
		</section>
	);
};

export default BudgetRecommendList;
