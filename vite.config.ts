import { devtools } from '@tanstack/devtools-vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';

const config = defineConfig({
  base: '/lingxi-chat/',
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    nitro({ rollupConfig: { external: [/^@sentry\//u] } }),
    babel({
      babelConfig: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
    tanstackStart({
      router: {
        generatedRouteTree: 'route-tree.gen.ts',
        routeTreeFileHeader: [
          '// @ts-nocheck',
          '/** biome-ignore-all lint: ignore */',
          '/** biome-ignore-all assist/source/organizeImports: ignore */',
        ],
      },
    }),
    viteReact(),
  ],
});

export default config;
