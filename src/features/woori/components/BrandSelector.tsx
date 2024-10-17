'use client';
import React, { useEffect } from 'react';
import { Button } from '@/shared/component';
import { useWooriContext } from '@/app/context/WooriContext';

const BrandSelector = () => {
	const { brand, setBrand, setRegion, setName } = useWooriContext();
	useEffect(() => {
		setRegion('');
		setName('');
	}, [setName, setRegion, brand]);
	return (
		<div className="flex w-full justify-center gap-4">
			<Button
				label="애슐리"
				color={brand === '애슐리' ? 'slateBlue' : 'frenchGray'}
				onClick={() => setBrand('애슐리')}
			/>
			<Button
				label="아웃백"
				color={brand === '아웃백' ? 'slateBlue' : 'frenchGray'}
				onClick={() => setBrand('아웃백')}
			/>
		</div>
	);
};

export default BrandSelector;
