const report = window.REPORT_DATA;

if (!report) {
  document.body.innerHTML = '<main class="noscript"><h1>数据未生成</h1><p>请先运行 npm run build。</p></main>';
  throw new Error("REPORT_DATA is missing");
}

const productOrder = ["doubao", "workbuddy", "qwen"];
const productMeta = {
  doubao: {
    shortName: "豆包工作",
    name: "飞书 + 豆包工作",
    company: "字节跳动",
    summary: "核心差异是飞书组织上下文、云电脑、Office 交付和多 Agent 协作。官方能力覆盖很广，本地 GUI 最小测试被录制授权挡住。",
    points: [
      "飞书账号、消息、文档、会议、审批与多维表格构成协同入口",
      "办公任务模式公开支持浏览器、本地电脑、Skill、定时任务和 Office",
      "两篇近期媒体实测记录云电脑、视觉浏览器、周报和审批界面操作"
    ],
    fit: "已经使用飞书，重视企业上下文与成果回到协作现场的团队",
    gap: "本次 Browser Use 与 Computer Use 均受授权阻塞",
    evidence: "官方资料 + 本地实测 + 2 篇 2026-08 媒体体验"
  },
  workbuddy: {
    shortName: "WorkBuddy",
    name: "企业微信 + WorkBuddy",
    company: "腾讯",
    summary: "核心差异是本地文件、专家与 Skill、云端托管、企业版治理和企业微信远程任务入口。本次浏览器操作完成，桌面 GUI 路径缺失。",
    points: [
      "官方提供个人端、企业旗舰版、专享版与私有化交付形态",
      "企业微信可远程下达任务，真正执行发生在安装 WorkBuddy 的电脑",
      "企业版官网公开金融、制造、零售、物流、游戏和电信客户名录"
    ],
    fit: "依赖微信与企业微信入口，并需要本地文件或私有化交付的团队",
    gap: "本次指定的企业微信 4 项个人资源动作没有完成",
    evidence: "官方资料 + 本地实测 + 企业客户名录"
  },
  qwen: {
    shortName: "千问办公",
    name: "钉钉 + 千问办公",
    company: "阿里巴巴",
    summary: "核心差异是桌面、Web 与钉钉三种入口，专家套件、可复算工作簿、浏览器扩展和独立 Computer Use。本次浏览器完成，桌面保存失败。",
    points: [
      "官方专家套件覆盖金融、法务、咨询、教育、电商和产品研发",
      "桌面端直连本地文件，Web 端提供网盘、网页发布和定时任务",
      "本次生成的工作簿含 44 个公式，PPT 第 6 页存在画布溢出"
    ],
    fit: "已经使用钉钉，希望统一办公交付、专家套件和浏览器自动化的团队",
    gap: "电脑操控未完成文件落盘，钉钉 OAuth 未完成",
    evidence: "官方资料 + 本地实测 + 产物结构与视觉检查"
  }
};

const typeLabels = {
  OBS: "本地实测",
  OFF: "官方资料",
  CASE: "公开案例",
  MED: "媒体观察",
  SOC: "社区内容"
};

const statusView = {
  "已实测完成": { label: "实测完成", tone: "is-pass" },
  "官方宣称": { label: "官方资料", tone: "is-claim" },
  "存在但未执行": { label: "入口存在，未执行", tone: "is-pending" },
  "第三方报告": { label: "第三方资料", tone: "is-pending" },
  "环境或权限阻塞": { label: "本次阻塞", tone: "is-blocked" },
  "本次未发现": { label: "本次未发现", tone: "is-missing" }
};

const controlLabels = {
  PASS: "完成",
  PARTIAL: "部分完成",
  BLOCKED: "阻塞",
  UNAVAILABLE: "本次不可用"
};

const industryLabels = {
  0: "未见证据",
  1: "能力可推断",
  2: "官方场景",
  3: "命名客户或密集场景"
};

