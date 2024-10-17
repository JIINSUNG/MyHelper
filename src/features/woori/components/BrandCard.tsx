'use client';
import React, { useState } from 'react';
import { itemType } from '@/entities/woori';

export type BrandCardProps = {
	data: itemType;
};

const BrandCard: React.FC<BrandCardProps> = ({ data }) => {
	const [isDetail, setIsDetail] = useState(false);
	return (
		<div
			className="flex flex-col w-full"
			onClick={() => setIsDetail((prev) => !prev)}
		>
			<div className="p-2 bg-white flex flex-col w-full">
				<div>{data.name}</div>
				<div>브랜드 : {data.brand}</div>
				<div>
					할인 가능 여부 :&nbsp;
					{data.discount
						? '가능'
						: data.discount === false
							? '불가'
							: '확인 불가'}
				</div>
			</div>
			{isDetail && (
				<div className="p-2 flex flex-col w-full bg-gray-200">
					<span>주소 : {data.address}</span>
					<span>연락처 : {data.tel}</span>
					{data.etc && <span>특이사항 : {data.etc}</span>}
				</div>
			)}
		</div>
	);
};

export default BrandCard;
