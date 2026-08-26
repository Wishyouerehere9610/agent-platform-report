import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const readJson = (name) => JSON.parse(fs.readFileSync(new URL(`../office-agent-report/data/${name}`, import.meta.url), "utf8"));

test("research data is broad enough for a public comparison", () => {
  const features = readJson("features.json");
  const cases = readJson("cases.json");
  const evidence = readJson("evidence.json");

  assert.ok(features.features.length >= 57, "feature matrix must keep at least the existing breadth");
  assert.ok(cases.industries.length >= 16, "industry map must cover at least 16 sectors");
  assert.ok(evidence.items.length >= 30, "source register must include the 2026-08-26 research refresh");
});

test("feature statuses stay inside the evidence vocabulary", () => {
  const data = readJson("features.json");
  const allowed = new Set(data.statusLegend);

  for (const feature of data.features) {
    for (const product of ["doubao", "workbuddy", "qwen"]) {
      assert.ok(allowed.has(feature[product].status), `${feature.id}.${product} has an unknown status`);
      assert.ok(Array.isArray(feature[product].evidence), `${feature.id}.${product} must list evidence`);
    }
  }
});

test("benchmark results describe the completed run and ecosystem deviation", () => {
  const data = readJson("runs.json");
  assert.equal(data.runs.length, 3);
  assert.ok(data.runs.every((run) => run.status === "completed"));

  const workbuddy = data.runs.find((run) => run.product === "workbuddy");
  assert.equal(workbuddy.results.communication.target, "企业微信");
  assert.equal(workbuddy.results.communication.actual, "飞书");
  assert.equal(workbuddy.results.communication.comparisonStatus, "PROTOCOL_DEVIATION");
});

test("benchmark brief states the assignment and six expected files", () => {
  const data = readJson("runs.json");
  assert.ok(data.brief.objective.includes("FieldPilot AI"));
  assert.ok(data.brief.objective.includes("六个候选行业"));
  assert.equal(data.brief.deliverables.length, 6);
  assert.deepEqual(data.brief.deliverables.map((item) => item.file), [
    "00-run-log.md",
    "01-industry-prioritization.xlsx",
    "02-target-accounts.csv",
    "03-fde-commercialization-plan.pptx",
    "04-source-log.md",
    "05-communication-check.md"
  ]);
});

test("control surface conclusions expose direct business language", () => {
  const data = readJson("control-surfaces.json");
  for (const product of data.products) {
    assert.ok(product.conclusion, `${product.id} needs a direct conclusion`);
    assert.ok(product.businessMeaning, `${product.id} needs a business meaning`);
  }
});

test("summary insights stay concise and evidence linked", () => {
  const insights = readJson("insights.json");
  const evidence = readJson("evidence.json");
  const evidenceIds = new Set(evidence.items.map((item) => item.id));
  const allowed = new Set(["能", "部分能", "未完成", "未见入口", "有", "未见"]);

  assert.equal(insights.capabilityModules.length, 8);
  assert.equal(insights.trends.length, 4);
  assert.equal(insights.opportunities.length, 4);

  for (const module of insights.capabilityModules) {
    for (const product of ["doubao", "workbuddy", "qwen"]) {
      assert.ok(allowed.has(module.products[product].label), `${module.id}.${product} must use a concise conclusion`);
      assert.ok(module.products[product].evidence.every((id) => evidenceIds.has(id)), `${module.id}.${product} has unknown evidence`);
    }
  }
});

test("priority feature matrix balances breadth with scanability", () => {
  const insights = readJson("insights.json");
  const evidence = readJson("evidence.json");
  const evidenceIds = new Set(evidence.items.map((item) => item.id));

  assert.ok(insights.priorityFeatures.length >= 14);
  assert.ok(insights.priorityFeatures.length <= 20);
  for (const feature of insights.priorityFeatures) {
    assert.ok(feature.category && feature.name && feature.icon);
    for (const product of ["doubao", "workbuddy", "qwen"]) {
      assert.ok(["yes", "no"].includes(feature.products[product].state));
      assert.ok(feature.products[product].evidence.every((id) => evidenceIds.has(id)));
    }
  }
});

test("WorkBuddy public capability includes computer use and scheduled tasks", () => {
  const insights = readJson("insights.json");
  const computer = insights.priorityFeatures.find((item) => item.name === "Computer Use");
  const scheduled = insights.priorityFeatures.find((item) => item.name === "自动定时任务");
  assert.equal(computer.products.workbuddy.state, "yes");
  assert.match(computer.products.workbuddy.note, /本次.*未见入口/);
  assert.equal(scheduled.products.workbuddy.state, "yes");
  assert.match(scheduled.products.workbuddy.note, /定时|后台|长任务/);
});

test("control profiles separate public routes from current run results", () => {
  const insights = readJson("insights.json");
  assert.equal(insights.controlProfiles.length, 3);
  for (const profile of insights.controlProfiles) {
    assert.ok(profile.route);
    assert.ok(profile.browser.summary);
    assert.ok(profile.computer.summary);
    assert.ok(profile.bestFor);
    assert.ok(profile.limit);
    assert.ok(profile.currentRun);
  }
});

test("commercial positions are based on industry coverage and release status", () => {
  const insights = readJson("insights.json");
  const evidence = readJson("evidence.json");
  const evidenceIds = new Set(evidence.items.map((item) => item.id));
  const expectedIndustries = {
    doubao: /教育|营销|媒体/,
    workbuddy: /制造|金融|物流/,
    qwen: /金融|法务|电商/
  };

  for (const position of insights.productPositions) {
    assert.ok(position.releaseStatus);
    assert.ok(position.releaseEvidence.every((id) => evidenceIds.has(id)));
    assert.ok(position.industries.length >= 3);
    assert.match(position.industries.join("、"), expectedIndustries[position.id]);
    assert.doesNotMatch(`${position.conclusion}${position.reason}`, /分钟|浏览器表单|GUI|个人空间|PPT/);
  }
});

test("legacy system opportunity explains the commercial wedge", () => {
  const insights = readJson("insights.json");
  const opportunity = insights.legacySystemOpportunity;
  assert.match(opportunity.title, /老系统|无 API/);
  assert.match(opportunity.summary, /内置浏览器/);
  assert.match(opportunity.summary, /Computer Use/);
  assert.equal(opportunity.points.length, 4);
});