let showAllSources = false;

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const featureData = report.features;
const evidenceData = report.evidence;
const casesData = report.cases;
const runData = report.runs;
const controlData = report.controlSurfaces;
const evidenceById = new Map(evidenceData.items.map((item) => [item.id, item]));

function renderHero() {
  const browserPasses = controlData.actualRunSummary.browserUse.PASS;
  const stats = [
    [featureData.features.length, "项功能"],
    [casesData.industries.length, "个行业"],
    [browserPasses, "条浏览器任务完成"],
    [0, "条电脑文件落盘"]
  ];

  document.querySelector("#hero-stats").innerHTML = stats.map(([value, label]) => `
    <div class="hero-stat"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>
  `).join("");

  const verdicts = [
    ["文件交付", "三家都生成了 6 个要求文件。WorkBuddy 核心完成最快，豆包工作接近；千问办公受运行时准备影响明显更慢。"],
    ["产物返工", "WorkBuddy 的 PPT 信息组织最好。豆包工作有跨文件分数不一致。千问办公 PPT 使用英文，并有一页画布溢出。"],
    ["浏览器操控", "WorkBuddy 和千问办公完成相同的页面表单任务。豆包工作本次被录制授权阻塞。"],
    ["电脑操控", "三家都没有完成 computer-use.txt 文件落盘。当前不能把桌面 GUI 操控当作免人工生产能力。"],
    ["协同生态", "豆包工作的飞书动作完成。WorkBuddy 的飞书结果不计入企业微信。千问办公的钉钉动作受 OAuth 阻塞。"]
  ];

  document.querySelector("#verdict-list").innerHTML = verdicts.map(([title, body]) => `
    <article class="verdict-item"><strong>${escapeHtml(title)}</strong><p>${escapeHtml(body)}</p></article>
  `).join("");
}

function renderProductSwitcher() {
  const switcher = document.querySelector("#product-switcher");
  switcher.innerHTML = productOrder.map((id, index) => `
    <button class="product-tab" type="button" role="tab" id="product-tab-${id}" data-product="${id}"
      aria-controls="product-detail" aria-selected="${index === 0}">${escapeHtml(productMeta[id].name)}</button>
  `).join("");

  switcher.addEventListener("click", (event) => {
    const button = event.target.closest("[data-product]");
    if (!button) return;
    for (const tab of switcher.querySelectorAll("[role='tab']")) {
      tab.setAttribute("aria-selected", String(tab === button));
    }
    renderProductDetail(button.dataset.product);
  });

  renderProductDetail("doubao");
}

function renderProductDetail(id) {
  const meta = productMeta[id];
  const run = runData.runs.find((item) => item.product === id);
  const control = controlData.products.find((item) => item.id === id);
  document.querySelector("#product-detail").setAttribute("aria-labelledby", `product-tab-${id}`);
  document.querySelector("#product-detail").innerHTML = `
    <div class="product-copy">
      <h3>${escapeHtml(meta.name)}</h3>
      <p>${escapeHtml(meta.summary)}</p>
      <ul class="product-points">${meta.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
    </div>
    <aside class="product-facts">
      <div class="product-fact"><span>适合先看</span><strong>${escapeHtml(meta.fit)}</strong></div>
      <div class="product-fact"><span>本次缺口</span><strong>${escapeHtml(meta.gap)}</strong></div>
      <div class="product-fact"><span>核心任务</span><strong>${run.results.coreCompletionMinutes} 分钟完成，${run.results.deliverables.completed}/${run.results.deliverables.required} 文件</strong></div>
      <div class="product-fact"><span>GUI 结论</span><strong>${escapeHtml(control.conclusion)}</strong></div>
      <div class="product-fact"><span>证据构成</span><strong>${escapeHtml(meta.evidence)}</strong></div>
    </aside>
  `;
}

