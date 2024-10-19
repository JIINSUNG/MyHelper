export type ImageSet = {
	w360: string;
	w480: string;
	w720: string;
	w1080: string;
	w1440: string;
};

export type Genre = {
	id: string;
	name: string;
};

export type infoType = {
	country: string;
	options: StreamingOption[];
};

export type Service = {
	id: string;
	name: string;
	homePage: string;
	themeColorCode: string;
	imageSet: ImageSet;
};

export type StreamingOption = {
	audios: { language: string }[];
	availableSince: number;
	expiresSoon: boolean;
	link: string;
	quality?: string;
	service: Service;
	subtitles: Array<{ closedCaptions: boolean; locale: { language: string } }>;
	type: string;
};

export type Movie = {
	cast: string[];
	directors: string[];
	genres: Genre[];
	id: string;
	imageSet: {
		horizontalBackdrop: ImageSet;
		horizontalPoster: ImageSet;
		verticalPoster: ImageSet;
	};
	imdbId: string;
	itemType: string;
	originalTitle: string;
	overview: string;
	rating: number;
	releaseYear: number;
	runtime: number;
	showType: string;
	streamingOptions: Record<string, StreamingOption[]>;
	title: string;
	tmdbId: string;
};
