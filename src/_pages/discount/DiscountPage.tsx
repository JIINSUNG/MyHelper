import React from 'react';
import { DiscountCalculator } from '@/features/discount';
import { PageHeader } from '@/widgets';

const DiscountPage: React.FC = () => {
	return (
		<main className="flex flex-col w-full gap-4">
			<PageHeader
				title="할인 가격(율) 헬퍼"
				content={
					'물건을 구매할 때 몇 % 할인을 해준다고 하면 얼마나 할인 받는지 헷갈리는 사람들을 위한 기능입니다\n' +
					'내가 얼마나 할인받았는지에 대한 금액과 함께 총 결제한 금액을 알려드리는 기능입니다\n' +
					'반대로 정가 X만원 물건을 할인받아 X원에 결제했을때에 대한 경우도 계산하는 기능을 탑재했습니다'
				}
			/>
			<section className="flex w-full  flex-col gap-4 animate-slideUp">
				<DiscountCalculator />
			</section>
		</main>
	);
};

export default DiscountPage;
