import { NextRequest, NextResponse } from 'next/server';
import { data } from '@/entities/woori';
export async function GET(req: NextRequest) {
	const { searchParams } = req.nextUrl;

	const brand = searchParams.get('brand') ?? '애슐리';
	const region = searchParams.get('region');
	const name = searchParams.get('name');

	const filteredData = data.filter((brands) => {
		const matchesBrandAndRegion =
			region === 'All' || !region
				? brands.brand === brand
				: brands.brand === brand && brands.region === region;

		if (name) {
			return matchesBrandAndRegion && brands.name.includes(name);
		}

		return matchesBrandAndRegion;
	});

	if (!filteredData) {
		return NextResponse.json({
			data: null,
			status: 204,
			message: '조건에 맞는 데이터가 존재하지 않습니다',
		});
	}

	return NextResponse.json(
		{
			data: filteredData,
			status: 200,
			message: '데이터가 성공적으로 조회되었습니다',
		},
		{ status: 200 },
	);
}
