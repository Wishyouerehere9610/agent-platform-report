window.REPORT_DATA = {
  "features": {
    "updatedAt": "2026-08-26T12:00:00+08:00",
    "statusLegend": [
      "已实测完成",
      "存在但未执行",
      "官方宣称",
      "第三方报告",
      "本次未发现",
      "环境或权限阻塞"
    ],
    "products": [
      {
        "id": "doubao",
        "name": "飞书 + 豆包工作",
        "company": "字节跳动",
        "color": "#1f6fff"
      },
      {
        "id": "workbuddy",
        "name": "企业微信 + WorkBuddy",
        "company": "腾讯",
        "color": "#18a56b"
      },
      {
        "id": "qwen",
        "name": "钉钉 + 千问办公",
        "company": "阿里巴巴",
        "color": "#ff6a00"
      }
    ],
    "features": [
      {
        "id": "agent-nl",
        "category": "Agent 核心",
        "name": "自然语言下达任务",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-001"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-001"
          ]
        }
      },
      {
        "id": "agent-plan",
        "category": "Agent 核心",
        "name": "复杂任务自动拆解与规划",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-001"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-001"
          ]
        }
      },
      {
        "id": "agent-tool",
        "category": "Agent 核心",
        "name": "自主调用工具并执行",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-001"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-001"
          ]
        }
      },
      {
        "id": "agent-verify",
        "category": "Agent 核心",
        "name": "步骤后校验与动态修正",
        "doubao": {
          "status": "本次未发现",
          "evidence": [
            "OFF-DB-001"
          ],
          "note": "官方页面披露多 Agent 分工与审核角色，未明确披露执行步骤后的动态校验机制"
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-004"
          ]
        }
      },
      {
        "id": "agent-multi",
        "category": "Agent 核心",
        "name": "多 Agent 并行与汇总",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-001"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "本次未发现",
          "evidence": [
            "OFF-QW-001"
          ],
          "note": "当前公开资料未形成明确证据"
        }
      },
      {
        "id": "agent-memory",
        "category": "Agent 核心",
        "name": "长期记忆与个性化",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-001"
          ]
        },
        "workbuddy": {
          "status": "本次未发现",
          "evidence": [
            "OFF-WB-001"
          ],
          "note": "官方产品页未明确披露长期记忆能力"
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-001"
          ]
        }
      },
      {
        "id": "agent-skills",
        "category": "Agent 核心",
        "name": "可复用 Skill / 工作流",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-001"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-006"
          ]
        }
      },
      {
        "id": "agent-custom",
        "category": "Agent 核心",
        "name": "自定义专家 / 工作伙伴",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-001"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-006"
          ]
        }
      },
      {
        "id": "agent-schedule",
        "category": "Agent 核心",
        "name": "云端定时任务",
        "doubao": {
          "status": "存在但未执行",
          "evidence": [
            "OBS-DB-001"
          ]
        },
        "workbuddy": {
          "status": "本次未发现",
          "evidence": [
            "OFF-WB-001"
          ],
          "note": "官方产品页披露云端长任务托管，未明确披露按时间触发的定时任务"
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-001"
          ]
        }
      },
      {
        "id": "agent-project",
        "category": "Agent 核心",
        "name": "项目空间 / 共享上下文",
        "doubao": {
          "status": "存在但未执行",
          "evidence": [
            "OBS-DB-001"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "本次未发现",
          "evidence": [
            "OFF-QW-001"
          ]
        }
      },
      {
        "id": "agent-cloud-computer",
        "category": "Agent 核心",
        "name": "云电脑 / 云端长任务",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-005",
            "MED-DB-001",
            "MED-DB-002"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-009"
          ]
        }
      },
      {
        "id": "browser-read",
        "category": "浏览器与电脑",
        "name": "读取网页与信息采集",
        "doubao": {
          "status": "环境或权限阻塞",
          "evidence": [
            "OBS-DB-001",
            "OFF-DB-005"
          ]
        },
        "workbuddy": {
          "status": "已实测完成",
          "evidence": [
            "OBS-WB-001"
          ]
        },
        "qwen": {
          "status": "已实测完成",
          "evidence": [
            "OBS-QW-001"
          ]
        }
      },
      {
        "id": "browser-act",
        "category": "浏览器与电脑",
        "name": "网页点击、输入与表单操作",
        "doubao": {
          "status": "环境或权限阻塞",
          "evidence": [
            "OBS-DB-001",
            "OFF-DB-005"
          ]
        },
        "workbuddy": {
          "status": "已实测完成",
          "evidence": [
            "OBS-WB-001"
          ]
        },
        "qwen": {
          "status": "已实测完成",
          "evidence": [
            "OBS-QW-001"
          ]
        }
      },
      {
        "id": "browser-download",
        "category": "浏览器与电脑",
        "name": "浏览器下载与落盘",
        "doubao": {
          "status": "环境或权限阻塞",
          "evidence": [
            "OBS-DB-001"
          ]
        },
        "workbuddy": {
          "status": "本次未发现",
          "evidence": [
            "OBS-WB-001"
          ]
        },
        "qwen": {
          "status": "本次未发现",
          "evidence": [
            "OFF-QW-001"
          ]
        }
      },
      {
        "id": "computer-see",
        "category": "浏览器与电脑",
        "name": "识别桌面应用可见状态",
        "doubao": {
          "status": "环境或权限阻塞",
          "evidence": [
            "OBS-DB-001",
            "OFF-DB-005"
          ]
        },
        "workbuddy": {
          "status": "本次未发现",
          "evidence": [
            "OBS-WB-001"
          ]
        },
        "qwen": {
          "status": "已实测完成",
          "evidence": [
            "OBS-QW-001",
            "OFF-QW-004"
          ]
        }
      },
      {
        "id": "computer-act",
        "category": "浏览器与电脑",
        "name": "桌面点击、键入、滚动与拖拽",
        "doubao": {
          "status": "环境或权限阻塞",
          "evidence": [
            "OBS-DB-001",
            "OFF-DB-005"
          ]
        },
        "workbuddy": {
          "status": "本次未发现",
          "evidence": [
            "OBS-WB-001"
          ]
        },
        "qwen": {
          "status": "已实测完成",
          "evidence": [
            "OBS-QW-001",
            "OFF-QW-004"
          ],
          "note": "记事本启动和文本输入成功，文件保存没有完成"
        }
      },
      {
        "id": "computer-cross",
        "category": "浏览器与电脑",
        "name": "跨桌面应用编排",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-001"
          ]
        },
        "workbuddy": {
          "status": "存在但未执行",
          "evidence": [
            "OBS-WB-001"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-004"
          ]
        }
      },
      {
        "id": "computer-background",
        "category": "浏览器与电脑",
        "name": "后台操控不抢前台焦点",
        "doubao": {
          "status": "本次未发现",
          "evidence": [
            "OFF-DB-001"
          ]
        },
        "workbuddy": {
          "status": "本次未发现",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-004"
          ]
        }
      },
      {
        "id": "computer-confirm",
        "category": "浏览器与电脑",
        "name": "桌面操作确认策略",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-002"
          ]
        },
        "workbuddy": {
          "status": "本次未发现",
          "evidence": [
            "OFF-WB-003"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-004"
          ]
        }
      },
      {
        "id": "mobile-remote",
        "category": "浏览器与电脑",
        "name": "手机或 IM 远程下达任务",
        "doubao": {
          "status": "存在但未执行",
          "evidence": [
            "OBS-DB-001"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-004"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-001"
          ]
        }
      },
      {
        "id": "browser-in-app",
        "category": "浏览器与电脑",
        "name": "客户端内通用浏览器",
        "doubao": {
          "status": "存在但未执行",
          "evidence": [
            "OBS-DB-002"
          ]
        },
        "workbuddy": {
          "status": "本次未发现",
          "evidence": [
            "OBS-WB-001"
          ]
        },
        "qwen": {
          "status": "本次未发现",
          "evidence": [
            "OBS-QW-001"
          ]
        }
      },
      {
        "id": "artifact-doc",
        "category": "办公交付",
        "name": "生成/编辑文档",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-001"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-001",
            "OFF-QW-006"
          ]
        }
      },
      {
        "id": "artifact-sheet",
        "category": "办公交付",
        "name": "生成/编辑电子表格",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-005",
            "OFF-DB-006"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-001",
            "OFF-QW-006"
          ]
        }
      },
      {
        "id": "artifact-ppt",
        "category": "办公交付",
        "name": "生成/编辑 PPT",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-005",
            "OFF-DB-006",
            "MED-DB-002"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-001",
            "OFF-QW-006"
          ]
        }
      },
      {
        "id": "artifact-web",
        "category": "办公交付",
        "name": "网页 / 应用生成",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-001"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-001"
          ]
        }
      },
      {
        "id": "artifact-code",
        "category": "办公交付",
        "name": "代码生成与编辑",
        "doubao": {
          "status": "本次未发现",
          "evidence": [
            "OFF-DB-001"
          ],
          "note": "官方页面披露可交互工作台生成，未明确披露代码文件生成或编辑"
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-001"
          ]
        }
      },
      {
        "id": "artifact-media",
        "category": "办公交付",
        "name": "图片/视频多媒体生成",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-005",
            "OFF-DB-006",
            "MED-DB-001"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-001"
          ]
        }
      },
      {
        "id": "artifact-pdf",
        "category": "办公交付",
        "name": "PDF 阅读、创建与编辑",
        "doubao": {
          "status": "本次未发现",
          "evidence": [
            "OFF-DB-001"
          ],
          "note": "官方页面提及本地文件查询、整理与报告产出，未明确披露 PDF 专项能力"
        },
        "workbuddy": {
          "status": "本次未发现",
          "evidence": [
            "OFF-WB-001"
          ],
          "note": "官方页面提及文档解析、本地文件读写与文档生成，未明确披露 PDF 创建或编辑"
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-006"
          ],
          "note": "官方内置 pdf Skill 明确支持阅读、创建、合并、拆分、旋转、水印、表单、加密、图片提取与 OCR"
        }
      },
      {
        "id": "file-read",
        "category": "办公交付",
        "name": "本地文件读取",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-001"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-001"
          ]
        }
      },
      {
        "id": "file-write",
        "category": "办公交付",
        "name": "本地文件写入",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-001"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-001"
          ]
        }
      },
      {
        "id": "file-batch",
        "category": "办公交付",
        "name": "文件夹批处理与整理",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-001"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-004"
          ]
        }
      },
      {
        "id": "eco-im",
        "category": "通讯与协同",
        "name": "原生即时通讯入口",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-001"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-004"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-001"
          ]
        }
      },
      {
        "id": "eco-doc",
        "category": "通讯与协同",
        "name": "原生文档/知识库协同",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-001"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-002"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-002"
          ]
        }
      },
      {
        "id": "eco-meeting",
        "category": "通讯与协同",
        "name": "会议与纪要",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-001"
          ]
        },
        "workbuddy": {
          "status": "本次未发现",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-001"
          ]
        }
      },
      {
        "id": "eco-mail",
        "category": "通讯与协同",
        "name": "邮箱处理",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-001"
          ]
        },
        "workbuddy": {
          "status": "本次未发现",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "本次未发现",
          "evidence": [
            "OFF-QW-001"
          ]
        }
      },
      {
        "id": "eco-calendar",
        "category": "通讯与协同",
        "name": "日历/日程联动",
        "doubao": {
          "status": "本次未发现",
          "evidence": [
            "OFF-DB-001"
          ],
          "note": "官方页面未明确披露日历或日程联动"
        },
        "workbuddy": {
          "status": "本次未发现",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "本次未发现",
          "evidence": [
            "OFF-QW-001"
          ],
          "note": "官方简介未明确披露日历或日程联动"
        }
      },
      {
        "id": "eco-todo",
        "category": "通讯与协同",
        "name": "待办/任务联动",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-001"
          ]
        },
        "workbuddy": {
          "status": "本次未发现",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "本次未发现",
          "evidence": [
            "OFF-QW-001"
          ],
          "note": "官方简介未明确披露钉钉待办联动"
        }
      },
      {
        "id": "eco-approval",
        "category": "通讯与协同",
        "name": "审批流程联动",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-001"
          ]
        },
        "workbuddy": {
          "status": "本次未发现",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "本次未发现",
          "evidence": [
            "OFF-QW-001"
          ],
          "note": "官方简介未明确披露钉钉审批联动"
        }
      },
      {
        "id": "eco-drive",
        "category": "通讯与协同",
        "name": "个人/企业云盘",
        "doubao": {
          "status": "存在但未执行",
          "evidence": [
            "OBS-DB-001"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-002"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-001"
          ]
        }
      },
      {
        "id": "eco-proactive",
        "category": "通讯与协同",
        "name": "从办公信号主动触发建议",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-001"
          ]
        },
        "workbuddy": {
          "status": "本次未发现",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "本次未发现",
          "evidence": [
            "OFF-QW-001"
          ]
        }
      },
      {
        "id": "ent-identity",
        "category": "企业治理",
        "name": "统一身份与组织架构",
        "doubao": {
          "status": "本次未发现",
          "evidence": [
            "OFF-DB-002"
          ],
          "note": "官方安全说明披露用户隔离与权限继承，未明确披露统一身份或组织架构管理"
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-002"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-002"
          ]
        }
      },
      {
        "id": "ent-permission",
        "category": "企业治理",
        "name": "权限继承与最小权限",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-002"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-003"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-002"
          ]
        }
      },
      {
        "id": "ent-isolation",
        "category": "企业治理",
        "name": "租户/网络/数据隔离",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-002"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-003"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-002"
          ]
        }
      },
      {
        "id": "ent-audit",
        "category": "企业治理",
        "name": "全程留痕与审计",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-002"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-003"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-002"
          ]
        }
      },
      {
        "id": "ent-vpc",
        "category": "企业治理",
        "name": "VPC / 单租户专享",
        "doubao": {
          "status": "本次未发现",
          "evidence": [
            "OFF-DB-003"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-002"
          ]
        },
        "qwen": {
          "status": "本次未发现",
          "evidence": [
            "OFF-QW-002"
          ]
        }
      },
      {
        "id": "ent-private",
        "category": "企业治理",
        "name": "私有化部署 / 数据不出域",
        "doubao": {
          "status": "本次未发现",
          "evidence": [
            "OFF-DB-003"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-002"
          ]
        },
        "qwen": {
          "status": "本次未发现",
          "evidence": [
            "OFF-QW-002"
          ]
        }
      },
      {
        "id": "ent-openapi",
        "category": "企业治理",
        "name": "OpenAPI 与行业系统连接",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-001",
            "OFF-DB-003"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-002"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-001"
          ]
        }
      },
      {
        "id": "ent-shared-skill",
        "category": "企业治理",
        "name": "组织级 Skill / 专家共享",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-001"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-002"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-006"
          ]
        }
      },
      {
        "id": "ent-usage",
        "category": "企业治理",
        "name": "席位、额度与成员用量控制",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-003"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-002"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-002"
          ]
        }
      },
      {
        "id": "market-price-personal",
        "category": "商业可用性",
        "name": "公开个人版定价",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-005"
          ]
        },
        "workbuddy": {
          "status": "本次未发现",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-003"
          ]
        }
      },
      {
        "id": "market-price-enterprise",
        "category": "商业可用性",
        "name": "公开企业版定价",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-003"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-002"
          ]
        },
        "qwen": {
          "status": "本次未发现",
          "evidence": [
            "OFF-QW-002"
          ]
        }
      },
      {
        "id": "market-free",
        "category": "商业可用性",
        "name": "免费版 / 免费体验",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-001"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-003"
          ]
        }
      },
      {
        "id": "market-catalog",
        "category": "商业可用性",
        "name": "大规模专家/Skill 市场",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-004"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-006",
            "OFF-QW-008"
          ]
        }
      },
      {
        "id": "market-cases",
        "category": "商业可用性",
        "name": "公开企业客户案例",
        "doubao": {
          "status": "本次未发现",
          "evidence": [
            "OFF-DB-001"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-004",
            "OFF-WB-005"
          ]
        },
        "qwen": {
          "status": "本次未发现",
          "evidence": [
            "OFF-QW-001"
          ]
        }
      },
      {
        "id": "control-progress",
        "category": "可控与可观测",
        "name": "任务步骤与进度可见",
        "doubao": {
          "status": "已实测完成",
          "evidence": [
            "OBS-DB-001"
          ]
        },
        "workbuddy": {
          "status": "已实测完成",
          "evidence": [
            "OBS-WB-001"
          ]
        },
        "qwen": {
          "status": "已实测完成",
          "evidence": [
            "OBS-QW-001"
          ]
        }
      },
      {
        "id": "control-artifact",
        "category": "可控与可观测",
        "name": "产物面板 / 文件定位",
        "doubao": {
          "status": "存在但未执行",
          "evidence": [
            "OBS-DB-001"
          ]
        },
        "workbuddy": {
          "status": "已实测完成",
          "evidence": [
            "OBS-WB-001"
          ]
        },
        "qwen": {
          "status": "存在但未执行",
          "evidence": [
            "OBS-QW-001"
          ]
        }
      },
      {
        "id": "control-credit",
        "category": "可控与可观测",
        "name": "积分/资源用量可查看",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-003"
          ]
        },
        "workbuddy": {
          "status": "官方宣称",
          "evidence": [
            "OFF-WB-002"
          ]
        },
        "qwen": {
          "status": "已实测完成",
          "evidence": [
            "OBS-QW-001",
            "OFF-QW-003"
          ]
        }
      },
      {
        "id": "control-auto",
        "category": "可控与可观测",
        "name": "自动执行模式",
        "doubao": {
          "status": "已实测完成",
          "evidence": [
            "OBS-DB-001"
          ]
        },
        "workbuddy": {
          "status": "已实测完成",
          "evidence": [
            "OBS-WB-001"
          ]
        },
        "qwen": {
          "status": "官方宣称",
          "evidence": [
            "OFF-QW-004"
          ],
          "note": "官方电脑操控文档明确提供自动执行确认策略"
        }
      },
      {
        "id": "control-citations",
        "category": "可控与可观测",
        "name": "来源引用与可追溯输出",
        "doubao": {
          "status": "官方宣称",
          "evidence": [
            "OFF-DB-004"
          ]
        },
        "workbuddy": {
          "status": "本次未发现",
          "evidence": [
            "OFF-WB-001"
          ]
        },
        "qwen": {
          "status": "本次未发现",
          "evidence": [
            "OFF-QW-001"
          ]
        }
      }
    ]
  },
  "evidence": {
    "updatedAt": "2026-08-26T12:00:00+08:00",
    "methodology": "OBS 为桌面界面与操作记录；OFF 为官方资料；CASE 为官方或客户公开案例；MED 为媒体或独立分析；SOC 为社区内容。产品功能优先使用 OFF，实际结果优先使用 OBS。行业覆盖区分命名客户、官方场景和能力推断。媒体与社区只补充体验，不替代官方资料和本地实测。",
    "items": [
      {
        "id": "OBS-DB-001",
        "product": "doubao",
        "type": "OBS",
        "title": "豆包工作桌面环境连接状态与模式",
        "url": "",
        "observedAt": "2026-08-25",
        "version": "147.0.7727.149",
        "summary": "桌面端显示工作任务、连接器、定时任务、云盘和手机遥控电脑；浏览器与电脑操控仍停留在一次性“操作电脑屏幕”初始化阶段，完整验证依赖权限与组件状态。",
        "supports": [
          "automatic-execution",
          "mobile-remote",
          "computer-use-blocked",
          "browser-control-pending"
        ]
      },
      {
        "id": "OBS-DB-002",
        "product": "doubao",
        "type": "OBS",
        "title": "豆包工作客户端内浏览器入口",
        "url": "",
        "observedAt": "2026-08-26",
        "version": "本机当前版本（版本号未展示）",
        "summary": "客户端右侧内嵌浏览器在可见界面中展示标签页、地址栏、后退、前进、刷新和新窗口入口。本轮最小测试未完成本机页面标题读取，因此只确认入口与控件。",
        "supports": [
          "in-app-browser-present",
          "browser-controls-visible",
          "in-app-title-unverified"
        ]
      },
      {
        "id": "OBS-WB-001",
        "product": "workbuddy",
        "type": "OBS",
        "title": "WorkBuddy 桌面环境连接状态与模式",
        "url": "",
        "observedAt": "2026-08-25",
        "version": "5.3.14",
        "summary": "统一最小测试中，agent-browser v0.27.0 完成表单输入、选择、勾选、点击和结果读取。当前工具面没有合规的 Windows 原生桌面控制入口。",
        "supports": [
          "automatic-execution",
          "browser-control-pass",
          "computer-control-unavailable",
          "usage-observable"
        ]
      },
      {
        "id": "OBS-QW-001",
        "product": "qwen",
        "type": "OBS",
        "title": "千问办公桌面环境连接状态",
        "url": "",
        "observedAt": "2026-08-25",
        "version": "1.0.0.26082211",
        "summary": "统一最小测试中，Edge 扩展完成浏览器表单任务。Computer Use 启动记事本并输入文本，但另存为时多次焦点漂移，文件没有生成。",
        "supports": [
          "browser-control-pass",
          "computer-control-partial",
          "connectors"
        ]
      },
      {
        "id": "OBS-QW-002",
        "product": "qwen",
        "type": "OBS",
        "title": "千问办公的自动执行设置",
        "url": "",
        "observedAt": "2026-08-25",
        "version": "1.0.0.26082211",
        "summary": "模型菜单提供高级、基础、经济与 Qwen3.8-Max。统一测评使用当前可用配置。",
        "supports": [
          "automatic-execution-settings",
          "basic-selected"
        ]
      },
      {
        "id": "RUN-DB-001",
        "product": "doubao",
        "type": "OBS",
        "title": "豆包工作统一命题运行结果",
        "url": "",
        "observedAt": "2026-08-25",
        "version": "单次运行",
        "summary": "核心产物 7 分钟完成，6 个要求文件齐全；飞书个人空间 4 项动作完成。PPT 与 XLSX 存在两个行业分数不一致。",
        "supports": [
          "benchmark",
          "artifacts",
          "feishu-actions",
          "quality-gap"
        ]
      },
      {
        "id": "RUN-WB-001",
        "product": "workbuddy",
        "type": "OBS",
        "title": "WorkBuddy 统一命题运行结果",
        "url": "",
        "observedAt": "2026-08-25",
        "version": "5.3.14 单次运行",
        "summary": "核心产物 6 分钟完成，6 个要求文件齐全，PPT 返工最少。企业微信个人资源动作未完成，飞书 4 项结果只作为替代通道。",
        "supports": [
          "benchmark",
          "artifacts",
          "protocol-deviation",
          "quality"
        ]
      },
      {
        "id": "RUN-QW-001",
        "product": "qwen",
        "type": "OBS",
        "title": "千问办公统一命题运行结果",
        "url": "",
        "observedAt": "2026-08-25",
        "version": "1.0.0.26082211 单次运行",
        "summary": "核心产物 25 分钟完成，6 个要求文件齐全。工作簿有 44 个公式，PPT 使用英文且第 6 页溢出，钉钉动作受 OAuth 阻塞。",
        "supports": [
          "benchmark",
          "artifacts",
          "formula-workbook",
          "quality-gap",
          "dingtalk-blocked"
        ]
      },
      {
        "id": "OFF-DB-001",
        "product": "doubao",
        "type": "OFF",
        "title": "豆包工作伙伴官方首页",
        "url": "https://aily.feishu.cn/",
        "observedAt": "2026-08-25",
        "version": "网页资料",
        "summary": "官方定位为飞书上的 Agent 协作平台，披露风格、技能与记忆定制，多 Agent 自动拆解、并行推进与结果汇总，本地文件查询整理和报告产出，以及消息、文档、会议、邮箱、审批、任务等办公信号接入。",
        "supports": [
          "feishu-native",
          "multi-agent",
          "cloud-agent",
          "local-computer",
          "proactive-work"
        ]
      },
      {
        "id": "OFF-DB-002",
        "product": "doubao",
        "type": "OFF",
        "title": "豆包工作伙伴企业安全机制",
        "url": "https://aily.feishu.cn/",
        "observedAt": "2026-08-25",
        "version": "网页资料",
        "summary": "官方列出用户/Agent/网络三重隔离、继承企业权限、敏感操作人工确认和全流程留痕审计。",
        "supports": [
          "isolation",
          "permission-inheritance",
          "human-confirmation",
          "audit"
        ]
      },
      {
        "id": "OFF-DB-003",
        "product": "doubao",
        "type": "OFF",
        "title": "飞书 AI 套餐与额度",
        "url": "https://www.feishu.cn/service/ai?from=aily_home",
        "observedAt": "2026-08-25",
        "version": "网页资料",
        "summary": "基础版 9900 元/年含 18 万点，企业版 9.9 万元/年含 200 万点，均不限席位；企业版 Plus 与旗舰版联系销售。豆包工作伙伴包含在飞书 AI 套餐中。",
        "supports": [
          "enterprise-pricing",
          "credits",
          "unlimited-seats"
        ]
      },
      {
        "id": "OFF-DB-004",
        "product": "doubao",
        "type": "OFF",
        "title": "豆包工作伙伴公开场景目录",
        "url": "https://aily.feishu.cn/",
        "observedAt": "2026-08-25",
        "version": "网页资料",
        "summary": "官方展示教育、金融研究、市场营销、内容创作、短视频与直播、商业研究等专家与场景模板。",
        "supports": [
          "education",
          "finance",
          "marketing",
          "media",
          "research"
        ]
      },
      {
        "id": "OFF-WB-001",
        "product": "workbuddy",
        "type": "OFF",
        "title": "WorkBuddy 官方产品页",
        "url": "https://cloud.tencent.com/product/workbuddy",
        "observedAt": "2026-08-25",
        "version": "网页资料",
        "summary": "官方定位为全场景 AI 办公工作台，明确披露自然语言理解、复杂任务拆解、工具调用、自我校验与修正，文字/图像/表格/代码的理解与生成，文档与图表解析，图片与视频产出，本地文件读写、文档生成与批处理，以及项目空间中的多 Agent 并行和流程复用。",
        "supports": [
          "planning",
          "local-files",
          "multimodal",
          "experts",
          "skills-market",
          "cloud-hosting",
          "multi-agent"
        ]
      },
      {
        "id": "OFF-WB-002",
        "product": "workbuddy",
        "type": "OFF",
        "title": "WorkBuddy Enterprise 定价与交付形态",
        "url": "https://cloud.tencent.com/product/workbuddy-enterprise",
        "observedAt": "2026-08-25",
        "version": "网页资料",
        "summary": "旗舰版 198 元/人/月、1 席位起；专享版 316 元/人/月、100 席位起并支持 VPC/单租户；私有化版 300 席位起、数据不出域、按需报价。",
        "supports": [
          "enterprise-pricing",
          "vpc",
          "single-tenant",
          "private-deployment",
          "data-locality"
        ]
      },
      {
        "id": "OFF-WB-003",
        "product": "workbuddy",
        "type": "OFF",
        "title": "WorkBuddy Enterprise 安全治理",
        "url": "https://cloud.tencent.com/product/workbuddy-enterprise",
        "observedAt": "2026-08-25",
        "version": "网页资料",
        "summary": "官方列出 Prompt 注入防护、五维数据隔离、全生命周期密文与审计、ISO/SOC/等保/数据安全法合规、MCP 授权校验和 AIGC 内容安全。",
        "supports": [
          "prompt-injection-defense",
          "data-isolation",
          "audit",
          "compliance",
          "mcp-security",
          "content-safety"
        ]
      },
      {
        "id": "OFF-WB-004",
        "product": "workbuddy",
        "type": "OFF",
        "title": "WorkBuddy 公开客户与用户之声",
        "url": "https://cloud.tencent.com/product/workbuddy",
        "observedAt": "2026-08-25",
        "version": "网页资料",
        "summary": "官方页面展示腾讯、奔驰、捷顺科技、麦芽传媒、上海教软等公开反馈；其中麦芽传媒明确同时提到提效和偶发报错、重试、卡顿。",
        "supports": [
          "customer-cases",
          "adoption",
          "errors-retries-lag"
        ]
      },
      {
        "id": "OFF-WB-005",
        "product": "workbuddy",
        "type": "CASE",
        "title": "WorkBuddy Enterprise 客户名录",
        "url": "https://cloud.tencent.com/product/workbuddy-enterprise",
        "observedAt": "2026-08-25",
        "version": "网页资料",
        "summary": "官网列出金融、消费电子、制造、零售、游戏、物流、电信等行业客户或业务品牌，包括招商银行、微众银行、小米、美的、唯品会、圆通、德邦和中国联通等；页面未逐一披露量化成效。",
        "supports": [
          "finance",
          "manufacturing",
          "retail",
          "gaming",
          "logistics",
          "telecom"
        ]
      },
      {
        "id": "OFF-QW-001",
        "product": "qwen",
        "type": "OFF",
        "title": "千问办公官方简介",
        "url": "https://help.aliyun.com/zh/qwenwork/qwenwork-intro",
        "observedAt": "2026-08-25",
        "version": "文档更新 2026-08-25",
        "summary": "官方称产品覆盖桌面、网页与钉钉，支持文档、表格、PPT、代码、网页和多媒体交付；具备个人云盘、IM、技能、连接器、云端定时任务和浏览器点击/输入/采集。",
        "supports": [
          "dingtalk-native",
          "artifacts",
          "cloud-drive",
          "im",
          "skills",
          "connectors",
          "scheduled-tasks",
          "browser-automation"
        ]
      },
      {
        "id": "OFF-QW-002",
        "product": "qwen",
        "type": "OFF",
        "title": "千问办公隐私与安全",
        "url": "https://help.aliyun.com/zh/qwenwork/qw-privacy-security",
        "observedAt": "2026-08-25",
        "version": "文档更新 2026-08-03",
        "summary": "官方说明数据存储在中国大陆，支持 TLS 与静态加密、最小权限、多因素认证与审批、日志审计、组织空间隔离、席位/用量/连接器管理，并提示正式提交前人工复核。",
        "supports": [
          "china-data-residency",
          "encryption",
          "least-privilege",
          "audit",
          "org-isolation",
          "usage-control"
        ]
      },
      {
        "id": "OFF-QW-003",
        "product": "qwen",
        "type": "OFF",
        "title": "千问办公个人版价格与积分",
        "url": "https://help.aliyun.com/zh/qwenwork/qw-personal-benefits",
        "observedAt": "2026-08-25",
        "version": "文档更新 2026-08-03",
        "summary": "个人免费版 0 元；标准版 98 元/月或连续包月 78 元/月；高级版 198 元/月或连续包月 158 元/月。积分包单价公开为 0.05 元/积分。",
        "supports": [
          "personal-pricing",
          "free-tier",
          "credits"
        ]
      },
      {
        "id": "OFF-QW-004",
        "product": "qwen",
        "type": "OFF",
        "title": "千问办公 Computer Use 文档",
        "url": "https://help.aliyun.com/zh/qwenwork/computer-use",
        "observedAt": "2026-08-25",
        "version": "网页资料",
        "summary": "官方描述屏幕感知、点击/拖拽/键入、后台执行、跨应用流程、前后截图校验、每次询问/自动执行/禁用三种策略，并披露验证码、速度和复杂界面精度限制。",
        "supports": [
          "screen-perception",
          "mouse-keyboard",
          "background-control",
          "cross-app",
          "verification",
          "confirmation-modes",
          "limitations"
        ]
      },
      {
        "id": "OFF-QW-005",
        "product": "qwen",
        "type": "OFF",
        "title": "千问办公模型档位",
        "url": "https://help.aliyun.com/zh/qwenwork/qw-model-selection-desktop",
        "observedAt": "2026-08-25",
        "version": "网页资料",
        "summary": "官方桌面端模型选择列出高级、基础、经济和 Qwen3.8-Max；高级用于重点项目决策和关键分析。",
        "supports": [
          "model-selection",
          "automatic-execution-settings"
        ]
      },
      {
        "id": "OFF-QW-006",
        "product": "qwen",
        "type": "OFF",
        "title": "千问办公 Skill 开放机制",
        "url": "https://help.aliyun.com/zh/qwenwork/skills",
        "observedAt": "2026-08-25",
        "version": "网页资料",
        "summary": "支持内置 find-skill、Skill 广场、GitHub/开源社区安装、本地上传 SKILL.md、自动触发、团队分享和交互式 Skill UI。内置 pdf Skill 明确支持阅读、创建、合并、拆分、旋转、水印、表单、加密、图片提取与 OCR。",
        "supports": [
          "skills-market",
          "open-skills",
          "local-skill-files",
          "team-sharing",
          "office-artifacts"
        ]
      },
      {
        "id": "OFF-DB-005",
        "product": "doubao",
        "type": "OFF",
        "title": "豆包办公任务模式官方帮助说明",
        "url": "https://lf9-cdn-tos.draftstatic.com/obj/ies-hotsoon-draft/grace_legal/doubao_member_copywrite_for_ai.html",
        "observedAt": "2026-08-26",
        "version": "豆包官方帮助中心 beta",
        "summary": "官方说明办公任务模式支持操作本地电脑、使用浏览器、调用 Skill、定时任务、Office 套件、专业设计和网页应用生成。",
        "supports": [
          "computer-use",
          "browser-use",
          "skills",
          "scheduled-tasks",
          "office-artifacts",
          "web-apps"
        ]
      },
      {
        "id": "OFF-DB-006",
        "product": "doubao",
        "type": "OFF",
        "title": "豆包 macOS App Store 功能说明",
        "url": "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85/id6683305962?mt=12",
        "observedAt": "2026-08-26",
        "version": "2026-08-26 页面",
        "summary": "应用商店说明列出浏览器、Skill、定时任务、Office、多媒体、深度研究、在线应用和跨设备续接。",
        "supports": [
          "browser-use",
          "skills",
          "scheduled-tasks",
          "multimedia",
          "research",
          "cross-device"
        ]
      },
      {
        "id": "OFF-FS-001",
        "product": "doubao",
        "type": "OFF",
        "title": "飞书客户案例行业目录",
        "url": "https://www.feishu.cn/customers",
        "observedAt": "2026-08-26",
        "version": "网页资料",
        "summary": "飞书客户页覆盖制造、互联网、零售、智能出行、医疗、媒体、餐饮、金融、物流、电商、教育、房地产、农牧、游戏和能源。该目录证明飞书生态覆盖，不等于豆包工作已在全部客户中使用。",
        "supports": [
          "feishu-industry-coverage",
          "evidence-boundary"
        ]
      },
      {
        "id": "OFF-FS-002",
        "product": "doubao",
        "type": "OFF",
        "title": "飞书 2026 年功能变化路径",
        "url": "https://www.feishu.cn/hc/zh-CN/articles/360043073734-%E9%A3%9E%E4%B9%A6%E5%8A%9F%E8%83%BD%E5%8F%98%E5%8C%96%E8%B7%AF%E5%BE%84",
        "observedAt": "2026-08-26",
        "version": "2026.03-2026.07 更新",
        "summary": "近期更新包括 aily Agent、妙搭、多维表格 AI 搭建、权限配置、仪表盘生成、工作流 Agent 节点和多维表格智能体。",
        "supports": [
          "aily-agent",
          "miaoda",
          "base-ai",
          "workflow-agent",
          "team-agent"
        ]
      },
      {
        "id": "MED-DB-001",
        "product": "doubao",
        "type": "MED",
        "title": "量子位深度实测豆包工作与飞书",
        "url": "https://mp.weixin.qq.com/s/3nM0tcqmCLSYoAV0kIawSg",
        "observedAt": "2026-08-26",
        "version": "发布于 2026-08-25",
        "summary": "媒体记录品牌素材生成、采购比选、视觉浏览器、云电脑、群聊与云文档整理，以及结果写回多维表格。文章观点不作为产品排名依据。",
        "supports": [
          "media-test",
          "visual-browser",
          "cloud-computer",
          "feishu-context"
        ]
      },
      {
        "id": "MED-DB-002",
        "product": "doubao",
        "type": "MED",
        "title": "差评实测豆包工作与飞书",
        "url": "https://mp.weixin.qq.com/s/nxoZu1Dz967sNpamgYI9QA",
        "observedAt": "2026-08-26",
        "version": "发布于 2026-08-26",
        "summary": "媒体记录 14 页可编辑 PPT、云电脑网页采集、飞书周报、权限拒绝和审批页面 Computer Use。任务过程有编辑与加速，不替代统一测评。",
        "supports": [
          "media-test",
          "editable-ppt",
          "cloud-computer",
          "computer-use",
          "permission-inheritance"
        ]
      },
      {
        "id": "OFF-WB-006",
        "product": "workbuddy",
        "type": "OFF",
        "title": "WorkBuddy 接入企业微信指南",
        "url": "https://www.workbuddy.cn/docs/workbuddy/Wecom-Guide",
        "observedAt": "2026-08-26",
        "version": "网页资料",
        "summary": "官方说明企业微信作为远程任务入口，实际处理发生在安装 WorkBuddy 的电脑，使用本地文件、Shell、凭证、插件和工具。",
        "supports": [
          "wecom",
          "remote-task",
          "local-environment",
          "execution-history"
        ]
      },
      {
        "id": "CASE-WB-006",
        "product": "workbuddy",
        "type": "CASE",
        "title": "深圳港集团 WorkBuddy 案例",
        "url": "https://developer.cloud.tencent.com.cn/article/2723207",
        "observedAt": "2026-08-26",
        "version": "发布于 2026-08-10",
        "summary": "腾讯云开发者社区案例称，报关字段抓取与映射把单次处理时间从 30 分钟缩短到 5 分钟，并描述私有化企业微信入口与企业内运行。",
        "supports": [
          "logistics",
          "government-enterprise",
          "document-entry",
          "private-deployment"
        ]
      },
      {
        "id": "OFF-QW-007",
        "product": "qwen",
        "type": "OFF",
        "title": "千问办公新版官方简介",
        "url": "https://qwenwork.cn/docs/product-introduction",
        "observedAt": "2026-08-26",
        "version": "网页资料",
        "summary": "官方说明桌面、网页与钉钉三种入口，桌面直连本地文件，支持网页、定时任务、浏览器自动化、云盘、IM、Skill 和连接器。",
        "supports": [
          "desktop",
          "web",
          "dingtalk",
          "local-files",
          "browser-automation",
          "scheduled-tasks"
        ]
      },
      {
        "id": "OFF-QW-008",
        "product": "qwen",
        "type": "OFF",
        "title": "千问办公专家套件目录",
        "url": "https://qwenwork.cn/docs/desktop/expert-kits",
        "observedAt": "2026-08-26",
        "version": "网页资料",
        "summary": "内置套件覆盖企业调研、产品、设计、开发、合同、法务、咨询、营销、教研、1688、财税、权益研究、投行、私募和财富管理等场景。",
        "supports": [
          "expert-kits",
          "finance",
          "legal",
          "education",
          "ecommerce",
          "consulting"
        ]
      },
      {
        "id": "OFF-QW-009",
        "product": "qwen",
        "type": "OFF",
        "title": "阿里巴巴发布千问办公",
        "url": "https://ali-home.alibaba.com/document-2021039099929952256",
        "observedAt": "2026-08-26",
        "version": "发布于 2026-08-03",
        "summary": "阿里巴巴公告称千问办公整合 QoderWork、MuleRun 与悟空能力，提供云端、桌面与企业协作三种 Agent 形态。",
        "supports": [
          "official-launch",
          "cloud-agent",
          "desktop-agent",
          "enterprise-agent"
        ]
      },
      {
        "id": "MED-CROSS-002",
        "product": "cross-product",
        "type": "MED",
        "title": "八项真实办公任务横向体验",
        "url": "https://www.aitntnews.com/newDetail.html?newId=27217",
        "observedAt": "2026-08-26",
        "version": "发布于 2026-07",
        "summary": "第三方体验称三款产品在电脑操控、浏览器路径选择和 IM 通知上表现不同。测试环境与版本和本仓库不同，只用于解释可能的路径差异。",
        "supports": [
          "cross-product-media-test",
          "computer-use",
          "browser-use",
          "im-notification"
        ]
      },
      {
        "id": "MED-CROSS-003",
        "product": "cross-product",
        "type": "MED",
        "title": "IT之家三款办公 AI 选购实测",
        "url": "https://www.ithome.com/0/991/030.htm",
        "observedAt": "2026-08-26",
        "version": "发布于 2026-08-18",
        "summary": "文章按交付物、办公生态和专业任务比较千问办公、WorkBuddy 与飞书豆包，并明确不同办公生态的集成深度会改变使用结果。",
        "supports": [
          "artifacts",
          "ecosystem-fit",
          "professional-work"
        ]
      },
      {
        "id": "SOC-DB-001",
        "product": "doubao",
        "type": "SOC",
        "title": "豆包工作公开使用体验",
        "url": "https://www.woshipm.com/ai/6453952.html",
        "observedAt": "2026-08-26",
        "version": "发布于 2026-08-25",
        "summary": "公开体验记录本地电脑操作、云电脑、定时任务、跨设备接力和多 Agent 小队，同时提到复杂公式和 PPT 排版仍需人工复核。",
        "supports": [
          "computer-use",
          "cloud-computer",
          "scheduled-tasks",
          "multi-agent",
          "quality-limit"
        ]
      },
      {
        "id": "SOC-WB-001",
        "product": "workbuddy",
        "type": "SOC",
        "title": "WorkBuddy 三个月使用与避坑记录",
        "url": "https://cloud.tencent.com/developer/article/2718832",
        "observedAt": "2026-08-26",
        "version": "发布于 2026-07-31",
        "summary": "社区作者记录本地文件、模式选择和连接器的实际使用，指出路径、上下文、登录态和版本更新会影响任务结果。",
        "supports": [
          "local-files",
          "execution-modes",
          "connectors",
          "session-expiry",
          "operational-risk"
        ]
      },
      {
        "id": "SOC-QW-001",
        "product": "qwen",
        "type": "SOC",
        "title": "千问办公公开使用体验汇总",
        "url": "https://post.smzdm.com/zz/p/ado83l4p/",
        "observedAt": "2026-08-26",
        "version": "发布于 2026-08-18",
        "summary": "公开体验围绕 Word、PPT、钉钉协同和专业办公展开。页面抓取受验证码限制，本报告只采用搜索摘要支持的功能描述。",
        "supports": [
          "office-artifacts",
          "dingtalk",
          "professional-work",
          "source-limited"
        ]
      },
      {
        "id": "SOC-001",
        "product": "cross-product",
        "type": "SOC",
        "title": "Bilibili：WorkBuddy VS 千问办公",
        "url": "https://www.bilibili.com/video/BV1Ny8G6dEJr/",
        "observedAt": "2026-08-25",
        "version": "发布于 2026-08-19",
        "summary": "公开视频将两者按模型、专家/Skill、连接器、生态、浏览器/电脑控制和手机远程办公比较；作者结论是两者不存在单向碾压，选择高度取决于钉钉或微信/腾讯生态。此结论属于个人观点。",
        "supports": [
          "ecosystem-fit",
          "social-comparison"
        ]
      },
      {
        "id": "MED-001",
        "product": "cross-product",
        "type": "MED",
        "title": "ChooseAI：三款国内 AI 办公工具对比",
        "url": "https://www.chooseai.net/news/6180/",
        "observedAt": "2026-08-25",
        "version": "网页资料",
        "summary": "独立工具媒体从产品形态、模型路线、办公交付和生态集成比较千问办公、WorkBuddy 与豆包工作；仅作为市场叙事参考，不替代官方或实测。",
        "supports": [
          "market-positioning",
          "cross-product-comparison"
        ]
      },
      {
        "id": "SOC-002",
        "product": "cross-product",
        "type": "SOC",
        "title": "知乎：办公 Agent 的平台资产与可迁移性讨论",
        "url": "https://zhuanlan.zhihu.com/p/2068432655528490857",
        "observedAt": "2026-08-25",
        "version": "网页资料",
        "summary": "文章提出办公 Agent 可能带来数据、流程、技能与模板的平台锁定风险。作者披露其与开源低代码产品存在利益相关，因此本报告仅吸收“可迁移性应纳入选型”的问题意识，不采信其竞品优劣结论。",
        "supports": [
          "portability-risk",
          "ecosystem-lock-in"
        ]
      },
      {
        "id": "OFF-DB-007",
        "product": "doubao",
        "type": "OFF",
        "title": "豆包工作发布与入口说明",
        "url": "https://www.feishu.cn/content/article/7677519271848610746",
        "observedAt": "2026-08-26",
        "version": "发布于 2026-08-24",
        "summary": "飞书官方说明豆包工作通过独立 PC、豆包工作入口和飞书内入口提供服务；飞书入口沿用企业身份，企业管理员控制开放范围。",
        "supports": [
          "official-release",
          "pc",
          "doubao-entry",
          "feishu-entry",
          "enterprise-access-control"
        ]
      },
      {
        "id": "MED-DB-003",
        "product": "doubao",
        "type": "MED",
        "title": "科技日报：豆包工作正式发布",
        "url": "https://www.stdaily.com/web/gdxw/2026-08/25/content_569505.html",
        "observedAt": "2026-08-26",
        "version": "发布于 2026-08-25",
        "summary": "科技日报报道豆包工作于 2026 年 8 月 25 日正式发布，并确认产品与飞书企业上下文、权限体系和工作入口打通。",
        "supports": [
          "release-date",
          "feishu-integration",
          "enterprise-context"
        ]
      },
      {
        "id": "OFF-WB-007",
        "product": "workbuddy",
        "type": "OFF",
        "title": "WorkBuddy Enterprise 产品概述",
        "url": "https://cloud.tencent.com/document/product/1831/134329",
        "observedAt": "2026-08-26",
        "version": "文档更新 2026-08-03",
        "summary": "腾讯云官方文档将 WorkBuddy 定位为全场景职场 AI 智能体桌面工作台，并说明 WorkBuddy Enterprise 覆盖个人办公、企业治理和云端托管运行。",
        "supports": [
          "enterprise-product",
          "desktop-workbench",
          "managed-agents",
          "commercial-availability"
        ]
      },
      {
        "id": "RES-CONTROL-001",
        "product": "cross-product",
        "type": "RES",
        "title": "三家办公 Agent 的 Browser Use 与 Computer Use 补充调研",
        "url": "",
        "observedAt": "2026-08-26",
        "version": "用户提供的本地 HTML 调研稿",
        "summary": "补充调研按产品路线比较千问办公、豆包工作和 WorkBuddy 的浏览器、桌面、后台任务与适用场景。本报告采用其中的产品路线和能力判断，不采用缺少逐条出处的 DAU、绝对排名、成功率和市场规模数字。",
        "supports": [
          "browser-use",
          "computer-use",
          "scheduled-tasks",
          "product-route",
          "commercial-pattern"
        ]
      }
    ]
  },
  "cases": {
    "updatedAt": "2026-08-26T12:00:00+08:00",
    "industryScale": {
      "0": "未见明确证据",
      "1": "能力可推断",
      "2": "官方场景覆盖",
      "3": "有命名客户/高密度场景"
    },
    "industries": [
      {
        "name": "制造",
        "doubao": 2,
        "workbuddy": 3,
        "qwen": 1,
        "notes": "飞书官网提供制造行业方案；WorkBuddy 有美的等命名客户；千问当前仅有通用能力。"
      },
      {
        "name": "汽车与硬件",
        "doubao": 2,
        "workbuddy": 3,
        "qwen": 1,
        "notes": "WorkBuddy 官方含奔驰、小米、荣耀、OPPO、Insta360。"
      },
      {
        "name": "零售与电商",
        "doubao": 2,
        "workbuddy": 3,
        "qwen": 2,
        "notes": "飞书有零售/消费品方案；WorkBuddy 含唯品会；千问官方明确电商场景。"
      },
      {
        "name": "金融",
        "doubao": 2,
        "workbuddy": 3,
        "qwen": 2,
        "notes": "豆包有股票分析师；WorkBuddy 有银行、证券、基金、保险客户；千问官方列金融用例。"
      },
      {
        "name": "医疗健康",
        "doubao": 2,
        "workbuddy": 2,
        "qwen": 1,
        "notes": "飞书有医疗行业方案；WorkBuddy 含腾讯健康；受监管数据边界需单列。"
      },
      {
        "name": "企业软件与 SaaS",
        "doubao": 2,
        "workbuddy": 2,
        "qwen": 2,
        "notes": "三家均具备连接器/Skill/网页或代码交付，适合软件型企业内部生产力。"
      },
      {
        "name": "专业服务与法务",
        "doubao": 1,
        "workbuddy": 2,
        "qwen": 2,
        "notes": "WorkBuddy 官方专家覆盖法务、投研；千问开放 Skill 适合沉淀专业流程。"
      },
      {
        "name": "教育",
        "doubao": 3,
        "workbuddy": 2,
        "qwen": 2,
        "notes": "豆包有教师、备课、出题批改等密集模板；WorkBuddy 有上海教软；千问官方列教育场景。"
      },
      {
        "name": "营销与媒体",
        "doubao": 3,
        "workbuddy": 3,
        "qwen": 2,
        "notes": "豆包模板最密集；WorkBuddy 有麦芽传媒并支持设计创意；千问官方列营销与多媒体。"
      },
      {
        "name": "游戏与互联网",
        "doubao": 2,
        "workbuddy": 3,
        "qwen": 1,
        "notes": "WorkBuddy 企业页列王者荣耀、和平精英、微信、QQ。"
      },
      {
        "name": "物流",
        "doubao": 1,
        "workbuddy": 3,
        "qwen": 1,
        "notes": "WorkBuddy 企业页列圆通、德邦。"
      },
      {
        "name": "政务与电信",
        "doubao": 2,
        "workbuddy": 3,
        "qwen": 1,
        "notes": "飞书有央国企与通信客户基础；WorkBuddy 有中国联通和深圳港案例；千问办公暂未见命名客户。"
      },
      {
        "name": "餐饮与酒店",
        "doubao": 2,
        "workbuddy": 1,
        "qwen": 1,
        "notes": "飞书客户页覆盖餐饮；当前不足以证明豆包工作已在这些客户中使用。"
      },
      {
        "name": "房地产与建筑",
        "doubao": 2,
        "workbuddy": 1,
        "qwen": 1,
        "notes": "飞书客户页提供房地产分类；三款 Agent 均未见本行业的公开量化测评。"
      },
      {
        "name": "能源与公用事业",
        "doubao": 2,
        "workbuddy": 1,
        "qwen": 1,
        "notes": "飞书客户页覆盖能源；WorkBuddy 和千问办公可从通用数据与流程能力推断适配。"
      },
      {
        "name": "农牧与农业",
        "doubao": 2,
        "workbuddy": 1,
        "qwen": 1,
        "notes": "飞书客户页列出农牧业案例；当前是协同生态证据，不是豆包工作客户证据。"
      }
    ],
    "cases": [
      {
        "product": "workbuddy",
        "company": "奔驰公司",
        "industry": "汽车",
        "caseType": "公开用户反馈",
        "summary": "公开反馈提到 CodeBuddy/WorkBuddy 与手机远程连接，并可通过微信/企业微信下达指令。",
        "evidence": [
          "OFF-WB-004"
        ],
        "strength": "官方命名，缺少量化方法"
      },
      {
        "product": "workbuddy",
        "company": "捷顺科技",
        "industry": "企业服务/园区",
        "caseType": "公开用户反馈",
        "summary": "公开反馈称已向 15 个部门推广，并使用小程序端降低部署门槛。",
        "evidence": [
          "OFF-WB-004"
        ],
        "strength": "官方命名，单方陈述"
      },
      {
        "product": "workbuddy",
        "company": "麦芽传媒",
        "industry": "营销与媒体",
        "caseType": "公开用户反馈",
        "summary": "公开反馈称 PPT、文档分析、图片设计环节提效，同时披露偶发报错、重试和卡顿。",
        "evidence": [
          "OFF-WB-004"
        ],
        "strength": "同时包含收益与痛点"
      },
      {
        "product": "workbuddy",
        "company": "上海教软",
        "industry": "教育软件",
        "caseType": "公开用户反馈",
        "summary": "非开发人员借助内置专家在一周内完成 Web 应用。",
        "evidence": [
          "OFF-WB-004"
        ],
        "strength": "官方命名，缺少基线对照"
      },
      {
        "product": "workbuddy",
        "company": "招商银行等金融客户群",
        "industry": "金融",
        "caseType": "客户名录",
        "summary": "企业版官网列出招商银行、招商证券、微众银行、易方达、中国太平等。",
        "evidence": [
          "OFF-WB-005"
        ],
        "strength": "命名客户，未逐项说明使用范围"
      },
      {
        "product": "workbuddy",
        "company": "美的/小米/荣耀/OPPO/Insta360",
        "industry": "制造与硬件",
        "caseType": "客户名录",
        "summary": "企业版官网列出多家制造与消费电子客户。",
        "evidence": [
          "OFF-WB-005"
        ],
        "strength": "命名客户，未逐项说明成效"
      },
      {
        "product": "workbuddy",
        "company": "唯品会",
        "industry": "零售电商",
        "caseType": "客户名录",
        "summary": "企业版官网客户名录包含唯品会。",
        "evidence": [
          "OFF-WB-005"
        ],
        "strength": "命名客户，未披露成效"
      },
      {
        "product": "workbuddy",
        "company": "圆通/德邦",
        "industry": "物流",
        "caseType": "客户名录",
        "summary": "企业版官网客户名录包含圆通快递和德邦快递。",
        "evidence": [
          "OFF-WB-005"
        ],
        "strength": "命名客户，未披露成效"
      },
      {
        "product": "doubao",
        "company": "教育场景模板群",
        "industry": "教育",
        "caseType": "官方场景目录",
        "summary": "教师教学、备课、出题批改等 Agent 模板密集；外部客户成效尚待公开证据。",
        "evidence": [
          "OFF-DB-004"
        ],
        "strength": "官方场景证据"
      },
      {
        "product": "doubao",
        "company": "金融研究与内容营销模板群",
        "industry": "金融/营销",
        "caseType": "官方场景目录",
        "summary": "股票分析、短视频脚本、直播与营销等模板展示了行业意图；实际企业采用情况尚待公开证据。",
        "evidence": [
          "OFF-DB-004"
        ],
        "strength": "官方场景证据"
      },
      {
        "product": "qwen",
        "company": "官方资料未列出命名外部客户",
        "industry": "多行业",
        "caseType": "证据缺口",
        "summary": "官方资料列出电商、教育、营销、金融等场景，但未见可核验的千问办公命名企业客户与量化效果。",
        "evidence": [
          "OFF-QW-001"
        ],
        "strength": "明确证据缺口"
      },
      {
        "product": "workbuddy",
        "company": "深圳港集团",
        "industry": "物流与港口",
        "caseType": "官方开发者社区案例",
        "summary": "公开案例称报关单字段抓取与映射把单次处理时间从 30 分钟缩短到 5 分钟。",
        "evidence": [
          "CASE-WB-006"
        ],
        "strength": "命名客户与量化场景，缺少独立复核"
      },
      {
        "product": "qwen",
        "company": "千问办公内置专家套件",
        "industry": "金融、法务、教育、电商与咨询",
        "caseType": "官方场景目录",
        "summary": "官方列出财富管理、投行、权益研究、合同管理、企业法务、教研、1688 买卖家和咨询交付等套件。",
        "evidence": [
          "OFF-QW-008"
        ],
        "strength": "场景覆盖清楚，未见命名客户成效"
      },
      {
        "product": "doubao",
        "company": "量子位与差评编辑部实测",
        "industry": "媒体与内容生产",
        "caseType": "媒体实测",
        "summary": "两篇 2026 年 8 月 25-26 日文章记录品牌素材生成、采购比选、群聊整理、周报和审批界面操作。",
        "evidence": [
          "MED-DB-001",
          "MED-DB-002"
        ],
        "strength": "任务细节充分，属于媒体单次体验"
      }
    ],
    "enterpriseLandscape": {
      "summary": "WorkBuddy Enterprise 官网公开列出 25 个客户或业务品牌，覆盖 9 个行业组，其中包含腾讯内部产品品牌。飞书官网的行业客户很多，但不能直接视为豆包工作客户。千问办公公开的是专家套件与岗位场景，暂未见同等级的命名客户清单。",
      "rows": [
        {
          "industry": "金融",
          "count": 6,
          "entities": [
            "招商银行",
            "招商证券",
            "WeBank 微众银行",
            "易方达基金",
            "中国太平保险",
            "腾讯金融科技"
          ],
          "evidence": [
            "OFF-WB-005"
          ]
        },
        {
          "industry": "消费电子与制造",
          "count": 5,
          "entities": [
            "小米",
            "荣耀",
            "OPPO",
            "Insta360",
            "Midea 美的"
          ],
          "evidence": [
            "OFF-WB-005"
          ]
        },
        {
          "industry": "协同办公与互联网",
          "count": 5,
          "entities": [
            "腾讯文档",
            "腾讯会议",
            "微信",
            "QQ",
            "企业微信"
          ],
          "evidence": [
            "OFF-WB-005"
          ]
        },
        {
          "industry": "游戏",
          "count": 2,
          "entities": [
            "王者荣耀",
            "和平精英"
          ],
          "evidence": [
            "OFF-WB-005"
          ]
        },
        {
          "industry": "零售与汽车服务",
          "count": 2,
          "entities": [
            "唯品会",
            "易车"
          ],
          "evidence": [
            "OFF-WB-005"
          ]
        },
        {
          "industry": "物流",
          "count": 2,
          "entities": [
            "圆通快递",
            "德邦快递"
          ],
          "evidence": [
            "OFF-WB-005"
          ]
        },
        {
          "industry": "医疗健康",
          "count": 1,
          "entities": [
            "腾讯健康"
          ],
          "evidence": [
            "OFF-WB-005"
          ]
        },
        {
          "industry": "半导体与算力",
          "count": 1,
          "entities": [
            "曦智科技"
          ],
          "evidence": [
            "OFF-WB-005"
          ]
        },
        {
          "industry": "电信",
          "count": 1,
          "entities": [
            "中国联通"
          ],
          "evidence": [
            "OFF-WB-005"
          ]
        }
      ],
      "evidenceGap": [
        {
          "product": "doubao",
          "finding": "飞书有广泛行业客户基础，豆包工作也有场景目录与媒体实测，但两者不能自动合并为豆包工作命名客户。",
          "evidence": [
            "OFF-DB-004",
            "OFF-FS-001",
            "MED-DB-001",
            "MED-DB-002"
          ]
        },
        {
          "product": "qwen",
          "finding": "官方专家套件覆盖金融、法务、咨询、教育和电商等岗位，但未见可核验的命名企业客户与量化成效。",
          "evidence": [
            "OFF-QW-001",
            "OFF-QW-008"
          ]
        }
      ]
    },
    "opportunities": [
      {
        "name": "遗留系统 GUI 自动化服务",
        "value": "在无 API 的 ERP、CRM、财务与行业客户端上，以 Computer Use 快速做 FDE 试点。",
        "whyNow": "三家都在补浏览器/桌面操控，但可靠性与权限边界仍是空白。",
        "buyer": "CIO、共享服务中心、业务运营",
        "risk": "界面变动、权限、不可逆操作"
      },
      {
        "name": "跨生态连接器与编排层",
        "value": "把飞书、企业微信、钉钉与行业系统连接，降低单一生态锁定。",
        "whyNow": "企业选型高度依赖现有 IM，跨生态迁移成本正在上升。",
        "buyer": "集团 IT、数字化部门",
        "risk": "平台接口与商业合作限制"
      },
      {
        "name": "Agent 可观测与评测平台",
        "value": "记录步骤、证据、重试、人工接管、时间、Credits 与交付质量。",
        "whyNow": "产品普遍展示“做完”，企业真正缺少的是稳定性和可追责证据。",
        "buyer": "AI CoE、内审、平台工程",
        "risk": "需适配多产品日志格式"
      },
      {
        "name": "高风险操作审批中台",
        "value": "在发送、删除、付款、审批、权限变更前统一做人审与策略控制。",
        "whyNow": "电脑操控把对话模型升级为可以代表企业执行操作的系统。",
        "buyer": "信息安全、法务、业务风控",
        "risk": "流程摩擦与责任划分"
      },
      {
        "name": "行业 Skill 与 FDE 交付包",
        "value": "将行业知识、数据连接、验收标准和 SOP 封装为可复制交付包。",
        "whyNow": "三家都有 Skill/专家体系，但真实行业深度差异大。",
        "buyer": "行业事业部、咨询公司、软件厂商",
        "risk": "需要持续维护与领域责任"
      },
      {
        "name": "技能与记忆可迁移层",
        "value": "导出提示、Skill、数据映射、评测集和操作日志，支持换平台。",
        "whyNow": "社区已开始讨论数据、流程和技能的平台锁定。",
        "buyer": "大型企业架构与采购",
        "risk": "各平台格式不统一"
      },
      {
        "name": "Computer Use 成本优化与路由",
        "value": "优先 API/连接器，只有无接口时才走 GUI；按任务动态选择模型和执行环境。",
        "whyNow": "桌面操控慢且资源重，Credits 与本地资源成本将成为规模化瓶颈。",
        "buyer": "平台运营、FinOps、AI CoE",
        "risk": "需要精细任务分类"
      },
      {
        "name": "私有化浏览器/桌面执行节点",
        "value": "在 VPC 或本地安全域运行浏览器与 GUI 执行，数据不出域。",
        "whyNow": "金融、政务、医疗采用取决于数据驻留、审计和权限隔离。",
        "buyer": "受监管行业 CIO/CISO",
        "risk": "部署与运维成本高"
      }
    ]
  },
  "runs": {
    "benchmarkId": "fde-commercialization-2026-08-25",
    "updatedAt": "2026-08-26T12:00:00+08:00",
    "protocol": {
      "samePrompt": true,
      "sameFiles": true,
      "maxMinutes": 45,
      "runsPerProduct": 1,
      "communicationScope": "仅个人空间、个人待办、个人日程和自我消息入口",
      "files": [
        "company-brief.md",
        "financial-assumptions.xlsx",
        "deliverable-spec.md"
      ],
      "requiredOutputs": [
        "00-run-log.md",
        "01-industry-prioritization.xlsx",
        "02-target-accounts.csv",
        "03-fde-commercialization-plan.pptx",
        "04-source-log.md",
        "05-communication-check.md"
      ]
    },
    "brief": {
      "objective": "为虚构公司 FieldPilot AI 制定可供管理层决策的 FDE 商业化方案：从六个候选行业中选择两个优先行业，形成目标企业清单、试点服务包、定价与毛利模型、90 天 GTM，并完成本人可见范围内的办公协同测试。",
      "constraints": [
        "三款产品读取相同的公司简报、财务假设和交付要求。",
        "单次运行最多 45 分钟，结论必须追溯到公开来源或输入假设。",
        "协同动作只允许在本人可见范围执行，不联系真实同事、群聊、客户或外部联系人。",
        "权限、登录或工具阻塞必须如实记录，不能把失败动作写成已完成。"
      ],
      "deliverables": [
        {
          "file": "00-run-log.md",
          "name": "运行日志",
          "purpose": "记录模式、时间、工具、错误、重试和人工接管"
        },
        {
          "file": "01-industry-prioritization.xlsx",
          "name": "行业优先级",
          "purpose": "六个行业评分、模型假设、产能和单位经济"
        },
        {
          "file": "02-target-accounts.csv",
          "name": "目标企业清单",
          "purpose": "10 家目标企业、适配场景、风险和公开证据"
        },
        {
          "file": "03-fde-commercialization-plan.pptx",
          "name": "管理层方案",
          "purpose": "8 至 12 页服务包、定价、GTM 和风险方案"
        },
        {
          "file": "04-source-log.md",
          "name": "来源日志",
          "purpose": "记录公开来源、访问日期、用途和不确定性"
        },
        {
          "file": "05-communication-check.md",
          "name": "协同测试日志",
          "purpose": "记录消息、待办、日历和文件空间动作"
        }
      ]
    },
    "metrics": [
      {
        "id": "delivery",
        "name": "交付完整性",
        "definition": "6 个要求文件是否齐全、可解析，页数和行数是否符合要求"
      },
      {
        "id": "firstResult",
        "name": "首个结果时间",
        "definition": "从任务开始到第一个可见文件的分钟数"
      },
      {
        "id": "coreTime",
        "name": "核心任务耗时",
        "definition": "从任务开始到 4 个核心交付物完成的分钟数"
      },
      {
        "id": "quality",
        "name": "业务可用性",
        "definition": "结构、语言、视觉、数字一致性和是否需要明显返工"
      },
      {
        "id": "sources",
        "name": "来源质量",
        "definition": "来源数量、可访问性、不确定性和一手来源占比"
      },
      {
        "id": "stability",
        "name": "单次执行稳定性",
        "definition": "错误、依赖安装、重试、恢复和人工确认，只描述本次运行"
      },
      {
        "id": "ecosystem",
        "name": "生态任务",
        "definition": "通信动作是否在指定产品组合内完成，替代通道单独标记"
      },
      {
        "id": "observability",
        "name": "可追溯性",
        "definition": "时间、工具、文件、重试、授权和不可观测项是否有记录"
      }
    ],
    "runs": [
      {
        "product": "doubao",
        "version": "客户端版本号未记录，运行日志记录 lark-cli 1.0.88",
        "environment": [
          "豆包工作 Auto 高模式",
          "隔离 sandbox",
          "general_search",
          "Python 生成 XLSX 与 PPTX",
          "飞书 lark-cli 完成个人空间动作"
        ],
        "status": "completed",
        "start": "2026-08-25T23:24:00+08:00",
        "end": "2026-08-26T00:13:00+08:00",
        "results": {
          "deliverables": {
            "completed": 6,
            "required": 6,
            "parseable": true
          },
          "firstVisibleMinutes": 2,
          "coreCompletionMinutes": 7,
          "totalElapsedMinutes": 49,
          "sources": 12,
          "targetAccounts": 10,
          "pptPages": 12,
          "deckCheck": "12 页无画布溢出。版式可读但偏文本化。PPT 与 XLSX 的两个行业分数不一致。",
          "workbookCheck": "4 个工作表可解析，无公式错误字符串。核心数字为静态值，后续调整不自动联动。",
          "communication": {
            "target": "飞书",
            "actual": "飞书",
            "successfulActions": 4,
            "requiredActions": 4,
            "comparisonStatus": "ALIGNED",
            "note": "第一轮子环境初始化失败，第二轮在主 Agent 环境通过 lark-cli 完成。"
          }
        },
        "conclusion": "核心交付快，飞书个人空间动作最终完成。本次浏览器和桌面最小测试受录制授权阻塞，不能据此判断长期可用性。"
      },
      {
        "product": "workbuddy",
        "version": "5.3.14",
        "environment": [
          "WorkBuddy Auto 模式",
          "本地文件系统",
          "Python 虚拟环境",
          "WebSearch",
          "飞书 lark-cli 作为替代通信通道"
        ],
        "status": "completed",
        "start": "2026-08-25T23:18:00+08:00",
        "end": "2026-08-26T00:08:00+08:00",
        "results": {
          "deliverables": {
            "completed": 6,
            "required": 6,
            "parseable": true
          },
          "firstVisibleMinutes": 2,
          "coreCompletionMinutes": 6,
          "totalElapsedMinutes": 50,
          "sources": 12,
          "targetAccounts": 10,
          "pptPages": 12,
          "deckCheck": "12 页无画布溢出。三份 PPT 中信息组织最清楚，但部分经营预测仍是任务假设，不是市场结果。",
          "workbookCheck": "5 个工作表可解析，无公式错误字符串。评分和财务结果为静态值。",
          "communication": {
            "target": "企业微信",
            "actual": "飞书",
            "successfulActions": 4,
            "requiredActions": 4,
            "comparisonStatus": "PROTOCOL_DEVIATION",
            "note": "飞书 4/4 是替代通道结果。企业微信用户级消息、待办、日历和云盘没有完成，不能计入企业微信成绩。"
          }
        },
        "conclusion": "核心交付最快，浏览器最小测试完成。企业微信动作未完成，飞书结果只保留为替代通道证据。"
      },
      {
        "product": "qwen",
        "version": "1.0.0.26082211",
        "environment": [
          "千问办公基础模式",
          "手动编排",
          "WeCom 内嵌 Python 3.10 作为运行时",
          "WebSearch 与 WebFetch",
          "钉钉 DWS 连接器"
        ],
        "status": "completed",
        "start": "2026-08-25T23:18:00+08:00",
        "end": "2026-08-26T00:12:00+08:00",
        "results": {
          "deliverables": {
            "completed": 6,
            "required": 6,
            "parseable": true
          },
          "firstVisibleMinutes": 19,
          "coreCompletionMinutes": 25,
          "totalElapsedMinutes": 54,
          "sources": 10,
          "targetAccounts": 10,
          "pptPages": 12,
          "deckCheck": "12 页，主体使用英文。第 6 页检测到画布溢出，对中文业务读者需要明显返工。",
          "workbookCheck": "4 个工作表可解析，44 个公式，无错误字符串。模型可复算，但需要 Excel 或 WPS 计算缓存。",
          "communication": {
            "target": "钉钉",
            "actual": "钉钉",
            "successfulActions": 0,
            "requiredActions": 4,
            "comparisonStatus": "BLOCKED",
            "note": "DWS 已安装但 OAuth 未完成，两轮授权窗口过期，4 个动作没有执行。"
          }
        },
        "conclusion": "交付物齐全且财务模型可复算，但环境准备最耗时，PPT 需要中文化和版面修正，钉钉动作受授权阻塞。"
      }
    ],
    "summary": {
      "commonResult": "三家都生成了 6 个要求文件，结构校验均可解析。",
      "mainDifference": "差异主要来自核心完成时间、产物返工量、授权恢复和指定生态动作是否完成。",
      "boundary": "每个产品只运行一次。本页不把单次结果换算为长期成功率，也不合成一个总分。"
    }
  },
  "controlSurfaces": {
    "updatedAt": "2026-08-26T12:00:00+08:00",
    "scope": "三款办公 Agent 的 Browser Use、Computer Use 与 In-app Browser 最小实测",
    "statusLegend": {
      "PASS": "最小动作完成，并有页面状态或文件结果可核验",
      "PARTIAL": "入口或部分动作已验证，关键步骤仍缺失",
      "BLOCKED": "入口存在，初始化或授权门槛阻断执行",
      "UNAVAILABLE": "当前 Agent 工具面未发现符合定义的入口"
    },
    "testDefinition": {
      "browserUse": "本机页面完成输入、选择、勾选、点击并读取 BROWSER_TEST_PASS",
      "computerUse": "可见记事本输入指定文本并保存 computer-use.txt",
      "inAppBrowser": "Agent 客户端内部打开本机页面并读取标题",
      "excluded": [
        "WebSearch",
        "WebFetch",
        "general_search",
        "CLI",
        "HTTP 请求",
        "脚本",
        "文件 API",
        "办公连接器"
      ]
    },
    "products": [
      {
        "id": "doubao",
        "name": "飞书 + 豆包工作",
        "conclusion": "本次未跑通浏览器和电脑操控。客户端内浏览器入口存在，但没有完成页面读取。",
        "businessMeaning": "当前证据不足以把 GUI 自动化作为可交付能力。正式试点前要先验证录制授权、浏览器结果和文件落盘。",
        "browserUse": {
          "mechanism": "浏览器操作与桌面执行环境共用初始化和录制授权门槛",
          "result": "BLOCKED",
          "evidenceClass": "环境阻塞",
          "actualRun": "任务已提交，桌面录制授权提示出现；未产生本机页面结果。",
          "evidence": [
            "outputs/control-surface-tests/doubao/evaluator-normalized.md"
          ]
        },
        "computerUse": {
          "mechanism": "由电脑控制环境执行可见桌面动作",
          "result": "BLOCKED",
          "evidenceClass": "环境阻塞",
          "actualRun": "录制授权提示阻断初始化，记事本输入与保存没有执行。",
          "evidence": [
            "outputs/control-surface-tests/doubao/evaluator-normalized.md"
          ]
        },
        "inAppBrowser": {
          "mechanism": "客户端右侧内嵌浏览器，具备标签页、地址栏和导航控件",
          "result": "PARTIAL",
          "evidenceClass": "人工确认入口",
          "actualRun": "入口与控件已在可见界面确认；本轮未完成测试页标题读取。",
          "evidence": [
            "outputs/control-surface-tests/doubao/evaluator-normalized.md",
            "OBS-DB-002"
          ]
        },
        "strengths": [
          "客户端内浏览器入口清晰",
          "多 Agent 编排",
          "飞书协同入口"
        ],
        "limitations": [
          "本轮受录制授权阻塞",
          "三项测试没有 Agent 结果文件",
          "客户端内页面读取没有完成"
        ]
      },
      {
        "id": "workbuddy",
        "name": "企业微信 + WorkBuddy",
        "conclusion": "浏览器操作完成。电脑桌面操控和客户端内浏览器在本次工具面中不可用。",
        "businessMeaning": "适合先做网页采集和表单类任务。涉及 ERP 客户端、桌面软件或跨窗口保存时，需要另一条执行路径。",
        "browserUse": {
          "mechanism": "agent-browser 0.27.0 驱动独立 Chromium",
          "result": "PASS",
          "evidenceClass": "Agent 自主执行",
          "actualRun": "完成表单操作并读取 BROWSER_TEST_PASS:workbuddy:AGENT-CONTROL-20260826。",
          "evidence": [
            "outputs/control-surface-tests/workbuddy/result.md",
            "outputs/control-surface-tests/workbuddy/browser-use-evidence.png"
          ]
        },
        "computerUse": {
          "mechanism": "本次 Agent 工具面没有 Windows 原生桌面控制入口",
          "result": "UNAVAILABLE",
          "evidenceClass": "Agent 自主执行",
          "actualRun": "没有合规操作路径，computer-use.txt 未生成。",
          "evidence": [
            "outputs/control-surface-tests/workbuddy/result.md",
            "outputs/control-surface-tests/workbuddy/evaluator-normalized.md"
          ]
        },
        "inAppBrowser": {
          "mechanism": "客户端存在 WebView 组件，未发现 Agent 可控的通用客户端内浏览器",
          "result": "UNAVAILABLE",
          "evidenceClass": "Agent 自主执行与评估者归一化",
          "actualRun": "未在客户端内打开测试页，未读取页面标题。",
          "evidence": [
            "outputs/control-surface-tests/workbuddy/result.md",
            "outputs/control-surface-tests/workbuddy/evaluator-normalized.md"
          ]
        },
        "strengths": [
          "浏览器动作链完整",
          "证据文件齐全",
          "独立运行时利于复现"
        ],
        "limitations": [
          "当前工具面缺少桌面 GUI 控制",
          "WebView 组件无法证明通用内嵌浏览器",
          "企业微信个人资源链路仍需单独验证"
        ]
      },
      {
        "id": "qwen",
        "name": "钉钉 + 千问办公",
        "conclusion": "浏览器操作完成。电脑操控能识别界面并输入，但没有把文件保存下来。",
        "businessMeaning": "可进入需要桌面操作的试点，但要把焦点漂移、保存校验和失败接管写进验收标准。",
        "browserUse": {
          "mechanism": "内置浏览器 MCP 通过 Edge 扩展 1.5.5 操作页面",
          "result": "PASS",
          "evidenceClass": "Agent 自主执行",
          "actualRun": "完成页面导航、表单填写、点击和结果读取，得到 BROWSER_TEST_PASS:qwen:AGENT-CONTROL-20260826。",
          "evidence": [
            "outputs/control-surface-tests/qwen/result.md"
          ]
        },
        "computerUse": {
          "mechanism": "独立 Computer Use 0.1.5 连接器",
          "result": "PARTIAL",
          "evidenceClass": "Agent 自主执行",
          "actualRun": "记事本启动、界面识别与指定文本输入成功；另存为阶段多次焦点漂移，computer-use.txt 未生成。",
          "evidence": [
            "outputs/control-surface-tests/qwen/result.md",
            "outputs/control-surface-tests/qwen/evaluator-normalized.md"
          ]
        },
        "inAppBrowser": {
          "mechanism": "网页自动化走外部 Edge 扩展；当前客户端未发现通用内嵌浏览器",
          "result": "UNAVAILABLE",
          "evidenceClass": "Agent 自主执行",
          "actualRun": "“我的网页”不满足任意 URL 导航要求，未形成客户端内页面结果。",
          "evidence": [
            "outputs/control-surface-tests/qwen/result.md"
          ]
        },
        "strengths": [
          "浏览器扩展交互完整",
          "桌面控制步骤可观察",
          "浏览器与桌面工具边界清晰"
        ],
        "limitations": [
          "多窗口焦点漂移",
          "文件保存没有完成",
          "当前客户端无合格 In-app Browser"
        ]
      }
    ],
    "actualRunSummary": {
      "browserUse": {
        "PASS": 2,
        "PARTIAL": 0,
        "BLOCKED": 1,
        "UNAVAILABLE": 0
      },
      "computerUse": {
        "PASS": 0,
        "PARTIAL": 1,
        "BLOCKED": 1,
        "UNAVAILABLE": 1
      },
      "inAppBrowser": {
        "PASS": 0,
        "PARTIAL": 1,
        "BLOCKED": 0,
        "UNAVAILABLE": 2
      },
      "completedVisualBrowserFlows": 2,
      "completedComputerUseFlows": 0,
      "completedInAppTitleReads": 0,
      "finding": "WorkBuddy 和千问办公完成了浏览器最小任务。电脑操控三家都没有生成目标文件，暂不适合作为免人工的生产能力。"
    },
    "evidenceBoundary": [
      "单次本机测试不外推长期稳定率",
      "Agent 自述与评估者归一化分别保存",
      "人工确认入口不等于 Agent 自主执行成功",
      "授权阻塞不等于产品长期不可用"
    ]
  },
  "insights": {
    "updatedAt": "2026-08-26T16:00:00+08:00",
    "productPositions": [
      {
        "id": "doubao",
        "releaseStatus": "2026-08-25 正式发布；PC、豆包工作入口和飞书入口已经开放，企业内可用范围由管理员控制。",
        "releaseEvidence": [
          "OFF-DB-007",
          "MED-DB-003"
        ],
        "conclusion": "教育、营销与媒体内容场景最成熟，金融研究和零售电商可以作为第二优先。",
        "reason": "教育和营销与媒体已有密集模板或公开体验；制造、零售、金融、医疗等更多来自飞书行业方案，不能直接算成豆包工作客户。",
        "industries": [
          "教育",
          "营销与媒体",
          "金融研究",
          "零售与电商"
        ],
        "artifactConclusion": "文件齐全；PPT 和 XLSX 两处评分不一致。",
        "controlConclusion": "本次没有足够证据进入 GUI 自动化试点。"
      },
      {
        "id": "workbuddy",
        "releaseStatus": "企业版已经提供旗舰、专享和私有化方案，可按席位采购，也支持 VPC、单租户和数据不出域。",
        "releaseEvidence": [
          "OFF-WB-002",
          "OFF-WB-007"
        ],
        "conclusion": "制造与硬件、金融、零售电商、物流、电信和游戏的公开行业证据最完整。",
        "reason": "16 个行业中有 8 个达到明确覆盖，公开资料包含银行、制造、零售、物流和电信客户；深圳港案例还披露了报关字段处理结果。",
        "industries": [
          "制造与硬件",
          "金融",
          "零售与电商",
          "物流",
          "政务与电信",
          "游戏与互联网"
        ],
        "artifactConclusion": "文件齐全；三家中 PPT 返工最少。",
        "controlConclusion": "适合网页与表单，桌面软件需要另一条执行路径。"
      },
      {
        "id": "qwen",
        "releaseStatus": "2026-08-03 开放公测；网页端和桌面客户端已经开放，钉钉内置入口处于逐步开放阶段。",
        "releaseEvidence": [
          "OFF-QW-009"
        ],
        "conclusion": "金融、法务、电商、咨询和教育最适合先验证，优势来自专家套件和钉钉入口。",
        "reason": "16 个行业中有 6 个达到官方场景覆盖，财富管理、投行、合同法务、1688 和教研套件较完整；当前还缺少同等级的具名外部客户证据。",
        "industries": [
          "金融",
          "法务",
          "零售与电商",
          "咨询",
          "教育"
        ],
        "artifactConclusion": "文件齐全；PPT 使用英文且一页溢出。",
        "controlConclusion": "可做桌面试点，必须校验保存结果和窗口焦点。"
      }
    ],
    "capabilityModules": [
      {
        "id": "agent-execution",
        "name": "任务拆解与执行",
        "question": "能否接收目标并交付文件",
        "products": {
          "doubao": {
            "label": "能",
            "note": "6 个文件完成",
            "evidence": [
              "RUN-DB-001"
            ]
          },
          "workbuddy": {
            "label": "能",
            "note": "6 个文件完成",
            "evidence": [
              "RUN-WB-001"
            ]
          },
          "qwen": {
            "label": "能",
            "note": "6 个文件完成",
            "evidence": [
              "RUN-QW-001"
            ]
          }
        }
      },
      {
        "id": "browser-use",
        "name": "操作浏览器",
        "question": "能否完成网页输入、选择和结果读取",
        "products": {
          "doubao": {
            "label": "未完成",
            "note": "录制授权阻塞",
            "evidence": [
              "OBS-DB-001"
            ]
          },
          "workbuddy": {
            "label": "能",
            "note": "表单测试完成",
            "evidence": [
              "OBS-WB-001"
            ]
          },
          "qwen": {
            "label": "能",
            "note": "表单测试完成",
            "evidence": [
              "OBS-QW-001"
            ]
          }
        }
      },
      {
        "id": "computer-use",
        "name": "操作电脑",
        "question": "能否操作桌面应用并生成目标文件",
        "products": {
          "doubao": {
            "label": "未完成",
            "note": "录制授权阻塞",
            "evidence": [
              "OBS-DB-001"
            ]
          },
          "workbuddy": {
            "label": "未见入口",
            "note": "本次工具面未暴露",
            "evidence": [
              "OBS-WB-001"
            ]
          },
          "qwen": {
            "label": "部分能",
            "note": "能输入，不能保存",
            "evidence": [
              "OBS-QW-001"
            ]
          }
        }
      },
      {
        "id": "office-artifacts",
        "name": "办公文件交付",
        "question": "能否生成表格、名单、PPT 和日志",
        "products": {
          "doubao": {
            "label": "能",
            "note": "PPT 有分数不一致",
            "evidence": [
              "RUN-DB-001"
            ]
          },
          "workbuddy": {
            "label": "能",
            "note": "三家中返工最少",
            "evidence": [
              "RUN-WB-001"
            ]
          },
          "qwen": {
            "label": "能",
            "note": "PPT 有英文和溢出",
            "evidence": [
              "RUN-QW-001"
            ]
          }
        }
      },
      {
        "id": "execution-environment",
        "name": "本地与云端环境",
        "question": "是否公开支持本地文件或云端长任务",
        "products": {
          "doubao": {
            "label": "有",
            "note": "本地电脑和云电脑",
            "evidence": [
              "OFF-DB-005"
            ]
          },
          "workbuddy": {
            "label": "有",
            "note": "本地文件和云端托管",
            "evidence": [
              "OFF-WB-001"
            ]
          },
          "qwen": {
            "label": "有",
            "note": "桌面、Web 和云端任务",
            "evidence": [
              "OFF-QW-007",
              "OFF-QW-009"
            ]
          }
        }
      },
      {
        "id": "ecosystem-actions",
        "name": "协同生态动作",
        "question": "能否在指定协同平台完成个人空间动作",
        "products": {
          "doubao": {
            "label": "能",
            "note": "飞书 4/4",
            "evidence": [
              "RUN-DB-001"
            ]
          },
          "workbuddy": {
            "label": "未完成",
            "note": "企业微信未完成",
            "evidence": [
              "RUN-WB-001"
            ]
          },
          "qwen": {
            "label": "未完成",
            "note": "钉钉授权阻塞",
            "evidence": [
              "RUN-QW-001"
            ]
          }
        }
      },
      {
        "id": "enterprise-governance",
        "name": "企业治理",
        "question": "是否公开提供权限、审计或隔离能力",
        "products": {
          "doubao": {
            "label": "有",
            "note": "继承飞书权限",
            "evidence": [
              "OFF-DB-002"
            ]
          },
          "workbuddy": {
            "label": "有",
            "note": "审计、VPC 和私有化",
            "evidence": [
              "OFF-WB-002",
              "OFF-WB-003"
            ]
          },
          "qwen": {
            "label": "有",
            "note": "组织、权限和用量管理",
            "evidence": [
              "OFF-QW-002"
            ]
          }
        }
      },
      {
        "id": "industry-assets",
        "name": "行业资产",
        "question": "是否有命名客户、官方场景或专家套件",
        "products": {
          "doubao": {
            "label": "有",
            "note": "12 个官方场景行业",
            "evidence": [
              "OFF-FS-001",
              "OFF-DB-004"
            ]
          },
          "workbuddy": {
            "label": "有",
            "note": "8 个行业有命名客户",
            "evidence": [
              "OFF-WB-005",
              "CASE-WB-006"
            ]
          },
          "qwen": {
            "label": "有",
            "note": "6 个行业有官方场景",
            "evidence": [
              "OFF-QW-008"
            ]
          }
        }
      }
    ],
    "priorityFeatures": [
      {
        "category": "产品形态",
        "name": "多端入口",
        "icon": "users-three",
        "products": {
          "doubao": {
            "state": "yes",
            "note": "桌面、飞书、手机",
            "evidence": [
              "OFF-DB-006",
              "SOC-DB-001"
            ]
          },
          "workbuddy": {
            "state": "yes",
            "note": "桌面、Web、企微远程",
            "evidence": [
              "OFF-WB-001",
              "OFF-WB-006"
            ]
          },
          "qwen": {
            "state": "yes",
            "note": "桌面、Web、钉钉",
            "evidence": [
              "OFF-QW-007"
            ]
          }
        }
      },
      {
        "category": "产品形态",
        "name": "本地与云端执行",
        "icon": "arrow-right",
        "products": {
          "doubao": {
            "state": "yes",
            "note": "本地电脑和云电脑",
            "evidence": [
              "OFF-DB-005",
              "SOC-DB-001"
            ]
          },
          "workbuddy": {
            "state": "yes",
            "note": "本地文件和云端托管",
            "evidence": [
              "OFF-WB-001"
            ]
          },
          "qwen": {
            "state": "yes",
            "note": "桌面 Agent 和云端 Agent",
            "evidence": [
              "OFF-QW-009"
            ]
          }
        }
      },
      {
        "category": "模型与扩展",
        "name": "多模型选择",
        "icon": "code",
        "products": {
          "doubao": {
            "state": "no",
            "note": "公开资料以豆包模型为主",
            "evidence": [
              "OFF-DB-005"
            ]
          },
          "workbuddy": {
            "state": "yes",
            "note": "企业版支持模型配置",
            "evidence": [
              "OFF-WB-002"
            ]
          },
          "qwen": {
            "state": "yes",
            "note": "提供多个模型档位",
            "evidence": [
              "OFF-QW-005"
            ]
          }
        }
      },
      {
        "category": "模型与扩展",
        "name": "Skill 与专家",
        "icon": "check-circle",
        "products": {
          "doubao": {
            "state": "yes",
            "note": "Skill 和工作伙伴",
            "evidence": [
              "OFF-DB-001",
              "OFF-DB-004"
            ]
          },
          "workbuddy": {
            "state": "yes",
            "note": "专家、SkillHub 和团队共享",
            "evidence": [
              "OFF-WB-001"
            ]
          },
          "qwen": {
            "state": "yes",
            "note": "Skill、专家套件和团队分发",
            "evidence": [
              "OFF-QW-006",
              "OFF-QW-008"
            ]
          }
        }
      },
      {
        "category": "模型与扩展",
        "name": "连接器与 MCP",
        "icon": "link",
        "products": {
          "doubao": {
            "state": "yes",
            "note": "飞书与外部系统连接",
            "evidence": [
              "OFF-DB-001"
            ]
          },
          "workbuddy": {
            "state": "yes",
            "note": "连接器、OpenAPI 和 MCP 管理",
            "evidence": [
              "OFF-WB-002",
              "OFF-WB-003"
            ]
          },
          "qwen": {
            "state": "yes",
            "note": "连接器和开放 Skill",
            "evidence": [
              "OFF-QW-007",
              "OFF-QW-006"
            ]
          }
        }
      },
      {
        "category": "任务执行",
        "name": "本地文件操作",
        "icon": "file-text",
        "products": {
          "doubao": {
            "state": "yes",
            "note": "公开支持，本次交付 6 个文件",
            "evidence": [
              "OFF-DB-005",
              "RUN-DB-001"
            ]
          },
          "workbuddy": {
            "state": "yes",
            "note": "公开体验可用，本次交付 6 个文件",
            "evidence": [
              "OFF-WB-001",
              "SOC-WB-001",
              "RUN-WB-001"
            ]
          },
          "qwen": {
            "state": "yes",
            "note": "桌面端直连本地文件",
            "evidence": [
              "OFF-QW-007",
              "RUN-QW-001"
            ]
          }
        }
      },
      {
        "category": "任务执行",
        "name": "Browser Use",
        "icon": "magnifying-glass",
        "products": {
          "doubao": {
            "state": "yes",
            "note": "公开支持，本次授权阻塞",
            "evidence": [
              "OFF-DB-005",
              "MED-DB-001",
              "OBS-DB-001"
            ]
          },
          "workbuddy": {
            "state": "yes",
            "note": "本次表单测试完成",
            "evidence": [
              "OBS-WB-001"
            ]
          },
          "qwen": {
            "state": "yes",
            "note": "本次表单测试完成",
            "evidence": [
              "OBS-QW-001",
              "OFF-QW-007"
            ]
          }
        }
      },
      {
        "category": "任务执行",
        "name": "Computer Use",
        "icon": "code",
        "products": {
          "doubao": {
            "state": "yes",
            "note": "公开体验可用，本次授权阻塞",
            "evidence": [
              "OFF-DB-005",
              "SOC-DB-001",
              "OBS-DB-001"
            ]
          },
          "workbuddy": {
            "state": "yes",
            "note": "公开支持 OS 级视觉操控；本次工具面未见入口",
            "evidence": [
              "RES-CONTROL-001",
              "OBS-WB-001"
            ]
          },
          "qwen": {
            "state": "yes",
            "note": "能输入，本次未保存文件",
            "evidence": [
              "OFF-QW-004",
              "OBS-QW-001"
            ]
          }
        }
      },
      {
        "category": "任务执行",
        "name": "自动定时任务",
        "icon": "chart-line",
        "products": {
          "doubao": {
            "state": "yes",
            "note": "公开支持定时任务",
            "evidence": [
              "OFF-DB-005",
              "SOC-DB-001"
            ]
          },
          "workbuddy": {
            "state": "yes",
            "note": "支持定时与后台长任务，本次未单独复测",
            "evidence": [
              "RES-CONTROL-001",
              "OFF-WB-001"
            ]
          },
          "qwen": {
            "state": "yes",
            "note": "公开支持云端定时任务",
            "evidence": [
              "OFF-QW-007"
            ]
          }
        }
      },
      {
        "category": "办公交付",
        "name": "文档、表格与 PPT",
        "icon": "file-text",
        "products": {
          "doubao": {
            "state": "yes",
            "note": "本次交付完成，存在分数不一致",
            "evidence": [
              "RUN-DB-001",
              "SOC-DB-001"
            ]
          },
          "workbuddy": {
            "state": "yes",
            "note": "本次交付完成，返工最少",
            "evidence": [
              "RUN-WB-001",
              "MED-CROSS-003"
            ]
          },
          "qwen": {
            "state": "yes",
            "note": "本次交付完成，PPT 需要返工",
            "evidence": [
              "RUN-QW-001",
              "SOC-QW-001"
            ]
          }
        }
      },
      {
        "category": "办公交付",
        "name": "网页与应用生成",
        "icon": "code",
        "products": {
          "doubao": {
            "state": "yes",
            "note": "公开支持在线应用",
            "evidence": [
              "OFF-DB-005"
            ]
          },
          "workbuddy": {
            "state": "yes",
            "note": "专家覆盖页面与应用开发",
            "evidence": [
              "OFF-WB-001"
            ]
          },
          "qwen": {
            "state": "yes",
            "note": "公开支持网页制作和发布",
            "evidence": [
              "OFF-QW-007"
            ]
          }
        }
      },
      {
        "category": "办公交付",
        "name": "图片与视频生成",
        "icon": "image",
        "products": {
          "doubao": {
            "state": "yes",
            "note": "图片与视频模型集成",
            "evidence": [
              "OFF-DB-006",
              "MED-DB-001"
            ]
          },
          "workbuddy": {
            "state": "yes",
            "note": "公开支持多模态成果",
            "evidence": [
              "OFF-WB-001"
            ]
          },
          "qwen": {
            "state": "yes",
            "note": "公开支持多媒体内容",
            "evidence": [
              "OFF-QW-007"
            ]
          }
        }
      },
      {
        "category": "企业能力",
        "name": "企业知识与权限",
        "icon": "users-three",
        "products": {
          "doubao": {
            "state": "yes",
            "note": "继承飞书身份与权限",
            "evidence": [
              "OFF-DB-002",
              "MED-CROSS-003"
            ]
          },
          "workbuddy": {
            "state": "yes",
            "note": "组织、权限、审计与安全",
            "evidence": [
              "OFF-WB-002",
              "OFF-WB-003"
            ]
          },
          "qwen": {
            "state": "yes",
            "note": "组织、权限和用量管理",
            "evidence": [
              "OFF-QW-002",
              "MED-CROSS-003"
            ]
          }
        }
      },
      {
        "category": "企业能力",
        "name": "项目与团队资产共享",
        "icon": "users-three",
        "products": {
          "doubao": {
            "state": "yes",
            "note": "项目空间和组织级工作伙伴",
            "evidence": [
              "OFF-DB-001"
            ]
          },
          "workbuddy": {
            "state": "yes",
            "note": "项目空间、企业 Skill 和专家",
            "evidence": [
              "OFF-WB-001",
              "OFF-WB-002"
            ]
          },
          "qwen": {
            "state": "yes",
            "note": "专家套件可分享和团队分发",
            "evidence": [
              "OFF-QW-008"
            ]
          }
        }
      },
      {
        "category": "企业能力",
        "name": "VPC 或私有化",
        "icon": "link",
        "products": {
          "doubao": {
            "state": "no",
            "note": "当前公开资料未见",
            "evidence": [
              "OFF-DB-002",
              "OFF-DB-003"
            ]
          },
          "workbuddy": {
            "state": "yes",
            "note": "专享版和私有化版",
            "evidence": [
              "OFF-WB-002"
            ]
          },
          "qwen": {
            "state": "no",
            "note": "当前公开资料未见",
            "evidence": [
              "OFF-QW-002"
            ]
          }
        }
      },
      {
        "category": "协同与团队",
        "name": "IM 远程下达任务",
        "icon": "link",
        "products": {
          "doubao": {
            "state": "yes",
            "note": "飞书与手机远程入口",
            "evidence": [
              "OFF-DB-006",
              "MED-DB-002"
            ]
          },
          "workbuddy": {
            "state": "yes",
            "note": "企业微信远程任务入口",
            "evidence": [
              "OFF-WB-006"
            ]
          },
          "qwen": {
            "state": "yes",
            "note": "钉钉和 IM 频道",
            "evidence": [
              "OFF-QW-007"
            ]
          }
        }
      },
      {
        "category": "协同与团队",
        "name": "多 Agent 协作",
        "icon": "users-three",
        "products": {
          "doubao": {
            "state": "yes",
            "note": "工作伙伴小队",
            "evidence": [
              "OFF-DB-001",
              "SOC-DB-001"
            ]
          },
          "workbuddy": {
            "state": "yes",
            "note": "项目空间支持多 Agent",
            "evidence": [
              "OFF-WB-001"
            ]
          },
          "qwen": {
            "state": "no",
            "note": "当前公开资料未形成明确证据",
            "evidence": [
              "OFF-QW-007",
              "OFF-QW-008"
            ]
          }
        }
      }
    ],
    "controlProfiles": [
      {
        "id": "doubao",
        "route": "虚拟桌面 + 云电脑双模",
        "browser": {
          "summary": "在飞书 Web 视图或虚拟桌面浏览器中完成搜索、填表和结果写回。",
          "evidence": [
            "OFF-DB-005",
            "RES-CONTROL-001"
          ]
        },
        "computer": {
          "summary": "本地和云电脑都能执行，支持远程触发、后台与定时任务。",
          "evidence": [
            "OFF-DB-005",
            "SOC-DB-001",
            "RES-CONTROL-001"
          ]
        },
        "bestFor": "已使用飞书，需要后台长任务、跨设备接力，或要把生成结果写回飞书文档和多维表格的团队。",
        "limit": "复杂 GUI、多表公式和模板填写仍需人工复核。",
        "currentRun": "本次录制授权阻塞，没有进入浏览器或电脑操控测试。"
      },
      {
        "id": "workbuddy",
        "route": "本地/云端 Browser + OS 级视觉操控",
        "browser": {
          "summary": "本地模式复用登录态，云端模式适合批量网页任务和后台长任务。",
          "evidence": [
            "RES-CONTROL-001",
            "OBS-WB-001"
          ]
        },
        "computer": {
          "summary": "通过截图识别和键鼠事件操作桌面，可覆盖没有 API 的老软件。",
          "evidence": [
            "RES-CONTROL-001"
          ]
        },
        "bestFor": "个人生产力、中小企业和需要接管桌面软件或内网系统的团队。",
        "limit": "连接器登录态、文件路径和版本更新会影响任务稳定性。",
        "currentRun": "浏览器表单完成；本次工具面没有暴露电脑操控入口。"
      },
      {
        "id": "qwen",
        "route": "桌面客户端 + 云端 Agent",
        "browser": {
          "summary": "云端 Agent 执行网页采集和批处理，主要差异来自钉钉与阿里生态数据。",
          "evidence": [
            "OFF-QW-007",
            "OFF-QW-009",
            "RES-CONTROL-001"
          ]
        },
        "computer": {
          "summary": "桌面端支持屏幕感知、点击、拖拽和键入，但没有独立虚拟桌面。",
          "evidence": [
            "OFF-QW-004",
            "RES-CONTROL-001"
          ]
        },
        "bestFor": "钉钉深度用户、电商研究和需要桌面端处理本地文件的团队。",
        "limit": "重 GUI 任务需要人工校验，后台长任务能力相对较弱。",
        "currentRun": "浏览器表单完成；电脑完成输入，保存文件时失去焦点。"
      }
    ],
    "controlConcepts": [
      {
        "id": "browser",
        "name": "Browser Use",
        "cnName": "操作浏览器",
        "scope": "网页采集、表单、后台批量操作",
        "value": "部署快，适合高频重复任务",
        "limit": "只能覆盖 Web，容易受登录态和页面变化影响",
        "businessModel": "订阅或按调用量收费"
      },
      {
        "id": "computer",
        "name": "Computer Use",
        "cnName": "操作电脑",
        "scope": "桌面软件、内网系统、跨应用流程",
        "value": "能触达没有 API 的系统，更接近人工操作岗位",
        "limit": "焦点、权限、保存和失败恢复决定是否可用",
        "businessModel": "试点、实施服务和订阅组合"
      }
    ],
    "trends": [
      {
        "id": "browser-standard",
        "title": "Browser Use 会先变成基础能力",
        "reason": "三家都公开支持浏览器操作，统一测试中两家完成了相同表单任务。",
        "impact": "产品差异将更多来自登录态、独家数据和结果写回哪个办公生态。",
        "evidence": [
          "OFF-DB-005",
          "OBS-WB-001",
          "OBS-QW-001"
        ]
      },
      {
        "id": "computer-service",
        "title": "Computer Use 会先以交付服务进入企业",
        "reason": "本次没有一家完成目标文件落盘，问题集中在权限、工具入口和窗口焦点。",
        "impact": "短期收入更可能来自试点、实施和托管运行，不是单纯卖一个软件席位。",
        "evidence": [
          "OBS-DB-001",
          "OBS-WB-001",
          "OBS-QW-001"
        ]
      },
      {
        "id": "ecosystem-fit",
        "title": "办公生态决定采购顺序",
        "reason": "飞书、企业微信和钉钉的身份、授权与资源范围直接改变了任务结果。",
        "impact": "企业会先选能接住现有消息、文档、审批和权限体系的产品。",
        "evidence": [
          "RUN-DB-001",
          "RUN-WB-001",
          "RUN-QW-001"
        ]
      },
      {
        "id": "case-evidence",
        "title": "行业案例会比功能数量更重要",
        "reason": "WorkBuddy 的命名客户证据更广，豆包工作主要依靠飞书场景，千问办公主要依靠专家套件。",
        "impact": "下一阶段竞争看真实任务、验收指标和可复制案例，不看功能列表长度。",
        "evidence": [
          "OFF-WB-005",
          "OFF-FS-001",
          "OFF-QW-008"
        ]
      }
    ],
    "legacySystemOpportunity": {
      "title": "老系统没有 API，也可以先接入 Agent",
      "summary": "内置浏览器处理已经登录的 Web 后台，Computer Use 继续操作桌面 C/S、ERP、财务客户端和内网软件。企业不需要先为每个系统开放 API，就能验证一个具体流程是否值得自动化。",
      "points": [
        {
          "label": "先卖什么",
          "value": "先交付对账、批量录入、报表填写等单一流程试点，不承诺通用自动化。"
        },
        {
          "label": "谁会采购",
          "value": "CIO、共享服务中心、财务运营和仍在使用老软件的业务部门。"
        },
        {
          "label": "为什么付费",
          "value": "减少前期开接口和改造老系统的工作，把投入放到流程配置、验收和运行保障。"
        },
        {
          "label": "怎么验收",
          "value": "按结果准确率、平均耗时、人工接管次数、失败恢复和审计记录验收。"
        }
      ]
    },
    "opportunities": [
      {
        "id": "browser-workflows",
        "title": "竞品情报与网页流程",
        "buyer": "市场、销售、运营和招聘团队",
        "job": "竞品日更、跨站采集、CRM 录入和 SaaS 后台批处理",
        "whyPay": "任务高频、规则清楚，可以按订阅或调用量采购。",
        "condition": "要稳定管理登录态、页面变化和结果校验。",
        "model": "高频低价 · 调研估算 ¥50 至 500 / 月"
      },
      {
        "id": "legacy-automation",
        "title": "银行对账与老系统自动化",
        "buyer": "CIO、共享服务中心和业务运营",
        "job": "ERP、财务客户端、内网系统和堡垒机内重复操作",
        "whyPay": "内置浏览器加 Computer Use 可以跨过 API 缺口，先验证具体流程，再决定是否改造系统。",
        "condition": "必须提供私有执行环境、人工确认、回滚和运行证据。",
        "model": "高价值深绑定 · 调研估算 ¥2000 至 5000 / 席位 / 月"
      },
      {
        "id": "professional-desktop",
        "title": "CAD 与专业软件批处理",
        "buyer": "制造、设计和工程服务团队",
        "job": "批量出图、格式转换、规范检查和重复编辑",
        "whyPay": "专业软件席位和人工操作成本较高，单个稳定流程就有明确价值。",
        "condition": "需要固定软件版本、模板、像素校验和人工抽检。",
        "model": "场景实施费 + 专业席位订阅"
      },
      {
        "id": "execution-governance",
        "title": "执行治理与验收",
        "buyer": "信息安全、内审、法务和 AI 平台团队",
        "job": "控制发送、删除、审批、付款和权限变更等高风险动作",
        "whyPay": "Computer Use 直接操作业务系统，错误会变成真实业务动作。",
        "condition": "需要统一审批、留痕、回放、结果校验和人工接管。",
        "model": "企业平台订阅 + 实施服务"
      }
    ]
  }
};
