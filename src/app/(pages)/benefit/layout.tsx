import React from 'react';

type layoutProps = {
	children: React.ReactNode;
};

const layout: React.FC<layoutProps> = ({ children }) => {
	return (
		<main className="flex flex-col w-full items-center gap-4 animate-slideUp">
			<h1 className="text-2xl font-bold">혜택 헬퍼</h1>
			{children}
		</main>
	);
};

export default layout;
