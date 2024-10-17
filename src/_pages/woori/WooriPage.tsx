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
import { getData } from '@/entities/woori/api/api';

export default async function WooriPage() {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ['Woori', '애슐리', '', ''],
		queryFn: () => getData('애슐리', '', ''),
	});

	return (
		<main className="flex flex-col w-full gap-4">
			<WooriContextProvider>
				<h1 className="text-2xl font-bold text-center">우리 V 카드 헬퍼</h1>
				<section className="flex w-full flex-col gap-4">
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
