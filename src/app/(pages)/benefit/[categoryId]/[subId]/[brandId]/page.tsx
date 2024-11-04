import React from 'react';
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from '@tanstack/react-query';
import { getBenefitBrandList } from '@/entities/benefit/api/api';
import { BenefitBrandList } from '@/features/benefit/components';

type pageParams = {
	params: {
		categoryId: string;
		subId: string;
		brandId: string;
	};
};

// 해당하는 브랜드의 혜택 리스트를 불러온다
const page: React.FC<pageParams> = async ({ params }) => {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ['benefitBrand', params.categoryId, params.brandId], // 대분류 와 브랜드 Id
		queryFn: () => getBenefitBrandList(params.categoryId, params.brandId),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<BenefitBrandList pid={params.categoryId} brandId={params.brandId} />
		</HydrationBoundary>
	);
};

export default page;
