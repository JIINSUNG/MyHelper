import React from 'react';
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from '@tanstack/react-query';
import { BenefitDetail } from '@/features/benefit/components';
import { getBenefitDetail } from '@/entities/benefit/api/api';

type pageParams = {
	params: {
		categoryId: string;
		subId: string;
		brandId: string;
		benefitId: string;
	};
};

const page: React.FC<pageParams> = async ({ params }) => {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ['benefitDetail', params.categoryId, params.benefitId],
		queryFn: () => getBenefitDetail(params.categoryId, params.benefitId),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<BenefitDetail pid={params.categoryId} benefitId={params.benefitId} />
		</HydrationBoundary>
	);
};

export default page;
