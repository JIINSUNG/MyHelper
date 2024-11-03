export type MainCategoryType = {
	id: number;
	type: string;
	image: string;
};

export type SubCategoryType = MainCategoryType & {
	pid: number;
};
