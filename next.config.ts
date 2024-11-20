import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, "src/app/styles")],
    additionalData: `
    @import "_variables_color";
    @import "_variables";
    @import "_mixins";`
  },
};

export default nextConfig;