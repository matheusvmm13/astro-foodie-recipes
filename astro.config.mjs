import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import AstroPWA from "@vite-pwa/astro";

export default defineConfig({
    integrations: [
        preact(),
        AstroPWA({
            mode: "development",
            base: "/",
            scope: "/",
            includeAssets: ["favicon.ico"],
            registerType: "autoUpdate",
            manifest: {
                name: "Astro PWA",
                short_name: "Astro PWA",
                theme_color: "#ffffff",
            },
            workbox: {
                globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"],
            },
            devOptions: {
                enabled: true,
                navigateFallback: "/404",
            },
        }),
    ],
});
