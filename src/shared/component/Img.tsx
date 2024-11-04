import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Typography } from './Typography';
import Image from 'next/image';

export type ImageProps = {
	src: string;
	label?: string;
	shape?: 'circle' | 'square';
	size?: 'logo' | 'avatar';
	labelDisplay?: boolean;
};

const sizeStyle = {
	avatar: 'w-12 h-12',
	logo: 'w-24 h-24',
};

const shapeStyle = {
	circle: 'rounded-full',
	square: 'rounded-none',
};

export const Img: React.FC<ImageProps> = ({
	src,
	label,
	size = 'logo',
	shape = 'circle',
}) => {
	return (
		<div className="flex flex-col items-center cursor-pointer">
			<Image
				src={src}
				alt={label ?? 'Image'}
				width={500}
				height={500}
				className={twMerge(sizeStyle[size], 'object-cover', shapeStyle[shape])}
			/>
			{label && (
				<Typography className="mt-2 text-center" size="title">
					{label}
				</Typography>
			)}
		</div>
	);
};
