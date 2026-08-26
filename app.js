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

const capabilityTone = {
  "能": "yes",
  "有": "yes",
  "部分能": "partial",
  "未完成": "blocked",
  "未见入口": "no",
  "✅ 支持": "yes",
  "未见": "no"
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
const controls = report.controlSurfaces;
const cases = report.cases;
const evidence = report.evidence;

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

function renderBenchmarkBrief() {
  const brief = runs.brief;
  document.querySelector("#benchmark-objective").textContent = brief.objective;
  document.querySelector("#benchmark-constraints").innerHTML = brief.constraints.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  document.querySelector("#benchmark-deliverables").innerHTML = brief.deliverables.map((item) => `
    <article class="deliverable-item">
      <img src="assets/icons/file-text.svg" alt="">
      <div><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.file)}</span><p>${escapeHtml(item.purpose)}</p></div>
    </article>
  `).join("");
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
    <strong>公开能力与本次结果分开看。</strong>
    <p>${escapeHtml(controls.actualRunSummary.finding)} 本次失败只说明当前版本和测试环境，不能直接改写产品能力。</p>
  `;

  document.querySelector("#control-profile-list").innerHTML = insights.controlProfiles.map((profile) => {
    const meta = productMeta[profile.id];
    return `
      <article class="control-profile">
        <div class="control-profile-title"><span>${escapeHtml(meta.company)}</span><h3>${escapeHtml(meta.name)}</h3><p>${escapeHtml(profile.route)}</p></div>
        <div class="control-profile-capability"><span>Browser Use</span><p>${escapeHtml(profile.browser.summary)}</p></div>
        <div class="control-profile-capability"><span>Computer Use</span><p>${escapeHtml(profile.computer.summary)}</p></div>
        <div class="control-profile-fit"><span>适合</span><p>${escapeHtml(profile.bestFor)}</p></div>
        <div class="control-profile-fit"><span>限制</span><p>${escapeHtml(profile.limit)}</p></div>
      </article>
    `;
  }).join("");

  document.querySelector("#control-body").innerHTML = insights.controlProfiles.map((profile) => {
    const meta = productMeta[profile.id];
    return `
      <tr>
        <th scope="row">${escapeHtml(meta.name)}</th>
        <td>${renderControlState("✅ 支持", profile.browser.summary)}</td>
        <td>${renderControlState("✅ 支持", profile.computer.summary)}</td>
        <td>${escapeHtml(profile.currentRun)}</td>
      </tr>
    `;
  }).join("");
}

function renderControlState(label, note) {
  return `<strong class="state ${capabilityTone[label] || "no"}">${escapeHtml(label)}</strong><span class="cell-note">${escapeHtml(note)}</span>`;
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
  const byId = new Map(evidence.items.map((item) => [item.id, item]));
  const groups = {
    "reference-a": ["RUN-DB-001", "RUN-WB-001", "RUN-QW-001", "OBS-DB-001", "OBS-WB-001", "OBS-QW-001", "OFF-DB-005", "OFF-WB-002", "OFF-WB-005", "OFF-WB-006", "OFF-QW-007", "OFF-QW-008", "OFF-QW-009", "OFF-FS-001"],
    "reference-b": ["RES-CONTROL-001", "MED-CROSS-003", "MED-DB-001", "MED-DB-002", "CASE-WB-006", "MED-CROSS-002"],
    "reference-c": ["SOC-DB-001", "SOC-WB-001", "SOC-QW-001", "SOC-001", "SOC-002"]
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

function init() {
  renderProducts();
  renderPriorityFeatures();
  renderBenchmarkBrief();
  renderBenchmark();
  renderControlConcepts();
  renderIndustries();
  renderTrends();
  renderOpportunities();
  renderSources();
  setupSidebar();
}

init();
