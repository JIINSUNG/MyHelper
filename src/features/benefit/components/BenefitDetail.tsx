'use client';

import React from 'react';
import { useGetBenefitDetail } from '@/entities/benefit/query/query';
import { BrandCard } from '@/shared/component/BrandCard';
import { Typography } from '@/shared/component/Typography';
import { Button } from '@/shared/component';

type BenefitListProps = {
	pid: string;
	benefitId: string;
};

const BenefitDetail: React.FC<BenefitListProps> = ({ pid, benefitId }) => {
	const { data: benefitData } = useGetBenefitDetail(pid, benefitId);
	return (
		<section className="flex flex-col w-full">
			{benefitData ? (
				<>
					<div className="flex flex-col w-full items-center">
						<Typography size="title">이름 : {benefitData.name}</Typography>
						<BrandCard
							alt="로고	"
							src={
								benefitData.benefitImage
									? benefitData.benefitImage
									: benefitData.image
							}
						/>
						{benefitData.LINK ? (
							<Button
								onClick={() => {
									window.location.href = benefitData.LINK;
								}}
								label={'내용 보러 가기'}
							/>
						) : null}
					</div>
					<div className="flex flex-col ml-5 gap-4">
						<Typography size={'title'}>
							혜택명 : {benefitData.benefitTitle}
						</Typography>
						<Typography>{benefitData.benefitDescription}</Typography>
						<Typography>사용 기간 : {benefitData.expiration}</Typography>
						{benefitData.HowGet && (
							<Typography>수령 방법 : {benefitData.HowGet}</Typography>
						)}
						<Typography>
							유의사항 : {benefitData.conditionDescription}
						</Typography>
						{benefitData.ETC && (
							<Typography>기타 : {benefitData.ETC}</Typography>
						)}
					</div>
				</>
			) : (
				<></>
			)}
		</section>
	);
};

export default BenefitDetail;
