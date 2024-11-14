'use client';
import React, { useState } from 'react';
import { Button } from '@/shared/component/index';

export type TooltipsProps = {
	content: string;
};

const Tooltips: React.FC<TooltipsProps> = ({ content }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Button
				label="?"
				shape="circle"
				color="frenchGray"
				onClick={() => setIsOpen((prev) => !prev)}
			/>
			{isOpen && (
				<div
					className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
					onClick={() => setIsOpen((prev) => !prev)}
				>
					<div
						className="bg-white p-10 rounded-md shadow-md w-[400px]"
						onClick={(e) => e.stopPropagation()} // 내부 클릭이 전파되지 않도록 설정
					>
						{content}
					</div>
				</div>
			)}
		</>
	);
};

export default Tooltips;
