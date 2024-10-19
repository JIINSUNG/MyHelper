'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type MovieContextType = {
	tmdbId: number;
	setTmdbId: React.Dispatch<React.SetStateAction<number>>;
	query: string;
	setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [tmdbId, setTmdbId] = useState<number>(-1);
	const [query, setQuery] = useState<string>('');

	return (
		<MovieContext.Provider value={{ tmdbId, setTmdbId, query, setQuery }}>
			{children}
		</MovieContext.Provider>
	);
};

export const useMovieContext = () => {
	const context = useContext(MovieContext);
	if (context === undefined) {
		throw new Error('useWooriContext must be used within a MovieProvider');
	}
	return context;
};
