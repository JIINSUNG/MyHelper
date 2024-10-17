import React, { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
	labelRight?: string;
	labelClassName?: string;
	className?: string;
};

const Input: React.FC<InputProps> = ({
	label,
	labelRight,
	className,
	labelClassName,
	...rest
}) => {
	if (label || labelRight) {
		return (
			<label className={twMerge('flex items-center gap-2', labelClassName)}>
				{label && <span>{label}</span>}
				<input
					className={twMerge(
						rest.type === 'radio'
							? ''
							: 'px-2 py-1 border border-black rounded-md',
						className,
					)}
					{...rest}
				/>
				{labelRight && <span>{labelRight}</span>}
			</label>
		);
	}

	return (
		<input className="px-2 py-2 border border-black rounded-md" {...rest} />
	);
};

export default Input;
