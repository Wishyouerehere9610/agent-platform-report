# Agent Platform Report

本仓库保存一次办公 Agent 产品组合横向研究，覆盖飞书 + 豆包工作、企业微信 + WorkBuddy、钉钉 + 千问办公，以及对应的任务交付、浏览器操控、电脑操控和通信连通性测试。

公开页面：[三款办公 Agent 产品组合](https://wishyouerehere9610.github.io/agent-platform-report/)

页面面向非技术业务读者。左侧目录分为产品商业覆盖、功能矩阵、任务交付测试、Computer / Browser Use、FDE 个人思考和参考资料六个栏目；只有包含能力横评和商业机会的 Computer / Browser Use 显示子导航。功能矩阵从完整数据中选出 17 项关键能力，用 `✅`、`❌` 和一句话说明直接呈现结论。任务交付测试区分 3 个业务交付物和 3 份轨迹观测资料，并比较资源消耗、交付质量和系统稳定性。操控能力页面使用三张产品主卡合并展示实现路线、优劣势、时间线、本次实测和评分，并补充两组评分条与 8 个子能力维度；完整明细继续保留在结构化数据中。

## 目录

- `benchmark/`：统一命题、公司背景、财务假设、产品 Prompt 和评分规则。
- `outputs/`：三款 Agent 的表格、企业名单、PPT、来源记录与执行日志。
- `sessions/`：从本机提取并脱敏的任务级会话与运行证据。
- `index.html`、`styles.css`、`app.js`：GitHub Pages 呈现层。
- `office-agent-report/`：结构化数据、简化结论、证据和控制界面分析。
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
