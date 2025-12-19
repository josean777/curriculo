import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    jsxLocPlugin(),
    vitePluginManusRuntime(),
  ],

  // 🔹 Frontend está dentro da pasta client
  root: path.resolve(import.meta.dirname, "client"),

  // 🔹 Aliases absolutos
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },

  // 🔹 Variáveis de ambiente
  envDir: path.resolve(import.meta.dirname),

  // 🔹 Build compatível com Vercel
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },

  // 🔹 Dev server (local)
  server: {
    port: 3000,
    host: true,
    strictPort: false,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
