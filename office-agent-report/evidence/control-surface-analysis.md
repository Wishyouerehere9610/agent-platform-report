# Agent 控制界面与工具路径分析

更新时间：2026-08-26

## 分析范围

本文比较飞书 + 豆包工作、企业微信 + WorkBuddy、钉钉 + 千问办公在三类能力上的实现方式和实际工具路径：Computer Use、Browser Use、In-app Browser。

结论同时区分产品公开能力、本机可见状态和本次任务实际执行。搜索接口、命令行脚本和办公连接器单独记录，不计入桌面 GUI 点击完成率。

## 三类能力口径

| 能力 | 本报告定义 | 计入实测的最低条件 |
|---|---|---|
| Computer Use | 根据屏幕状态操作桌面应用，包含点击、键入、滚动、拖拽和跨应用流程 | 至少完成一次屏幕识别、输入动作和结果校验 |
| Browser Use | 控制浏览器页面，包含导航、点击、输入、表单、下载和网页状态读取 | 至少完成一次真实网页交互；WebSearch、WebFetch 和 general_search 单独统计 |
| In-app Browser | 由 Agent 客户端托管或嵌入的浏览器运行环境 | 需要确认页面在客户端内运行，并验证登录态、下载、弹窗和会话复用 |

## 产品对比

| 维度 | 飞书 + 豆包工作 | 企业微信 + WorkBuddy | 钉钉 + 千问办公 |
|---|---|---|---|
| Agent 编排 | Auto 高，多 Agent 拆解；MainAgent 与子 Agent 存在环境边界 | Auto，支持项目空间、多 Agent 和工具复用 | 本次使用基础模式，任务由单 Agent 手动编排 |
| Browser Use 载体 | `general_search` 已实测；GUI 浏览器依赖电脑环境初始化 | 产品内连接测试记录为 `agent-browser 0.27.0 + Chrome 152` | 浏览器连接器记录为 Edge 扩展 1.5.5 |
| Computer Use 载体 | `computer_env_init` 启动 Agent 沙箱中的电脑控制环境 | 独立电脑控制能力可见，本次主要使用 Python 和 Bash | 独立 Computer Use 0.1.5；官方披露屏幕感知、后台执行和跨应用控制 |
| In-app Browser | 有产品内工作台和浏览器入口迹象，托管会话未完成独立验证 | `agent-browser` 可能是托管浏览器运行时，当前证据不足以确认用户可见的内嵌页面和登录态复用 | 当前证据指向外部 Edge 扩展；本次 OAuth 页面由默认浏览器打开，未发现独立内嵌浏览器证据 |
| 办公应用动作 | MainAgent 使用 `lark-cli` 调用飞书消息、待办、日历和云盘 | 使用 `lark-cli`、`wecom-cli`、`dws` 探测不同办公生态 | 使用 DWS MCP/连接器发起钉钉授权和动作 |
| 本次 Browser GUI 覆盖 | 0；电脑环境初始化失败 | 0；实际研究使用 WebSearch | 0；实际研究使用 WebSearch 和 WebFetch |
| 本次 Computer Use 覆盖 | 初始化调用 2 次，均失败 | 未完成视觉桌面操作；日志中的“电脑操作”主要为脚本和命令行 | 仅用 `cmd start` 打开 OAuth 页面，未形成完整的屏幕识别与点击链路 |

## 飞书 + 豆包工作

豆包工作的执行方式体现出明显的多 Agent 沙箱结构。研究阶段通过 `general_search` 获取网页信息，文件交付通过 Python 和文件工具生成。通信阶段原计划由 OrganizeAgent 启动 GUI，`computer_env_init` 连续失败；该子环境也没有可用的 `lark-cli`。任务随后切换到 MainAgent，使用已经登录的 `lark-cli` 完成飞书四项动作。

