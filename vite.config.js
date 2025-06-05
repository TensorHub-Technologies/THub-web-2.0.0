import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  // Load environment variables for the current mode
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    define: {
      "import.meta.env.VITE_THUB_WEB_SERVER_PROD_URL": JSON.stringify(
        env.VITE_THUB_WEB_SERVER_PROD_URL,
      ),
      "import.meta.env.VITE_THUB_WEB_SERVER_DEMO_URL": JSON.stringify(
        env.VITE_THUB_WEB_SERVER_DEMO_URL,
      ),
      "import.meta.env.VITE_THUB_WEB_SERVER_LOCAL_URL": JSON.stringify(
        env.VITE_THUB_WEB_SERVER_LOCAL_URL,
      ),
    },
  };
});
