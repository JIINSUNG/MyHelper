'use client';
import React from 'react';
import { useWooriContext } from '@/app/context/WooriContext';
import { Input } from '@/shared/component';

const RegionSelector: React.FC = () => {
	const { brand, setName } = useWooriContext();
	if (brand !== '애슐리') return null;
	return (
		<div className="flex w-full justify-center">
			<Input
				label="상호명"
				type="text"
				onChange={(e) => setName(e.target.value)}
			/>
		</div>
	);
};

export default RegionSelector;
