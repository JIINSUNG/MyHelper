'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';
import type { anniversaryType } from './AnniversaryManager';
import dayjs from 'dayjs';

export type AnniversaryCardProps = {
	className?: string;
	anniversary: anniversaryType;
	idx: number;
	deleteHandle: (index: number) => void;
};

const AnniversaryCard: React.FC<AnniversaryCardProps> = ({
	className,
	anniversary,
	deleteHandle,
	idx,
}) => {
	const today = dayjs();
	const daysDiff = today.diff(dayjs(anniversary.date), 'day');

	return (
		<div
			className={twMerge(
				'flex w-full max-w-xl justify-between p-4  border border-black rounded-md bg-white',
				className,
			)}
		>
			<div className="flex flex-col justify-between items-start">
				<span>{anniversary.title} </span>
				<span>{anniversary.date}</span>
			</div>
			<div className="flex flex-col items-end justify-between">
				<button
					className="border text-center bg-red-300 border-black rounded-md px-2 py-1"
					onClick={() => deleteHandle(idx)}
				>
					삭제
				</button>
				<span>
					{daysDiff >= 365 && Math.floor(daysDiff / 365) + '년하고 '}
					{daysDiff < 0 ? 'D' : 'D+'}
					{daysDiff % 365}일
				</span>
			</div>
		</div>
	);
};

export default AnniversaryCard;
