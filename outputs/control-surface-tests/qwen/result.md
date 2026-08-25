# 本地能力测试结果 — 千问办公 (QwenWork)

**测试日期：** 2026-08-26
**产品版本：** 千问办公 Windows 桌面端 (v1.0.0-26082211)
**模式：** 基础模式

---

## Test 1: Browser Use

| 字段 | 值 |
|---|---|
| **结果** | **PASS** |
| **入口** | 千问办公浏览器自动化扩展 (builtin_browser MCP server, Edge 扩展 v1.5.5) |
| **实际工具** | `mcp__builtin_browser__tabs_create_mcp` → `mcp__builtin_browser__navigate` → `mcp__builtin_browser__read_page` → `mcp__builtin_browser__form_input` (×3) → `mcp__builtin_browser__javascript_tool` (click) → `mcp__builtin_browser__read_page` (读取结果) |
| **操作步骤** | 1. 新建标签页 → 2. 导航到 http://127.0.0.1:18080/browser-test.html → 3. 读取页面元素 → 4. 填写测试代码 "AGENT-CONTROL-20260826" → 5. 选择下拉框 "钉钉 + 千问办公" → 6. 勾选 "本地验证" → 7. 点击 "执行验证" → 8. 读取结果 |
| **结果文本** | `BROWSER_TEST_PASS:qwen:AGENT-CONTROL-20260826` |
| **页面标题** | Agent Control Surface Test |
| **耗时** | ~15 秒（导航 0.1s + 表单填写 + 验证执行） |

---

## Test 2: Computer Use

| 字段 | 值 |
|---|---|
| **结果** | **PARTIAL** |
| **入口** | 千问办公 Computer Use 连接器 (builtin_computer_use MCP server, .NET AOT native, v0.1.5) |
| **实际工具** | `mcp__builtin_computer_use__list_installed_apps` → `mcp__builtin_computer_use__launch_app` (Notepad) → `mcp__builtin_computer_use__get_window_state` (×4) → `mcp__builtin_computer_use__click` (×8) → `mcp__builtin_computer_use__type_text` (×4) → `mcp__builtin_computer_use__press_key` (×7: alt+tab ×2, ctrl+shift+s ×2, ctrl+a ×2, delete) |
| **成功步骤** | 1. 列出已安装应用（找到记事本 AUMID）→ 2. 启动记事本 → 3. 屏幕识别记事本窗口并点击聚焦 → 4. 键入 "PASS:qwen:AGENT-CONTROL-20260826"（32 字符，UIA 树确认 Document value 正确）→ 5. Ctrl+Shift+S 打开另存为对话框 → 6. 对话框成功打开，文件名框可交互 |
| **失败步骤** | 另存为保存操作。目标目录现已存在（由 result.md 写入时创建），但 Save As 对话框在多次交互中反复失去焦点给其他窗口（豆包工作、千问办公客户端）。type_text 将路径文本误输入到豆包工作聊天输入框 2 次；click 操作将焦点切换到豆包工作窗口 2 次。Save As 对话框无法通过纯 GUI 操作稳定保持前台焦点 |
| **结果文本** | 记事本内容确认: `PASS:qwen:AGENT-CONTROL-20260826`（Document value 通过 UIA 树验证） |
| **失败原因** | Computer Use 焦点管理限制：Save As 对话框在多应用窗口环境下无法稳定保持前台焦点。每次尝试点击文件名框或输入文本时，焦点漂移到豆包工作或千问办公窗口 |
| **重试次数** | 第一轮：保存重试 3 次（路径不存在）；第二轮（本次）：焦点切换重试 4 次（2 次文本误输入 + 2 次点击切换窗口），最终放弃 |

---

## Test 3: In-app Browser

| 字段 | 值 |
|---|---|
| **结果** | **UNAVAILABLE** |
| **入口** | 无合格入口 |
| **实际工具** | 无 |
| **说明** | 千问办公客户端 (QwenWorkCN, Electron 应用) 是一个聊天/任务管理界面，不包含内嵌浏览器组件。客户端有"浏览器自动化"扩展能力（通过 Chrome Extension V2 控制外部 Edge 浏览器），但这属于 Test 1 的 Browser Use 范畴，不是客户端内嵌浏览器。侧边栏"我的网页"是.saved pages 功能，不是通用浏览器。未找到任何可打开 http://127.0.0.1:18080/browser-test.html 的内嵌浏览器入口 |
| **外部浏览器排除** | Edge（Test 1 已用）、Chrome、系统默认浏览器均不符合"千问办公客户端内部托管或嵌入的浏览器"要求 |

---

## 汇总

| 测试项 | 结果 | 关键发现 |
|---|---|---|
| 1. Browser Use | **PASS** | 浏览器自动化扩展工作正常，表单填写、按钮点击、结果读取全流程通过 |
| 2. Computer Use | **PARTIAL** | 屏幕识别、应用启动、文本键入、对话框打开均正常；保存因焦点管理限制受阻（Save As 对话框无法稳定保持前台） |
| 3. In-app Browser | **UNAVAILABLE** | 千问办公客户端无内嵌浏览器组件 |

## 失败点与备注

- Test 2 的保存失败根因是 **Computer Use 焦点管理限制**：在多应用窗口环境（豆包工作、千问办公、记事本、Save As 对话框）下，Save As 对话框无法稳定保持前台焦点。每次 click 或 type_text 操作都有概率将焦点切换到其他窗口。这是当前 Computer Use 实现的技术限制，非用户操作问题。
- Test 2 核心能力已验证：屏幕识别（get_window_state 返回正确 UIA 树）、应用启动（launch_app 成功启动记事本）、文本键入（type_text 正确输入 32 字符，UIA Document value 确认）、快捷键（Ctrl+Shift+S 成功打开 Save As 对话框）。
- Test 2 过程中焦点漂移统计：type_text 误输入到豆包工作 2 次，click 切换窗口 2 次，共 4 次焦点丢失。
- Test 3 的 UNAVAILABLE 是产品功能限制，千问办公当前版本不提供内嵌浏览器。
