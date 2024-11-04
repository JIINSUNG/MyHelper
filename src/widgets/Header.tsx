import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export type HeaderProps = {
	className?: string;
};

const Header: React.FC<HeaderProps> = () => {
	return (
		<header className="flex justify-center p-10 max-md:p-5 bg-gray-200">
			<div className="relative w-[200px] h-[40px] animate-slideUp">
				<Link href={process.env.NEXT_PUBLIC_BASE_URL}>
					<Image
						src="/Logo/Logo2.png"
						width={200}
						height={40}
						alt="Logo"
						className="w-full h-full object-cover"
					/>
				</Link>
			</div>
		</header>
	);
};

export default Header;
