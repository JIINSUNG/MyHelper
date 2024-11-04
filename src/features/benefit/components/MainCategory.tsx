'use client';

import React from 'react';
import { Img } from '@/shared/component/Img';
import { useGetMainCategory } from '@/entities/benefit/query/query';
import Link from 'next/link';

const MainCategory: React.FC = () => {
	const { data: mainCategories } = useGetMainCategory();

	return (
		<section className="grid justify-items-center grid-cols-3 max-sm:grid-cols-2 gap-2 w-full">
			{mainCategories &&
				mainCategories.map((category) => (
					<Link href={`/benefit/${category.id}`} key={category.id}>
						<Img
							src={category.image}
							label={category.type}
							size="logo"
							shape="circle"
						/>
					</Link>
				))}
		</section>
	);
};

export default MainCategory;
