'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const MovieCard: React.FC = () => {
	return (
		<div
			className={twMerge(
				'flex w-full border border-black rounded-md p-2 bg-white',
			)}
		>
			<div className="flex w-[100px] pr-2 border-r border-black">
				<div className="w-[100px] h-[120px] bg-gray-300 animate-pulse"></div>
			</div>
			<div className="flex flex-col w-full">
				<div className="flex flex-col justify-between p-2 gap-1">
					<div className="w-[80px] h-[20px] bg-gray-300 animate-pulse"></div>
					<div className="w-[160px] h-[15px] bg-gray-300 animate-pulse"></div>
					<div className="w-[160px] h-[15px] bg-gray-300 animate-pulse"></div>
					<div className="w-[120px] h-[20px] bg-gray-300 animate-pulse"></div>
					<div className="w-[80px] h-[20px] bg-gray-300 animate-pulse"></div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
