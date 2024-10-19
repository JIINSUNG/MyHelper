'use client';
import React from 'react';

const BrandLoadingCard: React.FC = () => {
	return (
		<div className="flex flex-col w-full">
			<div className="p-2 bg-white flex flex-col w-full gap-1">
				<div className="h-[20px] w-[200px] bg-gray-300 animate-pulse" />
				<div className="h-[20px] w-[80px] bg-gray-300 animate-pulse" />
				<div className="h-[20px] w-[160px] bg-gray-300 animate-pulse" />
			</div>
		</div>
	);
};

export default BrandLoadingCard;
