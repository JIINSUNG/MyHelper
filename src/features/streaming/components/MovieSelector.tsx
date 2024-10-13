'use client';

import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { MovieCard } from '@/features/streaming/components';
import { useDebounce } from '@/shared/hooks';
import { MovieType } from '@/features/streaming/components/MovieCard';
import { useRouter } from 'next/navigation';
import { Button } from '@/shared/component';

export type MovieSelectorProps = {
	className?: string;
};

const MovieSelector: React.FC<MovieSelectorProps> = ({ className }) => {
	const [query, setQuery] = useState('');
	const [movieList, setMovieList] = useState([]);
	const [movie, setMovie] = useState<MovieType | null>(null);
	const router = useRouter();

	const debouncedQuery = useDebounce(query, 500);

	const getMovieList = async (query: string) => {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie?query=${query}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=ko-KR`,
		).then((response) => response.json());

		setMovieList(response.results);
	};

	useEffect(() => {
		if (!debouncedQuery) return;

		getMovieList(debouncedQuery);
	}, [debouncedQuery]);

	const handleSearch = () => {
		if (!movie) return;
		router.push(`/streaming?id=${movie.id}`);
	};

	const handleRemove = () => {
		setMovie(null);
		setMovieList([]);
	};

	return (
		<section className={twMerge('flex flex-col', className)}>
			<div className="flex items-start gap-2">
				<div className="flex flex-col w-[300px]">
					{!movie ? (
						<input
							type="text"
							placeholder="제목으로 검색"
							className="border border-black px-2 py-1 rounded-md"
							onChange={(e) => setQuery(e.target.value)}
						/>
					) : (
						<div className="border border-black px-2 py-1 rounded-md">
							선택 영화 : {movie.title}
						</div>
					)}

					{movieList?.map((movie, idx) => (
						<MovieCard
							className="cursor-pointer"
							onClick={() => {
								setMovie(movie);
								setMovieList([movie]);
							}}
							key={idx}
							movie={movie}
						/>
					))}
				</div>
				{/* TODO: 스트리밍 검색 API 연결 */}
				{movie && (
					<div className="flex flex-col w-[60px] gap-2">
						<Button onClick={() => handleSearch()} label="검색" />
						<Button
							onClick={() => handleRemove()}
							label="초기화"
							color="warn"
						/>
					</div>
				)}
			</div>
		</section>
	);
};

export default MovieSelector;
