import type { Metadata } from 'next';
import './globals.css';
import './fonts/pretendard.css';
import { Footer, Header } from '@/widgets';
import { MenuSelection } from '@/entities';

export const metadata: Metadata = {
	title: 'Help Me',
	description: 'My Helper Site',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body className="min-w-[360px] font-pretendard flex flex-col bg-gray-100 xl:p-6 gap-4 max-xl:w-full xl:mx-auto xl:max-w-screen-xl">
				<Header />
				<MenuSelection />
				{children}
				<Footer />
			</body>
		</html>
	);
}
