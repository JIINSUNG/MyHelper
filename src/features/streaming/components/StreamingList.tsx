'use client';
import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import type { infoType } from '@/entities/streaming/type/type';
import { useMovieContext } from '@/app/context/MovieContext';
import { getNetflixCountries } from '@/features/streaming/hooks';
import { useGetStreamingInfo } from '@/entities/streaming/query/query';
import StreamingCard from '@/features/streaming/components/StreamingCard';
import StreamingLoadingCard from '@/features/streaming/components/StreamingLoadingCard';
export type StreamingListProps = {
	className?: string;
};

const StreamingList: React.FC<StreamingListProps> = ({ className }) => {
	const { tmdbId } = useMovieContext();
	const { data: streamingInfo, isLoading } = useGetStreamingInfo(tmdbId);
	const [countries, setCountries] = useState<infoType[] | []>([]);

	useEffect(() => {
		if (tmdbId < 0) {
			setCountries([]);
			return;
		}
	}, [tmdbId]);

	useEffect(() => {
		if (!streamingInfo) return;
		setCountries(getNetflixCountries(streamingInfo.streamingOptions));
	}, [streamingInfo]);

	if (isLoading) {
		return (
			<div className="flex flex-col gap-2 px-5 justify-center w-full">
				<h1 className="font-bold text-center">스트리밍 정보 불러오는 중</h1>
				{Array.from({ length: 5 }).map((_, i) => (
					<StreamingLoadingCard key={i} />
				))}
			</div>
		);
	}

	return (
		<section className={twMerge('flex flex-col w-full gap-4 px-5', className)}>
			<h1 className="font-bold text-center">
				{!streamingInfo
					? '영화 선택 후 검색 버튼을 눌러 주세요'
					: countries && countries.length > 0
						? '시청 가능 국가'
						: '시청 가능 국가가 없습니다.'}
			</h1>

			{countries && countries.length > 0 && (
				<ul className="flex flex-col w-full gap-2">
					{countries.map((country: infoType, idx) => (
						<li key={idx} className="flex flex-col w-full">
							<StreamingCard data={country} />
						</li>
					))}
				</ul>
			)}
		</section>
	);
};

export default StreamingList;
