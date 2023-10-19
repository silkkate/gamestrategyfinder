/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = {
    reactStrictMode: true,
      env: {
        GAME_API_KEY: process.env.GAME_API_KEY,
      },
    };
module.exports = nextConfig

