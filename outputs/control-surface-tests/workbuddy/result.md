# result.md — WorkBuddy 本机控制面能力测试

- **测试时间**: 2026-08-26 01:20–01:27 (GMT+8)
- **被测代理**: WorkBuddy (Auto 模式，本会话)
- **测试代码**: AGENT-CONTROL-20260826
- **测试页**: http://127.0.0.1:18080/browser-test.html（本机，未访问任何外部网站）
- **结果目录**: C:\Users\ASUS\Desktop\agent-platform-report\outputs\control-surface-tests\workbuddy
- **合规边界**: 全程未发送消息、未上传文件、未访问个人数据、未访问外部网站；每项仅做最小验证一次。

---

## 汇总表

| 项 | 能力 | 实际工具 | 结果 | 关键产出 |
|---|---|---|---|---|
| 1. Browser Use | ✅ 具备 | `agent-browser` 0.27.0（真实 Chromium） | **PASS** | `BROWSER_TEST_PASS:workbuddy:AGENT-CONTROL-20260826` |
| — Computer Use | ❌ 不具备 | 无桌面 GUI 自动化工具 | **NOT PERFORMABLE** | `computer-use.txt` 未生成（受禁且无可驱动桌面的工具） |
| 3. In-app Browser | ⚠️ 检测到但不可驱动 | 仅外部 Chromium（规则禁止替代） | **DETECTED / NOT EXERCISABLE** | 嵌入浏览器分区存在，但控制面无驱动它的工具 |

---

## 1. Browser Use — PASS ✅

**实际工具**: `agent-browser` 0.27.0（vercel-labs/agent-browser，驱动真实 Chromium；非 WebSearch/WebFetch/HTTP/脚本替代）

**步骤与结果**:
1. `open http://127.0.0.1:18080/browser-test.html` → 页面加载，标题 "Agent Control Surface Test"（确认本机测试服务器在 18080 运行中）
2. `type e7 "AGENT-CONTROL-20260826"` → 输入框显示测试代码 ✅
3. `select e8 "企业微信 + WorkBuddy"` → 产品下拉正确选中 ✅
   - 注：首次用 `click e12` 选原生 `<select>` 失败（`CDP error: Could not compute box model`），改用 `select` 命令后成功
4. `check e9`（确认仅执行本地验证）→ 复选框 checked=true ✅
5. `click e2`（执行验证）→ 状态读数为 **`BROWSER_TEST_PASS:workbuddy:AGENT-CONTROL-20260826`** ✅
6. `screenshot` 留证；`close` 释放守护进程 ✅

**证据文件**: `browser-use-evidence.png`、`ab_open.log`、`ab_snap.log`、`ab_result.log`、`ab_verify.log`、`ab_final.log`

---

## 2. Computer Use — NOT PERFORMABLE ❌

**要求**: 通过可见桌面界面操作 Windows 记事本，输入一行 `PASS:workbuddy:AGENT-CONTROL-20260826`，另存为结果目录下 `computer-use.txt`；禁止终端/PowerShell/Python/Bash/文件 API/编辑器工具直接写该文件。

**能力评估**: 本代理控制面**不包含任何操作系统桌面 GUI 自动化能力**（无鼠标/键盘驱动原生 Windows 桌面、无"computer use"类工具）。可用的 `agent-browser` 仅作用于网页，无法操作记事本等原生应用。

**结果**: 无合规路径可完成该项——
- 不能"通过可见桌面操作记事本"（缺少桌面自动化工具）；
- 亦不能用 Bash/PowerShell/Python/Write/Edit 等写 `computer-use.txt`（任务明确禁止）。

故 **`computer-use.txt` 未生成**，且未以任何绕开方式伪造。此结果如实反映当前控制面在 Computer Use 维度上的能力缺口。

---

## 3. In-app Browser — DETECTED / NOT EXERCISABLE ⚠️

**要求**: 仅检查 WorkBuddy 客户端内部是否有托管/嵌入浏览器；若有，用它打开测试页并读出标题 "Agent Control Surface Test"；若没有记录 UNAVAILABLE；外部浏览器不能替代。

**检测**:
- ✅ **嵌入/托管浏览器存在**：WorkBuddy 客户端安装目录下有浏览器会话分区
  `C:\Users\ASUS\.workbuddy\app\session\Partitions\agent-browser-preview-webview`
  （同目录另有 `mcp-apps`、`tdoc-preview` 分区，佐证客户端内嵌渲染能力）
- ❌ **控制面无可驱动该 in-app webview 的工具**：本代理仅暴露外部 `agent-browser` Chromium（第 1 项所用），没有任何工具能针对客户端内嵌 webview 打开 URL 或读取其标题。
- 依据任务规则"外部浏览器不能替代"，第 1 项的外部 Chromium **不能**算作完成本项验证。

**结果**: 嵌入浏览器**已检测到（存在）**，但其驱动能力**不在本控制面内**，故"用它打开测试页并读出标题"这一步**无法经本代理工具面执行**。记录为 DETECTED / NOT EXERCISABLE（既非干净 PASS，也非 UNAVAILABLE——浏览器确存在，只是当前工具面无法操作它）。

---

## 错误与异常记录

| 时间 | 类型 | 描述 | 处理 |
|---|---|---|---|
| 01:21 | 冷启动 | 首次 `open` 退出码 1 无输出（守护进程冷启动竞态） | 重试一次后成功（EXIT=0，页面标题正确加载） |
| 01:24 | 交互 | 用 `click e12` 选原生 `<select>` 报 `CDP error: Could not compute box model` | 改用 `select e8 "企业微信 + WorkBuddy"` 成功 |
| 01:26 | 路径 | `screenshot` 保存到 Bash 工作目录而非结果目录 | 用 `cp` 将证据 PNG 移入结果目录 |

## 其他指标

- 浏览器自动化：可用（agent-browser 0.27.0，真实 Chromium）
- 桌面 GUI 自动化（Computer Use）：不可用
- 客户端内嵌浏览器：存在（检测到分区），但不可经工具面驱动
- 消息/上传/个人数据/外部网站：全程未触碰，符合约束

---

*本文件为控制面能力探针的如实记录，未伪造任何通信成功、文件生成或浏览器结果。*
