'use client';

import React from 'react';
import { useGetBenefitBrandList } from '@/entities/benefit/query/query';
import { Typography } from '@/shared/component/Typography';
import { Button } from '@/shared/component';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type BenefitListProps = {
	pid: string;
	brandId: string;
};

const BenefitBrandList: React.FC<BenefitListProps> = ({ pid, brandId }) => {
	const { data: BenefitBrandList } = useGetBenefitBrandList(pid, brandId);
	const pathname = usePathname();

	return (
		<section className="flex flex-col w-full">
			<main className="p-5">
				<section className="flex flex-col gap-1">
					{BenefitBrandList &&
						BenefitBrandList.map((benefitBrand) => (
							<div
								key={benefitBrand.id}
								className="flex border rounded-md bg-white p-4 w-full flex-col gap-2"
							>
								<Typography size="title">
									{benefitBrand.benefitTitle}
								</Typography>
								<Typography>{benefitBrand.benefitDescription}</Typography>
								<Typography>기간 : {benefitBrand.expiration}</Typography>
								<Typography>
									조건 : {benefitBrand.conditionDescription}
								</Typography>
								<Link href={pathname + '/' + benefitBrand.id}>
									<Button className="w-[200px]" label={'자세히 보러가기'} />
								</Link>
							</div>
						))}
				</section>
			</main>
		</section>
	);
};

export default BenefitBrandList;
