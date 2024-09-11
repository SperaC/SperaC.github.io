import { hopeTheme } from "vuepress-theme-hope";

import { enNavbarConfig, zhNavbarConfig } from "./navbar.js";
import { enSidebarConfig, zhSidebarConfig } from "./sidebar/index.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default hopeTheme(
  {
    hostname: "https://SperaC.github.io",

    author: {
      name: "SperaC",
      url: "https://SperaC.github.io",
    },

    favicon: "/favicon.ico",

    iconAssets: [
      "//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css",
      "fontawesome"
    ],
      
    logo: "/logo.svg",

    repo: "SperaC/SperaC.github.io",

    repoDisplay: false,

    docsDir: "src",

    locales: {
      "/": {
        navbar: zhNavbarConfig,
        sidebar: zhSidebarConfig,

        footer:
          '主题使用 <a href="https://theme-hope.vuejs.press/zh/">VuePress Theme Hope</a> | <a href="https://SperaC.github.io/about/site.html" target="_blank">关于网站</a>',

        copyright: "基于 MIT 协议，© 2024-至今 SperaC",

        blog: {
          description: "后端开发-攻城狮",
          intro: "/about/",
          medias: {
            GitHub: "https://github.com/SperaC"
          },
        },
      },

      "/en/": {
        navbar: enNavbarConfig,
        sidebar: enSidebarConfig,

        footer:
          'Theme by <a href="https://theme-hope.vuejs.press">vuepress-theme-hope</a>',

        copyright: "MIT Licensed, © 2024-present SperaC",

        blog: {
          description:
            "VuePress project member, front-end developer, studying for a master's degree in theoretical physics",
          intro: "/en/about/",
          medias: {
            GitHub: "https://github.com/SperaC"
          },
        },
      },
    },

    displayFooter: true,
    copyright: "Copyright © 2024-present SperaC",

    plugins: {
      blog: {
        excerptLength: 0,
      },

      comment: {
        provider: "Giscus",
        repo:"SperaC/SperaC.github.io",
        repoId:"R_kgDOMtLrFg",
        category:"Announcements",
        categoryId:"DIC_kwDOMtLrFs4CiOBW",
      },

      docsearch: {
        appId: "IJ4SITYJDW",
        apiKey: "a0f161324df45f55cbabb3bc67cf57e4",
        indexName: "speracio",
      },
      // searchPro: {
      //   // 索引全部内容
      //   indexContent: true,
      //   autoSuggestions: true,
      //   // 为分类和标签添加索引
      //   customFields: [
      //     {
      //       getter(page: any) {
      //         return page.frontmatter.category;
      //       },
      //       formatter: {
      //         '/': '分类：$content',
      //         '/en/': 'Category: $content',
      //       },
      //     },
      //     {
      //       getter(page: any) {
      //         return page.frontmatter.tag;
      //       },
      //       formatter: {
      //         '/': '标签：$content',
      //         '/en/': 'Tag: $content',
      //       },
      //     },
      //   ],
      // },
      feed: {
        atom: true,
        json: true,
        rss: true,
      },

      mdEnhance: {
        align: true,
        codetabs: true,
        demo: true,
        figure: true,
        flowchart: true,
        footnote: true,
        imgLazyload: true,
        imgMark: true,
        imgSize: true,
        mathjax: true,
        mermaid: true,
        revealJs: true,
        sub: true,
        sup: true,
        vPre: true,
      },

      pwa: {
        themeColor: "#5c92d1",
        cacheHTML: false,
        maxSize: 3072,
        apple: {
          icon: "/assets/icon/apple-touch-icon.png",
          statusBarColor: "white",
        },
        msTile: {
          image: "/assets/icon/ms-icon-144.png",
          color: "#ffffff",
        },
        manifest: {
          name: "SperaC 的个人博客",
          short_name: "SperaC Blog",
          description: "SperaC 的个人博客",
          theme_color: "#5c92d1",
          icons: [
            {
              src: "/assets/icon/chrome-192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-mask-192.png",
              sizes: "192x192",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-mask-512.png",
              sizes: "512x512",
              purpose: "maskable",
              type: "image/png",
            },
          ],
          shortcuts: [
            {
              name: "分类",
              short_name: "分类",
              icons: [
                {
                  src: "/assets/icon/category-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/category/",
              description: "文章分类分组",
            },
            {
              name: "标签",
              short_name: "标签",
              icons: [
                {
                  src: "/assets/icon/tag-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/tag/",
              description: "文章标签分组",
            },
            {
              name: "时间线",
              short_name: "时间线",
              icons: [
                {
                  src: "/assets/icon/timeline-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/timeline/",
              description: "时间线文章列表",
            },
            {
              name: "个人介绍",
              short_name: "个人介绍",
              icons: [
                {
                  src: "/assets/icon/about-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/about/",
              description: "个人介绍",
            },
          ],
        },
      },

      shiki: {
        lineNumbers: 10,
        langAlias: {
          conf: "ini",
        },
      },
    },
  },
  false,
);
