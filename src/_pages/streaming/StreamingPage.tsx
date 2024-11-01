import React from 'react';
import { MovieSelector, StreamingList } from '@/features/streaming';
import { MovieContextProvider } from '@/app/context/MovieContext';

const page = () => {
	return (
		<main className="flex flex-col w-full items-center gap-4 animate-slideUp">
			<MovieContextProvider>
				<h1 className="text-2xl font-bold">스트리밍 헬퍼</h1>
				<MovieSelector />
				<div className="border-[1px] border-b w-full border-black" />
				<StreamingList />
			</MovieContextProvider>
		</main>
	);
};

export default page;
