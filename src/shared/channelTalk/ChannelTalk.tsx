'use client';
import { useEffect } from 'react';
import * as ChannelService from '@channel.io/channel-web-sdk-loader';

const Channeltalk = () => {
	useEffect(() => {
		ChannelService.loadScript();

		ChannelService.boot({
			pluginKey: process.env.NEXT_PUBLIC_CHANNEL_TALK_KEY,
		});

		return () => {
			ChannelService.shutdown();
		};
	}, []);

	return null;
};

export default Channeltalk;
