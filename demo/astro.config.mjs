import { defineConfig } from "astro/config";
import Content from "../plugin-astro-content";

// https://astro.build/config
export default defineConfig({
    base: "/plugin-astro-content",
    vite: {
        plugins: [Content({ objectMode: true })],
    },
});