function renderFeatureControls() {
  const categorySelect = document.querySelector("#feature-category");
  const categories = [...new Set(featureData.features.map((feature) => feature.category))];
  categorySelect.innerHTML = `<option value="">全部模块</option>${categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("")}`;

  const legendStatuses = ["已实测完成", "官方宣称", "存在但未执行", "环境或权限阻塞", "本次未发现"];
  document.querySelector("#status-legend").innerHTML = legendStatuses.map((status) => {
    const view = statusView[status];
    return `<span class="legend-item"><i class="legend-swatch ${view.tone}"></i>${escapeHtml(view.label)}</span>`;
  }).join("");

  document.querySelector("#feature-search").addEventListener("input", renderFeatures);
  categorySelect.addEventListener("change", renderFeatures);
  document.querySelector("#feature-body").addEventListener("click", (event) => {
    const button = event.target.closest("[data-feature-id][data-product-id]");
    if (!button) return;
    openEvidenceDialog(button.dataset.featureId, button.dataset.productId);
  });
  renderFeatures();
}

function renderFeatures() {
  const query = document.querySelector("#feature-search").value.trim().toLowerCase();
  const category = document.querySelector("#feature-category").value;
  const rows = featureData.features.filter((feature) => {
    const matchesQuery = !query || `${feature.category} ${feature.name}`.toLowerCase().includes(query);
    return matchesQuery && (!category || feature.category === category);
  });

  document.querySelector("#feature-count").textContent = `${rows.length} / ${featureData.features.length} 项`;
  document.querySelector("#feature-body").innerHTML = rows.length ? rows.map((feature) => `
    <tr>
      <td class="feature-category-cell">${escapeHtml(feature.category)}</td>
      <th class="feature-name-cell" scope="row">${escapeHtml(feature.name)}</th>
      ${productOrder.map((product) => renderStatusCell(feature, product)).join("")}
    </tr>
  `).join("") : `<tr class="empty-row"><td colspan="5">没有匹配的功能。请调整关键词或模块。</td></tr>`;
}

function renderStatusCell(feature, product) {
  const state = feature[product];
  const view = statusView[state.status] || statusView["本次未发现"];
  return `
    <td>
      <button class="status-button ${view.tone}" type="button" data-feature-id="${feature.id}" data-product-id="${product}">
        <span>${escapeHtml(view.label)}${state.note ? `<small class="feature-note">${escapeHtml(state.note)}</small>` : ""}</span>
      </button>
    </td>
  `;
}

function openEvidenceDialog(featureId, productId) {
  const feature = featureData.features.find((item) => item.id === featureId);
  const state = feature[productId];
  const meta = productMeta[productId];
  const sources = state.evidence.map((id) => evidenceById.get(id)).filter(Boolean);
  document.querySelector("#dialog-title").textContent = `${feature.name} · ${meta.shortName}`;
  document.querySelector("#dialog-body").innerHTML = `
    <div class="dialog-status"><strong>${escapeHtml(state.status)}</strong>${state.note ? `<p>${escapeHtml(state.note)}</p>` : ""}</div>
    ${sources.length ? sources.map((source) => `
      <article class="dialog-source">
        <strong>${escapeHtml(source.title)}</strong>
        <p>${escapeHtml(source.summary)}</p>
        ${source.url ? `<a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">打开原始来源</a>` : `<span>${escapeHtml(source.id)}</span>`}
      </article>
    `).join("") : `<p>当前没有可展开的来源条目。</p>`}
  `;
  document.querySelector("#evidence-dialog").showModal();
}

