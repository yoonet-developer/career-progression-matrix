import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from "@astrojs/cloudflare";
import react from '@astrojs/react';

const pathName = "/sa-running"


export default defineConfig({
  base: pathName,
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),

  build: {
    assetsPrefix: pathName,
  },
  integrations: [tailwind(), react()],

  vite: {
    resolve: {
      alias: import.meta.env.PROD ? {
        "react-dom/server": "react-dom/server.edge",
      } : undefined,
    },
  }
});

