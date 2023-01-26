import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
    vite: {
        logLevel: "info",
        define: {
            __DATE__: `'${new Date().toISOString()}'`,
        },
    },
    integrations: [
        preact(),
    ],
});
