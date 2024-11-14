import React from 'react';
import { Typography } from '@/shared/component/Typography';
import { Tooltips } from '@/shared/component';

type PageHeaderProps = {
	title: string;
	content: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ title, content }) => {
	return (
		<div className="flex items-center gap-2">
			<Typography size="subhead">{title}</Typography>
			<Tooltips content={content} />
		</div>
	);
};
export default PageHeader;
