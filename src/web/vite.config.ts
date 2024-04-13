import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	base: "./",
	build: {
		outDir: "../../dist/web",
		emptyOutDir: true,
		assetsDir: "./",
		rollupOptions: {
			output: {
				entryFileNames: "js/[name].js",
				chunkFileNames: "js/[name].js",
				assetFileNames: "assets/[name].[ext]",
			},
		},
	}
});