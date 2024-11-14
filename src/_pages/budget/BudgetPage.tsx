import React from 'react';
import {
	BudgetManager,
	BudgetRecommendList,
} from '@/features/budget/components';
import { BudgetContextProvider } from '@/app/context/BudgetContext';
import { PageHeader } from '@/widgets';

const BudgetPage: React.FC = () => {
	return (
		<main className="flex flex-col w-full gap-4">
			<BudgetContextProvider>
				<PageHeader
					title="예산 헬퍼"
					content={
						'주어진 예산 내에서 최적의 물건 조합을 찾아주는 기능 입니다\n' +
						'기프티콘 헬퍼와 비슷하지만, 기프티콘 헬퍼는 기프티콘 가격 이상을, 예산헬퍼는 예산내에서 라는 점이 다릅니다'
					}
				/>
				<section className="flex w-full flex-col gap-4 animate-slideUp">
					<BudgetManager />
					<BudgetRecommendList />
				</section>
			</BudgetContextProvider>
		</main>
	);
};

export default BudgetPage;
