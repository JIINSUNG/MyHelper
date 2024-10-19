import { useQuery } from '@tanstack/react-query';
import { getMovieList, getStreamingInfo } from '@/entities/streaming/api/api';
import { MovieType } from '@/features/streaming/components/MovieCard';
import { Movie } from '@/entities/streaming/type/type';

export const useGetMovies = (query: string) => {
	return useQuery<MovieType[], Error, MovieType[], [_1: string, _2: string]>({
		queryKey: ['Movies', query],
		queryFn: () => getMovieList(query),
		enabled: !!query,
		staleTime: 1000 * 60 * 5, // 1000ms(1s) * 60 * 5 : 5분간 캐싱
	});
};

export const useGetStreamingInfo = (tmdbId: number) => {
	return useQuery<Movie, Error, Movie, [_1: string, _2: number]>({
		queryKey: ['Streaming', tmdbId],
		queryFn: () => getStreamingInfo(tmdbId),
		enabled: tmdbId > 0,
		staleTime: 1000 * 60 * 5, // 1000ms(1s) * 60 * 5 : 5분간 캐싱
	});
};
