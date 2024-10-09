'use client';

import React, { useEffect, useState } from 'react';
import { usePriceContext } from '@/app/context/PriceContext';

export type GifticonCalculatorProps = {
	className?: string;
};

const GifticonCalculator: React.FC<GifticonCalculatorProps> = ({
	className,
}) => {
	const { minPrice, setMinPrice } = usePriceContext();
	const [gifticonPrice, setGifticonPrice] = useState<number | undefined>();
	const [rate, setRate] = useState<number | undefined>();
	const [price, setPrice] = useState<number | undefined>();
	const [mode, setMode] = useState<number>(0);

	useEffect(() => {
		if (!gifticonPrice) {
			setMinPrice(0);
			return;
		}

		switch (mode) {
			case 0:
				if (rate || rate === 0)
					setMinPrice(Math.ceil(gifticonPrice / ((100 - rate) / 100)));
				break;
			case 1:
				if (price || price === 0) setMinPrice(gifticonPrice + price);
				break;
			case 2:
				setMinPrice(Math.ceil(gifticonPrice * 0.6));
				break;
			default:
				setMinPrice(0);
		}
	}, [gifticonPrice, rate, price, mode, setMinPrice]);

	const handleGifticonPriceChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setGifticonPrice(parseInt(e.currentTarget.value));

	const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setRate(parseInt(e.currentTarget.value));

	const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setPrice(parseInt(e.currentTarget.value));

	const handleModeChange = (selectedMode: number) => () =>
		setMode(selectedMode);

	return (
		<section
			className={`flex max-md:flex-wrap w-full border-b border-black ${className}`}
		>
			<div className="flex flex-col w-full max-md:items-center gap-2 p-4">
				<div>
					<label className="flex gap-2">
						깊티 금액
						<input
							type="number"
							className="border border-black rounded-md"
							onChange={handleGifticonPriceChange}
						/>
					</label>
				</div>
				<div>
					<div className="flex flex-col ml-2 gap-1">
						<div className="flex gap-2">
							<label className="flex gap-2">
								<input
									type="radio"
									name="option"
									checked={mode === 0}
									onChange={handleModeChange(0)}
								/>
								할인율
							</label>
							<input
								type="number"
								min="0"
								max="100"
								className="border border-black rounded-md"
								onChange={handleRateChange}
								disabled={mode !== 0}
							/>
							%
						</div>
						<div className="flex gap-2">
							<label className="flex gap-2">
								<input
									type="radio"
									name="option"
									checked={mode === 1}
									onChange={handleModeChange(1)}
								/>
								할인가격
							</label>
							<input
								type="number"
								className="border border-black rounded-md"
								onChange={handlePriceChange}
								disabled={mode !== 1}
							/>
							원
						</div>
						<div className="flex gap-2">
							<label className="flex gap-2">
								<input
									type="radio"
									name="option"
									checked={mode === 2}
									onChange={handleModeChange(2)}
								/>
								60% 환불
							</label>
						</div>
					</div>
				</div>
			</div>
			<div className="md:border-e md:border-e-black max-md:border-t max-md:border-t-black max-md:w-full" />
			<div className="flex flex-col w-full gap-2 p-4 max-md:p-2">
				<div className="flex flex-col w-full">
					<div className="flex max-md:justify-center">
						<div className="flex items-center gap-2">
							<p>최소 결제 금액</p>
							<div className="border border-black rounded-md px-4 py-2">
								{minPrice}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GifticonCalculator;
