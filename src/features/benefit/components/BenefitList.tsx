'use client';

import React from 'react';

type BenefitListProps = {
	pid: string;
	sid: string;
};

const BenefitList: React.FC<BenefitListProps> = ({ pid, sid }) => {
	// const { data: BenefitList } = useGetBenefitList(pid, sid);
	// const pathname = usePathname();

	return (
		<section className="flex flex-col w-full">
			{pid} : {sid}
			<header>
				<nav className="relative w-full overflow-x-auto hide-scrollbar border-b">
					<ul className="flex gap-4 whitespace-nowrap">
						<li className="px-4 py-2 hover:border-b-2 hover:border-black">
							전체
						</li>
						<li className="px-4 py-2 text-gray-400 hover:border-b-2 hover:border-black">
							카페
						</li>
						<li className="px-4 py-2 text-gray-400 hover:border-b-2 hover:border-black">
							카페
						</li>
						<li className="px-4 py-2 text-gray-400 hover:border-b-2 hover:border-black">
							카페
						</li>
						<li className="px-4 py-2 text-gray-400 hover:border-b-2 hover:border-black">
							카페
						</li>
						<li className="px-4 py-2 text-gray-400 hover:border-b-2 hover:border-black">
							카페
						</li>
					</ul>
				</nav>
			</header>
			<main>메인콘텐츠</main>
		</section>
	);
};

export default BenefitList;
