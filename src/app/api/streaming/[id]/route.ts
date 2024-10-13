import { NextRequest, NextResponse } from 'next/server';

export async function GET(
	req: NextRequest,
	{ params }: { params: { id: string } },
) {
	const id = params.id;
	const api_key = process.env.STREAMING_API_KEY;
	const host = process.env.STREAMING_API_HOST;

	if (!id || !api_key || !host) {
		return NextResponse.json(
			{ message: '형식이 알맞지 않습니다' },
			{
				status: 400,
			},
		);
	}

	const url = `${process.env.STREAMING_BASE_URL}/shows/movie/${id}?&output_language=en`;

	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'x-rapidapi-key': api_key as string,
				'x-rapidapi-host': host as string,
			},
		});
		const result = await response.json();

		return NextResponse.json({ data: result }, { status: 200 });
	} catch (e) {
		return NextResponse.json({ message: e }, { status: 401 });
	}
}
