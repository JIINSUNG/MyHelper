'use client';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { infoType } from '@/entities/streaming/type/type';
import { getCountryName, getLanguageName } from '@/features/streaming/hooks';

export type StreamingCardProps = {
	data: infoType;
};

const StreamingCard: React.FC<StreamingCardProps> = ({ data }) => {
	const [isDetail, setIsDetail] = useState(false);
	const option = data.options[0]; // 반복되는 data.options[0]를 변수로 선언

	return (
		<>
			<div
				className="p-4 bg-white flex w-full justify-between"
				onClick={() => setIsDetail((prev) => !prev)}
			>
				<div>{getCountryName(data.country)}</div>
				<div>넷플릭스</div>
			</div>

			{isDetail && (
				<div className="p-2 bg-gray-300 flex flex-col w-full">
					<div className="flex w-full justify-between">
						<span>제공자 :&nbsp;{option.service.id}</span>
						<span>최대 화질 :&nbsp;{option.quality}</span>
					</div>
					<div className="flex w-full justify-between">
						<span>
							음성 :&nbsp;
							{option.audios
								.map((audio) => getLanguageName(audio.language))
								.join(', ')}
						</span>
						<span>
							시작일 :&nbsp;
							{dayjs(option.availableSince * 1000).format('YYYY-MM-DD')}
						</span>
					</div>
					<div className="flex w-full justify-between">
						<span>
							자막 :&nbsp;
							{option.subtitles
								.map((subtitle) => getLanguageName(subtitle.locale.language))
								.join(', ')}
						</span>
						<span>{option.expiresSoon ? '곧 종료' : '종료 예정 없음'}</span>
					</div>
				</div>
			)}
		</>
	);
};

export default StreamingCard;
