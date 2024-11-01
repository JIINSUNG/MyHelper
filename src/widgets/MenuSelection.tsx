import React from 'react';
import Link from 'next/link';
import { LinkButton } from '@/shared/component';

const MenuSelection: React.FC = () => {
	return (
		<nav className="flex p-8 gap-4 overflow-x-auto">
			<ul className="flex gap-4 mx-auto whitespace-nowrap">
				<li>
					<Link href="/">
						<LinkButton content="홈" />
					</Link>
				</li>
				<li>
					<Link href="/gifticon">
						<LinkButton content="깊티 헬퍼" link="gifticon" />
					</Link>
				</li>
				<li>
					<Link href="/budget">
						<LinkButton content="예산 헬퍼" link="budget" />
					</Link>
				</li>
				<li>
					<Link href="/discount">
						<LinkButton content="할인율 계산기" link="discount" />
					</Link>
				</li>
				<li>
					<Link href="/ajegag">
						<LinkButton content="아재 개그" link="ajegag" />
					</Link>
				</li>
				<li>
					<Link href="/selector">
						<LinkButton content="결정 헬퍼" link="selector" />
					</Link>
				</li>
				<li>
					<Link href="/anniversary">
						<LinkButton content="기념일 헬퍼" link="anniversary" />
					</Link>
				</li>
				<li>
					<Link href="/streaming">
						<LinkButton content="스트리밍 헬퍼" link="streaming" />
					</Link>
				</li>
				<li>
					<Link href="/woori">
						<LinkButton content="우리카드 헬퍼" link="woori" />
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default MenuSelection;
