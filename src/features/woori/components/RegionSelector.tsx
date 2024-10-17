'use client';
import React from 'react';
import { useWooriContext } from '@/app/context/WooriContext';

const RegionSelector: React.FC = () => {
	const { brand, setRegion } = useWooriContext();
	if (brand !== '애슐리') return null;
	return (
		<div className="flex w-full justify-center">
			<label className="flex items-center gap-2">
				<span className="font-bold">지역 : </span>
				<select
					className="flex rounded-md p-2 w-[160px]"
					onChange={(e) => setRegion(e.currentTarget.value)}
				>
					<option value="">전체</option>
					<option value="서울">서울</option>
					<option value="경기">경기</option>
					<option value="인천">인천</option>
					<option value="강원">강원</option>
					<option value="충북">충북</option>
					<option value="충남">충남</option>
					<option value="대전">대전</option>
					<option value="경북">경북</option>
					<option value="대구">대구</option>
					<option value="경남">경남</option>
					<option value="부산">부산</option>
					<option value="울산">울산</option>
					<option value="전북">전북</option>
					<option value="전남">전남</option>
					<option value="광주">광주</option>
					<option value="세종">세종</option>
					<option value="제주">제주</option>
				</select>
			</label>
		</div>
	);
};

export default RegionSelector;
