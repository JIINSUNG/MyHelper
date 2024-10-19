export const getMovieList = async (query: string) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/tmdb/${query}`,
	).then((response) => response.json());

	return response.data;
};

export const getStreamingInfo = async (tmdbId: number) => {
	const response = await fetch(`/api/streaming/${tmdbId}`)
		.then((response) => response.json())
		.catch((error) => {
			alert(error.message);
		});
	return response.data;
};
