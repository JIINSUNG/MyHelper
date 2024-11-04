import React from 'react';
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from '@tanstack/react-query';
import { getBenefitList } from '@/entities/benefit/api/api';
import { BenefitList } from '@/features/benefit/components';

type pageParams = {
	params: {
		categoryId: string;
		subId: string;
	};
};

const page: React.FC<pageParams> = async ({ params }) => {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ['benefitList', params.categoryId, params.subId],
		queryFn: () => getBenefitList(params.categoryId, params.subId),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<BenefitList pid={params.categoryId} sid={params.subId} />
		</HydrationBoundary>
	);
};

export default page;
