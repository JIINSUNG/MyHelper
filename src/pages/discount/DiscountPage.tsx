import React from 'react';
import { DiscountCalculator } from '@/features/discount';

const page: React.FC = () => {
	return (
		<main className="flex flex-col w-full items-center gap-4">
			<h1 className="text-2xl font-bold">할인 가격(율) 계산기</h1>
			<DiscountCalculator />
		</main>
	);
};

export default page;
