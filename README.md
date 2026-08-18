# Astro 个人简历

- 这是传统个人简历站点的 Astro 静态版本。页面内容全部来自 `src/config/`，修改简历时无需编辑 `src/pages/index.astro`。
- node版本: 22.22.1
- 默认禁止搜索引擎机器人抓取站点

## 运行

```bash
npm install
npm run dev
```

开发地址默认为 `http://localhost:4321`。

## 构建

```bash
npm run build
```

静态文件生成在 `dist/`，可以部署到 GitHub Pages、Cloudflare Pages、Vercel 或 Nginx。

## 配置文件

- `src/config/overall.ts`：姓名、缩写、头像 URL、个人简介、所在地、工作语言、邮箱、页尾与结尾模块文案。
- `src/config/skill.ts`：技能标题、介绍和技术名称列表。
- `src/config/work_exp.ts`：任职时间、公司、职位、介绍和具体工作内容。
- `src/config/project_exp.ts`：项目名称、介绍、个人职责和关键技术。
- `src/config/education_exp.ts`：时间、机构、专业和地理位置。
- `src/config/extra.ts`：通用附加模块，每项只需要 `title` 和 `content`。
- `src/config/types.ts`：以上配置的数据类型，通常不需要修改。

数组类型的配置可以自由增加、删除或调整顺序。`extra.content` 同时支持单个字符串和字符串数组。

## 头像

在 `overall.ts` 中修改 `avatarUrl`。图片建议为正方形，并使用可公开访问的 HTTPS 地址。图片加载失败时，页面会自动显示 `monogram` 配置的姓名缩写。
