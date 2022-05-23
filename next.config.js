/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			// Rewrite everything else to use `pages/index`
			{
				source: "/dashboard/:path*",
				destination: "/dashboard/",
			},
		];
	},
	reactStrictMode: true,
};

module.exports = nextConfig;
