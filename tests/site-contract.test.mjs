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

test("hero keeps the split verdict without duplicate metric blocks", () => {
  const html = read("index.html");
  assert.match(html, /class=["'][^"']*hero-verdict/);
  assert.doesNotMatch(html, /class=["'][^"']*metric-strip/);
  assert.doesNotMatch(read("app.js"), /renderHero/);
});

test("hero is compact and navigation typography stays readable", () => {
  const css = read("styles.css");
  assert.doesNotMatch(css, /\.hero\s*\{[^}]*min-height:\s*calc\(100svh - 120px\)/s);
  assert.match(css, /\.hero h1\s*\{[^}]*font-size:\s*48px/s);
  assert.match(css, /\.nav-primary strong\s*\{[^}]*font-size:\s*15px/s);
  assert.match(css, /\.sub-nav a\s*\{[^}]*font-size:\s*14px/s);
});

test("commercial coverage omits the redundant product count summary", () => {
  assert.doesNotMatch(read("index.html"), /coverage-summary/);
  assert.doesNotMatch(read("app.js"), /coverage-summary|coverage-row/);
});

test("task test introduces the prompt and six expected deliverables", () => {
  const html = read("index.html");
  const app = read("app.js");
  assert.match(html, /id=["']benchmark-brief["']/);
  assert.match(html, /id=["']benchmark-deliverables["']/);
  assert.match(app, /renderBenchmarkBrief/);
});

test("public page uses the focused feature matrix without old checklist controls", () => {
  const html = read("index.html");
  assert.doesNotMatch(html, /id=["']feature-(?:search|category|body)["']|class=["']feature-table["']|evidence-dialog/);
  assert.match(html, /priority-feature-body/);
  assert.match(read("app.js"), /✅/);
  assert.match(read("app.js"), /❌/);
});

test("FDE thinking stays intentionally blank and references are graded", () => {
  const html = read("index.html");
  assert.match(html, /id=["']fde-thinking["'][\s\S]*thinking-placeholder/);
  assert.match(html, /id=["']reference-a["']/);
  assert.match(html, /id=["']reference-b["']/);
  assert.match(html, /id=["']reference-c["']/);
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
