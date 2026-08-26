const report = window.REPORT_DATA;

if (!report) {
  document.body.innerHTML = '<main class="noscript"><h1>数据未生成</h1><p>请先运行 npm run build。</p></main>';
  throw new Error("REPORT_DATA is missing");
}

const productOrder = ["doubao", "workbuddy", "qwen"];
const productMeta = {
  doubao: { name: "飞书 + 豆包工作", short: "豆包工作", company: "字节跳动" },
  workbuddy: { name: "企业微信 + WorkBuddy", short: "WorkBuddy", company: "腾讯" },
  qwen: { name: "钉钉 + 千问办公", short: "千问办公", company: "阿里巴巴" }
};

const evidenceTypes = {
  OBS: "实测",
  OFF: "官方",
  CASE: "案例",
  MED: "媒体",
  SOC: "社区"
};

const capabilityTone = {
  "能": "yes",
  "有": "yes",
  "部分能": "partial",
  "未完成": "blocked",
  "未见入口": "no",
  "未见": "no"
};

const industryLabels = {
  0: "未见",
  1: "推断",
  2: "场景",
  3: "命名"
};

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const insights = report.insights;
const runs = report.runs;
const controls = report.controlSurfaces;
const cases = report.cases;
const evidence = report.evidence;

function renderHero() {
  const stats = [
    ["3/3", "交付 6 个文件"],
    ["2/3", "完成浏览器任务"],
    ["0/3", "生成电脑测试文件"],
    ["1/3", "完成指定协同生态"]
  ];
  document.querySelector("#hero-summary").innerHTML = stats.map(([value, label]) => `
    <div class="hero-stat"><strong>${value}</strong><span>${escapeHtml(label)}</span></div>
  `).join("");
}

function renderProducts() {
  document.querySelector("#product-ledger").innerHTML = insights.productPositions.map((item) => {
    const meta = productMeta[item.id];
    return `
      <article class="product-row">
        <div class="product-name"><span>${escapeHtml(meta.company)}</span><h3>${escapeHtml(meta.name)}</h3></div>
        <div class="product-verdict"><strong>${escapeHtml(item.conclusion)}</strong><p>${escapeHtml(item.reason)}</p></div>
        <div class="product-fit"><span>适合</span><p>${escapeHtml(item.bestFor)}</p></div>
      </article>
    `;
  }).join("");
}

function renderCapabilities() {
  document.querySelector("#capability-body").innerHTML = insights.capabilityModules.map((module) => `
    <tr>
      <th scope="row">${escapeHtml(module.name)}</th>
      <td class="question-cell">${escapeHtml(module.question)}</td>
      ${productOrder.map((product) => renderCapabilityCell(module.products[product])).join("")}
    </tr>
  `).join("");
}

function renderCapabilityCell(result) {
  const tone = capabilityTone[result.label] || "no";
  return `<td><strong class="state ${tone}">${escapeHtml(result.label)}</strong><span class="cell-note">${escapeHtml(result.note)}</span></td>`;
}

function renderBenchmark() {
  document.querySelector("#benchmark-lead").innerHTML = `
    <strong>${escapeHtml(runs.summary.commonResult)}</strong>
    <p>${escapeHtml(runs.summary.mainDifference)}</p>
  `;

  document.querySelector("#benchmark-body").innerHTML = runs.runs.map((run) => {
    const meta = productMeta[run.product];
    const position = insights.productPositions.find((item) => item.id === run.product);
    const communication = run.results.communication;
    const ecosystem = communication.comparisonStatus === "ALIGNED"
      ? `${communication.target} ${communication.successfulActions}/${communication.requiredActions}`
      : communication.comparisonStatus === "PROTOCOL_DEVIATION"
        ? `${communication.target} 未完成`
        : `${communication.target} 授权阻塞`;
    return `
      <tr>
        <th scope="row"><span>${escapeHtml(meta.company)}</span>${escapeHtml(meta.name)}</th>
        <td><strong>${run.results.coreCompletionMinutes} 分钟</strong></td>
        <td><strong>${run.results.deliverables.completed}/${run.results.deliverables.required}</strong></td>
        <td>${escapeHtml(position.artifactConclusion)}</td>
        <td>${escapeHtml(ecosystem)}</td>
      </tr>
    `;
  }).join("");
}

function renderControlConcepts() {
  document.querySelector("#concept-pair").innerHTML = insights.controlConcepts.map((item) => `
    <article class="concept-block ${item.id}">
      <span>${escapeHtml(item.name)}</span>
      <h3>${escapeHtml(item.cnName)}</h3>
      <dl>
        <div><dt>覆盖</dt><dd>${escapeHtml(item.scope)}</dd></div>
        <div><dt>价值</dt><dd>${escapeHtml(item.value)}</dd></div>
        <div><dt>限制</dt><dd>${escapeHtml(item.limit)}</dd></div>
        <div><dt>收费</dt><dd>${escapeHtml(item.businessModel)}</dd></div>
      </dl>
    </article>
  `).join("");

  document.querySelector("#control-result").innerHTML = `
    <strong>浏览器任务已经能做，电脑任务还不能免人工。</strong>
    <p>${escapeHtml(controls.actualRunSummary.finding)}</p>
  `;

  const browserModule = insights.capabilityModules.find((item) => item.id === "browser-use");
  const computerModule = insights.capabilityModules.find((item) => item.id === "computer-use");
  document.querySelector("#control-body").innerHTML = controls.products.map((item) => {
    const browser = browserModule.products[item.id];
    const computer = computerModule.products[item.id];
    const position = insights.productPositions.find((entry) => entry.id === item.id);
    return `
      <tr>
        <th scope="row">${escapeHtml(item.name)}</th>
        <td>${renderControlState(browser.label, browser.note)}</td>
        <td>${renderControlState(computer.label, computer.note)}</td>
        <td>${escapeHtml(position.controlConclusion)}</td>
      </tr>
    `;
  }).join("");
}

