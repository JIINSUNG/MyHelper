'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type BudgetContextType = {
	budget: number;
	setBudget: React.Dispatch<React.SetStateAction<number>>;
};

const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

export const BudgetContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [budget, setBudget] = useState<number>(0);

	return (
		<BudgetContext.Provider value={{ budget, setBudget }}>
			{children}
		</BudgetContext.Provider>
	);
};

export const useBudgetContext = () => {
	const context = useContext(BudgetContext);
	if (context === undefined) {
		throw new Error('useBudgetContext must be used within a BudgetProvider');
	}
	return context;
};
