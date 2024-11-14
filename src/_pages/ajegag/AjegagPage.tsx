import React from 'react';
import { AjegagGenerator } from '@/features/ajegag';
import { PageHeader } from '@/widgets';

const page: React.FC = () => {
	return (
		<main className="flex flex-col w-full gap-4">
			<PageHeader
				title="개그 헬퍼"
				content="개그 헬퍼를 통해 심심할 때 아재 개그를 즐겨보세요"
			/>
			<section className="flex w-full  flex-col gap-4 animate-slideUp">
				<AjegagGenerator />
			</section>
		</main>
	);
};

export default page;
