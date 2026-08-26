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
  SOC: "社区",
  RES: "补充调研"
};

const industryLabels = {
  0: "暂无证据",
  1: "能力可用",
  2: "官方场景",
  3: "明确覆盖"
};

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const insights = report.insights;
const runs = report.runs;
const cases = report.cases;
const evidence = report.evidence;

function renderProducts() {
  document.querySelector("#product-ledger").innerHTML = insights.productPositions.map((item) => {
    const meta = productMeta[item.id];
    const coverage = cases.industries.reduce((counts, industry) => {
      counts[industry[item.id]] += 1;
      return counts;
    }, { 0: 0, 1: 0, 2: 0, 3: 0 });
    return `
      <article class="product-row">
        <div class="product-name">
          <span>${escapeHtml(meta.company)}</span><h3>${escapeHtml(meta.name)}</h3>
          <div class="product-release"><strong>发布</strong><p>${escapeHtml(item.releaseStatus)}</p></div>
        </div>
        <div class="product-verdict">
          <strong>${escapeHtml(item.conclusion)}</strong><p>${escapeHtml(item.reason)}</p>
          <p class="coverage-stats">行业证据：${coverage[3]} 个明确覆盖，${coverage[2]} 个官方场景，${coverage[1]} 个能力可用。</p>
        </div>
        <div class="product-fit"><span>优先行业</span><div class="industry-tags">${item.industries.map((industry) => `<i>${escapeHtml(industry)}</i>`).join("")}</div></div>
      </article>
    `;
  }).join("");
}

function renderPriorityFeatures() {
  const features = insights.priorityFeatures;
  const categoryCounts = features.reduce((counts, feature) => {
    counts[feature.category] = (counts[feature.category] || 0) + 1;
    return counts;
  }, {});
  let previousCategory = "";
  document.querySelector("#priority-feature-body").innerHTML = features.map((feature) => {
    const categoryCell = feature.category !== previousCategory
      ? `<th class="matrix-category" rowspan="${categoryCounts[feature.category]}" scope="rowgroup"><img src="assets/icons/${feature.icon}.svg" alt=""><span>${escapeHtml(feature.category)}</span></th>`
      : "";
    previousCategory = feature.category;
    return `
      <tr>
        ${categoryCell}
        <th class="matrix-feature" scope="row">${escapeHtml(feature.name)}</th>
        ${productOrder.map((product) => renderPriorityFeatureCell(feature.products[product])).join("")}
      </tr>
    `;
  }).join("");
}

function renderPriorityFeatureCell(result) {
  const supported = result.state === "yes";
  const warning = /本次|公开体验/.test(result.note);
  return `<td><strong class="support ${supported ? "supported" : "unsupported"}">${supported ? "✅ 支持" : "❌ 未见"}</strong><span class="matrix-note${warning ? " warning" : ""}">${escapeHtml(result.note)}</span></td>`;
}

function renderBenchmark() {
  const story = [
    ["做了什么", runs.summary.whatWasTested],
    ["为什么这样测", runs.summary.whyTested],
    ["结果", runs.summary.result]
  ];
  document.querySelector("#benchmark-story").innerHTML = story.map(([title, body]) => `<article><span>${escapeHtml(title)}</span><p>${escapeHtml(body)}</p></article>`).join("");

  document.querySelector("#delivery-assessment").innerHTML = runs.runs.map((run) => {
    const meta = productMeta[run.product];
    const assessment = run.assessment;
    const environment = run.testEnvironment;
    return `
      <article class="delivery-run theme-${run.product}">
        <header class="delivery-run-header"><div><span>${escapeHtml(meta.company)}</span><h3>${escapeHtml(meta.name)}</h3></div><p>${escapeHtml(run.conclusion)}</p></header>
        <span class="run-section-label">测试环境</span>
        <dl class="run-environment">
          ${renderEnvironmentFact("版本", environment.version)}
          ${renderEnvironmentFact("模式", environment.mode)}
          ${renderEnvironmentFact("模型", environment.model)}
          ${renderEnvironmentFact("运行环境", environment.runtime)}
        </dl>
        <div class="run-outcomes">
          ${renderRunOutcome("资源消耗", `核心 ${assessment.resource.coreMinutes} 分钟`, `总耗时 ${assessment.resource.totalMinutes} 分钟；${assessment.resource.environment}`)}
          ${renderRunOutcome("交付质量", assessment.quality.verdict, assessment.quality.details[1] || assessment.quality.details[0])}
          ${renderRunOutcome("稳定性", assessment.stability.verdict, assessment.stability.details.at(-1))}
        </div>
      </article>
    `;
  }).join("");
}

function renderEnvironmentFact(label, value) {
  return `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`;
}

function renderRunOutcome(label, verdict, detail) {
  return `<section><span>${escapeHtml(label)}</span><strong>${escapeHtml(verdict)}</strong><p>${escapeHtml(detail)}</p></section>`;
}

