'use client';
import React from 'react';
import { BrandCard } from '@/features/woori';
import { useWooriContext } from '@/app/context/WooriContext';
import { useDebounce } from '@/shared/hooks';
import { useGetWoori } from '@/entities/woori/query/query';

const BrandList = () => {
	const { brand, region, name } = useWooriContext();
	const debouncedName = useDebounce(name, 500);

	const { data: dataList } = useGetWoori(brand, region, debouncedName);

	return (
		<div className="flex flex-col gap-4 min-w-[320px] px-4">
			<div className="flex flex-col w-full gap-2">
				{dataList && dataList.length > 0 ? (
					dataList.map((data) => <BrandCard key={data.name} data={data} />)
				) : (
					<h1 className="text-center font-bold">
						현재 조건에 맞는 브랜드가 존재하지 않습니다
					</h1>
				)}
			</div>
		</div>
	);
};

export default BrandList;
