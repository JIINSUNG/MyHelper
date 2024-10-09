'use client';
import React from 'react';
import { GifticonCalculator } from '@/app/entities';
import { RecommendItemsList } from '@/app/entities';
import { PriceContextProvider } from '@/app/context/PriceContext';

const GifticonPage: React.FC = () => {
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
