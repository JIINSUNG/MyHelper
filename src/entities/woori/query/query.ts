import { useQuery } from '@tanstack/react-query';
import { getData } from '@/entities/woori/api/api';
import { itemType } from '@/entities/woori';

export const useGetWoori = (
	brand: '애슐리' | '아웃백',
	region: string,
	name: string,
) => {
	return useQuery<
		itemType[],
		Error,
		itemType[],
		[_1: string, _2: string, _3: string, _4: string]
	>({
		queryKey: ['Woori', brand, region, name],
		queryFn: () => getData(brand, region, name),
		staleTime: 1000 * 5 * 3600,
	});
};
