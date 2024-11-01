import { useState } from 'react';

export type Item = {
	name: string;
	price: number;
	quantity: number;
};

export function useFormHandler() {
	const [itemList, setItemList] = useState<Item[]>([]);
	const [editMode, setEditMode] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const name = form.get('name') as string | null;
		const price = form.get('price') as string | null;
		const quantity = form.get('quantity') as string | null;

		if (!name || !price || !quantity) return;

		setItemList((prev) => [
			...prev,
			{ name, price: parseInt(price), quantity: parseInt(quantity) },
		]);

		setEditMode(false);
		e.currentTarget.reset();
	};

	return { itemList, editMode, setEditMode, setItemList, handleSubmit };
}
