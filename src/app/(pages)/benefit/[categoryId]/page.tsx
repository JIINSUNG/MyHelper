import React from 'react';
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from '@tanstack/react-query';
import { getSubCategory } from '@/entities/benefit/api/api';
import SubCategory from '@/features/benefit/components/SubCategory';

type pageParams = {
	params: {
		categoryId: string;
	};
};

const page: React.FC<pageParams> = async ({ params }) => {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ['benefitSubCategory', params.categoryId],
		queryFn: () => getSubCategory(params.categoryId),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<SubCategory pid={params.categoryId} />
		</HydrationBoundary>
	);
};

export default page;
