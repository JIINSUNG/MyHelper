import React from 'react';
import Link from 'next/link';
import { MenuButton } from '@/app/shared';

export type MenuSelectionProps = {
	className?: string;
};

const MenuSelection: React.FC<MenuSelectionProps> = ({ className }) => {
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
						<MenuButton content="헬퍼" link="gifticon" />
					</li>
				</Link>
			</ul>
		</nav>
	);
};

export default MenuSelection;
