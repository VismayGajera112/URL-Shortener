/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/create-short-url',
                destination: 'http://backend:9808/create-short-url',
            },
            {
                source: '/:shortUrl',
                destination: 'http://backend:9808/:shortUrl'
            }
        ]
    },
};

export default nextConfig;
