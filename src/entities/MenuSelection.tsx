import React from 'react';
import Link from 'next/link';
import { MenuButton } from '../shared';

const MenuSelection: React.FC = () => {
	return (
		<nav>
			<ul className="flex gap-4 justify-center">
				<Link href="/">
					<li>
						<MenuButton content="홈" />
					</li>
				</Link>
				<Link href="/gifticon">
					<li>
						<MenuButton content="깊티 헬퍼" link="gifticon" />
					</li>
				</Link>
				<Link href="/discount">
					<li>
						<MenuButton content="할인율 계산기" link="discount" />
					</li>
				</Link>
			</ul>
		</nav>
	);
};

export default MenuSelection;
