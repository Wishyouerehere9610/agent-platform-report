# Agent 控制界面与工具路径分析

更新时间：2026-08-26

## 结论概览

三款办公 Agent 的控制路径存在明显差异。WorkBuddy 使用独立 Chromium 自动化工具，千问办公通过 Edge 扩展控制浏览器，豆包工作把浏览器与桌面操作放在需要桌面录制授权的执行环境中。统一最小实测得到两个 Browser Use 成功闭环，Computer Use 没有完整保存成功，In-app Browser 没有完成页面标题读取。

| 产品组合 | Browser Use | Computer Use | In-app Browser |
|---|---:|---:|---:|
| 飞书 + 豆包工作 | BLOCKED | BLOCKED | PARTIAL |
| 企业微信 + WorkBuddy | PASS | UNAVAILABLE | UNAVAILABLE |
| 钉钉 + 千问办公 | PASS | PARTIAL | UNAVAILABLE |

状态只描述本机当前版本的一次最小测试。官方说明、产品入口、Agent 自述和可复核产物分别保留。

## 统一测试口径

| 能力 | 最小动作 | 成功证据 |
|---|---|---|
| Browser Use | 打开本机页面，输入测试码，选择产品，勾选本地验证，点击执行 | 页面显示完整 `BROWSER_TEST_PASS` |
| Computer Use | 通过可见记事本输入指定文本并另存为 | `computer-use.txt` 存在且内容完全匹配 |
| In-app Browser | 在 Agent 客户端内部打开本机页面 | 客户端内读取标题 `Agent Control Surface Test` |

WebSearch、WebFetch、`general_search`、CLI、HTTP、脚本和文件 API 均不计入三项结果。

## 实现方式差异

### Browser Use

- 豆包工作：本轮 Agent 任务在桌面录制授权门槛处停止，没有产生浏览器页面交互。当前结果为环境阻塞。
- WorkBuddy：使用 `agent-browser 0.27.0` 驱动独立 Chromium。表单输入、原生下拉选择、复选框与按钮点击均完成，结果为 `PASS`。
- 千问办公：使用内置浏览器 MCP 与 Edge 扩展 1.5.5。页面导航、表单操作和状态读取均完成，结果为 `PASS`。

WorkBuddy 与千问办公都完成了真实网页交互，承载方式不同。前者直接管理一套浏览器运行时，后者借助外部 Edge 扩展接管现有浏览器。

### Computer Use

- 豆包工作：电脑控制环境依赖桌面录制初始化。本轮停在授权提示，记事本操作没有开始，结果为 `BLOCKED`。
- WorkBuddy：本次 Agent 工具面没有 Windows 原生桌面控制入口，结果为 `UNAVAILABLE`。
- 千问办公：独立 Computer Use 连接器完成了记事本启动、界面识别和文本输入。另存为阶段多次发生焦点漂移，目标文件未生成，结果为 `PARTIAL`。

千问办公展示了最完整的桌面动作链，也暴露了多窗口焦点管理问题。桌面控制的商业可用性取决于最终状态校验；文本成功进入编辑器仍不足以证明文件交付成功。

### In-app Browser

- 豆包工作：客户端右侧内嵌浏览器入口已在可见界面确认，具备标签页、地址栏、导航和刷新控件。本轮未完成测试页标题读取，结果为 `PARTIAL`。
- WorkBuddy：发现 WebView 分区不等于 Agent 拥有可操作的通用内嵌浏览器。当前工具面没有完成客户端内页面验证，结果为 `UNAVAILABLE`。
- 千问办公：浏览器自动化通过外部 Edge 扩展完成；“我的网页”未提供本测试要求的任意 URL 导航闭环，结果为 `UNAVAILABLE`。

## 产品侧重点

| 维度 | 飞书 + 豆包工作 | 企业微信 + WorkBuddy | 钉钉 + 千问办公 |
|---|---|---|---|
| 浏览器承载 | 与桌面执行环境和权限门槛耦合 | 独立 Chromium 自动化 | 外部 Edge 扩展 |
| 桌面承载 | 录制权限驱动的电脑环境 | 当前 Agent 工具面未暴露 | 独立 Computer Use 连接器 |
| 客户端内浏览器 | 可见入口已确认 | 未确认可控通用入口 | 未发现合格入口 |
| 本轮主要阻塞 | 桌面录制授权 | 能力入口缺失 | 多窗口焦点漂移 |

## 商业价值判断

1. Browser Use 已具备较低门槛的网页表单自动化价值。浏览器扩展适合复用现有登录态，独立浏览器运行时更利于隔离和复现。
2. Computer Use 的价值集中在无 API 的遗留系统、桌面客户端和跨应用流程。稳定保存、焦点管理、权限审计与失败恢复直接决定可交付性。
3. In-app Browser 有助于把浏览过程、授权和任务上下文留在 Agent 工作台。当前实测仍缺少页面读取闭环，商业判断应保持保守。
4. 权限门槛需要进入产品指标体系。初始化成功率、人工确认次数、授权后的恢复能力和会话延续都影响规模化成本。
5. 企业部署可采用连接器优先、Browser Use 补充、Computer Use 兜底的路由。此路径能降低资源消耗，也便于审计高风险动作。

## 证据边界

- WorkBuddy 的 `BROWSER_TEST_PASS`、截图和命令日志属于 Agent 自主执行证据。
- 千问办公的 `BROWSER_TEST_PASS`、记事本文本识别和另存为失败记录属于 Agent 自主执行证据。
- 豆包工作的内嵌浏览器控件属于人工可见入口确认；页面标题尚未由 Agent 读取。
- 豆包工作与千问办公出现的桌面录制提示属于环境与授权状态，不用于推断其他机器或未来版本。
- 三款产品均为单次运行，本结果不代表长期稳定率。

## 证据索引

- `outputs/control-surface-tests/evaluator-summary.md`：统一状态与判定依据
- `outputs/control-surface-tests/workbuddy/result.md`：WorkBuddy 原始执行记录
- `outputs/control-surface-tests/workbuddy/browser-use-evidence.png`：WorkBuddy 页面结果截图
- `outputs/control-surface-tests/qwen/result.md`：千问办公原始执行记录
- `outputs/control-surface-tests/*/evaluator-normalized.md`：产品级统一判定
- `benchmark/control-surface-test/test-protocol.md`：最小测试协议
- `OBS-DB-001`、`OBS-DB-002`、`OBS-WB-001`、`OBS-QW-001`：产品入口与连接状态观察
- `OFF-DB-001`、`OFF-WB-001`、`OFF-QW-001`：公开产品说明