function renderBenchmarkBrief() {
  const brief = runs.brief;
  document.querySelector("#benchmark-objective").textContent = brief.shortObjective;
  document.querySelector("#business-deliverables").innerHTML = brief.businessDeliverables.map(renderCompactArtifact).join("");
  document.querySelector("#trajectory-artifacts").innerHTML = brief.observationArtifacts.map(renderCompactArtifact).join("");
}

function renderCompactArtifact(item) {
  const extension = item.file.split(".").at(-1).toUpperCase();
  return `<div class="compact-artifact"><img src="assets/icons/file-text.svg" alt=""><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(extension)}</small></div>`;
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

  document.querySelector("#control-product-stack").innerHTML = insights.controlProfiles.map((profile) => {
    const meta = productMeta[profile.id];
    return `
      <article class="control-product-card theme-${profile.id}">
        <header>
          <div><span>${escapeHtml(meta.company)}</span><h3>${escapeHtml(meta.name)}</h3><p>${escapeHtml(profile.route)}</p></div>
        </header>
        <div class="implementation-grid">
          <section><span>Browser Use 实现</span><p>${escapeHtml(profile.implementation.browser)}</p></section>
          <section><span>Computer Use 实现</span><p>${escapeHtml(profile.implementation.computer)}</p></section>
          <section><span>执行环境</span><p>${escapeHtml(profile.implementation.environment)}</p></section>
        </div>
        <div class="tradeoff-grid">
          <section><span>优势</span><ul>${profile.strengths.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>
          <section><span>限制</span><ul>${profile.limitations.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>
        </div>
        <ol class="product-timeline">${profile.timeline.map((item) => `<li><time>${escapeHtml(item.date)}</time><div><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.detail)}</p></div></li>`).join("")}</ol>
        <footer><span>本次实测</span><p>${escapeHtml(profile.currentRun)}</p></footer>
      </article>
    `;
  }).join("");

  document.querySelector("#practice-notes").innerHTML = insights.practiceNotes.map((item) => `<article><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.note)}</p></article>`).join("");

  const dimensions = [
    ["技术流派", (profile) => profile.route],
    ["是否绕开 API", (profile) => profile.comparison.apiBypass],
    ["虚拟桌面 / 云电脑", (profile) => profile.comparison.virtualDesktop],
    ["可接管无 API 老系统", (profile) => profile.comparison.legacySystems],
    ["后台运行", (profile) => profile.comparison.background],
    ["典型触发方式", (profile) => profile.comparison.trigger]
  ];
  document.querySelector("#control-comparison-body").innerHTML = dimensions.map(([label, getter]) => `<tr><th scope="row">${escapeHtml(label)}</th>${insights.controlProfiles.map((profile) => `<td>${escapeHtml(getter(profile))}</td>`).join("")}</tr>`).join("");
}

