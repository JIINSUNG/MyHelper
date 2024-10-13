'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Button, Input, InputModal } from '@/shared/component';
import AnniversaryCard from './AnniversaryCard';
import dayjs from 'dayjs';

export type anniversaryType = {
	title: string;
	date: string;
};

const AnniversaryManager: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [anniversaryList, setAnniversaryList] = useState<anniversaryType[]>();

	useEffect(() => {
		const localData = localStorage.getItem('anniversary');
		const anniversaryData = localData ? JSON.parse(localData) : [];
		setAnniversaryList(anniversaryData);
	}, []);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const title = form.get('title') as string | null;
		const date = form.get('date') as string | null;

		if (!title || !date) return;

		setAnniversaryList((prev) => {
			if (prev) {
				const newList = [...prev, { title, date }];
				newList.sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));

				return newList; // 정렬된 리스트를 반환
			} else {
				return [{ title, date }];
			}
		});
		setIsOpen(false);
		e.currentTarget.reset();
	};
	// 상태관리 관련 로직 수정 필요
	useEffect(() => {
		if (!anniversaryList) return;
		localStorage.setItem('anniversary', JSON.stringify(anniversaryList));
	}, [anniversaryList]);

	const deleteHandle = useCallback((idx: number) => {
		setAnniversaryList((prev) => {
			if (prev) {
				return prev.filter((_, i) => i !== idx);
			}
		});
	}, []);

	return (
		<section className="flex flex-col gap-4 items-center w-full">
			<Button onClick={() => setIsOpen(true)} label="기념일 등록" />
			<div className="flex flex-col items-center w-full max-md:px-5 md:px-10 gap-4">
				{anniversaryList?.map((anniversary: anniversaryType, index) => (
					<AnniversaryCard
						deleteHandle={deleteHandle}
						key={index}
						idx={index}
						anniversary={anniversary}
					/>
				))}
			</div>

			<InputModal
				isOpen={isOpen}
				onClose={() => {
					setIsOpen(false);
				}}
				onSubmit={onSubmit}
				label="기념일 등록"
			>
				<Input type="text" placeholder="항목 입력" name="title" />
				<Input type="date" placeholder="날짜 입력" name="date" />
			</InputModal>
		</section>
	);
};

export default AnniversaryManager;
