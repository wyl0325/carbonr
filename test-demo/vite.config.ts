import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vitePluginImport from "vite-plugin-babel-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginImport([
      {
        libraryName: "element-plus",
        libraryDirectory: "es",
        style(name) {
          return `element-plus/lib/theme-chalk/${name}.css`;
        },
      },
    ]),
  ],
});
