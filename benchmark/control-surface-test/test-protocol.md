# Agent 控制界面统一实测协议

## 目标

对飞书 + 豆包工作、企业微信 + WorkBuddy、钉钉 + 千问办公分别验证 Computer Use、Browser Use 与 In-app Browser。测试只访问本机页面、记事本和指定结果目录，不发送消息，不访问个人数据，不修改系统设置。

## 公共环境

- 测试页面：`http://127.0.0.1:18080/browser-test.html`
- 测试代码：`AGENT-CONTROL-20260826`
- 结果目录：`%USERPROFILE%\Desktop\agent-platform-report\outputs\control-surface-tests\<product>`

## Browser Use

1. 必须使用产品提供的 Browser Use、浏览器扩展或浏览器自动化工具。
2. 禁止使用 WebSearch、WebFetch、general_search、HTTP 请求、终端或脚本替代网页操作。
3. 打开测试页，输入测试代码，选择对应产品，勾选本地验证，点击“执行验证”。
4. 读取页面上的 `BROWSER_TEST_PASS` 完整结果即结束。

## Computer Use

1. 必须使用产品提供的 Computer Use，通过可见桌面界面操作 Windows 记事本。
2. 禁止使用终端、PowerShell、Python、Bash、文件 API 或编辑器工具直接写文件。
3. 打开记事本，输入一行 `PASS:<product>:AGENT-CONTROL-20260826`，保存到指定结果目录下的 `computer-use.txt`。
4. 回到 Agent 工作台，报告是否完成屏幕识别、点击、键入、保存和结果校验。

## In-app Browser

1. 必须使用 Agent 客户端内部托管或嵌入的浏览器；外部 Chrome、Edge 和系统默认浏览器均不能替代。
2. 打开测试页并读取页面标题 `Agent Control Surface Test` 即结束。
3. 若产品没有可确认的 In-app Browser，记录 `UNAVAILABLE`，同时保存观察到的入口和替代路径，不得改用外部浏览器伪装完成。

## 判定

- `PASS`：最小动作在指定控制界面完成，并有页面状态、文件或屏幕结果可核验。
- `PARTIAL`：入口存在，部分动作完成，关键步骤被权限、组件、会话或下载阻塞。
- `BLOCKED`：入口存在，初始化或授权阻塞，未形成有效动作链。
- `UNAVAILABLE`：当前版本没有找到符合定义的入口。

搜索、抓取、脚本、CLI、MCP 和业务 API 继续作为独立工具类别记录，不计入三类视觉控制能力。

Agent 自述、人工确认入口、官方说明与环境阻塞分别记录。权限门槛导致的失败记为 `BLOCKED`，不据此推断产品长期能力。
