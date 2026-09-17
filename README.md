# AR 的博客

这是一个基于 [Astro](https://astro.build/) 的静态个人博客，源码位于 WSL：

```text
/home/ar/Personal Blogs/my-blog
```

线上地址：<https://arteaaaa.github.io/ARTEAAA.github.io/>

## 最常用的工作流

进入项目：

```bash
cd "/home/ar/Personal Blogs/my-blog"
```

启动本地预览：

```bash
npm run dev -- --host 0.0.0.0 --background
```

浏览器打开：<http://localhost:4321/ARTEAAA.github.io/>

完成修改后检查并发布：

```bash
npm run check
npm run build
git status
git add .
git commit -m "写清楚这次修改了什么"
git push origin main
```

推送到 `main` 后，GitHub Actions 会自动构建并发布。通常等待一两分钟即可看到更新。

## 写文章

文章都在 `src/content/blog/`。复制 [文章模板](docs/文章模板.md)，新建一个 `.md` 文件即可。

推荐使用稳定、简短的英文文件名，例如：

```text
src/content/blog/my-world-setting.md
```

文件名会成为文章网址的一部分。文章发布后尽量不要改文件名，否则旧链接会失效。中文文件名可以使用，只是分享后的网址会比较长。

文章开头的字段说明：

| 字段          | 是否必填 | 用途                             |
| ------------- | -------- | -------------------------------- |
| `title`       | 是       | 页面和文章列表中的标题           |
| `description` | 是       | 摘要、搜索和分享卡片描述         |
| `pubDate`     | 是       | 发布时间，推荐带中国时区         |
| `category`    | 否       | 文章分类，未填写时显示“示例文章” |
| `updatedDate` | 否       | 最近修改时间                     |
| `draft`       | 否       | `true` 表示草稿，不会发布到线上  |
| `cover`       | 否       | `public/` 目录中的封面图片路径   |
| `heroImage`   | 否       | `src/assets/` 中的相对图片路径   |

示例：

```markdown
---
title: "文章标题"
description: "用一两句话说明这篇文章讲什么。"
pubDate: "2026-09-17T20:00:00+08:00"
category: "创作设定"
draft: true
cover: "images/example.jpg"
---

## 第一节

从这里开始写正文。
```

草稿在本地预览时可见，但执行生产构建和发布时会自动排除。准备发布时，把 `draft: true` 改成 `draft: false` 或删除这一行。

## 管理图片

普通文章图片建议放在：

```text
public/images/
```

例如文件 `public/images/scene.jpg`，可以作为封面：

```yaml
cover: "images/scene.jpg"
```

在正文中使用：

```markdown
![图片说明](/ARTEAAA.github.io/images/scene.jpg)
```

文件名建议使用小写英文、数字和连字符。上传前适当压缩图片；普通配图通常控制在 300 KB 到 1 MB 即可。

## 项目结构

```text
src/
├── components/       导航、页脚、文章列表等可复用组件
├── content/blog/     所有文章
├── layouts/          文章详情页布局
├── lib/posts.ts      文章排序与草稿过滤
├── pages/            首页、文章、归档、关于页和 RSS
└── styles/global.css 全站样式
public/               原样发布的图片和图标
.github/workflows/    GitHub Pages 自动发布配置
astro.config.mjs      域名、子路径、插件和字体配置
src/consts.ts         网站标题和简介
```

不要手动修改这些生成目录：

- `dist/`：生产构建结果，每次构建都会覆盖。
- `.astro/`：Astro 缓存和类型文件。
- `node_modules/`：安装的依赖。

## 常用命令

| 命令                                         | 作用                          |
| -------------------------------------------- | ----------------------------- |
| `npm ci`                                     | 按锁文件重新安装依赖          |
| `npm run dev -- --host 0.0.0.0 --background` | 后台启动本地开发服务器        |
| `npm run astro -- dev status`                | 查看开发服务器状态            |
| `npm run astro -- dev logs`                  | 查看开发服务器日志            |
| `npm run astro -- dev stop`                  | 停止开发服务器                |
| `npm run check`                              | 检查 Astro 和 TypeScript 错误 |
| `npm run build`                              | 构建生产版本到 `dist/`        |
| `npm run preview`                            | 预览已经构建的生产版本        |
| `npm run format`                             | 自动整理项目文件格式          |
| `npm run format:check`                       | 只检查格式，不修改文件        |

## 修改网站

- 改网站名称和简介：`src/consts.ts`
- 改首页内容：`src/pages/index.astro`
- 改关于页面：`src/pages/about.astro`
- 改导航：`src/components/Header.astro`
- 改页脚：`src/components/Footer.astro`
- 改文章页面：`src/layouts/BlogPost.astro`
- 改颜色、字号和响应式布局：`src/styles/global.css`
- 改域名或仓库子路径：`astro.config.mjs`

修改组件或样式前，先启动本地预览。桌面和手机宽度都检查一次，再运行 `npm run check` 与 `npm run build`。

## 文章现状

当前 `src/content/blog/` 中包含：

- `世界观.md`：你发布的创作内容，线上显示。
- `a-small-blog.md`：建站时附带的中文示例，已设为草稿。
- `using-mdx.mdx`：Astro 模板附带的 MDX 示例，已设为草稿。

后两篇仍会在本地开发环境中显示，方便参考，但不会进入线上页面和 RSS。确定不需要时再删除文件并提交。

更完整的维护、恢复和发布故障处理见 [网站管理手册](docs/网站管理.md)。
