import React from 'react';
import Image from 'next/image';

export type BrandCardProps = {
	src: string;
	alt: string;
};

export const BrandCard: React.FC<BrandCardProps> = ({ src, alt }) => {
	return (
		<div className="flex justify-center">
			<Image
				src={src}
				alt={alt}
				width={500}
				height={500}
				className="aspect-video rounded-lg m-10"
			/>
		</div>
	);
};
