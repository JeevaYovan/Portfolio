import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const isReplit =
  process.env.REPL_ID !== undefined &&
  process.env.NODE_ENV !== "production";

export default defineConfig({
  root: path.resolve(__dirname, "client"),

  plugins: [
    react(),
    ...(isReplit
      ? [
          (await import("@replit/vite-plugin-runtime-error-modal")).default(),
          (
            await import("@replit/vite-plugin-cartographer")
          ).cartographer(),
        ]
      : []),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
});
