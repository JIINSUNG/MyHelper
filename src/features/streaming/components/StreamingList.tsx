'use client';
import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import type { Movie, StreamingOption } from '@/entities/streaming/type';
import { useSearchParams } from 'next/navigation';
import { getStreamingInfo } from '@/features/streaming/api/getStreamingInfo';
import dayjs from 'dayjs';
import { countryNames, languageNames } from '@/shared/const/CountryEnum';
export type StreamingListProps = {
	className?: string;
};

type infoType = {
	country: string;
	options: StreamingOption[];
};

const StreamingList: React.FC<StreamingListProps> = ({ className }) => {
	const searchParams = useSearchParams();
	const id = searchParams?.get('id') ?? '';
	const [streamingInfo, setStreamingInfo] = useState<Movie | null>();
	const [countries, setCountries] = useState<infoType[] | []>([]);
	const [isDetail, setIsDetail] = useState<number>(-1);
	const [isFetching, setIsFetching] = useState<boolean>(false);

	useEffect(() => {
		if (!id) {
			setStreamingInfo(null);
			setCountries([]);
			return;
		}

		setIsFetching(true);
		const fetchingInfo = async () => {
			const data = await getStreamingInfo(id);
			setStreamingInfo(data);
			setIsFetching(false);
		};
		fetchingInfo();
	}, [id]);

	function getNetflixCountries(
		streamingOptions: Record<string, StreamingOption[]>,
	): { country: string; options: StreamingOption[] }[] {
		if (!streamingOptions || Object.keys(streamingOptions).length === 0) {
			return [];
		}

		return Object.entries(streamingOptions)
			.map(([country, options]: [string, StreamingOption[]]) => ({
				country,
				options: options.filter(
					(option: StreamingOption) => option.service.id === 'netflix',
				),
			}))
			.filter((entry) => entry.options.length > 0);
	}
	useEffect(() => {
		if (!streamingInfo) return;
		setCountries(getNetflixCountries(streamingInfo.streamingOptions));
	}, [streamingInfo]);

	function getCountryName(code: string): string {
		return countryNames[code] || code; // 매핑이 없을 경우 원래 코드를 반환
	}

	function getLanguageName(code: string): string {
		return languageNames[code] || code;
	}

	if (isFetching) {
		return (
			<div className="flex justify-center w-full">데이터 받아오는 중...</div>
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
						<li
							key={idx}
							className="flex flex-col w-full"
							onClick={() => {
								setIsDetail((prev) => {
									if (idx === prev) {
										return -1;
									} else {
										return idx;
									}
								});
							}}
						>
							<div className="p-4 bg-white flex w-full justify-between">
								<div>{getCountryName(country.country)}</div>
								<div>넷플릭스</div>
							</div>

							{isDetail === idx ? (
								<div className="p-2 bg-gray-300 flex flex-col w-full">
									<div className="flex w-full justify-between">
										<span>
											제공자 :&nbsp;
											{country.options[0].service.id}
										</span>
										<span>
											최대 화질 :&nbsp;
											{country.options[0].quality}
										</span>
									</div>
									<div className="flex w-full justify-between">
										<span>
											음성 :&nbsp;
											{country.options[0].audios.map(
												(audio) => getLanguageName(audio.language) + ' ',
											)}
										</span>
										<span>
											시작일 :&nbsp;
											{dayjs(country.options[0].availableSince * 1000).format(
												'YYYY-MM-DD',
											)}
										</span>
									</div>
									<div className="flex w-full justify-between">
										<span>
											자막 :&nbsp;
											{country.options[0].subtitles.map(
												(subtitle) =>
													getLanguageName(subtitle.locale.language) + ' ',
											)}
										</span>

										<span>
											{country.options[0].expiresSoon
												? '곧 종료'
												: '종료 예정 없음'}
										</span>
									</div>
								</div>
							) : null}
							{/*	상세 조회 */}
						</li>
					))}
				</ul>
			)}
		</section>
	);
};

export default StreamingList;
