import { useQuery } from '@tanstack/react-query';
import {
	getBenefitBrandList,
	getBenefitDetail,
	getBenefitList,
	getMainCategory,
	getSubCategory,
} from '@/entities/benefit/api/api';
import {
	BenefitDataType,
	BenefitType,
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
		BenefitType[],
		Error,
		BenefitType[],
		[_1: string, _2: string, _3: string]
	>({
		queryKey: ['benefitList', pid, sid],
		queryFn: () => getBenefitList(pid, sid),
		staleTime: 1000 * 60 * 5,
	});
};

export const useGetBenefitBrandList = (pid: string, brandId: string) => {
	return useQuery<
		BenefitDataType[],
		Error,
		BenefitDataType[],
		[_1: string, _2: string, _3: string]
	>({
		queryKey: ['benefitBrand', pid, brandId],
		queryFn: () => getBenefitBrandList(pid, brandId),
		staleTime: 1000 * 60 * 5,
	});
};

export const useGetBenefitDetail = (pid: string, benefitId: string) => {
	return useQuery<
		BenefitDataType,
		Error,
		BenefitDataType,
		[_1: string, _2: string, _3: string]
	>({
		queryKey: ['benefitDetail', pid, benefitId],
		queryFn: () => getBenefitDetail(pid, benefitId),
		staleTime: 1000 * 60 * 5,
	});
};
