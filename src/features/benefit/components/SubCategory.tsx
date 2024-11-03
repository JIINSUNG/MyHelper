'use client';

import React from 'react';
import { Img } from '@/shared/component/Img';
import { useGetSubCategory } from '@/entities/benefit/query/query';
import Link from 'next/link';
import { Typography } from '@/shared/component/Typography';

type SubCategoryProps = {
	pid: string;
};

const SubCategory: React.FC<SubCategoryProps> = ({ pid }) => {
	const { data: subCategories } = useGetSubCategory(pid);

	return (
		<>
			{subCategories && subCategories.length > 0 ? (
				<section className="grid justify-items-center grid-cols-3 max-sm:grid-cols-2 gap-2 w-full">
					{subCategories?.map((category) => (
						<Link href={`/benefit/${pid}/${category.id}`} key={category.id}>
							<Img
								src={category.image}
								label={category.type}
								size="logo"
								shape="circle"
							/>
						</Link>
					))}
				</section>
			) : (
				<Typography size="title" className="text-center">
					조건에 맞는 데이터가 존재하지 않습니다
				</Typography>
			)}
		</>
	);
};

export default SubCategory;
