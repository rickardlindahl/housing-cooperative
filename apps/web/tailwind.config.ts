import baseConfig from "@hc/tailwind-config";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx", "../../packages/ui/src/**/*.tsx"],
  presets: [baseConfig],
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