function renderIndustries() {
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
  const legacy = insights.legacySystemOpportunity;
  document.querySelector("#legacy-opportunity").innerHTML = `
    <div class="legacy-opportunity-copy"><span>老系统切入点</span><h3>${escapeHtml(legacy.title)}</h3><p>${escapeHtml(legacy.summary)}</p></div>
    <dl>${legacy.points.map((point) => `<div><dt>${escapeHtml(point.label)}</dt><dd>${escapeHtml(point.value)}</dd></div>`).join("")}</dl>
  `;
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

function renderFdeThinking() {
  document.querySelector("#fde-principles").innerHTML = insights.fdeThinking.principles.map((item, index) => `
    <article><span>${String(index + 1).padStart(2, "0")}</span><div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p></div></article>
  `).join("");
  document.querySelector("#fde-opportunities").innerHTML = insights.fdeThinking.opportunities.map((item) => `
    <tr><th scope="row">${escapeHtml(item.name)}</th><td>${escapeHtml(item.buyer)}</td><td>${escapeHtml(item.delivery)}</td><td>${escapeHtml(item.acceptance)}</td></tr>
  `).join("");
}

function renderSources() {
  const byId = new Map(evidence.items.map((item) => [item.id, item]));
  const groups = {
    "reference-a": ["RUN-DB-001", "RUN-WB-001", "RUN-QW-001", "OBS-DB-001", "OBS-WB-001", "OBS-QW-001", "OBS-USER-002", "OFF-DB-005", "OFF-DB-007", "OFF-WB-002", "OFF-WB-005", "OFF-WB-006", "OFF-WB-007", "OFF-QW-007", "OFF-QW-008", "OFF-QW-009", "OFF-FS-001"],
    "reference-b": ["RES-CONTROL-001", "MED-CROSS-003", "MED-DB-001", "MED-DB-002", "MED-DB-003", "MED-DB-004", "MED-DB-005", "CASE-WB-006", "MED-CROSS-002"],
    "reference-c": ["SOC-DB-001", "SOC-WB-001", "SOC-WB-002", "SOC-WB-003", "SOC-QW-001", "SOC-001", "SOC-002"]
  };
  Object.entries(groups).forEach(([containerId, ids]) => {
    document.querySelector(`#${containerId} .reference-list`).innerHTML = ids.map((id) => byId.get(id)).filter(Boolean).map((item) => renderReference(item)).join("");
  });
}

function renderReference(item) {
    const title = item.url
      ? `<a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.title)}</a>`
      : `<span>${escapeHtml(item.title)}</span>`;
  return `<article class="reference-row"><strong>${escapeHtml(evidenceTypes[item.type] || item.type)}</strong><div>${title}<p>${escapeHtml(item.summary)}</p><small>${escapeHtml(item.observedAt)}</small></div></article>`;
}

function setupSidebar() {
  const body = document.body;
  const sidebar = document.querySelector("#project-sidebar");
  const appMain = document.querySelector(".app-main");
  const sidebarToggle = document.querySelector("[data-sidebar-toggle]");
  const sidebarOpen = document.querySelector("[data-sidebar-open]");
  const sidebarClose = document.querySelector("[data-sidebar-close]");
  const mobileTitle = document.querySelector("#mobile-section-title");
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const mobileQuery = matchMedia("(max-width: 800px)");

  const setSidebarCollapsed = (collapsed) => {
    body.classList.toggle("sidebar-collapsed", collapsed);
    sidebarToggle.setAttribute("aria-expanded", String(!collapsed));
    sidebarToggle.setAttribute("aria-label", collapsed ? "展开目录" : "收起目录");
    sidebarToggle.title = collapsed ? "展开目录" : "收起目录";
    sidebarToggle.querySelector("span").textContent = collapsed ? "›" : "‹";
    localStorage.setItem("agent-report-sidebar-collapsed", String(collapsed));
  };

  const closeMobileSidebar = () => {
    body.classList.remove("sidebar-open");
    sidebarOpen.setAttribute("aria-expanded", "false");
    if (mobileQuery.matches) {
      sidebar.inert = true;
      sidebar.setAttribute("aria-hidden", "true");
    }
  };

  const openMobileSidebar = () => {
    body.classList.add("sidebar-open");
    sidebarOpen.setAttribute("aria-expanded", "true");
    sidebar.inert = false;
    sidebar.removeAttribute("aria-hidden");
  };

  setSidebarCollapsed(localStorage.getItem("agent-report-sidebar-collapsed") === "true");
  sidebarToggle.addEventListener("click", () => setSidebarCollapsed(!body.classList.contains("sidebar-collapsed")));
  sidebarOpen.addEventListener("click", openMobileSidebar);
  sidebarClose.addEventListener("click", closeMobileSidebar);
  navLinks.forEach((link) => link.addEventListener("click", closeMobileSidebar));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && body.classList.contains("sidebar-open")) closeMobileSidebar();
  });

  const syncMobileSidebar = () => {
    if (mobileQuery.matches && !body.classList.contains("sidebar-open")) closeMobileSidebar();
    else {
      sidebar.inert = false;
      sidebar.removeAttribute("aria-hidden");
    }
  };
  mobileQuery.addEventListener("change", syncMobileSidebar);
  syncMobileSidebar();

  const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!current) return;
    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${current.target.id}`;
      link.classList.toggle("active", active);
      if (active) {
        link.setAttribute("aria-current", "location");
        const group = link.closest(".nav-group");
        document.querySelectorAll(".nav-group").forEach((item) => item.classList.toggle("active", item === group));
        if (group) {
          group.open = true;
          mobileTitle.textContent = `${group.querySelector("summary strong").textContent} / ${link.textContent}`;
        } else {
          mobileTitle.textContent = link.dataset.navTitle;
        }
      } else link.removeAttribute("aria-current");
    });
  }, { root: appMain, rootMargin: "-12% 0px -76% 0px", threshold: [0, 0.2, 0.6] });
  sections.forEach((section) => observer.observe(section));
}

function setupFeatureMatrixWheel() {
  const frame = document.querySelector(".feature-frame");
  const appMain = document.querySelector(".app-main");
  frame.addEventListener("wheel", (event) => {
    const isVertical = Math.abs(event.deltaY) >= Math.abs(event.deltaX);
    if (!isVertical || event.shiftKey) return;
    appMain.scrollTop += event.deltaY;
    event.preventDefault();
  }, { passive: false });
}

function init() {
  renderProducts();
  renderPriorityFeatures();
  renderBenchmarkBrief();
  renderBenchmark();
  renderControlConcepts();
  renderIndustries();
  renderTrends();
  renderOpportunities();
  renderFdeThinking();
  renderSources();
  setupSidebar();
  setupFeatureMatrixWheel();
}

init();
