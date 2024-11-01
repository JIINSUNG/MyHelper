import Image from 'next/image';
import React from 'react';

export default function Home() {
	return (
		<main className="flex flex-col items-center mx-auto gap-2">
			<div className="relative w-[200px] h-[50px] animate-slideUp">
				<Image
					src="/Logo/Logo.png"
					width={500}
					height={500}
					alt="Logo"
					className="w-full h-full object-cover"
				/>
			</div>
			<p className="max-w-[600px] animate-slideUp">
				마이헬퍼 서비스는 일상 생활 중 있으면 좋을것 같은데? 라고 막연하게
				생각했던 것들을 기능들로 만든 유틸리티 서비스 입니다. <br />
				사용상에 불편한 점, 버그, 이런 기능이 있으면 어떨까 싶은 것들이 있다면
				<br />
				하단 채널톡을 통해 문의를 남겨 주시면 적극 반영할 수 있도록 하겠습니다
			</p>
		</main>
	);
}
