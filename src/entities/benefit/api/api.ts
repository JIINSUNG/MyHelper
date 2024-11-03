export const getMainCategory = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/benefit/m_category`,
	).then((response) => response.json());

	return response.data;
};

export const getSubCategory = async (pid: string) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/benefit/s_category?pid=${pid}`,
	).then((response) => response.json());

	return response.data;
};

export const getBenefitList = async (pid: string, sid: string) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/benefit?pid=${pid}&sid=${sid}`,
	).then((response) => response.json());

	return response.data;
};
