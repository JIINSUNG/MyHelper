import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export type TypographyProps = {
	className?: string;
	size?: 'head' | 'subhead' | 'paragraph' | 'title';
	children: ReactNode;
};

const TypographyStyle = {
	head: 'text-[2rem] font-bold',
	subhead: 'text-[1.5rem] font-bold',
	title: 'text-[1rem] font-bold',
	paragraph: 'text-[1rem]',
	span: 'text-[1rem]',
} as const;

export const Typography: React.FC<TypographyProps> = ({
	className,
	size = 'paragraph',
	children,
}: TypographyProps) => {
	let Tag: React.ElementType;

	switch (size) {
		case 'head':
			Tag = 'h1';
			break;
		case 'subhead':
			Tag = 'h2';
			break;
		case 'title':
			Tag = 'h3';
			break;
		case 'paragraph':
			Tag = 'p';
			break;
		default:
			Tag = 'span';
	}

	return (
		<Tag className={twMerge(TypographyStyle[size], className)}>{children}</Tag>
	);
};
