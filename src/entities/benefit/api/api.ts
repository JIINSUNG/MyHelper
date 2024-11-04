export const getMainCategory = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/benefit/m_category`,
	).then((response) => response.json());

	return response.data;
};

/**
 *
 * @param pid : ** main category Id **
 * @param sid : ** sub category Id **
 * @param brandId : ** brandId **
 * @param benefitId : ** benefitId **
 *
 */

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

export const getBenefitBrandList = async (pid: string, brandId: string) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/benefit/brand?pid=${pid}&brandId=${brandId}`,
	).then((response) => response.json());

	return response.data;
};

export const getBenefitDetail = async (pid: string, benefitId: string) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/benefit/detail?pid=${pid}&benefitId=${benefitId}`,
	).then((response) => response.json());

	return response.data;
};
