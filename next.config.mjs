/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "res.cloudinary.com"
        ],
    },
    publicRoutes: ["/api/:path*"],
};

export default nextConfig;