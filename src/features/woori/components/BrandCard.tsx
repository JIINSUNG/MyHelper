'use client';
import React, { useState } from 'react';
import { itemType } from '@/entities/woori';

export type BrandCardProps = {
	props: itemType;
};

const BrandCard: React.FC<BrandCardProps> = ({ props }) => {
	const [isDetail, setIsDetail] = useState(false);

	return (
		<div
			className="flex flex-col w-full"
			onClick={() => setIsDetail((prev) => !prev)}
		>
			<div className="p-2 bg-white flex flex-col w-full">
				<div>{props.name}</div>
				<div>브랜드 : {props.brand}</div>
				<div>
					할인 가능 여부 :&nbsp;
					{props.discount
						? '가능'
						: props.discount === false
							? '불가'
							: '확인 불가'}
				</div>
			</div>

			{isDetail && (
				<div className="p-2 flex flex-col w-full bg-gray-200">
					<span>주소 : {props.address}</span>
					<span>연락처 : {props.tel}</span>
					{props.etc && <span>특이사항 : {props.etc}</span>}
				</div>
			)}
		</div>
	);
};

export default BrandCard;
