import React from 'react';
import { GifticonCalculator, RecommendItemsList } from '@/features/gifticon';
import { PriceContextProvider } from '@/app/context/PriceContext';

const GifticonPage: React.FC = () => {
	return (
		<PriceContextProvider>
			<main className="flex flex-col w-full md:p-4">
				<GifticonCalculator />
				<RecommendItemsList />
			</main>
		</PriceContextProvider>
	);
};

export default GifticonPage;
