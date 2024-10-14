import React from 'react';
import { GifticonCalculator, RecommendItemsList } from '@/features/gifticon';
import { PriceContextProvider } from '@/app/context/PriceContext';

const GifticonPage: React.FC = () => {
	return (
		<PriceContextProvider>
			<main className="flex flex-col w-full md:p-4 items-center whitespace-nowrap">
				<h1 className="text-2xl font-bold mb-4">기프티콘 헬퍼</h1>
				<GifticonCalculator />
				<RecommendItemsList />
			</main>
		</PriceContextProvider>
	);
};

export default GifticonPage;
