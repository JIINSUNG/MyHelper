import React, { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ ...rest }) => {
	return (
		<input
			className="rounded-md border border-black px-2 py-4 mb-2 w-full"
			{...rest}
		/>
	);
};

export default Input;
