'use client';

import React, { useEffect, useState } from 'react';
import data from '@/shared/ajegag.json';

const AjeGag: React.FC = () => {
	const [random, setRandom] = useState<number>(-1);
	const [open, setOpen] = useState<boolean>(false);
	const handleButton = () => {
		setRandom(Math.floor(Math.random() * data.length));
		setOpen(false);
	};
	const randomItem = data[random]; // 랜덤 항목 설정

	return (
		<section className="flex flex-col items-center gap-8">
			<div>
				<button
					className="px-2 py-1 border border-black rounded-md bg-blue-300"
					onClick={() => handleButton()}
				>
					{random === -1 ? '아재 개그 생성' : '셔플'}
				</button>
			</div>
			{random !== -1 && (
				<div className="flex flex-col gap-10 items-center">
					<div>
						<span className="text-xl font-bold">
							문제 : {randomItem.problem}
						</span>
					</div>
					<div>
						{open ? (
							<span className="text-xl font-bold">
								정답 : {randomItem.answer}
							</span>
						) : (
							<button
								className="px-2 py-1 border border-black rounded-md"
								onClick={() => setOpen(true)}
							>
								정답 보기
							</button>
						)}
					</div>
				</div>
			)}
		</section>
	);
};

export default AjeGag;
