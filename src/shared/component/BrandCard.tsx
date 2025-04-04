import React from 'react';
import Image from 'next/image';

export type BrandCardProps = {
	src: string;
	alt: string;
};

export const BrandCard: React.FC<BrandCardProps> = ({ src, alt }) => {
	return (
		<div className="relative flex w-full m-5 rounded-lg bg-white max-w-[340px] justify-center ">
			<Image
				src={src}
				alt={alt}
				width={500}
				height={500}
				className="object-contain aspect-video rounded-lg m-5"
			/>
		</div>
	);
};
