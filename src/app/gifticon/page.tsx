import React from 'react';
import GifticonPage from '@/app/pages/GifticonPage';

export type pageProps = {
	className?: string;
};

const page: React.FC<pageProps> = () => {
	return (
		<main className="flex flex-col w-full md:p-4">
			<GifticonPage />
		</main>
	);
};

export default page;
