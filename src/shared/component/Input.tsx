import React, { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
	labelRight?: string;
};

const Input: React.FC<InputProps> = ({ label, labelRight, ...rest }) => {
	if (label || labelRight) {
		return (
			<label className="flex items-center gap-2">
				{label && <span className="min-w-[110px]">{label}</span>}
				<input
					className={twMerge(
						rest.type === 'radio'
							? ''
							: 'px-2 py-1 border border-black rounded-md',
					)}
					{...rest}
				/>
				{labelRight && <span className="min-w-[110px]">{labelRight}</span>}
			</label>
		);
	}

	return (
		<input className="px-2 py-2 border border-black rounded-md" {...rest} />
	);
};

export default Input;
