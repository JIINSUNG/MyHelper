import React from 'react';
import {
	BrandList,
	BrandSelector,
	NameSelector,
	RegionSelector,
} from '@/features/woori';
import { WooriContextProvider } from '@/app/context/WooriContext';

const page = () => {
	return (
		<WooriContextProvider>
			<main className="flex flex-col w-full gap-4">
				<h1 className="text-2xl font-bold text-center">우리 V 카드 헬퍼</h1>
				<section className="flex w-full flex-col gap-4">
					<BrandSelector />
					<RegionSelector />
					<NameSelector />
					<hr className="border-0 border-black" />
					<BrandList />
				</section>
			</main>
		</WooriContextProvider>
	);
};

export default page;
