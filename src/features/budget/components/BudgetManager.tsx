'use client';

import React from 'react';
import { Input, InputContainer } from '@/shared/component';
import { useBudgetContext } from '@/app/context/BudgetContext';

export type GifticonCalculatorProps = {
	className?: string;
};

const BudgetManager: React.FC<GifticonCalculatorProps> = ({ className }) => {
	const { setBudget } = useBudgetContext();

	return (
		<section className={`flex max-md:flex-wrap w-full ${className}`}>
			<div className="flex w-full gap-2 justify-center">
				<InputContainer>
					<Input
						label="나의 예산"
						type="number"
						onChange={(e) => setBudget(parseInt(e.currentTarget.value))}
					/>
				</InputContainer>
			</div>
		</section>
	);
};

export default BudgetManager;
