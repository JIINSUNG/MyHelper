import React from 'react';
import { SelectGenerator } from '@/features/selector';

const page: React.FC = () => {
	return (
		<main className="flex flex-col w-full items-center gap-4 animate-slideUp">
			<h1 className="text-2xl font-bold">결정 헬퍼</h1>
			<SelectGenerator />
		</main>
	);
};

export default page;
