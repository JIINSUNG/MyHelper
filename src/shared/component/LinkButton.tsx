'use client';

import React from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export type MenuButtonProps = {
	className?: string;
	content: string;
	link?: string | null;
};

const LinkButton: React.FC<MenuButtonProps> = ({
	content,
	link = null,
}: MenuButtonProps) => {
	const segment = useSelectedLayoutSegment();
	return (
		<button
			className={twMerge(
				'border border-black px-2 py-1 rounded-md shadow-sm cursor-pointer',
				segment === link && 'bg-slateBlue text-white',
			)}
		>
			{content}
		</button>
	);
};

export default LinkButton;
