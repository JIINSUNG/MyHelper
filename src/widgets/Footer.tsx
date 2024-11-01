import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
	return (
		<footer className="flex flex-col justify-center p-10 max-md:p-5 bg-gray-200 md:text-3xl max-md:text-xl text-center">
			<div>
				<span className="block md:inline">&copy; 2024. JIINSUNG.</span>
				<span className="block md:inline"> all rights reserved.</span>
				<div className="mx-auto relative w-[200px] h-[40px]">
					<Image
						src="/Logo/Logo2.png"
						alt="Logo"
						className="w-full h-full object-cover"
						width={500}
						height={500}
					/>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
