# 豆包工作沙箱错误摘要（脱敏）

- 统计窗口：2026-08-25 23:20:00 至 2026-08-26 00:20:00
- 沙箱会话组：71
- 日志文件：165
- 总字节数：1137320
- 原始 SDK 日志未复制，原因：包含大量内部进程标识、用户目录和潜在认证上下文。

## 高频错误模式

- 66 × `[TIMESTAMP][PROC][LEVEL][sbox_host_mgr.cpp:711][sdk] mgr dispatch msg: host [HEX] not found, log2file [Error][alpc_impl.cpp:135] NtAlpcSendWaitReceivePort failed, code:[HEX]`
