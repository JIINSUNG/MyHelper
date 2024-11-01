import React from 'react';
import { AjegagGenerator } from '@/features/ajegag';

const page: React.FC = () => {
	return (
		<main className="flex flex-col w-full items-center gap-4 animate-slideUp">
			<h1 className="text-2xl font-bold">아재 개그 코너</h1>
			<AjegagGenerator />
		</main>
	);
};

export default page;
