'use client';

import React, { useEffect } from 'react';
import { useGetBenefitList } from '@/entities/benefit/query/query';
import { usePathname, useSearchParams } from 'next/navigation';
import { Img } from '@/shared/component/Img';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { Typography } from '@/shared/component/Typography';
import Link from 'next/link';

type BenefitListProps = {
	pid: string;
	sid: string;
};

const BenefitList: React.FC<BenefitListProps> = ({ pid, sid }) => {
	const { data: BenefitList } = useGetBenefitList(pid, sid);
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();

	const handleClick = (uniqueCategory3: string) => {
		router.push(`${pathname}?type=${uniqueCategory3}`);
	};

	useEffect(() => {}, [pathname, searchParams]);

	return (
		<section className="flex flex-col w-full">
			<header>
				<nav className="relative w-full overflow-x-auto hide-scrollbar border-b">
					<ul className="flex gap-4 whitespace-nowrap">
						<li
							className={twMerge(
								'px-4 py-2 hover:border-b hover:border-black text-gray-400 cursor-pointer',
								!searchParams.get('type') && 'text-black border-b border-black',
							)}
							onClick={() => router.push(`${pathname}/`)}
						>
							전체
						</li>
						{BenefitList &&
							[...new Set(BenefitList.map((benefit) => benefit.category3))].map(
								(category3) => (
									<li
										key={category3}
										className={twMerge(
											'px-4 py-2 hover:border-b hover:border-black text-gray-400 cursor-pointer',
											searchParams.get('type') === category3 &&
												'text-black border-b border-black',
										)}
										onClick={() => handleClick(category3)}
									>
										{category3}
									</li>
								),
							)}
					</ul>
				</nav>
			</header>
			<main className="p-5">
				<section className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 justify-items-center gap-4">
					{/* 데이터가 없거나 데이터의 길이가 0인 경우 */}
					{!BenefitList || BenefitList.length <= 0 ? (
						<Typography size="title" className="text-center">
							데이터 없음
						</Typography>
					) : !searchParams.get('type') ? (
						BenefitList.map((benefit) => (
							<Link key={benefit.id} href={pathname + '/' + benefit.brandId}>
								<Img
									src={benefit.image}
									key={benefit.id}
									label={benefit.name}
									size="avatar"
								/>
							</Link>
						))
					) : (
						BenefitList.filter(
							(benefit) => benefit.category3 === searchParams.get('type'),
						).map((benefit) => (
							<Link key={benefit.id} href={pathname + '/' + benefit.brandId}>
								<Img
									src={benefit.image}
									key={benefit.id}
									label={benefit.name}
									size="avatar"
								/>
							</Link>
						))
					)}
				</section>
			</main>
		</section>
	);
};

export default BenefitList;
