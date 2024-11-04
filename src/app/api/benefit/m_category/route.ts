import { NextResponse } from 'next/server';
import data from '@/entities/benefit/json/BenefitPrimaryCategory.json';

export async function GET() {
	return NextResponse.json(
		{
			data: data,
			status: 200,
			message: '데이터가 성공적으로 조회되었습니다',
		},
		{ status: 200 },
	);
}
