'use client';
import React from 'react';

type CardProps = {
	value: string;
	selected: boolean;
};
const Card: React.FC<CardProps> = ({ value, selected }) => {
	return (
		<div
			className={`relative w-48 h-64 border border-gray-300 rounded-lg cursor-pointer transition-transform duration-700 ${selected ? 'rotate-y-180' : ''}`}
		>
			<div
				className={`absolute w-full h-full backface-hidden flex items-center justify-center bg-gray-600 rounded-lg ${selected ? 'hidden' : 'block'}`}
			></div>
			<div
				className={`absolute w-full h-full backface-hidden flex items-center justify-center rotate-x-180 bg-blue-500 text-white rounded-lg ${selected ? 'block' : 'hidden'}`}
			>
				<span className="text-xl font-bold -scale-x-100">{value}</span>
			</div>
		</div>
	);
};

export default Card;
