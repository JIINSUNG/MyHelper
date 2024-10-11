import React from 'react';

export type HeaderProps = {
	className?: string;
};

const Header: React.FC<HeaderProps> = () => {
	return (
		<header className="flex justify-center p-10 max-md:p-5 bg-gray-200">
			<p className="text-3xl max-md:text-xl text-center">Help Me</p>
		</header>
	);
};

export default Header;
