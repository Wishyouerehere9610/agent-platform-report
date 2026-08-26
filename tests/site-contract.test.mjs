import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const read = (name) => fs.readFileSync(new URL(`../${name}`, import.meta.url), "utf8");

test("public page contains the required business-facing sections", () => {
  const html = read("index.html");
  for (const id of ["overview", "products", "capabilities", "benchmark", "control-surfaces", "industries", "trends", "opportunities", "sources"]) {
    assert.match(html, new RegExp(`id=["']${id}["']`), `missing section ${id}`);
  }
});

test("desktop navigation lives in a left sidebar", () => {
  const html = read("index.html");
  assert.match(html, /<aside[^>]+class=["'][^"']*sidebar/);
  assert.match(html, /class=["'][^"']*sidebar-nav/);
  assert.ok(html.indexOf("class=\"sidebar") < html.indexOf("<main"), "sidebar must precede the report content");
  assert.doesNotMatch(html, /class=["'][^"']*topbar/);
});

test("public page presents summaries instead of a feature checklist", () => {
  const html = read("index.html");
  assert.doesNotMatch(html, /feature-search|feature-category|feature-body|feature-table|evidence-dialog/);
  assert.match(html, /capability-body/);
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
  assert.match(css, /prefers-color-scheme:\s*dark/);
});

test("generated data is available to the browser", () => {
  const data = read("report-data.js");
  assert.match(data, /^window\.REPORT_DATA\s*=/);
});
