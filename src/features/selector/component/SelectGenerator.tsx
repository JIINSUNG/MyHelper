'use client';

import React, { useState } from 'react';
import { InputModal, Input, Card } from '@/shared/component/';

type selectType = {
	title: string;
};

const SelectGenerator: React.FC = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [selectList, setSelectList] = useState<selectType[]>([]);
	const [selected, setSelected] = useState(-1);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const title = form.get('title') as string | null;

		if (!title) return;

		setSelectList((prev) => {
			const newList = [...prev, { title }];
			return shuffleArray(newList);
		});
		setSelected(-1);
		setIsOpen(false);
		e.currentTarget.reset();
	};

	const shuffleArray = (array: selectType[]) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]]; // 배열의 요소를 교환
		}
		return array;
	};

	const handleSelect = () => {
		setSelected(-1);
		setTimeout(() => {
			setSelected(Math.floor(Math.random() * selectList.length));
		}, 500);
	};

	const handleClear = () => {
		setSelectList([]);
	};

	return (
		<section className="flex flex-col items-center w-full">
			<div className="flex flex-col items-center">
				<div className="flex w-full border border-black rounded-md mb-4">
					<div className="p-4">
						<button
							className="px-2 py-1 border border-black rounded-md bg-blue-200"
							onClick={() => setIsOpen(true)}
						>
							추가하기
						</button>
					</div>
					<div className="p-4 border-l border-black">
						<button
							className="px-2 py-1 border border-black rounded-md bg-blue-200"
							onClick={() => handleSelect()}
						>
							추첨하기
						</button>
					</div>
					<div className="p-4 border-l border-black">
						<button
							className="px-2 py-1 border border-black rounded-md bg-red-200"
							onClick={() => handleClear()}
						>
							클리어
						</button>
					</div>
				</div>
			</div>
			{selectList.length > 0 && (
				<div className="flex w-full p-4">
					<div className="flex gap-2">
						후보군 :
						{selectList.map((item, idx) => (
							<p key={idx}>
								{idx + 1}. {item.title}
							</p>
						))}
					</div>
				</div>
			)}

			<div className="flex justify-center w-full flex-wrap gap-4">
				{selectList.map((item, idx) => (
					<Card key={idx} value={item.title} selected={idx === selected} />
				))}
			</div>

			<InputModal
				isOpen={isOpen}
				onClose={() => {
					setIsOpen(false);
				}}
				onSubmit={onSubmit}
				label="고민되는 항목들"
			>
				<Input type="text" placeholder="항목 입력" name="title" />
			</InputModal>
		</section>
	);
};

export default SelectGenerator;
