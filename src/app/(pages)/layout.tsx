import type { Metadata } from 'next';
import './globals.css';
import '../fonts/pretendard.css';
import { Footer, Header, MenuSelection } from '@/widgets';

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
			<body className="min-w-[360px] font-pretendard flex flex-col bg-gray-100 gap-10">
				<Header />
				<MenuSelection />
				<section className="xl:p-6 gap-4 flex max-md:w-full  md:mx-auto max-w-screen-xl">
					{children}
				</section>
				<Footer />
			</body>
		</html>
	);
}
