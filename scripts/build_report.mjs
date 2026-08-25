import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const workspace = path.resolve(scriptDir, "..");
const reportDir = path.join(workspace, "office-agent-report");

const readJson = (name) => JSON.parse(fs.readFileSync(path.join(reportDir, "data", name), "utf8"));
const data = {
  features: readJson("features.json"),
  evidence: readJson("evidence.json"),
  cases: readJson("cases.json"),
  runs: readJson("runs.json")
};
const inlineData = JSON.stringify(data).replaceAll("<", "\\u003c");

const html = String.raw`<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>中国办公 Agent 三强：功能、实测与商业机会</title>
  <style>
    :root {
      --bg: #f2efe8;
      --paper: #fffdf8;
      --ink: #17202a;
      --muted: #68727d;
      --line: #d9d4ca;
      --line-strong: #b9b2a7;
      --db: #2468d8;
      --wb: #11855b;
      --qw: #d65d0e;
      --good: #0d7a54;
      --warn: #9a6300;
      --bad: #a23a35;
      --soft-blue: #eaf1fd;
      --soft-green: #e9f4ef;
      --soft-orange: #fff0e5;
      --soft-gray: #efede8;
      --shadow: 0 14px 40px rgba(35, 42, 49, .08);
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; overflow-x: hidden; }
    body {
      margin: 0;
      background: var(--bg);
      color: var(--ink);
      font-family: "Inter", "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
      line-height: 1.58;
    }
    button, input, select { font: inherit; }
    a { color: inherit; }
    .shell { display: grid; grid-template-columns: 248px minmax(0, 1fr); min-height: 100vh; }
    .sidebar {
      position: sticky;
      top: 0;
      height: 100vh;
      padding: 30px 22px;
      background: #1c242b;
      color: #f6f3ec;
      display: flex;
      flex-direction: column;
      gap: 28px;
      z-index: 20;
    }
    .brand-mark { display: grid; gap: 7px; }
    .brand-mark strong { font-size: 18px; letter-spacing: -.02em; }
    .brand-mark span { color: #aeb7be; font-size: 12px; }
    .nav { display: grid; gap: 4px; }
    .nav a {
      color: #c8d0d5;
      text-decoration: none;
      padding: 9px 11px;
      border-left: 2px solid transparent;
      font-size: 14px;
    }
    .nav a:hover, .nav a.active { color: #fff; border-left-color: #f2b544; background: rgba(255,255,255,.05); }
    .sidebar-meta { margin-top: auto; color: #aeb7be; font-size: 12px; display: grid; gap: 10px; }
    .print-btn {
      border: 1px solid rgba(255,255,255,.28);
      color: #fff;
      background: transparent;
      padding: 8px 10px;
      cursor: pointer;
      text-align: left;
    }
    .content { min-width: 0; }
    .hero {
      padding: 68px clamp(28px, 5vw, 74px) 54px;
      border-bottom: 1px solid var(--line);
      background: var(--paper);
    }
    .hero-inner, .section-inner { max-width: 1280px; margin: 0 auto; }
    .eyebrow { color: var(--muted); font-size: 12px; letter-spacing: .12em; text-transform: uppercase; }
    h1, h2, h3, p { margin-top: 0; }
    h1 { max-width: 980px; margin: 18px 0 22px; font-size: clamp(38px, 5vw, 72px); line-height: 1.04; letter-spacing: -.055em; font-weight: 650; }
    .hero-lead { max-width: 920px; color: #46515b; font-size: 19px; }
    .hero-meta { display: flex; gap: 18px; flex-wrap: wrap; margin-top: 30px; color: var(--muted); font-size: 13px; }
    .stage-strip { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1px; margin-top: 34px; background: var(--line); border: 1px solid var(--line); }
    .stage-item { background: #fff; padding: 18px; min-height: 126px; }
    .stage-item .company { font-size: 12px; color: var(--muted); }
    .stage-item h3 { margin: 5px 0 10px; font-size: 18px; }
    .stage-state { font-size: 13px; color: #46515b; }
    .stage-item.db { border-top: 4px solid var(--db); }
    .stage-item.wb { border-top: 4px solid var(--wb); }
    .stage-item.qw { border-top: 4px solid var(--qw); }
    section { padding: 62px clamp(24px, 5vw, 72px); border-bottom: 1px solid var(--line); }
    section:nth-of-type(even) { background: rgba(255,253,248,.58); }
    .section-head { display: grid; grid-template-columns: minmax(0, 1fr) minmax(260px, 430px); gap: 40px; align-items: end; margin-bottom: 30px; }
    h2 { font-size: clamp(28px, 3vw, 42px); line-height: 1.15; letter-spacing: -.035em; margin-bottom: 8px; }
    .section-intro { color: var(--muted); margin-bottom: 0; }
    .note { border-left: 3px solid var(--line-strong); padding: 10px 14px; color: #4f5962; font-size: 13px; background: rgba(255,255,255,.45); }
    .summary-grid, .leaders-grid, .profile-grid, .run-grid, .opportunity-grid { display: grid; gap: 16px; }
    .summary-grid { grid-template-columns: 1.1fr .9fr .9fr; }
    .leaders-grid, .profile-grid, .run-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .opportunity-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .card { background: var(--paper); border: 1px solid var(--line); padding: 22px; box-shadow: 0 1px 0 rgba(35,42,49,.02); }
    .card h3 { margin-bottom: 9px; font-size: 18px; }
    .card p { color: #4e5962; }
    .card-kicker { color: var(--muted); font-size: 11px; letter-spacing: .09em; text-transform: uppercase; margin-bottom: 13px; }
    .leader { position: relative; padding-top: 26px; }
    .leader::before { content: ""; position: absolute; inset: 0 0 auto 0; height: 4px; background: var(--line-strong); }
    .leader.db::before { background: var(--db); }
    .leader.wb::before { background: var(--wb); }
    .leader.qw::before { background: var(--qw); }
    .leader ul, .profile ul { padding-left: 18px; color: #4e5962; }
    .metric-line { display: flex; justify-content: space-between; gap: 20px; border-top: 1px solid var(--line); padding: 9px 0; font-size: 13px; }
    .metric-line span:last-child { color: var(--muted); text-align: right; }
    .control-bar { display: flex; gap: 12px; flex-wrap: wrap; align-items: end; margin-bottom: 14px; }
    .field { display: grid; gap: 5px; min-width: 190px; }
    .field label { font-size: 12px; color: var(--muted); }
    input, select { border: 1px solid var(--line-strong); background: #fff; color: var(--ink); padding: 9px 10px; min-height: 40px; }
    .matrix-count { margin-left: auto; color: var(--muted); font-size: 13px; }
    .table-wrap { overflow-x: auto; border: 1px solid var(--line); background: #fff; }
    .feature-table-wrap { height: clamp(420px, 64vh, 720px); overflow: auto; overscroll-behavior: contain; position: relative; }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 12px 14px; border-bottom: 1px solid var(--line); text-align: left; vertical-align: top; font-size: 13px; }
    th { position: sticky; top: 0; z-index: 2; background: #f6f3ed; color: #424d56; font-weight: 600; }
    td:first-child { min-width: 240px; font-weight: 600; }
    .category-cell { color: var(--muted); font-size: 12px; white-space: nowrap; }
    .feature-overview { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; margin-bottom: 22px; }
    .feature-product-card { background: #fff; border: 1px solid var(--line); border-top: 5px solid var(--line-strong); padding: 20px; min-width: 0; }
    .feature-product-card[data-product="doubao"] { border-top-color: var(--db); }
    .feature-product-card[data-product="workbuddy"] { border-top-color: var(--wb); }
    .feature-product-card[data-product="qwen"] { border-top-color: var(--qw); }
    .feature-product-card.is-active { box-shadow: var(--shadow); }
    .feature-product-card h3 { margin: 3px 0 3px; font-size: 19px; }
    .feature-product-card .company { color: var(--muted); font-size: 12px; }
    .feature-kpis { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; margin: 16px 0; }
    .feature-kpi { border-top: 1px solid var(--line); padding-top: 10px; }
    .feature-kpi b { display: block; font-size: 23px; line-height: 1.1; }
    .feature-kpi span { color: var(--muted); font-size: 11px; }
    .feature-strengths { margin: 0 0 16px; padding-left: 18px; color: #4e5962; font-size: 12px; min-height: 58px; }
    .feature-focus-action { width: 100%; border: 1px solid var(--line-strong); background: transparent; padding: 8px 10px; cursor: pointer; text-align: left; }
    .feature-focus-action:hover { background: #f6f3ed; }
    .feature-toolbar { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 20px; align-items: end; margin-bottom: 14px; }
    .feature-legend { display: flex; flex-wrap: wrap; gap: 7px 16px; color: var(--muted); font-size: 12px; }
    .feature-legend span { white-space: nowrap; }
    .feature-legend b { font-weight: 700; margin-right: 4px; }
    .feature-atlas { min-width: 860px; table-layout: fixed; }
    .feature-atlas.single-product { min-width: 560px; }
    .feature-atlas th, .feature-atlas td { padding: 10px 11px; }
    .feature-atlas thead th { position: sticky; top: 0; z-index: 5; text-align: center; box-shadow: inset 0 -1px 0 var(--line-strong); }
    .feature-atlas .category-head { width: 100px; }
    .feature-atlas .feature-head { width: 180px; text-align: left; }
    .feature-atlas .product-head { width: 190px; }
    .feature-atlas .product-head[data-product-col="doubao"] { background: #eaf1fd; }
    .feature-atlas .product-head[data-product-col="workbuddy"] { background: #e9f4ef; }
    .feature-atlas .product-head[data-product-col="qwen"] { background: #fff0e5; }
    .category-group { width: 100px; background: #f0f4f1; color: #177052; font-weight: 700; vertical-align: middle; }
    .feature-name { width: 180px; font-weight: 600; background: #fbfaf7; }
    .feature-state { width: 100%; min-height: 46px; border: 0; background: transparent; padding: 0; cursor: pointer; text-align: center; font-size: 27px; font-weight: 750; line-height: 1; }
    .feature-state:hover, .feature-state:focus { background: #f6f3ed; outline: 1px solid var(--line-strong); outline-offset: -1px; }
    .feature-state.covered { color: var(--good); }
    .feature-state.uncovered { color: var(--bad); }
    .profile { min-height: 100%; }
    .profile.db { border-top: 5px solid var(--db); }
    .profile.wb { border-top: 5px solid var(--wb); }
    .profile.qw { border-top: 5px solid var(--qw); }
    .profile .price { font-size: 22px; color: var(--ink); margin: 14px 0 3px; }
    .profile .price-note { font-size: 12px; color: var(--muted); }
    .diff-table td:first-child { min-width: 170px; }
    .protocol-grid { display: grid; grid-template-columns: minmax(280px, .8fr) minmax(0, 1.2fr); gap: 24px; margin-bottom: 24px; }
    .protocol-card { background: #1f292f; color: #f6f3ec; padding: 24px; }
    .protocol-card p, .protocol-card li { color: #cbd3d7; }
    .protocol-card code { color: #fff; }
    .weights { display: grid; gap: 11px; }
    .weight-row { display: grid; grid-template-columns: 140px 1fr 46px; gap: 10px; align-items: center; font-size: 13px; }
    .weight-track { height: 9px; background: #ddd8ce; }
    .weight-bar { height: 100%; background: #303d45; }
    .run-card { position: relative; }
    .run-card::before { content: ""; position: absolute; inset: 0 0 auto; height: 4px; background: var(--line-strong); }
    .run-card[data-product="doubao"]::before { background: var(--db); }
    .run-card[data-product="workbuddy"]::before { background: var(--wb); }
    .run-card[data-product="qwen"]::before { background: var(--qw); }
    .run-status { display: inline-block; margin: 4px 0 14px; padding: 4px 8px; background: var(--soft-gray); color: #625e58; font-size: 12px; }
    .run-status.ready { background: var(--soft-green); color: var(--good); }
    .run-status.deviation { background: var(--soft-orange); color: #94510f; }
    .run-status.blocked { background: #f8e8e5; color: var(--bad); }
    .rubric td:first-child { min-width: 140px; }
    .heatmap td:first-child { min-width: 170px; }
    .heat-button { width: 100%; border: 0; min-width: 92px; padding: 10px 8px; cursor: pointer; font-weight: 700; }
    .heat-covered { background: #dff1e8; color: var(--good); }
    .heat-uncovered { background: #f5e8e6; color: var(--bad); }
    .heat-button:focus, .heat-button:hover { outline: 2px solid #26333a; outline-offset: -2px; }
    .industry-detail { min-height: 45px; margin-top: 12px; color: #4e5962; font-size: 13px; }
    .case-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
    .case-card { border-top: 1px solid var(--line-strong); padding: 16px 0 4px; }
    .case-card h3 { margin-bottom: 3px; font-size: 17px; }
    .case-meta { color: var(--muted); font-size: 12px; margin-bottom: 9px; }
    .case-strength { display: inline-block; padding: 3px 7px; background: var(--soft-gray); color: #635f59; font-size: 11px; }
    .value-chain { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 1px; background: var(--line); border: 1px solid var(--line); margin: 24px 0; }
    .chain-step { background: #fff; padding: 18px 15px; min-height: 140px; }
    .chain-step b { display: block; margin: 7px 0; }
    .chain-step span { color: var(--muted); font-size: 12px; }
    .chain-index { font-family: Georgia, serif; font-size: 25px; color: #8c8376; }
    .opportunity { display: grid; grid-template-columns: 1fr 180px; gap: 18px; }
    .opportunity aside { border-left: 1px solid var(--line); padding-left: 16px; color: var(--muted); font-size: 12px; }
    .evidence-controls { margin-bottom: 14px; }
    .evidence-list { display: grid; gap: 1px; background: var(--line); border: 1px solid var(--line); }
    .evidence-row { display: grid; grid-template-columns: 88px minmax(190px, .8fr) minmax(260px, 1.4fr) 120px; gap: 14px; padding: 14px; background: #fff; align-items: start; }
    .source-type { font-weight: 700; font-size: 12px; }
    .evidence-row a { text-decoration-thickness: 1px; text-underline-offset: 3px; }
    .evidence-row p { margin: 0; color: #55606a; font-size: 12px; }
    .evidence-date { color: var(--muted); font-size: 12px; }
    .method-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 28px; }
    .method-grid ol, .method-grid ul { padding-left: 20px; color: #4e5962; }
    .footer { padding: 28px clamp(24px, 5vw, 72px) 50px; color: var(--muted); font-size: 12px; }
    dialog { width: min(720px, calc(100vw - 32px)); border: 1px solid var(--line-strong); padding: 0; box-shadow: var(--shadow); }
    dialog::backdrop { background: rgba(20, 28, 33, .48); }
    .dialog-head { display: flex; justify-content: space-between; gap: 20px; align-items: center; padding: 16px 20px; border-bottom: 1px solid var(--line); background: #f6f3ed; }
    .dialog-head h3 { margin: 0; }
    .dialog-close { border: 1px solid var(--line-strong); background: #fff; padding: 7px 10px; cursor: pointer; }
    .dialog-body { padding: 20px; max-height: 70vh; overflow-y: auto; }
    .dialog-evidence { border-bottom: 1px solid var(--line); padding: 0 0 17px; margin-bottom: 17px; }
    .dialog-evidence:last-child { border-bottom: 0; margin-bottom: 0; }
    .dialog-evidence h4 { margin: 5px 0 8px; }
    .dialog-evidence p { color: #4e5962; }
    .mono { font-family: "Cascadia Mono", Consolas, monospace; }
    .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
    @media (max-width: 1060px) {
      .shell { grid-template-columns: 210px minmax(0, 1fr); }
      .summary-grid, .leaders-grid, .profile-grid, .run-grid { grid-template-columns: 1fr; }
      .section-head { grid-template-columns: 1fr; gap: 12px; }
      .stage-strip { grid-template-columns: 1fr; }
      .protocol-grid, .method-grid { grid-template-columns: 1fr; }
      .value-chain { grid-template-columns: 1fr 1fr; }
      .feature-overview { grid-template-columns: 1fr; }
    }
    @media (max-width: 760px) {
      .shell { display: block; }
      .sidebar { position: static; height: auto; padding: 18px; gap: 14px; }
      .nav { display: flex; overflow-x: auto; }
      .nav a { white-space: nowrap; border-left: 0; border-bottom: 2px solid transparent; }
      .nav a.active { border-left: 0; border-bottom-color: #f2b544; }
      .sidebar-meta { display: none; }
      .hero { padding-top: 44px; }
      h1 { font-size: 36px; }
      .opportunity-grid, .case-list { grid-template-columns: 1fr; }
      .opportunity { grid-template-columns: 1fr; }
      .opportunity aside { border-left: 0; border-top: 1px solid var(--line); padding: 12px 0 0; }
      .value-chain { grid-template-columns: 1fr; }
      .evidence-row { grid-template-columns: 70px 1fr; }
      .evidence-row p, .evidence-date { grid-column: 2; }
      .matrix-count { width: 100%; margin-left: 0; }
      .field { min-width: min(100%, 220px); }
      .feature-toolbar { grid-template-columns: 1fr; }
      .feature-kpis { grid-template-columns: repeat(3, 1fr); }
      .feature-table-wrap { height: 58vh; min-height: 390px; }
    }
    @media print {
      body { background: #fff; }
      .shell { display: block; }
      .sidebar, .control-bar, dialog { display: none !important; }
      .hero, section { padding: 26px 0; }
      .hero-inner, .section-inner { max-width: none; }
      .card, .table-wrap, .evidence-list { box-shadow: none; break-inside: avoid; }
      th { position: static; }
      a { text-decoration: none; }
    }
  </style>
</head>
<body>
  <div class="shell">
    <aside class="sidebar">
      <div class="brand-mark"><strong>Office Agent Review</strong><span>中国办公 Agent 生态调研</span></div>
      <nav class="nav" aria-label="报告目录">
        <a href="#executive" class="active">结论摘要</a>
        <a href="#matrix">功能矩阵</a>
        <a href="#profiles">产品画像</a>
        <a href="#benchmark">统一测评</a>
        <a href="#industries">行业覆盖</a>
        <a href="#opportunities">商业机会</a>
        <a href="#evidence">证据与方法</a>
      </nav>
      <div class="sidebar-meta">
        <div>截至 2026-08-25</div>
        <div>策略 / 产品管理版</div>
        <button class="print-btn" id="print-report">打印或导出 PDF</button>
      </div>
    </aside>

    <main class="content">
      <header class="hero">
        <div class="hero-inner">
          <div class="eyebrow">行业研究 · 证据优先</div>
          <h1>中国办公 Agent 三强：从“会生成”走向“能办事”</h1>
          <p class="hero-lead">飞书＋豆包工作、企业微信＋WorkBuddy、钉钉＋千问办公，正在把通讯入口、办公资产、浏览器和电脑操控接成一条完整链路。产品差距集中在执行可靠性、权限治理和行业复制能力。</p>
          <div class="hero-meta">
            <span>公开资料 + 桌面核验</span><span>功能、测评、行业、商业化</span><span>不设总冠军，只标维度领先</span>
          </div>
          <div class="stage-strip" aria-label="当前测评状态">
            <article class="stage-item db"><div class="company">字节跳动</div><h3>飞书 + 豆包工作</h3><div class="stage-state">办公协同能力覆盖广；电脑操控需完成组件初始化后复核。</div></article>
            <article class="stage-item wb"><div class="company">腾讯</div><h3>企业微信 + WorkBuddy</h3><div class="stage-state">浏览器与电脑控制已通过产品内连接测试；完整任务表现待独立验证。</div></article>
            <article class="stage-item qw"><div class="company">阿里巴巴</div><h3>钉钉 + 千问办公</h3><div class="stage-state">浏览器与电脑操控连接正常；统一测评尚待完成。</div></article>
          </div>
        </div>
      </header>

      <section id="executive">
        <div class="section-inner">
          <div class="section-head"><div><div class="eyebrow">01 · 核心结论</div><h2>结构性结论</h2></div><p class="section-intro">现有证据足以比较功能、生态与商业路径；未形成完整运行结果的维度不作推断。</p></div>
          <div class="summary-grid">
            <article class="card"><div class="card-kicker">核心判断</div><h3>通讯入口承接需求，Computer Use 补上执行闭环</h3><p>消息把任务带进系统，文档和知识库提供上下文，浏览器与桌面操控完成跨系统执行。商业价值也因此从内容生成，延伸到真正的流程办理。</p></article>
            <article class="card"><div class="card-kicker">主要瓶颈</div><h3>规模化取决于可靠性和治理</h3><p>代理配置、系统权限、界面变化、不可逆操作和人工接管都会影响交付。企业规模化要求稳定交付，并具备审计、恢复和复制能力。</p></article>
            <article class="card"><div class="card-kicker">选型原则</div><h3>办公生态决定选型起点</h3><p>钉钉、微信/企业微信和飞书已经沉淀了不同的组织资产与工作习惯。对多数企业而言，迁移成本往往比单个新功能更重要。</p></article>
          </div>
          <h3 style="margin:32px 0 14px">基于现有证据的维度领先项</h3>
          <div class="leaders-grid">
            <article class="card leader db"><div class="card-kicker">飞书 + 豆包工作</div><h3>主动办公信号与企业确认机制</h3><ul><li>从消息、文档、会议、邮箱、审批、任务中主动识别工作信号</li><li>敏感操作人工确认、权限继承与全程留痕</li><li>教育、营销、内容生产模板密度高</li></ul></article>
            <article class="card leader wb"><div class="card-kicker">企业微信 + WorkBuddy</div><h3>企业交付形态与命名客户覆盖</h3><ul><li>旗舰、VPC 专享、私有化三档部署最完整</li><li>公开命名客户横跨金融、制造、零售、物流和游戏</li><li>浏览器与电脑控制连接链路完整</li></ul></article>
            <article class="card leader qw"><div class="card-kicker">钉钉 + 千问办公</div><h3>电脑操控文档与 Skill 开放度</h3><ul><li>明确披露后台操控、确认策略、验证码与精度限制</li><li>支持本地 SKILL.md、GitHub 获取、市场安装与团队分享</li><li>个人版价格与积分单价最透明</li></ul></article>
          </div>
        </div>
      </section>

      <section id="matrix">
        <div class="section-inner">
          <div class="section-head"><div><div class="eyebrow">02 · 功能总览</div><h2>三家公司办公 Agent 能力总览</h2></div><div class="note">✓ 表示已有官方资料或桌面核验证据；× 表示当前证据不足，无法判断产品缺少该能力。通用文件处理不推断为特定格式能力。</div></div>
          <div class="feature-overview" id="feature-overview" aria-label="三家公司产品能力摘要"></div>
          <div class="feature-toolbar">
            <div class="feature-legend" aria-label="能力状态图例"><span><b style="color:var(--good)">✓</b>有明确证据</span><span><b style="color:var(--bad)">×</b>待核验</span></div>
            <div class="field"><label for="product-filter">产品视图</label><select id="product-filter"><option value="">全部产品横向对照</option><option value="doubao">只看飞书 + 豆包工作</option><option value="workbuddy">只看企业微信 + WorkBuddy</option><option value="qwen">只看钉钉 + 千问办公</option></select></div>
          </div>
          <div class="control-bar">
            <div class="field"><label for="feature-search">搜索功能</label><input id="feature-search" type="search" placeholder="例如：浏览器、审批、私有化"></div>
            <div class="field"><label for="category-filter">功能分类</label><select id="category-filter"><option value="">全部分类</option></select></div>
            <div class="field"><label for="status-filter">证据筛选</label><select id="status-filter"><option value="">全部</option></select></div>
            <div class="matrix-count" id="matrix-count" aria-live="polite"></div>
          </div>
          <div class="table-wrap feature-table-wrap">
            <table class="feature-atlas" id="feature-atlas" aria-label="三款办公 Agent 分组能力对比">
              <thead><tr><th class="category-head">能力大类</th><th class="feature-head">功能项</th><th class="product-head" data-product-col="doubao">字节跳动<br>飞书 + 豆包工作</th><th class="product-head" data-product-col="workbuddy">腾讯<br>企业微信 + WorkBuddy</th><th class="product-head" data-product-col="qwen">阿里巴巴<br>钉钉 + 千问办公</th></tr></thead>
              <tbody id="feature-body"></tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="profiles">
        <div class="section-inner">
          <div class="section-head"><div><div class="eyebrow">03 · 产品路线</div><h2>三条不同的产品路线</h2></div><p class="section-intro">三家都在向平台化演进，但入口、资产沉淀、执行环境和商业包装各不相同。</p></div>
          <div class="profile-grid">
            <article class="card profile db"><div class="card-kicker">字节跳动</div><h3>飞书 + 豆包工作</h3><p>以飞书原生协同和主动办公为核心，云端助手与本地现场专家并存。</p><div class="price">¥9,900 / 年起</div><div class="price-note">飞书 AI 企业套餐，不限席位，按 AI 点数计量</div><ul><li>优势：办公信号覆盖完整，具备主动触发能力</li><li>优势：多 Agent 团队与行业模板形成清晰入口</li><li>风险：Computer Use 初始化依赖本地权限与组件状态，复杂任务验证尚不完整</li></ul></article>
            <article class="card profile wb"><div class="card-kicker">腾讯</div><h3>企业微信 + WorkBuddy</h3><p>以独立桌面工作台、云端助理、专家市场和企业级多形态部署为核心。</p><div class="price">¥198 / 人 / 月起</div><div class="price-note">企业旗舰版；专享版 ¥316 / 人 / 月，私有化按需报价</div><ul><li>优势：命名客户和行业覆盖最丰富</li><li>优势：VPC、单租户、私有化与安全治理路径完整</li><li>风险：浏览器连接对代理配置较敏感；公开反馈提及偶发报错、重试与卡顿</li></ul></article>
            <article class="card profile qw"><div class="card-kicker">阿里巴巴</div><h3>钉钉 + 千问办公</h3><p>以对话即交付、钉钉深度接入、开放 Skill 与桌面电脑操控为核心。</p><div class="price">¥78 / 月起</div><div class="price-note">个人标准版连续包月；高级版连续包月 ¥158</div><ul><li>优势：Skill 文件化并支持开源社区获取，扩展路径清晰</li><li>优势：Computer Use 的权限、限制与确认策略披露充分</li><li>风险：复杂任务结果与稳定性仍需统一测评验证</li></ul></article>
          </div>
          <div class="table-wrap" style="margin-top:22px">
            <table class="diff-table"><thead><tr><th>差异维度</th><th>飞书 + 豆包工作</th><th>企业微信 + WorkBuddy</th><th>钉钉 + 千问办公</th></tr></thead><tbody>
              <tr><td>生态锚点</td><td>飞书消息、文档、会议、邮箱、审批、任务</td><td>企业微信/微信远程入口 + 腾讯文档/网盘/乐享</td><td>钉钉深度接入 + 个人云盘 + IM 频道</td></tr>
              <tr><td>Agent 形态</td><td>云端助手 + 本地现场专家 + Agent 团队</td><td>专家 + 云端助理 + 多 Agent 项目</td><td>桌面/网页/钉钉多端工作台 + Skill/连接器</td></tr>
              <tr><td>电脑操控</td><td>官方披露本地安全接入；桌面验证受权限初始化影响</td><td>入口与连接测试已通过，完整任务表现仍待验证</td><td>帮助文档最完整，连接器已打开，完整任务表现仍待验证</td></tr>
              <tr><td>扩展机制</td><td>伙伴、技能、框架与企业系统统一纳管</td><td>100+ 专家、7万+ Skills、企业共享</td><td>SKILL.md、GitHub、Skill 广场、团队分享</td></tr>
              <tr><td>企业交付</td><td>飞书 AI 套餐与点数，不限席位</td><td>公有多租户、VPC 单租户、私有化</td><td>个人版价格最透明；官方资料未见明确企业版价格</td></tr>
            </tbody></table>
          </div>
        </div>
      </section>

      <section id="benchmark">
        <div class="section-inner">
          <div class="section-head"><div><div class="eyebrow">04 · 统一测评</div><h2>任务执行 + 通信应用连通性</h2></div><div class="note">测评采用相同输入、独立输出目录和统一评分标准。任务执行占 75 分，通信应用连通性占 25 分；稳定性结论仅适用于单次运行。</div></div>
          <div class="protocol-grid">
            <article class="protocol-card"><h3>FieldPilot AI</h3><p>8 名 FDE、4 名平台工程师、3 名企业销售；12 个月预算 800 万元；90 天签 3 个付费试点并形成 500 万元有效管线。</p><ul><li>六个行业选两个优先行业</li><li>不少于 8 个公开来源</li><li>10 家目标企业清单</li><li>定价、产能、成本、毛利与 90 天 GTM</li><li>自我消息、个人待办、个人日历和个人文件空间</li><li>运行日志与通信连通日志</li></ul><p class="mono">相同核心任务 · 独立输出目录 · 最长 45 分钟</p></article>
            <div><h3>评分维度与权重</h3><div class="weights" id="metric-weights"></div></div>
          </div>
          <div class="run-grid" id="run-grid"></div>
          <div class="table-wrap" style="margin-top:22px"><table class="rubric"><thead><tr><th>维度</th><th>可验收标准</th><th>记录项</th></tr></thead><tbody>
            <tr><td>任务交付（75）</td><td>核心文件与日志完整、格式正确、模型可追溯、管理层可直接使用</td><td>完成率、公式/格式错误、来源质量、首结果与总耗时</td></tr>
            <tr><td>单次稳定性</td><td>错误可诊断、重试可恢复、不重复提交，45 分钟到时停止新增工作</td><td>报错、重试、卡顿、接管、断点恢复</td></tr>
            <tr><td>资源与可观测</td><td>Credits、文件体积和工具路径有记录；不可观测项明确标注</td><td>积分前后、产物大小、浏览器/电脑/连接器实际使用</td></tr>
            <tr><td>通信连通（25）</td><td>仅本人可见地完成自我消息、个人待办、个人日历和个人文件空间</td><td>动作耗时、成功依据、失败原因、权限提示、人工介入</td></tr>
          </tbody></table></div>
        </div>
      </section>

      <section id="industries">
        <div class="section-inner">
          <div class="section-head"><div><div class="eyebrow">05 · 行业覆盖</div><h2>行业覆盖</h2></div><p class="section-intro">官方行业场景或命名客户作为覆盖依据。点击结果可查看判断依据。</p></div>
          <div class="table-wrap"><table class="heatmap" aria-label="三款产品行业覆盖对比"><thead><tr><th>行业</th><th>豆包工作</th><th>WorkBuddy</th><th>千问办公</th></tr></thead><tbody id="industry-body"></tbody></table></div>
          <div class="industry-detail" id="industry-detail" aria-live="polite">点击覆盖结果查看依据。</div>
          <div class="control-bar" style="margin-top:26px"><div class="field"><label for="case-filter">案例产品</label><select id="case-filter"><option value="">全部</option><option value="doubao">豆包工作</option><option value="workbuddy">WorkBuddy</option><option value="qwen">千问办公</option></select></div></div>
          <div class="case-list" id="case-list"></div>
          <div class="section-head" style="margin-top:38px"><div><div class="eyebrow">公开企业样本</div><h3>公开企业与业务品牌样本分类</h3></div><p class="section-intro" id="enterprise-landscape-summary"></p></div>
          <div class="table-wrap"><table aria-label="WorkBuddy 官网公开企业与业务品牌样本分类"><thead><tr><th>行业组</th><th>样本数</th><th>企业或业务品牌</th><th>证据边界</th></tr></thead><tbody id="enterprise-landscape-body"></tbody></table></div>
          <div class="case-list" id="enterprise-gap-list" style="margin-top:18px"></div>
        </div>
      </section>

      <section id="opportunities">
        <div class="section-inner">
          <div class="section-head"><div><div class="eyebrow">06 · 商业机会</div><h2>浏览器与电脑操控打开执行型市场</h2></div><p class="section-intro">浏览器和电脑操控让办公 Agent 进入真实业务流程，也带来治理、评测、连接器和行业交付的新需求。</p></div>
          <div class="value-chain" aria-label="办公 Agent 商业价值链">
            <div class="chain-step"><div class="chain-index">01</div><b>通讯入口</b><span>IM、消息、会议、审批触发需求</span></div>
            <div class="chain-step"><div class="chain-index">02</div><b>上下文与计划</b><span>文档、知识库、记忆与多 Agent 拆解</span></div>
            <div class="chain-step"><div class="chain-index">03</div><b>执行路由</b><span>连接器/API 优先，浏览器与 GUI 补最后一公里</span></div>
            <div class="chain-step"><div class="chain-index">04</div><b>治理与人审</b><span>权限、敏感操作确认、日志、重试与恢复</span></div>
            <div class="chain-step"><div class="chain-index">05</div><b>交付与回写</b><span>文件、表格、PPT、待办、日历与业务系统</span></div>
          </div>
          <div class="opportunity-grid" id="opportunity-grid"></div>
        </div>
      </section>

      <section id="evidence">
        <div class="section-inner">
          <div class="section-head"><div><div class="eyebrow">07 · 证据与方法</div><h2>证据优先，结论有边界</h2></div><p class="section-intro">官方资料用于判断“存在什么”；实际运行用于判断“能否在当前环境完成”；社区资料用于理解采用动因与痛点。</p></div>
          <div class="method-grid">
            <article class="card"><h3>证据层级</h3><ol><li><b>OBS</b>：桌面界面与实际操作记录</li><li><b>OFF</b>：官方产品页、帮助文档、定价与安全说明</li><li><b>CASE</b>：公开客户名录或客户披露</li><li><b>MED</b>：独立媒体与行业分析</li><li><b>SOC</b>：社区、视频与社交讨论</li></ol></article>
            <article class="card"><h3>判断边界</h3><ul><li>× 表示本次未发现明确证据</li><li>产品内自测仅用于确认连接状态</li><li>命名客户仅用于确认行业覆盖</li><li>单次运行不外推长期稳定性</li><li>三款产品均使用各自可用配置完成测评</li></ul></article>
          </div>
          <div class="control-bar evidence-controls"><div class="field"><label for="evidence-type">证据类型</label><select id="evidence-type"><option value="">全部</option><option value="OBS">OBS</option><option value="OFF">OFF</option><option value="CASE">CASE</option><option value="MED">MED</option><option value="SOC">SOC</option></select></div><div class="field"><label for="evidence-search">检索证据</label><input id="evidence-search" type="search" placeholder="标题、产品或摘要"></div></div>
          <div class="evidence-list" id="evidence-list"></div>
        </div>
      </section>

      <footer class="footer"><div class="section-inner">报告更新时间：2026-08-25。公开资料、桌面核验与测评数据均保留独立来源标记；证据不足的维度不作推断。</div></footer>
    </main>
  </div>

  <dialog id="evidence-dialog">
    <div class="dialog-head"><h3>证据详情</h3><button class="dialog-close" id="dialog-close">关闭</button></div>
    <div class="dialog-body" id="dialog-body"></div>
  </dialog>

  <script>
    const DATA = ${inlineData};
    const evidenceById = new Map(DATA.evidence.items.map(item => [item.id, item]));
    const products = ["doubao", "workbuddy", "qwen"];
    const productNames = {doubao: "飞书 + 豆包工作", workbuddy: "企业微信 + WorkBuddy", qwen: "钉钉 + 千问办公"};
    const productMeta = {
      doubao: {company: "字节跳动", strengths: ["飞书原生协同与主动办公", "多 Agent 团队与行业模板", "权限继承和敏感操作确认"], strengthIds: ["agent-multi", "eco-proactive", "eco-mail", "computer-confirm"]},
      workbuddy: {company: "腾讯", strengths: ["旗舰、VPC 与私有化交付", "命名客户与行业覆盖密度", "企业级 Skill、专家与用量治理"], strengthIds: ["ent-vpc", "ent-private", "market-cases", "ent-usage"]},
      qwen: {company: "阿里巴巴", strengths: ["Computer Use 文档与确认策略", "开放式 Skill 安装与分享", "个人版价格和积分透明度"], strengthIds: ["computer-background", "artifact-pdf", "market-price-personal", "agent-skills"]}
    };
    const isFeatureCovered = (cell) => cell.status !== "本次未发现";

    const escapeHtml = (value) => String(value ?? "").replace(/[&<>\"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'\"':"&quot;","'":"&#039;"}[char]));
    const linkFor = (item) => item.url ? '<a href="' + escapeHtml(item.url) + '" target="_blank" rel="noreferrer">打开来源</a>' : '<span>桌面核验</span>';
    const featureStatusButton = (cell, product, featureId) => {
      const covered = isFeatureCovered(cell);
      const label = covered ? "有明确证据" : "待核验";
      const decision = cell.note || (covered ? "已有官方资料或桌面核验证据" : "当前公开资料与桌面核验未形成明确证据");
      return '<button class="feature-state ' + (covered ? 'covered' : 'uncovered') + '" data-evidence="' + escapeHtml((cell.evidence || []).join(",")) + '" data-decision="' + escapeHtml(decision) + '" aria-label="' + escapeHtml(productNames[product] + '，' + label + '，点击查看依据') + '">' + (covered ? '✓' : '×') + '</button>';
    };

    const categoryFilter = document.getElementById("category-filter");
    const statusFilter = document.getElementById("status-filter");
    const productFilter = document.getElementById("product-filter");
    [...new Set(DATA.features.features.map(item => item.category))].forEach(category => categoryFilter.insertAdjacentHTML("beforeend", '<option value="' + escapeHtml(category) + '">' + escapeHtml(category) + '</option>'));
    statusFilter.insertAdjacentHTML("beforeend", '<option value="covered">有明确证据</option><option value="uncovered">待核验</option>');

    function renderFeatureOverview() {
      const focus = productFilter.value;
      document.getElementById("feature-overview").innerHTML = products.map(product => {
        const cells = DATA.features.features.map(item => item[product]);
        const covered = cells.filter(isFeatureCovered).length;
        const uncovered = cells.length - covered;
        const meta = productMeta[product];
        return '<article class="feature-product-card' + (focus === product ? ' is-active' : '') + '" data-product="' + product + '"><div class="company">' + escapeHtml(meta.company) + '</div><h3>' + escapeHtml(productNames[product]) + '</h3><div class="feature-kpis"><div class="feature-kpi"><b>' + covered + '</b><span>有证据</span></div><div class="feature-kpi"><b>' + uncovered + '</b><span>待核验</span></div><div class="feature-kpi"><b>' + meta.strengthIds.length + '</b><span>优势项</span></div></div><ul class="feature-strengths">' + meta.strengths.map(item => '<li>' + escapeHtml(item) + '</li>').join("") + '</ul><button class="feature-focus-action" data-feature-focus="' + product + '">' + (focus === product ? '返回横向对照' : '查看该产品') + '</button></article>';
      }).join("");
    }

    function renderFeatures() {
      const search = document.getElementById("feature-search").value.trim().toLowerCase();
      const category = categoryFilter.value;
      const status = statusFilter.value;
      const focus = productFilter.value;
      const items = DATA.features.features.filter(item => {
        const matchesText = !search || (item.name + " " + item.category).toLowerCase().includes(search);
        const matchesCategory = !category || item.category === category;
        const matchesCellStatus = cell => status === "covered" ? isFeatureCovered(cell) : !isFeatureCovered(cell);
        const matchesStatus = !status || (focus ? matchesCellStatus(item[focus]) : products.some(product => matchesCellStatus(item[product])));
        return matchesText && matchesCategory && matchesStatus;
      });
      const grouped = new Map();
      items.forEach(item => {
        if (!grouped.has(item.category)) grouped.set(item.category, []);
        grouped.get(item.category).push(item);
      });
      document.getElementById("feature-body").innerHTML = [...grouped.entries()].map(([group, groupItems]) => groupItems.map((item, index) => '<tr>' + (index === 0 ? '<th class="category-group" scope="rowgroup" rowspan="' + groupItems.length + '">' + escapeHtml(group) + '</th>' : '') + '<td class="feature-name">' + escapeHtml(item.name) + '</td>' + products.map(product => '<td data-product-col="' + product + '">' + featureStatusButton(item[product], product, item.id) + '</td>').join("") + '</tr>').join("")).join("");
      document.querySelectorAll("[data-product-col]").forEach(element => { element.hidden = Boolean(focus) && element.dataset.productCol !== focus; });
      document.getElementById("feature-atlas").classList.toggle("single-product", Boolean(focus));
      document.getElementById("matrix-count").textContent = '显示 ' + items.length + ' / ' + DATA.features.features.length + ' 项 · ' + grouped.size + ' 个能力大类';
      renderFeatureOverview();
    }
    ["feature-search", "category-filter", "status-filter", "product-filter"].forEach(id => document.getElementById(id).addEventListener(id === "feature-search" ? "input" : "change", renderFeatures));
    document.getElementById("feature-overview").addEventListener("click", event => {
      const button = event.target.closest("[data-feature-focus]");
      if (!button) return;
      productFilter.value = productFilter.value === button.dataset.featureFocus ? "" : button.dataset.featureFocus;
      renderFeatures();
    });

    function openEvidence(ids, decision = "") {
      const items = ids.map(id => evidenceById.get(id)).filter(Boolean);
      const decisionHtml = decision ? '<div class="note" style="margin-bottom:18px"><b>判定说明</b><br>' + escapeHtml(decision) + '</div>' : '';
      document.getElementById("dialog-body").innerHTML = decisionHtml + (items.length ? items.map(item => '<article class="dialog-evidence"><div class="source-type">' + escapeHtml(item.id + ' · ' + item.type) + '</div><h4>' + escapeHtml(item.title) + '</h4><p>' + escapeHtml(item.summary) + '</p><div class="evidence-date">' + escapeHtml(item.version + ' · 观察 ' + item.observedAt) + ' · ' + linkFor(item) + '</div></article>').join("") : '<p>该状态暂未绑定详细证据。</p>');
      document.getElementById("evidence-dialog").showModal();
    }
    document.addEventListener("click", event => {
      const trigger = event.target.closest("[data-evidence]");
      if (trigger) openEvidence(trigger.dataset.evidence.split(",").filter(Boolean), trigger.dataset.decision || "");
    });
    document.getElementById("dialog-close").addEventListener("click", () => document.getElementById("evidence-dialog").close());

    document.getElementById("metric-weights").innerHTML = DATA.runs.metrics.map(metric => '<div class="weight-row"><span>' + escapeHtml(metric.name) + '</span><div class="weight-track"><div class="weight-bar" style="width:' + metric.weight + '%"></div></div><b>' + metric.weight + '%</b></div>').join("");
    const runStatus = {
      blocked_before_submission: ["权限验证受阻", "blocked"],
      skipped_permission_blocked: ["权限验证受阻", "blocked"],
      prompt_ready_permission_blocked: ["等待独立运行，权限初始化待验证", "blocked"],
      ready_for_submission: ["等待独立运行", "ready"],
      ready_with_mode_deviation: ["等待独立运行，存在模式差异", "deviation"],
      running: ["运行中", "ready"],
      completed: ["已完成", "ready"]
    };
    document.getElementById("run-grid").innerHTML = DATA.runs.runs.map(run => {
      const state = runStatus[run.status] || [run.status, ""];
      const results = Object.keys(run.results || {}).length ? Object.entries(run.results).map(([key,value]) => '<div class="metric-line"><span>' + escapeHtml(key) + '</span><span>' + escapeHtml(value) + '</span></div>').join("") : '<p>完整运行结果暂缺；本页不对交付质量、时效和稳定性作推断。</p>';
      return '<article class="card run-card" data-product="' + run.product + '"><div class="card-kicker">' + escapeHtml(productNames[run.product]) + '</div><h3>' + escapeHtml(run.version) + '</h3><div class="run-status ' + state[1] + '">' + escapeHtml(state[0]) + '</div><div class="metric-line"><span>测试准备</span><span>' + escapeHtml(run.configuration) + '</span></div>' + results + '</article>';
    }).join("");

    const industryBody = document.getElementById("industry-body");
    industryBody.innerHTML = DATA.cases.industries.map((item, index) => '<tr><td>' + escapeHtml(item.name) + '</td>' + products.map(product => { const covered = item[product] >= 2; const label = covered ? '覆盖' : '未覆盖'; return '<td><button class="heat-button ' + (covered ? 'heat-covered' : 'heat-uncovered') + '" data-industry="' + index + '" data-product="' + product + '" aria-label="' + escapeHtml(item.name + '，' + productNames[product] + '，' + label) + '">' + (covered ? '✓ 覆盖' : '× 未覆盖') + '</button></td>'; }).join("") + '</tr>').join("");
    industryBody.addEventListener("click", event => {
      const button = event.target.closest("[data-industry]");
      if (!button) return;
      const item = DATA.cases.industries[Number(button.dataset.industry)];
      const covered = item[button.dataset.product] >= 2;
      document.getElementById("industry-detail").textContent = item.name + ' · ' + productNames[button.dataset.product] + '：' + (covered ? '覆盖' : '未覆盖') + '。' + item.notes;
    });

    function renderCases() {
      const product = document.getElementById("case-filter").value;
      const items = DATA.cases.cases.filter(item => !product || item.product === product);
      document.getElementById("case-list").innerHTML = items.map(item => '<article class="case-card"><div class="case-meta">' + escapeHtml(productNames[item.product] || item.product) + ' · ' + escapeHtml(item.industry) + ' · ' + escapeHtml(item.caseType) + '</div><h3>' + escapeHtml(item.company) + '</h3><p>' + escapeHtml(item.summary) + '</p><button class="case-strength" data-evidence="' + escapeHtml((item.evidence || []).join(",")) + '">' + escapeHtml(item.strength) + '</button></article>').join("");
    }
    document.getElementById("case-filter").addEventListener("change", renderCases);

    document.getElementById("enterprise-landscape-summary").textContent = DATA.cases.enterpriseLandscape.summary;
    document.getElementById("enterprise-landscape-body").innerHTML = DATA.cases.enterpriseLandscape.rows.map(item => '<tr><td>' + escapeHtml(item.industry) + '</td><td>' + escapeHtml(String(item.count)) + '</td><td>' + escapeHtml(item.entities.join('、')) + '</td><td><button class="case-strength" data-evidence="' + escapeHtml((item.evidence || []).join(",")) + '">官网命名，未逐项披露范围与成效</button></td></tr>').join("");
    document.getElementById("enterprise-gap-list").innerHTML = DATA.cases.enterpriseLandscape.evidenceGap.map(item => '<article class="case-card"><div class="case-meta">' + escapeHtml(productNames[item.product]) + ' · 证据缺口</div><p>' + escapeHtml(item.finding) + '</p><button class="case-strength" data-evidence="' + escapeHtml((item.evidence || []).join(",")) + '">查看依据</button></article>').join("");

    document.getElementById("opportunity-grid").innerHTML = DATA.cases.opportunities.map((item, index) => '<article class="card opportunity"><div><div class="card-kicker">机会 ' + String(index + 1).padStart(2, '0') + '</div><h3>' + escapeHtml(item.name) + '</h3><p>' + escapeHtml(item.value) + '</p><div class="metric-line"><span>现在为什么成立</span><span>' + escapeHtml(item.whyNow) + '</span></div><div class="metric-line"><span>核心买方</span><span>' + escapeHtml(item.buyer) + '</span></div></div><aside><b>主要风险</b><br>' + escapeHtml(item.risk) + '</aside></article>').join("");

    function renderEvidenceList() {
      const type = document.getElementById("evidence-type").value;
      const search = document.getElementById("evidence-search").value.trim().toLowerCase();
      const items = DATA.evidence.items.filter(item => (!type || item.type === type) && (!search || (item.title + ' ' + item.product + ' ' + item.summary).toLowerCase().includes(search)));
      document.getElementById("evidence-list").innerHTML = items.map(item => '<article class="evidence-row"><div class="source-type">' + escapeHtml(item.id) + '</div><div><b>' + escapeHtml(item.title) + '</b><br>' + linkFor(item) + '</div><p>' + escapeHtml(item.summary) + '</p><div class="evidence-date">' + escapeHtml(item.observedAt) + '<br>' + escapeHtml(item.version) + '</div></article>').join("");
    }
    document.getElementById("evidence-type").addEventListener("change", renderEvidenceList);
    document.getElementById("evidence-search").addEventListener("input", renderEvidenceList);

    const navLinks = [...document.querySelectorAll(".nav a")];
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === '#' + entry.target.id));
    }), {rootMargin: "-25% 0px -65% 0px"});
    document.querySelectorAll("main section[id]").forEach(section => observer.observe(section));
    document.getElementById("print-report").addEventListener("click", () => window.print());

    renderFeatures();
    renderCases();
    renderEvidenceList();
  </script>
</body>
</html>`;

fs.mkdirSync(reportDir, { recursive: true });
fs.writeFileSync(path.join(reportDir, "index.html"), html, "utf8");
console.log(path.join(reportDir, "index.html"));
