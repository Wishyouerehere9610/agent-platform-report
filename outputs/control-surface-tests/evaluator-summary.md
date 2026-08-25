# 控制面最小实测汇总

更新时间：2026-08-26 01:45（Asia/Shanghai）

## 测试范围

本轮只验证三个最小动作：

1. Browser Use：在本机测试页填写表单，并读取完整的 `BROWSER_TEST_PASS`。
2. Computer Use：通过可见记事本输入指定文本，并保存为 `computer-use.txt`。
3. In-app Browser：在 Agent 客户端内打开本机测试页，并读取页面标题。

搜索、抓取、脚本、CLI、HTTP 请求、文件 API 和办公连接器不计入以上三项。

## 统一结果

| 产品组合 | Browser Use | Computer Use | In-app Browser |
|---|---:|---:|---:|
| 飞书 + 豆包工作 | BLOCKED | BLOCKED | PARTIAL |
| 企业微信 + WorkBuddy | PASS | UNAVAILABLE | UNAVAILABLE |
| 钉钉 + 千问办公 | PASS | PARTIAL | UNAVAILABLE |

## 判定依据

### 飞书 + 豆包工作

- Browser Use：任务进入执行阶段后停在桌面录制授权提示，未产生本机测试页交互结果，判定 `BLOCKED`。
- Computer Use：同一授权提示阻断电脑控制环境初始化，记事本输入与文件保存均未发生，判定 `BLOCKED`。
- In-app Browser：客户端右侧内嵌浏览器入口已在可见界面确认，包含标签页、地址栏、后退、前进、刷新和新窗口入口；本轮未完成测试页标题读取，判定 `PARTIAL`。
- 结果目录中没有 `result.md` 与 `computer-use.txt`。缺失本身只证明本轮未完成，不外推长期能力。

### 企业微信 + WorkBuddy

- Browser Use：使用 `agent-browser 0.27.0` 完成输入、选择、勾选、点击与结果读取，得到 `BROWSER_TEST_PASS:workbuddy:AGENT-CONTROL-20260826`，判定 `PASS`。
- Computer Use：本次 Agent 工具面没有可操作 Windows 原生桌面的入口，未创建 `computer-use.txt`，按统一口径判定 `UNAVAILABLE`。
- In-app Browser：本地分区目录只能证明客户端具备 WebView 组件，无法证明 Agent 可操作通用内嵌浏览器；本轮没有客户端内页面标题结果，判定 `UNAVAILABLE`。

### 钉钉 + 千问办公

- Browser Use：通过 Edge 扩展完成表单全流程，得到 `BROWSER_TEST_PASS:qwen:AGENT-CONTROL-20260826`，判定 `PASS`。
- Computer Use：Agent 成功启动记事本、识别界面并输入 `PASS:qwen:AGENT-CONTROL-20260826`，另存为阶段发生多次焦点漂移，最终没有生成 `computer-use.txt`，判定 `PARTIAL`。
- In-app Browser：客户端未发现可打开任意 URL 的通用内嵌浏览器入口；“我的网页”不满足本测试定义，判定 `UNAVAILABLE`。

## 证据边界

- `PASS` 只代表本机、当前版本、单次最小动作成功。
- `PARTIAL` 代表入口或部分动作已验证，关键闭环仍缺失。
- `BLOCKED` 代表入口存在，当前环境的初始化或授权门槛阻断执行。
- `UNAVAILABLE` 代表当前 Agent 工具面未发现符合定义的入口。
- Agent 自述与评估者判定分开保存。状态冲突时，以可复核产物和可见操作结果为准。

## 证据文件

- WorkBuddy 原始结果：`workbuddy/result.md`
- WorkBuddy 浏览器证据：`workbuddy/browser-use-evidence.png` 与 `workbuddy/ab_*.log`
- 千问办公原始结果：`qwen/result.md`
- 三款产品统一口径：各产品目录下的 `evaluator-normalized.md`
- 测试协议与本机页面：`benchmark/control-surface-test/`
