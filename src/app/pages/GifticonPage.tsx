'use client';
import React, { useState } from 'react';
import { GifticonCalculator } from '@/app/entities';
import { RecommendItemsList } from '@/app/entities';
import { PriceContextProvider } from '@/app/context/PriceContext';

export type GifticonPageProps = {
	className?: string;
};

const GifticonPage: React.FC<GifticonPageProps> = ({ className }) => {
	const [minPrice, setMinPrice] = useState<number>(0);
	return (
		<>
			<PriceContextProvider>
				<GifticonCalculator />
				<RecommendItemsList />
			</PriceContextProvider>
		</>
	);
};

export default GifticonPage;
