import { NextRequest, NextResponse } from 'next/server';
import data from '@/entities/benefit/json/BenefitSubSubCategory.json';

export async function GET(req: NextRequest) {
	const { searchParams } = req.nextUrl;
	const pid = searchParams.get('pid');

	if (!pid)
		return NextResponse.json(
			{ message: '옳바르지 않은 요청입니다' },
			{ status: 400 },
		);

	const filteredData = data.filter(
		(category) => category.pid === parseInt(pid),
	);

	if (!filteredData) {
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
			data: filteredData,
			message: '데이터가 성공적으로 조회되었습니다',
			status: 200,
		},
		{ status: 200 },
	);
}
