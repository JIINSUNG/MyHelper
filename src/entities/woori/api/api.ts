import Swal from 'sweetalert2';

export const getData = async (brand: string, region: string, name: string) => {
	const searchParams = new URLSearchParams();
	if (brand) searchParams.set('brand', brand);
	if (region) searchParams.set('region', region);
	if (name) searchParams.set('name', name);

	try {
		const response = await fetch(
			process.env.URL + `/api/woori?${searchParams.toString()}`,
			{
				next: {
					tags: ['Woori', brand, region, name],
				},
			},
		).then((response) => response.json());

		return response.data;
	} catch (e) {
		Swal.fire({
			icon: 'error',
			title: '에러',
			text: '에러가 발생하였습니다',
		});
		console.error(e);
	}
};
