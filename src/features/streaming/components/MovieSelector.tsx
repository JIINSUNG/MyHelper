'use client';

import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { MovieCard, MovieLoadingCard } from '@/features/streaming/components';
import { useDebounce } from '@/shared/hooks';
import { MovieType } from '@/features/streaming/components/MovieCard';
import { Button } from '@/shared/component';
import { useGetMovies } from '@/entities/streaming/query/query';
import { useMovieContext } from '@/app/context/MovieContext';

export type MovieSelectorProps = {
	className?: string;
};

const MovieSelector: React.FC<MovieSelectorProps> = ({ className }) => {
	const { query, setQuery, setTmdbId } = useMovieContext();
	const debouncedQuery = useDebounce(query, 500);
	const [movie, setMovie] = useState<MovieType | null>(null);
	const { data: movieList, isLoading } = useGetMovies(debouncedQuery);

	const handleSearch = () => {
		if (!movie) return;

		setTmdbId(movie.id);
	};

	const handleRemove = () => {
		setMovie(null);
		setTmdbId(-1);
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
							value={query}
						/>
					) : (
						<div className="border border-black px-2 py-1 rounded-md">
							선택 영화 : {movie.title}
						</div>
					)}
					{isLoading ? (
						<div className="flex flex-col">
							{Array.from({ length: 5 }).map((_, i) => (
								<MovieLoadingCard key={i} />
							))}
						</div>
					) : movie ? (
						<MovieCard className="cursor-pointer" movie={movie} />
					) : (
						movieList?.map((movie, idx) => (
							<MovieCard
								className="cursor-pointer"
								onClick={() => {
									setMovie(movie);
								}}
								key={idx}
								movie={movie}
							/>
						))
					)}
				</div>
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
