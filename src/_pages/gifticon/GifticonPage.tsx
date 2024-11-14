import React from 'react';
import { GifticonCalculator, RecommendItemsList } from '@/features/gifticon';
import { PriceContextProvider } from '@/app/context/PriceContext';
import { PageHeader } from '@/widgets';

const GifticonPage: React.FC = () => {
	return (
		<PriceContextProvider>
			<main className="flex flex-col w-full gap-4">
				<PageHeader
					title="기프티콘 헬퍼"
					content="기프티콘 사용하거나 할인을 받아 물건을 구매 할 때 최적의 조합을 찾아주는 기능입니다, 상품명과 가격, 구매가능한 수량을 적으면 최대 효율의 품목을 추천해 드립니다"
				/>
				<section className="flex w-full  flex-col gap-4 animate-slideUp">
					<GifticonCalculator />
					<RecommendItemsList />
				</section>
			</main>
		</PriceContextProvider>
	);
};

export default GifticonPage;
