import React from 'react';
import Link from 'next/link';
import { MenuButton } from '@/shared/component';

const MenuSelection: React.FC = () => {
	return (
		<nav className="flex p-4 gap-4 overflow-x-auto">
			<ul className="flex gap-4 mx-auto whitespace-nowrap">
				<li>
					<Link href="/">
						<MenuButton content="홈" />
					</Link>
				</li>
				<li>
					<Link href="/gifticon">
						<MenuButton content="깊티 헬퍼" link="gifticon" />
					</Link>
				</li>
				<li>
					<Link href="/discount">
						<MenuButton content="할인율 계산기" link="discount" />
					</Link>
				</li>
				<li>
					<Link href="/ajegag">
						<MenuButton content="아재 개그" link="ajegag" />
					</Link>
				</li>
				<li>
					<Link href="/selector">
						<MenuButton content="결정 헬퍼" link="selector" />
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default MenuSelection;
