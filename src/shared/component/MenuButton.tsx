'use client';

import React from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export type MenuButtonProps = {
	className?: string;
	content: string;
	link?: string | null;
};

const MenuButton: React.FC<MenuButtonProps> = ({
	content,
	link = null,
}: MenuButtonProps) => {
	const segment = useSelectedLayoutSegment();
	return (
		<button
			className={twMerge(
				'border border-black px-4 py-2 rounded-md shadow-sm cursor-pointer',
				segment === link && 'bg-blue-300',
			)}
		>
			{content}
		</button>
	);
};

export default MenuButton;
