import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	env: {
		NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/welcome',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
