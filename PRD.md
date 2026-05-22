# 南光社区治理平台 - 产品需求文档(PRD)

## 文档信息

| 项目名称 | 南光社区治理平台 |
|---------|---------------|
| 文档版本 | V1.0 |
| 创建日期 | 2026-05-21 |
| 文档类型 | 产品需求文档 |

---

## 1. 项目概述

### 1.1 项目背景
南光社区治理平台是一个综合性的智慧社区管理系统，旨在通过信息化手段提升社区治理效率，整合社区管理、长者服务、报警中心、物联网设备管理等核心业务，为社区管理者提供统一的工作平台。

### 1.2 项目目标
- 实现社区全方位数字化管理
- 提升长者服务质量和健康监测水平
- 建立完善的报警处理和联动机制
- 统一管理各类物联网设备
- 提供数据可视化和决策支持

### 1.3 目标用户
- 社区管理人员
- 网格员
- 社区服务人员
- 系统管理员

---

## 2. 技术架构

### 2.1 技术栈
| 技术 | 版本/说明 |
|------|---------|
| 前端框架 | React 18 |
| 构建工具 | Vite |
| 编程语言 | TypeScript |
| UI框架 | Tailwind CSS |
| 图标库 | Lucide React |
| 图表库 | Recharts |
| 路由 | React Router DOM v6 |
| CSS工具 | clsx, tailwind-merge |

