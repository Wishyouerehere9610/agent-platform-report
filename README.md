# Agent Platform Report

本仓库保存一次办公 Agent 平台横向测评的完整研究材料，覆盖豆包工作、WorkBuddy 与千问办公三组产品，以及对应的通信应用连通性测试。

仓库当前为私有，用于沉淀可复核的数据、源文件、执行产物和展示层。HTML 报告可以持续迭代，原始评分输入与 Agent 产物保持独立。

## 目录

- `benchmark/`：统一命题、公司背景、财务假设、产品 Prompt 和评分规则。
- `outputs/`：三款 Agent 的表格、企业名单、PPT、来源记录与执行日志。
- `sessions/`：从本机提取并脱敏的任务级会话与运行证据。
- `office-agent-report/`：当前 HTML 行业报告、结构化数据、证据和控制界面分析。
- `scripts/`：报告与基准输入的生成脚本。
- `SOURCE_MANIFEST.csv`：原始工作区文件清单、校验值与上传状态。

## 查看报告

直接打开 `office-agent-report/index.html` 即可查看当前报告。后续优化展示层时，建议只修改 `office-agent-report/` 与 `scripts/`，不要覆盖 `benchmark/` 和 `outputs/` 中的原始测评材料。

Computer Use、Browser Use 与 In-app Browser 的跨产品分析见 `office-agent-report/evidence/control-surface-analysis.md`，对应的呈现层数据见 `office-agent-report/data/control-surfaces.json`。

三款产品的最小实测原始记录与统一判定见 `outputs/control-surface-tests/`。本轮只测试本机页面表单、可见记事本保存和客户端内页面标题读取。

## 数据说明

- 三组产物均保留原始文件格式，包括 XLSX、CSV、PPTX 和 Markdown。
- 文本日志中的账号姓名、平台 ID、OAuth 回调、令牌和本机用户路径已脱敏。
- 授权二维码、短期授权日志、Cookie、浏览器缓存和应用账号数据库没有上传。
- `sessions/` 保存的是本次命题相关的最小可复核记录，不代表应用的全部聊天历史。

## 当前状态

本仓库保存的是单次运行证据。通信应用中的成功、失败和授权阻塞均以对应 `05-communication-check.md` 为准，不外推长期稳定性。
