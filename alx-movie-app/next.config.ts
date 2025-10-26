import type { NextConfig } from "next";

import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */

const withPWA = withPWAInit({
    dest: "public",
});

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        domains: ["m.media-amazon.com"], // 👈 Add this
    },
    reactStrictMode: true,
};

export default withPWA({
    ...nextConfig,
});