### 2.2 项目结构
```
南光社区治理平台/
├── public/
│   └── background.png
├── src/
│   ├── components/
│   │   └── Layout.tsx          # 整体布局组件
│   ├── pages/
│   │   ├── Dashboard.tsx       # 工作台
│   │   ├── Login.tsx           # 登录页
│   │   ├── ...                 # 其他业务页面
│   ├── App.tsx                 # 应用入口和路由配置
│   ├── main.tsx                # React挂载点
│   └── index.css               # 全局样式
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 3. 功能模块

### 3.1 整体布局 [1]
**文件位置**：[Layout.tsx](file:///d:/Trae_Pro/南光治理平台/src/components/Layout.tsx)

#### 功能描述 [1]
提供统一的页面布局，包含：
- 顶部导航栏（蓝色渐变设计）
- 左侧侧边栏（根据顶部导航动态切换菜单）
- 主内容区域

#### 顶部导航菜单 [2]
| 菜单项 | 路径 | 说明 |
|-------|------|------|
| 工作台 | /dashboard | 综合数据看板 |
| 社区管理 | /community/merchants | 社区基础管理 |
| 长者服务 | /elder/profile | 长者相关服务 |
| 报警中心 | /alarm/broad | 报警管理模块 |
| 物联中心 | /iot | 物联网设备管理 |
| 三维南光 | /3d | 3D可视化（待开发） |

---

### 3.2 工作台
**文件位置**：[Dashboard.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/Dashboard.tsx)

#### 功能描述
综合数据看板，展示社区整体运营情况。

#### 页面结构
采用三栏布局：

**左侧栏 - 社区信息一览** [4]
- 社区地图
- 人口统计：
  - 总人口：43,928人
  - 户籍人口：17,524人
  - 非户籍人口：26,404人
- 年龄结构饼图（5个年龄段）
- 法人单位：2,304家
- 三小场所：198间
- 关联业务专题

**中间栏 - 社区感知 & 长者服务**

**社区感知模块** [5]
- 报警统计卡片：
  - 红色报警：10条
  - 橙色报警：8,640条
  - 黄色报警：10,514条
  - 蓝色报警：240,642条
- 环境监测数据：
  - 平均温度：21.23℃
  - 平均湿度：66.34%
  - 喷淋平均水压：0.90 MPA
  - 平均雨量：-
  - 平均风速：1.38 m/s
  - 消防栓平均水压：0.37 MPA

**长者服务模块** [6]
- 长者用电量/用水量监测（暂无数据）
- 长者健康数据表格：长者姓名、血压、心率、计步

**右侧栏 - 待处理报警 & 通知消息**
- 待处理报警列表（报警类型、位置、时间、编号、操作）
- 通知消息列表

#### 交互功能
- 报警详情弹窗
- 报警处理弹窗（处理结果、处理说明、附件上传）

---

### 3.3 社区管理模块

#### 商户管理
**路径**: /community/merchants

#### 小区管理
**路径**: /community/community

#### 房屋管理
**路径**: /community/house

#### 住户管理
**路径**: /community/resident

#### 企业管理
**路径**: /community/enterprise

#### 网格管理
**路径**: /community/grid

#### 组织权限子模块
- 通讯录
- 角色管理
- 人员类型
- 组织信息

#### 系统管理子模块
- 消息模板
- 消息记录
- 登录日志
- 操作日志

---

### 3.4 长者服务模块

#### 长者档案 [7]
**文件位置**：[ElderProfile.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/ElderProfile.tsx)

**功能描述** [7]：
- 长者档案列表展示
- 搜索功能（姓名、身份证号）
- 分页功能
- 点击"详情"弹出全屏详情页面

**详情页面功能** [7]：
- 顶部导航栏（返回、标题、面包屑、下载档案）
- 左侧导航菜单（时间线样式）：
  - 基本信息
  - 社区信息
  - 关联设备
  - 健康体检数据
  - 其他信息
- 右侧内容区域，根据左侧导航切换内容
- 三列信息卡片布局展示

#### 长者健康数据子模块
- 智能手环
- 健康一体机
- 十二导

---

### 3.5 报警中心模块

#### 报警看板
**路径**：/alarm/broad

#### 报警记录 [8]
**文件位置**：[AlarmRecord.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/AlarmRecord.tsx)

**功能描述** [8]：
- 报警记录列表展示
- 搜索功能（报警单号、设备名称、报警状态、报警类型、报警时间）
- 表格字段：序号、报警单号、设备名称、报警类型、报警时间、处理人、处理结果、处理时间、操作
- 分页功能

**交互功能** [8]：
- 点击"处理"弹出处理弹窗：
  - 处理结果（无需处理/已处理）
  - 处理说明
  - 附件上传
- 点击"详情"弹出详情弹窗：
  - 显示完整报警信息和处理信息

#### 报警类型配置 [9]
**文件位置**：[AlarmTypeConfig.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/AlarmTypeConfig.tsx)

**功能描述** [9]：
- 报警类型列表展示
- 搜索功能（报警类型、状态）
- 新增按钮弹出新增弹窗
- 编辑按钮弹出编辑弹窗
- 删除按钮弹出删除确认弹窗

**新增/编辑弹窗功能** [9]：
- 类型名称
- 关联物联产品
- 关联监控事件
- 报警级别
- 状态开关
- 是否发送通知开关
- 是否推送区物联平台开关
- 是否推送社区开关
- 是否网格员处理开关
- 报警处理人

#### 报警级别配置 [10]
**文件位置**：[AlarmLevelConfig.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/AlarmLevelConfig.tsx)

**功能描述** [10]：
- 报警级别列表展示（红色报警、橙色报警、黄色报警、蓝色报警）
- 编辑功能
- 编辑弹窗包含：
  - 报警处理时限
  - 报警负责人
  - 备注

#### 报警联动摄像头配置 [11]
**文件位置**：[AlarmCameraConfig.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/AlarmCameraConfig.tsx)

**功能描述** [11]：
- 报警联动摄像头配置列表
- 搜索功能（设备名称、状态）
- 新增功能
- 编辑功能
- 删除功能

**新增弹窗功能** [11]：
- 设备搜索区域
- 设备选择表格

#### 报警推送记录
**路径**: /alarm/push-record

---

### 3.6 物联中心模块

#### 物联看板
**路径**：/iot/broad

#### 物联网设备管理 [12]
所有设备管理模块均采用统一的"配置 + 数据"双页面结构：

##### 智能井盖管理 [12]
- 智能井盖配置：[IotManholeConfig.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotManholeConfig.tsx)
- 智能井盖数据管理：[IotManholeData.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotManholeData.tsx)

##### 智能灯杆管理
- 智能灯杆配置：[IotLightpoleConfig.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotLightpoleConfig.tsx)
- 智能灯杆数据管理：[IotLightpoleData.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotLightpoleData.tsx)

**配置页面功能**:
- 设备列表展示
- 搜索功能
- 新增按钮
- 产品配置按钮（弹出产品配置弹窗）
- 同步设备状态按钮
- 操作：详情、编辑、删除

**产品配置弹窗**:
- 配置内容文本域
- 取消、保存按钮

##### 摄像头管理
- 摄像头配置：[IotCameraConfig.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotCameraConfig.tsx)
- 摄像头数据管理：[IotCameraData.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotCameraData.tsx)

##### AI算法盒子管理
- AI算法盒子配置：[IotAiboxConfig.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotAiboxConfig.tsx)
- AI算法盒子数据管理：[IotAiboxData.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotAiboxData.tsx)

##### 智能用电管理
- 智能用电配置：[IotElectricConfig.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotElectricConfig.tsx)
- 智能用电数据管理：[IotElectricData.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotElectricData.tsx)

##### 智能用水管理
- 智能用水配置：[IotWaterConfig.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotWaterConfig.tsx)
- 智能用水数据管理：[IotWaterData.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotWaterData.tsx)

##### 智能手环管理
- 智能手环配置：[IotWatchConfig.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotWatchConfig.tsx)
- 智能手环数据管理：[IotWatchData.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotWatchData.tsx)

##### 健康一体机管理
- 健康一体机配置：[IotHealthConfig.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotHealthConfig.tsx)
- 健康一体机数据管理：[IotHealthData.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotHealthData.tsx)

##### 消防栓管理
- 消防栓配置：[IotFirehydrantConfig.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotFirehydrantConfig.tsx)
- 消防栓数据管理：[IotFirehydrantData.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotFirehydrantData.tsx)

##### 烟感管理
- 烟感配置：[IotSmokeConfig.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotSmokeConfig.tsx)
- 烟感数据管理：[IotSmokeData.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotSmokeData.tsx)

##### 喷淋管理
- 喷淋配置：[IotSprayConfig.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotSprayConfig.tsx)
- 喷淋数据管理：[IotSprayData.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotSprayData.tsx)

##### 消防门管理
- 消防门配置：[IotFiredoorConfig.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotFiredoorConfig.tsx)
- 消防门数据管理：[IotFiredoorData.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotFiredoorData.tsx)

##### 执法仪管理
- 执法仪配置：[IotPoliceConfig.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotPoliceConfig.tsx)
- 执法仪数据管理：[IotPoliceData.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotPoliceData.tsx)

##### 电子标签管理
- 电子标签配置：[IotTagConfig.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotTagConfig.tsx)
- 电子标签数据管理：[IotTagData.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotTagData.tsx)

##### 十二导管理
- 十二导配置：[IotTwelveleadConfig.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotTwelveleadConfig.tsx)
- 十二导数据管理：[IotTwelveleadData.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotTwelveleadData.tsx)

##### 家庭守护机器人管理
- 家庭守护机器人配置：[IotRobotConfig.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotRobotConfig.tsx)
- 家庭守护机器人数据管理：[IotRobotData.tsx](file:///d:/Trae_Pro/南光治理平台/src/pages/IotRobotData.tsx)

---

## 4. UI设计规范

### 4.1 设计风格
- **整体风格**：简洁、专业、现代化
- **主题色**：蓝色（#3B82F6、#60A5FA等）
- **辅助色**：绿色（成功/在线）、红色（警告/断开）、黄色（提示）、橙色（警告）
- **背景色**：白色卡片、浅灰（#F3F4F6）背景

### 4.2 组件规范

#### 按钮样式
- 主按钮：蓝色背景、白色文字、hover稍深
- 次按钮：白色背景、灰色边框、灰色文字
- 小按钮：尺寸更小，用于表格操作

#### 表格样式 [13]
- 表头：灰色背景（#F9FAFB）
- 表体：白色背景、hover高亮（浅灰）
- 边框：浅灰色分割线

#### 卡片样式
- 圆角：8px或12px
- 阴影：轻微阴影（shadow-sm）

#### 弹窗样式 [14]
- 遮罩层：黑色半透明（bg-opacity-50）
- 弹窗容器：白色背景、圆角、阴影
- 顶部：标题、关闭按钮（右上角）
- 底部：操作按钮（右对齐）

### 4.3 图标规范
使用Lucide React图标库，图标颜色统一为灰色或主题蓝色。

---

## 5. 数据流设计

### 5.1 报警流程 [15]
1. 物联网设备触发报警
2. 系统接收并记录报警信息
3. 报警在工作台待处理列表展示
4. 网格员查看详情或直接处理
5. 填写处理结果、说明，可上传附件
6. 保存处理记录

### 5.2 设备管理流程 [16]
1. 配置设备基本信息
2. 同步设备状态
3. 查看设备数据（传感器读数等）
4. 编辑/删除设备配置

---

## 6. 后续规划

### 6.1 待完善功能
- 三维南光模块（3D可视化）
- 部分页面的数据对接（目前为模拟数据）
- 用户权限细化控制
- 消息推送功能

### 6.2 优化方向
- 性能优化（大数据量表格分页）
- 移动端适配
- 多语言支持
- 主题切换

---

## 7. 附录

### 7.1 页面清单
| 页面名称 | 文件位置 | 状态 |
|---------|---------|------|
| 登录页 | Login.tsx | ✅ 已实现 |
| 工作台 | Dashboard.tsx | ✅ 已实现 |
| 商户管理 | Merchants.tsx | ✅ 已实现 |
| 社区管理 | CommunityManagement.tsx | ✅ 已实现 |
| 房屋管理 | HouseManagement.tsx | ✅ 已实现 |
| 住户管理 | ResidentManagement.tsx | ✅ 已实现 |
| 企业管理 | EnterpriseManagement.tsx | ✅ 已实现 |
| 网格管理 | GridManagement.tsx | ✅ 已实现 |
| 长者档案 | ElderProfile.tsx | ✅ 已实现 |
| 智能手环 | SmartWatch.tsx | ✅ 已实现 |
| 健康一体机 | HealthMachine.tsx | ✅ 已实现 |
| 十二导 | TwelveLead.tsx | ✅ 已实现 |
| 报警看板 | AlarmBroad.tsx | ✅ 已实现 |
| 报警记录 | AlarmRecord.tsx | ✅ 已实现 |
| 报警类型配置 | AlarmTypeConfig.tsx | ✅ 已实现 |
| 报警级别配置 | AlarmLevelConfig.tsx | ✅ 已实现 |
| 报警联动摄像头配置 | AlarmCameraConfig.tsx | ✅ 已实现 |
| 报警推送记录 | AlarmPushRecord.tsx | ✅ 已实现 |
| 通讯录 | Contacts.tsx | ✅ 已实现 |
| 角色管理 | Roles.tsx | ✅ 已实现 |
| 人员类型 | PersonnelType.tsx | ✅ 已实现 |
| 组织信息 | Organization.tsx | ✅ 已实现 |
| 消息模板 | MessageTemplate.tsx | ✅ 已实现 |
| 消息记录 | MessageRecords.tsx | ✅ 已实现 |
| 登录日志 | LoginLogs.tsx | ✅ 已实现 |
| 操作日志 | OperationLogs.tsx | ✅ 已实现 |
| 物联看板 | IotBroad.tsx | ✅ 已实现 |
| 智能井盖配置 | IotManholeConfig.tsx | ✅ 已实现 |
| 智能井盖数据 | IotManholeData.tsx | ✅ 已实现 |
| 智能灯杆配置 | IotLightpoleConfig.tsx | ✅ 已实现 |
| 智能灯杆数据 | IotLightpoleData.tsx | ✅ 已实现 |
| 摄像头配置 | IotCameraConfig.tsx | ✅ 已实现 |
| 摄像头数据 | IotCameraData.tsx | ✅ 已实现 |
| AI算法盒子配置 | IotAiboxConfig.tsx | ✅ 已实现 |
| AI算法盒子数据 | IotAiboxData.tsx | ✅ 已实现 |
| 智能用电配置 | IotElectricConfig.tsx | ✅ 已实现 |
| 智能用电数据 | IotElectricData.tsx | ✅ 已实现 |
| 智能用水配置 | IotWaterConfig.tsx | ✅ 已实现 |
| 智能用水数据 | IotWaterData.tsx | ✅ 已实现 |
| 智能手环配置 | IotWatchConfig.tsx | ✅ 已实现 |
| 智能手环数据 | IotWatchData.tsx | ✅ 已实现 |
| 健康一体机配置 | IotHealthConfig.tsx | ✅ 已实现 |
| 健康一体机数据 | IotHealthData.tsx | ✅ 已实现 |
| 消防栓配置 | IotFirehydrantConfig.tsx | ✅ 已实现 |
| 消防栓数据 | IotFirehydrantData.tsx | ✅ 已实现 |
| 烟感配置 | IotSmokeConfig.tsx | ✅ 已实现 |
| 烟感数据 | IotSmokeData.tsx | ✅ 已实现 |
| 喷淋配置 | IotSprayConfig.tsx | ✅ 已实现 |
| 喷淋数据 | IotSprayData.tsx | ✅ 已实现 |
| 消防门配置 | IotFiredoorConfig.tsx | ✅ 已实现 |
| 消防门数据 | IotFiredoorData.tsx | ✅ 已实现 |
| 执法仪配置 | IotPoliceConfig.tsx | ✅ 已实现 |
| 执法仪数据 | IotPoliceData.tsx | ✅ 已实现 |
| 电子标签配置 | IotTagConfig.tsx | ✅ 已实现 |
| 电子标签数据 | IotTagData.tsx | ✅ 已实现 |
| 十二导配置 | IotTwelveleadConfig.tsx | ✅ 已实现 |
| 十二导数据 | IotTwelveleadData.tsx | ✅ 已实现 |
| 家庭守护机器人配置 | IotRobotConfig.tsx | ✅ 已实现 |
| 家庭守护机器人数据 | IotRobotData.tsx | ✅ 已实现 |
| 三维南光 | PlaceholderPage.tsx | ⏳ 待开发 |

---

**文档结束**
