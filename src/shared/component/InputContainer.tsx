import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export type InputContainerProps = {
	className?: string;
	children: ReactNode;
};

const InputContainer: React.FC<InputContainerProps> = ({
	className,
	children,
}) => {
	return (
		<div className={twMerge('flex items-center gap-4', className)}>
			{children}
		</div>
	);
};

export default InputContainer;
