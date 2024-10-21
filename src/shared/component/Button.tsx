'use client';
import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const SizeStyle = {
	sm: 'text-[1rem]',
	md: 'text-[1.2rem]',
	lg: 'text-[1.5rem]',
};

const ShapeStyle = {
	circle: 'w-8 h-8 rounded-full',
	square: 'px-2 py-1 rounded-md',
};

const ColorStyle = {
	darkPurple: 'bg-darkPurple text-white',
	slateBlue: 'bg-slateBlue text-white',
	indigo: 'bg-indigo',
	frenchGray: 'bg-frenchGray text-white',
	linen: 'bg-linen',
	warn: 'bg-red-400 text-white',
};

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
	className?: string;
	size?: 'sm' | 'md' | 'lg';
	color?:
		| 'darkPurple'
		| 'slateBlue'
		| 'indigo'
		| 'frenchGray'
		| 'linen'
		| 'warn';
	onClick: () => void;
	isLoading?: boolean;
	label: string;
	shape?: 'square' | 'circle';
};

const Button: React.FC<ButtonProps> = ({
	className,
	size = 'sm',
	color = 'slateBlue',
	onClick,
	label,
	isLoading = false,
	shape = 'square',
	...rest
}) => {
	return (
		<button
			className={twMerge(
				SizeStyle[size],
				ColorStyle[color],
				ShapeStyle[shape],
				'whitespace-nowrap active:opacity-50',
				className,
			)}
			onClick={isLoading ? undefined : onClick}
			{...rest}
		>
			{isLoading ? '로딩' : label}
		</button>
	);
};

export default Button;
