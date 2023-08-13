import baseConfig from "@hc/tailwind-config";
import type { Config } from "tailwindcss";

export default {
  presets: [baseConfig],
  content: ["./src/**/*.tsx", "../../packages/ui/src/**/*.tsx"],
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
