'use client';
import React, { useEffect, useState } from 'react';
import { Input, InputContainer } from '@/shared/component';

const DiscountCalculator: React.FC = () => {
	const [originalPrice, setOriginalPrice] = useState<number>(0);
	const [rate, setRate] = useState<number>(0);
	const [discountPrice, setDiscountPrice] = useState<number>(0);
	const [isRate, setIsRate] = useState<boolean>(true);

	useEffect(() => {
		if (originalPrice <= 0 || isNaN(originalPrice)) return;

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
	}, [originalPrice, rate, discountPrice]);

	useEffect(() => {
		setRate(0);
		setDiscountPrice(0);
	}, [isRate]);
	return (
		<section className="flex w-full max-md:flex-wrap gap-2">
			<div className="flex w-full justify-center items-center gap-4">
				<InputContainer>
					<Input
						labelRight="할인 율"
						type="radio"
						name="option"
						checked={isRate}
						onChange={() => setIsRate(true)}
					/>
					<Input
						labelRight="할인 가격"
						type="radio"
						name="option"
						checked={!isRate}
						onChange={() => setIsRate(false)}
					/>
				</InputContainer>
			</div>

			{isRate ? (
				<div className="flex flex-col w-full items-center gap-1">
					<h2 className="font-bold py-4">할인율 계산기</h2>
					<InputContainer className="flex-col">
						<Input
							label="정가"
							type="number"
							onChange={(e) => setOriginalPrice(parseFloat(e.target.value))}
							value={originalPrice}
						/>
						<Input
							label="결제한 금액"
							type="number"
							onChange={(e) => setDiscountPrice(parseFloat(e.target.value))}
							value={discountPrice}
						/>
						<Input
							label="할인 받은 금액"
							type="number"
							disabled={true}
							value={originalPrice - discountPrice}
						/>
						<Input
							label="할인 율 (%)"
							type="number"
							disabled={true}
							value={rate.toFixed(2)}
						/>
					</InputContainer>
				</div>
			) : (
				<div className="flex flex-col w-full items-center gap-1">
					<h2 className="font-bold  py-4">할인 가격 계산기</h2>
					<InputContainer className="flex-col">
						<Input
							label="정가"
							type="number"
							onChange={(e) => setOriginalPrice(parseFloat(e.target.value))}
							value={originalPrice}
						/>
						<Input
							label="할인 율 (%)"
							type="number"
							onChange={(e) => setRate(parseFloat(e.target.value))}
							value={rate}
						/>
						<Input
							label="할인 금액"
							type="number"
							disabled={true}
							value={discountPrice.toFixed(0)}
						/>
						<Input
							label="결제 금액"
							type="number"
							disabled={true}
							value={originalPrice - discountPrice}
						/>
					</InputContainer>
				</div>
			)}
		</section>
	);
};

export default DiscountCalculator;
