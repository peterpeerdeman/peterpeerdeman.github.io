const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    future: {
        webpack5: true,
    },
    webpack: (config, { dev, isServer }) => {
        config.module.rules.push({
            test: /\.(png|jpe?g|gif|mp4)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_next',
                        name: 'static/media/[name].[hash].[ext]',
                    },
                },
            ],
        });

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        if (!dev && !isServer) {
            // Replace React with Preact only in client production build
            Object.assign(config.resolve.alias, {
                react: 'preact/compat',
                'react-dom/test-utils': 'preact/test-utils',
                'react-dom': 'preact/compat',
            });
        }

        return config;
    },
    async rewrites() {
        return {
            beforeFiles: [
                // These rewrites are checked after headers/redirects
                // and before pages/public files which allows overriding
                // page files
                {
                    source: '/',
                    destination: '/index',
                },
            ],
        };
    },
    async redirects() {
        return [
            {
                source: '/post',
                destination: '/blog',
                permanent: true,
            },
            {
                source: '/:category/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug',
                destination: '/blog/:slug',
                permanent: true,
            },
        ];
    },
});
