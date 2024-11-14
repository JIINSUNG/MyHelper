import React from 'react';
import {
	BrandList,
	BrandSelector,
	NameSelector,
	RegionSelector,
} from '@/features/woori';
import { WooriContextProvider } from '@/app/context/WooriContext';
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from '@tanstack/react-query';
import { data } from '@/entities/woori';
import { PageHeader } from '@/widgets';

const getData = (brand: string) => {
	return data.filter((brands) => brands.brand === brand);
};

export default async function WooriPage() {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ['Woori', '애슐리', '', ''],
		queryFn: () => getData('애슐리'),
		staleTime: 1000 * 60 * 5,
	});

	return (
		<main className="flex flex-col w-full gap-4">
			<WooriContextProvider>
				<PageHeader
					title="우리V 카드 헬퍼"
					content="우리카드 헬퍼를 통해 우리v카드로 어떤 애슐리 지점에서 할인 혜택을 받을 수 있는지  조회 가능합니다"
				/>
				<section className="flex w-full  flex-col gap-4 animate-slideUp">
					<BrandSelector />
					<RegionSelector />
					<NameSelector />
					<hr className="border-0 border-black" />
					<HydrationBoundary state={dehydrate(queryClient)}>
						<BrandList />
					</HydrationBoundary>
				</section>
			</WooriContextProvider>
		</main>
	);
}
