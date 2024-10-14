import React, { ReactNode } from 'react';

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
	children: ReactNode;
	label: string;
};

const InputModal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	onSubmit,
	children,
	label,
}) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white p-10 rounded-md shadow-md w-[400px]">
				<h2 className="font-bold text-xl text-center pb-4">{label}</h2>
				<form className="flex flex-col gap-2" onSubmit={onSubmit}>
					{children}
					<div className="flex gap-2 mt-4">
						<button
							className="bg-blue-500 text-white rounded-md px-4 py-2"
							type="submit"
						>
							제출
						</button>
						<button
							className="bg-red-500 text-white rounded-md px-4 py-2"
							type="button"
							onClick={onClose}
						>
							취소
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default InputModal;
