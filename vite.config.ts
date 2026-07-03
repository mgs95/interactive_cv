import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Deployed at https://mgs95.github.io/interactive_cv/
export default defineConfig({
  base: "/interactive_cv/",
  plugins: [react()],
});
