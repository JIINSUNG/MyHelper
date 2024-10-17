'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type WooriContextType = {
	brand: '애슐리' | '아웃백';
	setBrand: React.Dispatch<React.SetStateAction<'애슐리' | '아웃백'>>;
	region: string;
	setRegion: React.Dispatch<React.SetStateAction<string>>;
	name: string;
	setName: React.Dispatch<React.SetStateAction<string>>;
};

const WooriContext = createContext<WooriContextType | undefined>(undefined);

export const WooriContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [brand, setBrand] = useState<'애슐리' | '아웃백'>('애슐리');
	const [region, setRegion] = useState<string>('');
	const [name, setName] = useState<string>('');

	return (
		<WooriContext.Provider
			value={{ brand, setBrand, region, setRegion, name, setName }}
		>
			{children}
		</WooriContext.Provider>
	);
};

export const useWooriContext = () => {
	const context = useContext(WooriContext);
	if (context === undefined) {
		throw new Error('useWooriContext must be used within a WooriProvider');
	}
	return context;
};
