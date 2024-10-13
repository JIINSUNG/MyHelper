'use client';

import React, { useState } from 'react';
import { data } from '@/entities/ajegag';
import type { AjegagType } from '@/entities/ajegag';
import { Button } from '@/shared/component';

const AjegagGenerator: React.FC = () => {
	const [random, setRandom] = useState<number>(-1);
	const [open, setOpen] = useState<boolean>(false);
	const handleButton = () => {
		setRandom(Math.floor(Math.random() * data.length));
		setOpen(false);
	};
	const randomItem: AjegagType = data[random]; // 랜덤 항목 설정

	return (
		<section className="flex flex-col items-center gap-8">
			<div>
				<Button
					onClick={() => handleButton()}
					label={random === -1 ? '아재 개그 생성' : '셔플하기'}
				/>
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
							<Button
								color="frenchGray"
								onClick={() => setOpen(true)}
								label={'정답 보기'}
							/>
						)}
					</div>
				</div>
			)}
		</section>
	);
};

export default AjegagGenerator;
