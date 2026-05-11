import { devtools } from '@tanstack/devtools-vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';

const config = defineConfig({
  base: '/lingxi-chat/',
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    tanstackRouter({
      generatedRouteTree: 'src/route-tree.gen.ts',
      routeTreeFileHeader: [
        '// @ts-nocheck',
        '/** biome-ignore-all lint: ignore */',
        '/** biome-ignore-all assist/source/organizeImports: ignore */',
      ],
      routesDirectory: 'src/routes',
    }),
    babel({
      babelConfig: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
    viteReact(),
  ],
});

export default config;