这种结构强化了 Agent 隔离，也带来工具、权限和认证上下文无法自然跨 Agent 继承的问题。当前证据可以确认搜索工具、文件工具和飞书 CLI；浏览器 GUI、桌面点击与 In-app Browser 会话仍缺少成功实测。

## 企业微信 + WorkBuddy

WorkBuddy 的工具接入面最宽。产品内连接测试记录显示 `agent-browser 0.27.0`、Chrome 152 和电脑控制可用，官方资料同时强调本地文件、脚本、多 Agent 与 MCP 安全校验。

本次任务采用 WebSearch、Python、Bash 和办公 CLI 完成主要工作。日志中的“电脑操作”包含 Python 读取 Excel、生成 XLSX/PPTX 和 Bash 执行命令，这些动作属于脚本自动化，无法替代视觉 Computer Use 的准确率验证。

企业微信链路还暴露了工具语义差异：`wecom-cli` 进入企业机器人创建流程，无法覆盖个人待办、日历和云盘。本次最终成功的飞书动作只能证明跨工具调用能力，不能计为企业微信原生连通性，也不能计为桌面 GUI 能力。

## 钉钉 + 千问办公

千问办公对控制界面的划分最清楚：Edge 扩展承担 Browser Use，Computer Use 0.1.5 承担桌面控制。官方文档进一步披露屏幕感知、鼠标键盘、后台执行、跨应用、操作前后截图校验，以及“每次询问、自动执行、禁用”三种确认策略。

本次测试运行在基础模式。行业研究使用 WebSearch 和 WebFetch，文件交付仍由 Python 完成；Computer Use 只通过 `cmd start` 两次打开钉钉 OAuth 页面。DWS 连接器因授权未完成，没有执行钉钉四项动作。因此，当前可以确认产品入口和官方控制机制，完整浏览器交互与桌面长流程仍待统一任务验证。

## 主要结论

1. 三家都倾向于优先调用搜索、文件和连接器工具，只有缺少结构化接口时才需要 GUI 控制。
2. 豆包工作的关键差异是多 Agent 沙箱及其环境继承问题；WorkBuddy 的关键差异是开放工具组合；千问办公的关键差异是浏览器与桌面控制明确分离。
3. 搜索和网页抓取成功不能直接证明浏览器点击能力，Python/Bash 成功也不能直接证明 Computer Use 能力。
4. In-app Browser 需要单独验证客户端内运行、登录态复用、下载、弹窗和文件回传。当前三家均缺少完整实测闭环。
5. 本次商业化任务主要测到了工具选择、任务编排、文件生成和办公连接器，视觉 Computer Use 与 Browser Use 的产品排序仍缺少同题实测依据。

## 后续统一测试建议

- Browser Use：登录同一测试站点，完成搜索、筛选、表单填写、文件下载和错误恢复。
- Computer Use：在同一桌面应用中读取内容、跨应用复制、保存文件，并校验最终状态。
- In-app Browser：验证登录态是否保留、下载文件是否可回传、弹窗与新标签页是否可控、任务重启后会话是否延续。
- 统一限制：禁止 WebSearch、WebFetch、general_search、CLI 和业务 API，单独测视觉控制；再开放全部工具，测实际生产效率。

## 证据索引

- `OBS-DB-001`：豆包工作桌面环境与初始化状态
- `OBS-WB-001`：WorkBuddy 的 agent-browser、Chrome 与电脑控制连接记录
- `OBS-QW-001`：千问办公 Edge 扩展与 Computer Use 连接记录
- `OFF-DB-001`、`OFF-DB-002`：豆包工作多 Agent、本地电脑与安全机制
- `OFF-WB-001`、`OFF-WB-003`：WorkBuddy 工具、文件和 MCP 安全机制
- `OFF-QW-001`、`OFF-QW-004`：千问办公浏览器自动化与 Computer Use 官方说明
- `outputs/*/00-run-log.md`：三次实际任务中的工具调用与错误记录
