import type { Metadata } from 'next';
import './globals.css';
import '../fonts/pretendard.css';
import { Footer, Header, MenuSelection } from '@/widgets';
import { ReactNode } from 'react';
import { ChannelTalk } from '@/shared/channelTalk';
import RQProvider from '@/app/ReactQuery/RQProvider';
export const metadata: Metadata = {
	title: 'My Helper',
	description: 'My Helper Site',
	icons: {
		icon: '/Logo/Logo.png',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="ko">
			<body className="min-w-[360px] font-pretendard flex flex-col w-full min-h-dvh bg-gray-100">
				<RQProvider>
					<Header />
					<MenuSelection />
					<ChannelTalk />
					<section className="max-md:p-2 md:p-6 gap-4 flex flex-1 w-full md:mx-auto max-w-screen-xl">
						{children}
					</section>
					<Footer />
				</RQProvider>
			</body>
		</html>
	);
}
