'use client';
import React, { useEffect, useState } from 'react';

const DiscountCalculator: React.FC = () => {
	const [originalPrice, setOriginalPrice] = useState<number>(0);
	const [rate, setRate] = useState<number>(0);
	const [discountPrice, setDiscountPrice] = useState<number>(0);
	const [isRate, setIsRate] = useState<boolean>(true);

	useEffect(() => {
		if (originalPrice <= 0) return;

		if (isRate) {
			const calculatedRate = (
				100 -
				(discountPrice / originalPrice) * 100
			).toFixed(2);
			setRate(parseFloat(calculatedRate));
		} else {
			const calculatedDiscountPrice = (originalPrice * rate) / 100;
			setDiscountPrice(calculatedDiscountPrice);
		}
	}, [originalPrice, rate, discountPrice, isRate]);

	return (
		<section className="flex w-full max-md:flex-wrap gap-2">
			<div className="flex w-full justify-center items-center gap-4">
				<label className="flex items-center gap-2">
					<input
						type="radio"
						name="option"
						checked={isRate}
						onChange={() => setIsRate(true)}
					/>
					할인 율
				</label>
				<label className="flex items-center gap-2">
					<input
						type="radio"
						name="option"
						checked={!isRate}
						onChange={() => setIsRate(false)}
					/>
					할인 가격
				</label>
			</div>

			{isRate ? (
				<div className="flex flex-col w-full items-center gap-1">
					<h2 className="font-bold">할인율 계산기</h2>
					<label className="flex gap-2 items-center">
						<span className="w-[80px]">정가</span>
						<input
							type="number"
							className="px-2 py-1 border border-gray-300"
							onChange={(e) => setOriginalPrice(parseFloat(e.target.value))}
						/>
					</label>
					<label className="flex gap-2 items-center">
						<span className="w-[80px]">결제한 금액</span>
						<input
							type="number"
							className="px-2 py-1 border border-gray-300"
							onChange={(e) => setDiscountPrice(parseFloat(e.target.value))}
						/>
					</label>
					<label className="flex gap-2 items-center">
						<span className="w-[80px]">할인 받은 금액</span>
						<div className="w-[195px] px-2 py-1 border border-gray-300">
							{originalPrice - discountPrice}
						</div>
					</label>
					<label className="flex gap-2 items-center">
						<span className="w-[80px]">할인 율 (%)</span>
						<div className="w-[195px] px-2 py-1 border border-gray-300">
							{rate.toFixed(2)}
						</div>
					</label>
				</div>
			) : (
				<div className="flex flex-col w-full items-center gap-1">
					<h2 className="font-bold">할인 가격 계산기</h2>
					<label className="flex gap-2 items-center">
						<span className="w-[80px]">정가</span>
						<input
							type="number"
							className="px-2 py-1 border border-gray-300"
							onChange={(e) => setOriginalPrice(parseFloat(e.target.value))}
						/>
					</label>
					<label className="flex gap-2 items-center">
						<span className="w-[80px]">할인 율 (%)</span>
						<input
							type="number"
							className="px-2 py-1 border border-gray-300"
							onChange={(e) => setRate(parseFloat(e.target.value))}
						/>
					</label>
					<label className="flex gap-2 items-center">
						<span className="w-[80px]">할인 금액</span>
						<div className="w-[195px] px-2 py-1 border border-gray-300">
							{discountPrice.toFixed(0)}
						</div>
					</label>
					<label className="flex gap-2 items-center">
						<span className="w-[80px]">결제 금액</span>
						<div className="w-[195px] px-2 py-1 border border-gray-300">
							{originalPrice - discountPrice}
						</div>
					</label>
				</div>
			)}
		</section>
	);
};

export default DiscountCalculator;
