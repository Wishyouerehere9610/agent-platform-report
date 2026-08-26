# Agent Platform Report

本仓库保存一次办公 Agent 产品组合横向研究，覆盖飞书 + 豆包工作、企业微信 + WorkBuddy、钉钉 + 千问办公，以及对应的任务交付、浏览器操控、电脑操控和通信连通性测试。

公开页面：[三款办公 Agent 产品组合](https://wishyouerehere9610.github.io/agent-platform-report/)

页面面向非技术业务读者，先呈现结果，再按需展开功能矩阵、测评、行业覆盖、商业机会和来源。原始日志与 Agent 产物保持独立，便于复核。

## 目录

- `benchmark/`：统一命题、公司背景、财务假设、产品 Prompt 和评分规则。
- `outputs/`：三款 Agent 的表格、企业名单、PPT、来源记录与执行日志。
- `sessions/`：从本机提取并脱敏的任务级会话与运行证据。
- `index.html`、`styles.css`、`app.js`：GitHub Pages 呈现层。
- `office-agent-report/`：结构化数据、证据和控制界面分析。
- `scripts/`：报告与基准输入的生成脚本。
- `SOURCE_MANIFEST.csv`：原始工作区文件清单、校验值与上传状态。

## 查看报告

运行 `npm run build` 生成浏览器数据，再直接打开根目录 `index.html`。运行 `npm run check` 会完成构建与数据、页面契约测试。

Computer Use、Browser Use 与 In-app Browser 的跨产品分析见 `office-agent-report/evidence/control-surface-analysis.md`，对应的呈现层数据见 `office-agent-report/data/control-surfaces.json`。

三款产品的最小实测原始记录与统一判定见 `outputs/control-surface-tests/`。本轮只测试本机页面表单、可见记事本保存和客户端内页面标题读取。搜索、脚本、CLI 和文件 API 不计入 Browser Use 或 Computer Use。

## 数据说明

- 三组产物均保留原始文件格式，包括 XLSX、CSV、PPTX 和 Markdown。
- 文本日志中的账号姓名、平台 ID、OAuth 回调、令牌和本机用户路径已脱敏。
- 授权二维码、短期授权日志、Cookie、浏览器缓存和应用账号数据库没有上传。
- `sessions/` 保存的是本次命题相关的最小可复核记录，不代表应用的全部聊天历史。

## 证据边界

本仓库保存的是单次运行证据。通信应用中的成功、失败和授权阻塞均以对应 `05-communication-check.md` 为准，不外推长期稳定性。WorkBuddy 的飞书 4/4 只记录为替代通道结果，不计入企业微信成绩。
