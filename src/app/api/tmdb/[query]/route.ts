import { NextRequest, NextResponse } from 'next/server';

export async function GET(
	req: NextRequest,
	{ params }: { params: { query: string } },
) {
	const query = params.query;

	if (!query) {
		return NextResponse.json(
			{
				message: 'query 미입력',
			},
			{
				status: 400,
			},
		);
	}

	try {
		const response = await fetch(
			`${process.env.TMDB_BASE_URL}/movie?query=${query}&api_key=${process.env.TMDB_API_KEY}&language=ko-KR`,
		).then((response) => response.json());

		if (response.results.length === 0) {
			return NextResponse.json(
				{
					status: 204,
					message: '데이터가 존재하지 않습니다',
					data: null,
				},
				{
					status: 200,
				},
			);
		}

		return NextResponse.json(
			{
				data: response.results,
				status: 200,
				message: '데이터가 성공적으로 조회되었습니다',
			},
			{ status: 200 },
		);
	} catch (e) {
		return NextResponse.json({ message: e }, { status: 401 });
	}
}
