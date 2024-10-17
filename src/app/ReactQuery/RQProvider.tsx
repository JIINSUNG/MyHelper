'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { ReactNode, useState } from 'react';

type RQProviderProps = {
	children: ReactNode;
};

const RQProvider = ({ children }: RQProviderProps) => {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					retryOnMount: true,
					refetchOnWindowFocus: false,
					refetchOnReconnect: false,
					retry: false,
					staleTime: 60 * 1000,
				},
			},
		}),
	);
	return (
		<QueryClientProvider client={client}>
			{children}
			<ReactQueryDevtools initialIsOpen={process.env.MODE === 'development'} />
		</QueryClientProvider>
	);
};

export default RQProvider;
