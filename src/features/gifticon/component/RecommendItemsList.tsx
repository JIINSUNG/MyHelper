'use client';
import React, { useState } from 'react';
import { usePriceContext } from '@/app/context/PriceContext';
import { InputModal, Input } from '@/shared/component/';
import { Button } from '@/shared/component';
import { useFormHandler } from '@/shared/hooks/useFormHandler';

type Combination = {
	total: number;
	pairs: {
		name: string;
		quantity: number;
	}[];
};

const RecommendItemsList: React.FC = () => {
	const { minPrice } = usePriceContext();
	const [recommendList, setRecommendList] = useState<Combination[]>([]);

	const { itemList, editMode, setEditMode, setItemList, handleSubmit } =
		useFormHandler();

	const handleCalculate = () => {
		const combinations: Combination[] = [];

		const createCombinations = (
			startIndex: number,
			currentCombination: { name: string; quantity: number }[],
			currentTotal: number,
		) => {
			if (currentTotal >= minPrice) {
				combinations.push({
					total: currentTotal,
					pairs: currentCombination,
				});
			}

			for (let i = startIndex; i < itemList.length; i++) {
				const item = itemList[i];
				for (let j = 1; j <= Math.min(item.quantity, 4); j++) {
					createCombinations(
						i + 1,
						[...currentCombination, { name: item.name, quantity: j }],
						currentTotal + item.price * j,
					);
				}
			}
		};

		createCombinations(0, [], 0);

		const minTotal = Math.min(...combinations.map((c) => c.total));
		const optimalCombinations = combinations.filter(
			(c) => c.total === minTotal,
		);

		if (optimalCombinations.length > 0) {
			setRecommendList(optimalCombinations);
		} else {
			alert('해당 품목으로 조합을 찾을 수 없습니다.');
		}
	};

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
							></Button>
						</th>
						<th className="flex items-center justify-center border-l border-black gap-2 w-1/2 py-2">
							추천품목
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="flex justify-between w-full  border-b border-black">
						<td className="flex w-full ">
							<div className="flex w-full justify-between items-center px-2 text-center">
								<p className="w-1/3">물품명</p>
								<p className="w-1/3">가격</p>
								<p className="w-1/3">수량</p>
							</div>
						</td>
						<td className="flex w-full border-l border-black">
							<div className="flex w-full justify-center py-2">
								<Button label={'계산하기'} onClick={handleCalculate} />
							</div>
						</td>
					</tr>
					<tr className="flex justify-between w-full">
						<td className="flex flex-col w-full">
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
									<p className="w-1/3">{item.name}</p>
									<p className="w-1/3">{item.price}</p>
									<p className="w-1/3">{item.quantity}</p>
								</div>
							))}
						</td>
						<td className="flex flex-col w-full border-l border-black">
							{recommendList.map((item, idx) => (
								<div
									className="flex w-full max-md:items-center flex-col gap-1 p-2"
									key={idx}
								>
									<p>추천 조합 {idx + 1}</p>
									<div className="flex gap-2">
										{item.pairs.map((i, subIdx) => (
											<p key={`${i.name}-${subIdx}`}>
												{i.name} {i.quantity}
											</p>
										))}
									</div>
									<p>가격 : {item.total}</p>
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

export default RecommendItemsList;
