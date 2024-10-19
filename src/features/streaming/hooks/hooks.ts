import type { StreamingOption } from '@/entities/streaming/type/type';
import { countryNames, languageNames } from '@/shared/const/CountryEnum';

export function getNetflixCountries(
	streamingOptions: Record<string, StreamingOption[]>,
): { country: string; options: StreamingOption[] }[] {
	if (!streamingOptions || Object.keys(streamingOptions).length === 0) {
		return [];
	}

	return Object.entries(streamingOptions)
		.map(([country, options]: [string, StreamingOption[]]) => ({
			country,
			options: options.filter(
				(option: StreamingOption) => option.service.id === 'netflix',
			),
		}))
		.filter((entry) => entry.options.length > 0);
}

export function getCountryName(code: string): string {
	return countryNames[code] || code; // 매핑이 없을 경우 원래 코드를 반환
}

export function getLanguageName(code: string): string {
	return languageNames[code] || code;
}
