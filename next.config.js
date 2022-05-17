/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: false,
  includePaths: [path.join(__dirname, "styles")],
}

module.exports = nextConfig
