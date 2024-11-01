import React from 'react';
import AnniversaryManager from '@/features/anniversary/components/AnniversaryManager';

const AnniversaryPage: React.FC = () => {
	return (
		<main className="flex flex-col w-full gap-4 animate-slideUp">
			<h1 className="text-2xl font-bold text-center">기념일 헬퍼</h1>
			<AnniversaryManager />
		</main>
	);
};

export default AnniversaryPage;