function renderControlState(label, note) {
  return `<strong class="state ${capabilityTone[label] || "no"}">${escapeHtml(label)}</strong><span class="cell-note">${escapeHtml(note)}</span>`;
}

function renderIndustries() {
  const counts = Object.fromEntries(productOrder.map((product) => [product, { 0: 0, 1: 0, 2: 0, 3: 0 }]));
  for (const industry of cases.industries) {
    for (const product of productOrder) counts[product][industry[product]] += 1;
  }

  document.querySelector("#coverage-summary").innerHTML = productOrder.map((product) => {
    const count = counts[product];
    return `
      <article class="coverage-row">
        <h3>${escapeHtml(productMeta[product].name)}</h3>
        <div class="coverage-numbers">
          <span><strong>${count[3]}</strong> 命名或密集场景</span>
          <span><strong>${count[2]}</strong> 官方场景</span>
          <span><strong>${count[1]}</strong> 能力推断</span>
        </div>
      </article>
    `;
  }).join("");

  document.querySelector("#industry-body").innerHTML = cases.industries.map((industry) => `
    <tr>
      <th scope="row">${escapeHtml(industry.name)}</th>
      ${productOrder.map((product) => renderIndustryState(industry[product])).join("")}
    </tr>
  `).join("");
}

function renderIndustryState(level) {
  return `<td><span class="coverage-mark level-${level}" aria-hidden="true"><i></i><i></i><i></i></span><strong>${escapeHtml(industryLabels[level])}</strong></td>`;
}

function renderTrends() {
  document.querySelector("#trend-list").innerHTML = insights.trends.map((item) => `
    <article class="trend-row">
      <h3>${escapeHtml(item.title)}</h3>
      <div><span>原因</span><p>${escapeHtml(item.reason)}</p></div>
      <div><span>影响</span><p>${escapeHtml(item.impact)}</p></div>
    </article>
  `).join("");
}

function renderOpportunities() {
  document.querySelector("#opportunity-list").innerHTML = insights.opportunities.map((item) => `
    <article class="opportunity-row">
      <div class="opportunity-title"><h3>${escapeHtml(item.title)}</h3><span>${escapeHtml(item.model)}</span></div>
      <dl>
        <div><dt>谁会买</dt><dd>${escapeHtml(item.buyer)}</dd></div>
        <div><dt>买什么</dt><dd>${escapeHtml(item.job)}</dd></div>
        <div><dt>为什么</dt><dd>${escapeHtml(item.whyPay)}</dd></div>
        <div><dt>前提</dt><dd>${escapeHtml(item.condition)}</dd></div>
      </dl>
    </article>
  `).join("");
}

function renderSources() {
  const selectedIds = [
    "RUN-DB-001", "RUN-WB-001", "RUN-QW-001",
    "OBS-DB-001", "OBS-WB-001", "OBS-QW-001",
    "OFF-DB-005", "OFF-WB-002", "OFF-WB-005",
    "OFF-QW-007", "OFF-QW-008", "OFF-FS-001"
  ];
  const byId = new Map(evidence.items.map((item) => [item.id, item]));
  document.querySelector("#source-list").innerHTML = selectedIds.map((id) => byId.get(id)).filter(Boolean).map((item) => {
    const title = item.url
      ? `<a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.title)}</a>`
      : `<span>${escapeHtml(item.title)}</span>`;
    return `<article class="source-row"><strong>${escapeHtml(evidenceTypes[item.type] || item.type)}</strong><div>${title}<small>${escapeHtml(item.observedAt)}</small></div></article>`;
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

function setupSidebar() {
  const sidebar = document.querySelector("#sidebar");
  const toggle = document.querySelector("#menu-toggle");
  const scrim = document.querySelector("#sidebar-scrim");
  const navLinks = [...document.querySelectorAll(".sidebar-nav a")];

  const closeSidebar = () => {
    sidebar.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    scrim.hidden = true;
  };

  toggle.addEventListener("click", () => {
    const open = !sidebar.classList.contains("is-open");
    sidebar.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    scrim.hidden = !open;
  });
  scrim.addEventListener("click", closeSidebar);
  navLinks.forEach((link) => link.addEventListener("click", closeSidebar));

  const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!current) return;
    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${current.target.id}`;
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }, { rootMargin: "-15% 0px -72% 0px", threshold: [0, 0.2, 0.6] });
  sections.forEach((section) => observer.observe(section));
}

function init() {
  renderHero();
  renderProducts();
  renderCapabilities();
  renderBenchmark();
  renderControlConcepts();
  renderIndustries();
  renderTrends();
  renderOpportunities();
  renderSources();
  setupTheme();
  setupSidebar();
}

init();
