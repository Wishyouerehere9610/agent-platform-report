# 千问办公控制面实测：统一判定

| 测试项 | 判定 | 核验结果 |
|---|---|---|
| Browser Use | PASS | Edge 扩展完成表单操作并读取 `BROWSER_TEST_PASS:qwen:AGENT-CONTROL-20260826` |
| Computer Use | PARTIAL | 记事本启动、界面识别与指定文本输入成功；另存为阶段焦点漂移，`computer-use.txt` 未生成 |
| In-app Browser | UNAVAILABLE | 当前客户端未发现可打开任意 URL 的通用内嵌浏览器入口 |

原始执行细节保存在 `result.md`。统一判定没有将文本输入成功等同于完整保存成功。
