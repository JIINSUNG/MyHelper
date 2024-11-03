import React from 'react';
import { MainCategory } from '@/features/benefit/components';
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from '@tanstack/react-query';
import { getMainCategory } from '@/entities/benefit/api/api';
const page: React.FC = async () => {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ['benefitMainCategory'],
		queryFn: () => getMainCategory(),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<MainCategory />
		</HydrationBoundary>
	);
};

export default page;
