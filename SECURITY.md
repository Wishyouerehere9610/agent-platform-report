# 数据安全说明

仓库包含办公 Agent 运行日志和任务会话，因此默认保持私有。

## 已排除内容

- 飞书、钉钉、企业微信的授权二维码与短期授权日志
- OAuth 回调地址、授权码、设备码、消息 ID、文件夹令牌和用户标识
- QwenWorkCN 的完整 `agents.db`、浏览器 Cookie、Local Storage 与 IndexedDB
- 豆包工作的完整 Chromium 用户目录、缓存和原始 SDK 日志
- WorkBuddy 的账号缓存及非本次任务会话

排除文件及原因记录在 `SOURCE_MANIFEST.csv`。公开仓库前仍应再次执行敏感信息扫描，并复核 `sessions/` 与 `outputs/*/05-communication-check.md`。

## 原始数据

原始工作区仍保存在本机 `行业调研` 文件夹中。本仓库使用独立的安全副本，不修改原始 Agent 交付物。
