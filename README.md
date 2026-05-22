# 南光社区治理平台

此项目是基于原系统一比一还原的南光社区治理平台。

## 技术栈

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide Icons
- Recharts

## 快速开始

### 前置要求

需要安装 Node.js (推荐 v18 或更高版本)

### 安装依赖

```bash
npm install
```

### 开发模式运行

```bash
npm run dev
```

项目将在 http://localhost:3000 启动

### 构建生产版本

```bash
npm run build
```

## 项目结构

```
南光治理平台/
├── src/
│   ├── components/
│   │   └── Layout.tsx        # 主布局组件（侧边栏+顶部导航）
│   ├── pages/
│   │   ├── Login.tsx         # 登录页
│   │   ├── Dashboard.tsx     # 工作台/首页
│   │   ├── Merchants.tsx     # 商户管理
│   │   ├── ElderProfile.tsx  # 长者档案
│   │   ├── AlarmBroad.tsx    # 报警看板
│   │   └── PlaceholderPage.tsx
│   ├── App.tsx               # 路由配置
│   ├── main.tsx              # 入口文件
│   └── index.css             # 全局样式
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
└── postcss.config.js
```

## 功能模块

1. **工作台** - 社区信息一览、社区感知数据
2. **社区管理** - 商户管理
3. **长者服务** - 长者档案
4. **报警中心** - 报警看板、报警记录、类型配置、等级配置
5. **物联中心** - 设备管理
6. **三维南光** - 三维可视化

## 部署到 Netlify

### 方法一：通过 Netlify 网站部署

1. 将项目推送到 GitHub/GitLab 仓库
2. 访问 https://app.netlify.com/
3. 点击 "New site from Git"
4. 选择你的仓库
5. 配置构建设置：
   - Build command: `npm run build`
   - Publish directory: `dist`
6. 点击 "Deploy site"

### 方法二：通过 Netlify CLI 部署

1. 安装 Netlify CLI

```bash
npm install -g netlify-cli
```

2. 登录 Netlify

```bash
netlify login
```

3. 初始化项目

```bash
netlify init
```

4. 构建并部署

```bash
npm run build
netlify deploy --prod
```
