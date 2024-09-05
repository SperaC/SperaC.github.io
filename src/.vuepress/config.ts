import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import {oml2dPlugin} from "vuepress-plugin-oh-my-live2d";
import { path } from "vuepress/utils";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "博客演示",
      description: "vuepress-theme-hope 的博客演示",
    },
  },

  theme,
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },
  // Enable it with pwa
  // shouldPrefetch: false,
    plugins: [
        oml2dPlugin({
            // 在这里配置选项
            models: [
                // {
                //     path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json',
                //     scale: 0.12,
                //     position: [-10, 50],
                //     stageStyle: {
                //         width: 350
                //     }
                // },
                // {
                //     "path": "https://model.oml2d.com/cat-black/model.json",
                //     "scale": 0.15,
                //     "position": [0, 20],
                //     "stageStyle": {
                //         "height": 350
                //     }
                // }
            ]
        })

        //  ...other plugins
    ]
});
