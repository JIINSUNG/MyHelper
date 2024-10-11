import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className="flex flex-col justify-center p-10 max-md:p-5 bg-gray-200 md:text-3xl max-md:text-xl text-center">
			<div>
				<span className="block md:inline">&copy; 2024. JIINSUNG.</span>
				<span className="block md:inline"> all rights reserved.</span>
			</div>
		</footer>
	);
};

export default Footer;
