import { defineClientConfig } from "vuepress/client";
// import { setupSnowFall } from "vuepress-theme-hope/presets/SnowFall.js";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import "vuepress-theme-hope/presets/left-blog-info.scss";
import "vuepress-theme-hope/presets/hr-driving-car.scss"
import "vuepress-theme-hope/presets/bounce-icon.scss"

export default defineClientConfig({
  setup() {
    // setupSnowFall();
    // 运行时间
    setupRunningTimeFooter(new Date("2024-09-01"), {
      "/": "Running time: :day days :hour hours :minute minutes :second seconds",
      "/zh/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
    })
  },
});