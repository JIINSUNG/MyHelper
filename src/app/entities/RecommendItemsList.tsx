'use client';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { usePriceContext } from '@/app/context/PriceContext';

type Item = {
	name: string;
	price: number;
	quantity: number;
};

type Combination = {
	total: number;
	pairs: {
		name: string;
		quantity: number;
	}[];
};

const RecommendItemsList: React.FC = () => {
	const { minPrice } = usePriceContext();
	const [itemList, setItemList] = useState<Item[]>([]);
	const [editMode, setEditMode] = useState<boolean>(false);
	const [recommendList, setRecommendList] = useState<Combination[]>([]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const name = form.get('name') as string | null;
		const price = form.get('price') as string | null;
		const quantity = form.get('quantity') as string | null;

		if (!name || !price || !quantity) return;

		setItemList((prev) => [
			...prev,
			{ name, price: parseInt(price), quantity: parseInt(quantity) },
		]);

		setEditMode(false);
		e.currentTarget.reset();
	};

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
			console.log('조합을 찾을 수 없습니다.');
		}
	};

	return (
		<section className="flex w-full justify-between max-md:flex-wrap border-b border-black">
			<div className="flex w-full flex-col">
				<div className="flex items-center justify-center gap-2 border-b border-black p-4 h-[70px]">
					<p>구매품목</p>
					<button
						className={twMerge(
							'border border-black rounded-full bg-blue-300 size-[30px]',
							editMode && 'bg-red-300 animate-pulse',
						)}
						onClick={() => setEditMode((mode) => !mode)}
					>
						{editMode ? '-' : '+'}
					</button>
				</div>
				<div className="flex flex-col">
					<div className="flex justify-between items-center px-2 text-center">
						<p className="w-1/3">물품명</p>
						<p className="w-1/3">가격</p>
						<p className="w-1/3">수량</p>
					</div>
					<div className="flex mx-auto">
						<button
							className="border border-black px-2 py-1 rounded-md bg-blue-300"
							onClick={handleCalculate}
						>
							계산하기
						</button>
					</div>
					{itemList.map((item, index) => (
						<div
							key={item.name || index}
							className="flex justify-between items-center px-2 text-center cursor-pointer"
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
				</div>
			</div>
			<div className="md:border-l max-md:border-t max-md:w-full border-black"></div>
			<div className="flex w-full flex-col">
				<div className="flex items-center justify-center gap-2 border-b border-black p-4 h-[70px]">
					<p>추천품목</p>
				</div>
				<div className="flex flex-col gap-2 p-4">
					{recommendList.map((item, idx) => (
						<div
							className="flex w-full max-md:items-center flex-col gap-1 border-b border-black"
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
				</div>
			</div>
			{editMode && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
					<form
						className="bg-white p-10 rounded-md shadow-md w-[400px]"
						onSubmit={handleSubmit}
					>
						<input
							type="text"
							className="border border-gray-300 rounded-md px-2 mb-2 w-full"
							placeholder="물품명"
							name="name"
						/>
						<input
							type="number"
							className="border border-gray-300 rounded-md px-2 mb-2 w-full"
							placeholder="물품가격"
							name="price"
						/>
						<input
							type="number"
							className="border border-gray-300 rounded-md px-2 mb-2 w-full"
							placeholder="물품 개수"
							name="quantity"
						/>
						<div className="flex gap-2">
							<button className="mt-4 bg-blue-500 text-white rounded-md px-4 py-2">
								추가
							</button>
							<button
								className="mt-4 bg-red-500 text-white rounded-md px-4 py-2"
								onClick={() => setEditMode(false)}
							>
								취소
							</button>
						</div>
					</form>
				</div>
			)}
		</section>
	);
};

export default RecommendItemsList;
