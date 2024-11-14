import React from 'react';
import { SelectGenerator } from '@/features/selector';
import { PageHeader } from '@/widgets';

const page: React.FC = () => {
	return (
		<main className="flex flex-col w-full gap-4">
			<PageHeader
				title="결정 헬퍼"
				content="짜장면, 짬뽕 같이 무엇가를 결정하지 못해 고민이되는 순간을 위한 기능입니다,
고민이 되는 선택지들을 추가하고 추첨하기 버튼을 누르면 랜덤으로 한가지를 결정해주는 기능입니다"
			/>
			<section className="flex w-full  flex-col gap-4 animate-slideUp">
				<SelectGenerator />
			</section>
		</main>
	);
};

export default page;
