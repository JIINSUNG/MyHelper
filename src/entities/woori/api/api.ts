export const getData = async (brand: string, region: string, name: string) => {
	const searchParams = new URLSearchParams();
	if (brand) searchParams.set('brand', brand);
	if (region) searchParams.set('region', region);
	if (name) searchParams.set('name', name);

	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/woori?${searchParams.toString()}`,
		{
			next: {
				tags: ['Woori', brand, region, name],
			},
		},
	).then((response) => response.json());

	return response.data;
};