function renderBenchmark() {
  document.querySelector("#benchmark-summary").innerHTML = `
    <div class="benchmark-summary-main"><h3>${escapeHtml(runData.summary.commonResult)}</h3><p>${escapeHtml(runData.summary.mainDifference)}</p></div>
    <div class="benchmark-boundary"><strong>证据边界</strong><p>${escapeHtml(runData.summary.boundary)}</p></div>
  `;

  document.querySelector("#benchmark-rows").innerHTML = runData.runs.map((run) => {
    const meta = productMeta[run.product];
    const communication = run.results.communication;
    const communicationText = communication.comparisonStatus === "ALIGNED"
      ? `${communication.successfulActions}/${communication.requiredActions} 完成`
      : communication.comparisonStatus === "PROTOCOL_DEVIATION"
        ? "替代通道，不计分"
        : "0/4，授权阻塞";
    return `
      <article class="benchmark-row">
        <div class="benchmark-cell benchmark-product"><span>产品组合</span><strong>${escapeHtml(meta.name)}</strong><p>${escapeHtml(run.environment.slice(0, 2).join("，"))}</p></div>
        <div class="benchmark-cell"><span>首个文件</span><strong>${run.results.firstVisibleMinutes} 分钟</strong></div>
        <div class="benchmark-cell"><span>核心完成</span><strong>${run.results.coreCompletionMinutes} 分钟</strong></div>
        <div class="benchmark-cell"><span>交付文件</span><strong>${run.results.deliverables.completed}/${run.results.deliverables.required}</strong></div>
        <div class="benchmark-cell"><span>指定生态</span><strong class="${communication.comparisonStatus === "ALIGNED" ? "" : "benchmark-warning"}">${escapeHtml(communicationText)}</strong></div>
        <div class="benchmark-cell benchmark-conclusion"><span>本次结论</span><strong>${escapeHtml(run.results.deckCheck)}</strong><p>${escapeHtml(run.conclusion)}</p></div>
      </article>
    `;
  }).join("");

  document.querySelector("#metric-grid").innerHTML = runData.metrics.map((metric) => `
    <article class="metric-item"><strong>${escapeHtml(metric.name)}</strong><p>${escapeHtml(metric.definition)}</p></article>
  `).join("");
}

function renderControlSurfaces() {
  document.querySelector("#control-callout").textContent = controlData.actualRunSummary.finding;
  document.querySelector("#control-body").innerHTML = controlData.products.map((product) => `
    <tr>
      <th class="control-product" scope="row"><strong>${escapeHtml(product.name)}</strong><p>${escapeHtml(product.businessMeaning)}</p></th>
      ${["browserUse", "computerUse", "inAppBrowser"].map((key) => renderControlCell(product[key])).join("")}
    </tr>
  `).join("");
}

function renderControlCell(result) {
  const tone = result.result.toLowerCase();
  return `<td class="control-cell"><span class="result-chip ${tone}">${escapeHtml(controlLabels[result.result])}</span><p>${escapeHtml(result.actualRun)}</p></td>`;
}

function renderIndustries() {
  document.querySelector("#industry-legend").innerHTML = Object.entries(casesData.industryScale).map(([level, label]) => `
    <span class="industry-legend-item"><span class="industry-level level-${level}"><i></i><i></i><i></i></span>${escapeHtml(label)}</span>
  `).join("");

  document.querySelector("#industry-body").innerHTML = casesData.industries.map((industry) => `
    <tr>
      <th scope="row">${escapeHtml(industry.name)}</th>
      ${productOrder.map((product) => renderIndustryCell(industry[product])).join("")}
      <td class="industry-notes">${escapeHtml(industry.notes)}</td>
    </tr>
  `).join("");

  const namedCases = casesData.cases.filter((item) => item.caseType !== "证据缺口").slice(0, 7);
  const gaps = casesData.enterpriseLandscape.evidenceGap;
  document.querySelector("#case-strip").innerHTML = `
    <div class="case-column"><h3>公开案例与场景</h3>${namedCases.map(renderCase).join("")}</div>
    <div class="case-column"><h3>当前证据缺口</h3>${gaps.map((gap) => `
      <article class="case-item"><strong>${escapeHtml(productMeta[gap.product].name)}</strong><p>${escapeHtml(gap.finding)}</p><small>${escapeHtml(gap.evidence.join("，"))}</small></article>
    `).join("")}</div>
  `;
}

