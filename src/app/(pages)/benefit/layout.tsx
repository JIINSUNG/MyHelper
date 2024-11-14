import React from 'react';
import { PageHeader } from '@/widgets';

type layoutProps = {
	children: React.ReactNode;
};

const layout: React.FC<layoutProps> = ({ children }) => {
	return (
		<main className="flex flex-col w-full gap-4">
			<PageHeader
				title="혜택 헬퍼"
				content={
					'매년 돌아오는 생일, 다양한 업체에서 생일자를 위한 혜택을 제공합니다\n' +
					'다양한 생일 혜택, 기념일 혜택을 한 번에 조회할 수 있도록 혜택 헬퍼 기능을 만들었어요'
				}
			/>
			<section className="flex w-full  flex-col gap-4 animate-slideUp">
				{children}
			</section>
		</main>
	);
};

export default layout;
