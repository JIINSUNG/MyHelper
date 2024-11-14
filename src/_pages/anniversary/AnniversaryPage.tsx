import React from 'react';
import AnniversaryManager from '@/features/anniversary/components/AnniversaryManager';
import { PageHeader } from '@/widgets';

const AnniversaryPage: React.FC = () => {
	return (
		<main className="flex flex-col w-full gap-4">
			<PageHeader
				title="기념일 헬퍼"
				content="기억하고 싶은, 추억하고 싶은 기념일을 등록하면 몇일이 경과했는지, 몇일이 남았는지 알려주는 기능입니다
LocalStorage를 이용해 해당 데이터를 물리적으로 지우지 않는한 반영구적으로 유지 됩니다"
			/>
			<section className="flex w-full  flex-col gap-4 animate-slideUp">
				<AnniversaryManager />
			</section>
		</main>
	);
};

export default AnniversaryPage;
