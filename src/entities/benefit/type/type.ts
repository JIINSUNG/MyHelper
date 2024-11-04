export type MainCategoryType = {
	id: number;
	type: string;
	image: string;
};

export type SubCategoryType = MainCategoryType & {
	pid: number;
};

/**
 * 데이터 원본 타입
 */
export type BenefitDataType = {
	category1: string;
	category2: string;
	category3: string;
	brandId: number;
	id: number;
	image: string;
	name: string;
	benefitTitle: string;
	benefitDescription: string;
	benefitImage: string | null;
	expiration: string;
	condition: string;
	conditionDescription: string;
	HowGet: string;
	LINK: string;
	ETC: string | null;
};

export type BenefitType = {
	category3: string;
	image: string;
	name: string;
	id: number;
	brandId: number;
};
