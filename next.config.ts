import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // images: {
  //   remotePatterns: [new URL("https://www.axelerant.com/hubfs/Imported_Blog_Media/nextjs_image1.jpg")]
  // }

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',

      },
    ],
  },
};

export default nextConfig;
