import React from 'react';

const StreamingLoadingCard: React.FC = () => {
	return (
		<div className="p-4 bg-white flex w-full justify-between">
			<div className="h-[24px] w-[60px] animate-pulse bg-gray-300" />
			<div className="h-[24px] w-[60px] animate-pulse bg-gray-300" />
		</div>
	);
};

export default StreamingLoadingCard;
