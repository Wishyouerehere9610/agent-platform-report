# Control Surface Test Results

本目录保存三款办公 Agent 对 Computer Use、Browser Use 与 In-app Browser 的统一实测结果。

- `doubao/`：飞书 + 豆包工作
- `workbuddy/`：企业微信 + WorkBuddy
- `qwen/`：钉钉 + 千问办公

统一测试页面和协议位于 `benchmark/control-surface-test/`。所有测试仅访问本机页面、记事本和本目录，不发送消息，不访问个人数据，不修改系统设置。

`evaluator-summary.md` 是统一判定入口。各产品目录中的 `result.md` 保留 Agent 原始输出，`evaluator-normalized.md` 使用统一的 `PASS`、`PARTIAL`、`BLOCKED`、`UNAVAILABLE` 四种状态。
