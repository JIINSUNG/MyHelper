'use client';
import React, { useEffect, useState } from 'react';
import { BrandCard } from '@/features/woori';
import { useWooriContext } from '@/app/context/WooriContext';
import { itemType } from '@/entities/woori';
import { useDebounce } from '@/shared/hooks';

const BrandList: React.FC = () => {
	const { brand, region, name } = useWooriContext();
	const [dataList, setDataList] = useState<itemType[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const debouncedName = useDebounce(name, 500);
	const getData = async () => {
		const searchParams = new URLSearchParams();
		searchParams.set('brand', brand);
		if (region) searchParams.set('region', region);
		if (debouncedName) searchParams.set('name', debouncedName);
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/woori?${searchParams.toString()}`,
		).then((response) => response.json());

		return response.data;
	};

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const data = await getData();
			setDataList(data);
			setIsLoading(false);
		};

		fetchData();
	}, [debouncedName, brand, region]);

	if (isLoading) {
		return <div className="text-center">데이터 로딩중...</div>;
	}

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
