import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const read = (name) => fs.readFileSync(new URL(`../${name}`, import.meta.url), "utf8");

test("public page contains the required business-facing sections", () => {
  const html = read("index.html");
  for (const id of ["overview", "commercial-coverage", "feature-matrix", "task-test", "computer-browser", "opportunities", "fde-thinking", "references"]) {
    assert.match(html, new RegExp(`id=["']${id}["']`), `missing section ${id}`);
  }
});

test("desktop navigation lives in a left sidebar", () => {
  const html = read("index.html");
  assert.match(html, /<aside[^>]+class=["'][^"']*sidebar/);
  assert.match(html, /class=["'][^"']*side-nav/);
  assert.ok(html.indexOf("class=\"sidebar") < html.indexOf("<main"), "sidebar must precede the report content");
  assert.doesNotMatch(html, /class=["'][^"']*topbar/);
});

test("navigation follows the reference project shell", () => {
  const html = read("index.html");
  assert.match(html, /data-sidebar-toggle/);
  assert.match(html, /data-sidebar-open/);
  assert.match(html, /class=["'][^"']*mobile-header/);
  assert.match(html, /class=["'][^"']*nav-group/);
  assert.match(html, /class=["'][^"']*sub-nav/);
  assert.doesNotMatch(html, /theme-button/);
  assert.equal((html.match(/class=["'][^"']*nav-primary[^"']*["']/g) || []).length, 5);
  assert.equal((html.match(/class=["']nav-group["']/g) || []).length, 1);
  assert.equal((html.match(/class=["']sub-nav["'][\s\S]*?<\/div>/g) || []).length, 1);
  assert.equal((html.match(/class=["'][^"']*nav-child[^"']*["']/g) || []).length, 2);
  assert.doesNotMatch(html, />4\.1\s*商业化机会</);
});

test("visual tokens match the reference project", () => {
  const css = read("styles.css");
  assert.match(css, /--canvas:\s*#f5f5f7/);
  assert.match(css, /--surface:\s*#ffffff/);
  assert.match(css, /--ink:\s*#1d1d1f/);
  assert.match(css, /--blue:\s*#0066cc/);
  assert.match(css, /--sidebar-width:\s*292px/);
  assert.match(css, /--radius:\s*8px/);
});

test("hero uses an editorial masthead with author, route rail and GitHub icon", () => {
  const html = read("index.html");
  assert.match(html, /class=["'][^"']*hero-meta/);
  const titleRow = html.slice(html.indexOf('<div class="hero-title-row">'), html.indexOf('<div class="hero-summary">'));
  const credit = html.match(/<a class="hero-credit"[\s\S]*?<\/a>/)?.[0] || "";
  assert.match(titleRow, /Agent Platform Research&amp;Evaluation Report/);
  assert.match(titleRow, /class="hero-credit"/);
  assert.match(credit, /作者/);
  assert.match(credit, /董子铭/);
  assert.match(credit, /assets\/icons\/github\.svg/);
  assert.match(credit, /aria-label="查看董子铭的 GitHub 项目"/);
  assert.match(html, /class=["'][^"']*hero-route-rail/);
  assert.equal((html.match(/class=["']hero-route theme-/g) || []).length, 3);
  assert.doesNotMatch(html, /class=["'][^"']*hero-footnote/);
  assert.doesNotMatch(html, /首页快速导航/);
  assert.doesNotMatch(html, /公开能力与本次实测分开记录/);
  assert.doesNotMatch(html, /比较三组产品的行业证据/);
  assert.doesNotMatch(html, /class=["'][^"']*hero-verdict/);
  assert.doesNotMatch(html, /class=["'][^"']*metric-strip/);
  assert.doesNotMatch(read("app.js"), /renderHero/);
});

test("hero is compact and navigation typography stays readable", () => {
  const html = read("index.html");
  const css = read("styles.css");
  assert.match(html, /<h1 id="page-title">Agent Platform Research&amp;Evaluation Report<\/h1>/);
  assert.doesNotMatch(html, /<h1[^>]*>[^<]*<br>/);
  assert.doesNotMatch(css, /\.hero\s*\{[^}]*min-height:\s*calc\(100svh - 120px\)/s);
  assert.match(css, /\.hero h1\s*\{[^}]*font-size:\s*36px/s);
  assert.match(css, /\.hero h1\s*\{[^}]*white-space:\s*nowrap/s);
  assert.match(css, /\.nav-primary strong\s*\{[^}]*font-size:\s*15px/s);
  assert.match(css, /\.sub-nav a\s*\{[^}]*font-size:\s*14px/s);
});

test("commercial coverage omits the redundant product count summary", () => {
  assert.doesNotMatch(read("index.html"), /coverage-summary/);
  assert.doesNotMatch(read("app.js"), /coverage-summary|coverage-row/);
});

test("feature matrix does not trap vertical wheel scrolling", () => {
  const css = read("styles.css");
  const app = read("app.js");
  assert.doesNotMatch(css, /overscroll-behavior:\s*contain/);
  assert.doesNotMatch(css, /\.feature-frame\s*\{[^}]*max-height/s);
  assert.doesNotMatch(css, /\.app-main\s*\{[^}]*scroll-behavior:\s*smooth/s);
  assert.match(app, /setupFeatureMatrixWheel/);
  assert.match(app, /appMain\.scrollTop \+= event\.deltaY/);
});

test("commercial coverage presents release and industry analysis", () => {
  const app = read("app.js");
  assert.match(app, /product-release/);
  assert.match(app, /优先行业/);
  assert.match(app, /coverage-stats/);
});

test("commercial opportunity names both control surfaces and highlights legacy systems", () => {
  const html = read("index.html");
  assert.match(html, /Computer \/ Browser Use 商业化机会/);
  assert.match(html, /id=["']legacy-opportunity["']/);
  assert.doesNotMatch(html, />操控能力的商业化机会</);
});

test("delivery test separates business outputs from trajectory observation", () => {
  const html = read("index.html");
  const app = read("app.js");
  assert.match(html, /任务交付测试/);
  assert.doesNotMatch(html, /同题任务测试/);
  assert.match(html, /id=["']benchmark-strip["']/);
  assert.match(html, /id=["']benchmark-story["']/);
  assert.match(html, /id=["']delivery-assessment["']/);
  assert.match(app, /renderBenchmarkBrief/);
  assert.match(app, /测试环境/);
  assert.doesNotMatch(html, /三个文件，用于管理层决策|三份记录，用于分析执行过程/);
  assert.doesNotMatch(html, /id=["']benchmark-lead["']/);
});

test("delivery setup stays in one compact desktop row", () => {
  const css = read("styles.css");
  assert.match(css, /\.benchmark-strip\s*\{[^}]*grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/s);
  assert.match(css, /\.run-environment\s*\{[^}]*grid-template-columns:\s*repeat\(5,\s*minmax\(0,\s*1fr\)\)/s);
});

test("control tab introduces each product once and keeps one comparison matrix", () => {
  const html = read("index.html");
  const app = read("app.js");
  assert.match(html, /id=["']control-product-stack["']/);
  assert.match(html, /id=["']control-comparison-body["']/);
  assert.match(html, /id=["']practice-notes["']/);
  assert.doesNotMatch(html, /control-profile-list|control-deep-dives|control-body|evidence-figure|browser-evidence-workbuddy/);
  assert.match(app, /theme-\$\{profile\.id\}/);
  assert.doesNotMatch(html, /control-scoreboard|score-methodology/);
  assert.doesNotMatch(app, /scores\.|score-panel|score-row|补充调研判断值/);
  assert.doesNotMatch(app, /class="product-scores"/);
  assert.doesNotMatch(app, /Browser Use 综合|Computer Use 综合/);
});

test("public page uses the focused feature matrix without old checklist controls", () => {
  const html = read("index.html");
  assert.doesNotMatch(html, /id=["']feature-(?:search|category|body)["']|class=["']feature-table["']|evidence-dialog/);
  assert.match(html, /priority-feature-body/);
  assert.match(read("app.js"), /✅/);
  assert.match(read("app.js"), /❌/);
});

test("FDE thinking and graded references are rendered", () => {
  const html = read("index.html");
  assert.match(html, /id=["']fde-principles["']/);
  assert.match(html, /id=["']fde-opportunities["']/);
  assert.doesNotMatch(html, /thinking-placeholder/);
  assert.match(html, /id=["']reference-a["']/);
  assert.match(html, /id=["']reference-b["']/);
  assert.match(html, /id=["']reference-c["']/);
});

test("reference styling distinguishes links from plain titles", () => {
  const css = read("styles.css");
  assert.match(css, /\.reference-row a\s*\{[^}]*text-decoration:\s*underline/s);
  assert.match(css, /\.reference-row div > span\s*\{[^}]*text-decoration:\s*none/s);
});

test("public page avoids the agreed AI writing tells", () => {
  const visibleSources = [read("index.html"), read("app.js")].join("\n");
  assert.doesNotMatch(visibleSources, /[—–]/, "visible copy must not contain em/en dashes");
  assert.doesNotMatch(visibleSources, /稳稳接住|提一层|落回去|抓住本质|如果你愿意|不是.{0,16}而是|先说结论/);
  assert.doesNotMatch(visibleSources, /我们聊天|聊天记录|用户要求|根据你的反馈/);
});

test("design includes accessible motion, transparency and theme fallbacks", () => {
  const css = read("styles.css");
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /prefers-reduced-transparency:\s*reduce/);
  assert.match(read("index.html"), /<meta\s+name=["']color-scheme["']\s+content=["']light["']/);
});

test("generated data is available to the browser", () => {
  const data = read("report-data.js");
  assert.match(data, /^window\.REPORT_DATA\s*=/);
});
