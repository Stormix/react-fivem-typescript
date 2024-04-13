import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	build: {
		outDir: "../../dist/web",
		emptyOutDir: true,
		"watch": {
			"include": [
				"../client/**",
				"../server/**",
				"../web/**"
			]
		}
	}
});