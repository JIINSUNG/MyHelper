'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

export type MovieType = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path?: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type MovieCardProps = {
	className?: string;
	movie: MovieType;
	onClick: () => void;
};

const MovieCard: React.FC<MovieCardProps> = ({ className, movie, onClick }) => {
	return (
		<div
			className={twMerge(
				'flex w-full border border-black rounded-md p-2 bg-white',
				className,
			)}
			onClick={onClick}
		>
			{/* 이미지 영역 */}
			<div className="flex w-[100px] pr-2 border-r border-black">
				{movie.poster_path ? (
					<Image
						src={'https://image.tmdb.org/t/p/w200/' + movie.poster_path}
						alt={'poster'}
						width={100}
						height={120}
						className="object-contain" // 이미지 크기 조정
					/>
				) : (
					<div>
						포스터 <br /> 없음
					</div>
				)}
			</div>
			{/* 제목, 설명, 감독 등 */}
			<div className="flex flex-col w-full">
				<div className="flex flex-col justify-between p-2">
					<h1 className="font-bold">{movie.title}</h1>
					<p className="line-clamp-2">{movie.overview}</p>
					<span>개봉일 : {movie.release_date}</span>
					<span>평점 : {movie.vote_average}</span>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
