import React from 'react';
import { MovieSelector, StreamingList } from '@/features/streaming';
import { MovieContextProvider } from '@/app/context/MovieContext';
import { PageHeader } from '@/widgets';

const StreamingPage: React.FC = () => {
	return (
		<main className="flex flex-col w-full gap-4">
			<MovieContextProvider>
				<PageHeader
					title="스트리밍 헬퍼"
					content="국가마다 시청 가능한 넷플릭스의 컨텐츠가 달라, 한국에 없는 컨텐츠를 보고 싶을때 어떤 국가를 통하면 넷플릭스 컨텐츠를 볼 수 있는지 알려주는 서비스 입니다"
				/>
				<section className="flex w-full flex-col gap-4 animate-slideUp">
					<MovieSelector />
					<div className="border-b w-full border-black" />
					<StreamingList />
				</section>
			</MovieContextProvider>
		</main>
	);
};

export default StreamingPage;
