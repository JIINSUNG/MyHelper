import { useQuery } from '@tanstack/react-query';
import {
	getBenefitList,
	getMainCategory,
	getSubCategory,
} from '@/entities/benefit/api/api';
import {
	MainCategoryType,
	SubCategoryType,
} from '@/entities/benefit/type/type';

export const useGetMainCategory = () => {
	return useQuery<MainCategoryType[], Error, MainCategoryType[], [_1: string]>({
		queryKey: ['benefitMainCategory'],
		queryFn: () => getMainCategory(),
		staleTime: 1000 * 60 * 5,
	});
};

export const useGetSubCategory = (pid: string) => {
	return useQuery<
		SubCategoryType[],
		Error,
		SubCategoryType[],
		[_1: string, _2: string]
	>({
		queryKey: ['benefitSubCategory', pid],
		queryFn: () => getSubCategory(pid),
		staleTime: 1000 * 60 * 5,
	});
};

export const useGetBenefitList = (pid: string, sid: string) => {
	return useQuery<
		SubCategoryType[],
		Error,
		SubCategoryType[],
		[_1: string, _2: string, _3: string]
	>({
		queryKey: ['benefitSubCategory', pid, sid],
		queryFn: () => getBenefitList(pid, sid),
		staleTime: 1000 * 60 * 5,
	});
};
