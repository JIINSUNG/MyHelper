import { NextRequest, NextResponse } from 'next/server';

export async function GET(
	req: NextRequest,
	{ params }: { params: { id: string } },
) {
	const id = params.id;
	const API_KEY = process.env.STREAMING_API_KEY;
	const HOST = process.env.STREAMING_API_HOST;

	if (!id || !API_KEY || !HOST) {
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
				'x-rapidapi-key': API_KEY,
				'x-rapidapi-host': HOST,
			},
		});

		const result = await response.json();

		if (!result) {
			return NextResponse.json(
				{ data: null, status: 204, message: '데이터가 존재하지 않습니다' },
				{ status: 200 },
			);
		}

		return NextResponse.json({ data: result }, { status: 200 });
	} catch (e: unknown) {
		if (e instanceof Error) {
			return NextResponse.json({ message: e.message }, { status: 401 });
		}
		return NextResponse.json(
			{ message: 'Unknown error occurred' },
			{ status: 500 },
		);
	}
}
