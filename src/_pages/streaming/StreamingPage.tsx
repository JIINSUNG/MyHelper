import React, { Suspense } from 'react';
import { MovieSelector, StreamingList } from '@/features/streaming';

const page = () => {
	return (
		<main className="flex flex-col w-full items-center gap-4">
			<h1 className="text-2xl font-bold">스트리밍 헬퍼</h1>
			<MovieSelector />
			<div className="border-[1px] border-b w-full border-black" />
			<Suspense fallback={<div>Loading...</div>}>
				<StreamingList />
			</Suspense>
		</main>
	);
};

export default page;
