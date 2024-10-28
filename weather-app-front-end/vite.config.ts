import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import webfontDownload from 'vite-plugin-webfont-dl';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
	base: './',
	server: {
		open: true,
		port: 8080,
		strictPort: true,
	},
	preview: {
		open: true,
		port: 8080,
	},
	build: {
		terserOptions: {
			compress: true,
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		},
	},
	plugins: [
		react(),
		webfontDownload(['https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&display=swap']),
		svgr(),
	],
	css: {
		postcss: {
			plugins: [autoprefixer(), postcssPresetEnv()]
		},
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
			},
		},
	},
});
