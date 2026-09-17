# 发布说明

日常写作、开发、发布和故障恢复已经集中到以下文档：

- [项目首页与快速开始](README.md)
- [网站管理手册](docs/网站管理.md)
- [文章模板](docs/文章模板.md)

## 发布原理

推送到 GitHub 仓库的 `main` 分支后，`.github/workflows/` 中的工作流会执行：

1. 使用 Node.js 22 安装依赖。
2. 执行 `npm run build`。
3. 上传 `dist/`。
4. 发布到 GitHub Pages。

线上地址：<https://arteaaaa.github.io/ARTEAAA.github.io/>

`astro.config.mjs` 中的 `site` 和 `base` 决定线上域名与子路径。除非仓库名或域名发生变化，否则不要修改它们。
