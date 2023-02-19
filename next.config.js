/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    webpack: (config) => {
        config.resolve = {
            ...config.resolve,
            fallback: {
                "fs": false,
                "path": false,
                "os": false,
                "async_hooks": false
            }
        }
        return config
    },
}

module.exports = nextConfig