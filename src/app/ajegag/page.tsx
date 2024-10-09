import React from 'react';
import { AjeGag } from '@/entities';

const page: React.FC = () => {
	return (
		<main className="flex flex-col w-full items-center gap-4">
			<h1 className="text-2xl font-bold">아재 개그 코너</h1>
			<AjeGag />
		</main>
	);
};

export default page;
