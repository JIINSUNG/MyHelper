import React from 'react';

export type HeaderProps = {
	className?: string;
};

const Header: React.FC<HeaderProps> = () => {
	return (
		<header>
			<p className="text-center">JIINSUNG</p>
		</header>
	);
};

export default Header;