function renderIndustryCell(level) {
  return `<td><span class="industry-level level-${level}"><i></i><i></i><i></i></span><span class="industry-score-label">${escapeHtml(industryLabels[level])}</span></td>`;
}

function renderCase(item) {
  return `<article class="case-item"><strong>${escapeHtml(item.company)}</strong><p>${escapeHtml(item.summary)}</p><small>${escapeHtml(item.industry)} · ${escapeHtml(item.strength)}</small></article>`;
}

function renderOpportunities() {
  document.querySelector("#opportunity-list").innerHTML = casesData.opportunities.map((item) => `
    <article class="opportunity-item">
      <h3>${escapeHtml(item.name)}</h3>
      <p class="opportunity-value">${escapeHtml(item.value)}</p>
      <div class="opportunity-meta">
        <p><span>成立原因</span><strong>${escapeHtml(item.whyNow)}</strong></p>
        <p><span>主要买方</span><strong>${escapeHtml(item.buyer)}</strong></p>
        <p><span>主要风险</span><strong>${escapeHtml(item.risk)}</strong></p>
      </div>
    </article>
  `).join("");
}

function renderSources() {
  const query = document.querySelector("#source-search").value.trim().toLowerCase();
  const matchedItems = evidenceData.items.filter((item) => {
    const productName = item.product === "cross-product" ? "跨产品" : (productMeta[item.product]?.name || item.product);
    return !query || `${item.id} ${item.type} ${item.title} ${item.summary} ${productName}`.toLowerCase().includes(query);
  });

  const items = query || showAllSources ? matchedItems : matchedItems.slice(0, 12);
  const moreButton = document.querySelector("#source-more");
  moreButton.hidden = Boolean(query) || matchedItems.length <= 12;
  moreButton.textContent = showAllSources ? "收起来源" : `显示全部 ${matchedItems.length} 条来源`;

  document.querySelector("#source-count").textContent = query
    ? `${matchedItems.length} 条匹配`
    : `${evidenceData.items.length} 条来源`;
  document.querySelector("#source-list").innerHTML = items.map((item) => {
    const title = item.url
      ? `<a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.title)}</a>`
      : `<span>${escapeHtml(item.title)}</span>`;
    return `
      <article class="source-item">
        <div class="source-type">${escapeHtml(typeLabels[item.type] || item.type)}</div>
        <div class="source-title">${title}</div>
        <div class="source-summary">${escapeHtml(item.summary)}</div>
        <div class="source-date">${escapeHtml(item.observedAt || "日期未记录")}</div>
      </article>
    `;
  }).join("");
}

function setupTheme() {
  const root = document.documentElement;
  const stored = localStorage.getItem("agent-report-theme");
  if (stored === "light" || stored === "dark") root.dataset.theme = stored;
  document.querySelector("#theme-button").addEventListener("click", () => {
    const current = root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("agent-report-theme", next);
  });
}

function setupNavigation() {
  const links = [...document.querySelectorAll(".primary-nav a")];
  const targets = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    for (const link of links) {
      const active = link.getAttribute("href") === `#${visible.target.id}`;
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    }
  }, { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.2, 0.6] });
  targets.forEach((target) => observer.observe(target));
}

function init() {
  renderHero();
  renderProductSwitcher();
  renderFeatureControls();
  renderBenchmark();
  renderControlSurfaces();
  renderIndustries();
  renderOpportunities();
  renderSources();
  setupTheme();
  setupNavigation();

  document.querySelector("#source-search").addEventListener("input", renderSources);
  document.querySelector("#source-more").addEventListener("click", () => {
    showAllSources = !showAllSources;
    renderSources();
  });
  document.querySelector("#dialog-close").addEventListener("click", () => document.querySelector("#evidence-dialog").close());
  document.querySelector("#evidence-dialog").addEventListener("click", (event) => {
    if (event.target === event.currentTarget) event.currentTarget.close();
  });
}

init();
