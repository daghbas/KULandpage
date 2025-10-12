import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import { mochaPlugins } from "@getmocha/vite-plugins";

export default defineConfig({
  base: "/KULandpage/", // تأكد أن هذا هو اسم المستودع على GitHub
  plugins: [
    ...mochaPlugins(process.env as any),
    react(),
    cloudflare()
  ],
  server: {
    allowedHosts: true,
  },
  build: {
    outDir: "docs", // يجعل ملفات البناء تذهب مباشرة إلى docs للنشر
    chunkSizeWarningLimit: 5000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
