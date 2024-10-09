import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PriceContextType {
	minPrice: number;
	setMinPrice: React.Dispatch<React.SetStateAction<number>>;
}

const PriceContext = createContext<PriceContextType | undefined>(undefined);

export const PriceContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [minPrice, setMinPrice] = useState<number>(0);

	return (
		<PriceContext.Provider value={{ minPrice, setMinPrice }}>
			{children}
		</PriceContext.Provider>
	);
};

export const usePriceContext = () => {
	const context = useContext(PriceContext);
	if (context === undefined) {
		throw new Error('usePriceContext must be used within a PriceProvider');
	}
	return context;
};
