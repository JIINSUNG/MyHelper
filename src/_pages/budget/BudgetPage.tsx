import React from 'react';
import {
	BudgetManager,
	BudgetRecommendList,
} from '@/features/budget/components';
import { BudgetContextProvider } from '@/app/context/BudgetContext';

const AnniversaryPage: React.FC = () => {
	return (
		<main className="flex flex-col w-full gap-4 animate-slideUp">
			<BudgetContextProvider>
				<h1 className="text-2xl font-bold text-center">예산 헬퍼</h1>
				<BudgetManager />
				<BudgetRecommendList />
			</BudgetContextProvider>
		</main>
	);
};

export default AnniversaryPage;
