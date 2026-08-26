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

test("delivery brief separates business deliverables from trajectory evidence", () => {
  const data = readJson("runs.json");
  assert.ok(data.brief.objective.includes("FieldPilot AI"));
  assert.ok(data.brief.objective.includes("六个候选行业"));
  assert.deepEqual(data.brief.businessDeliverables.map((item) => item.file), [
    "01-industry-prioritization.xlsx",
    "02-target-accounts.csv",
    "03-fde-commercialization-plan.pptx"
  ]);
  assert.deepEqual(data.brief.observationArtifacts.map((item) => item.file), [
    "00-run-log.md",
    "04-source-log.md",
    "05-communication-check.md"
  ]);
});

test("delivery assessment exposes resource, quality and stability metrics", () => {
  const data = readJson("runs.json");
  for (const run of data.runs) {
    for (const key of ["version", "mode", "model", "reasoning", "runtime"]) {
      assert.ok(run.testEnvironment?.[key], `${run.product}.testEnvironment.${key} is required`);
    }
    assert.ok(run.assessment.resource.coreMinutes > 0);
    assert.ok(run.assessment.resource.totalMinutes > 0);
    assert.ok(run.assessment.resource.credits);
    assert.ok(run.assessment.quality.verdict);
    assert.ok(run.assessment.quality.details.length >= 3);
    assert.ok(run.assessment.stability.verdict);
    assert.ok(run.assessment.stability.details.length >= 3);
    assert.ok(run.assessment.trajectory);
  }
});

test("delivery summary states what was tested, why and what happened", () => {
  const data = readJson("runs.json");
  assert.ok(data.summary.whatWasTested);
  assert.ok(data.summary.whyTested);
  assert.ok(data.summary.result);
  assert.match(data.summary.result, /3\/3|三家/);
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
    assert.ok(profile.implementation.browser);
    assert.ok(profile.implementation.computer);
    assert.ok(profile.implementation.environment);
    assert.ok(profile.strengths.length >= 2);
    assert.ok(profile.limitations.length >= 2);
    assert.ok(profile.timeline.length >= 2);
    for (const key of ["apiBypass", "virtualDesktop", "legacySystems", "background", "trigger"]) {
      assert.ok(profile.comparison[key], `${profile.id}.${key} is required`);
    }
  }
});

test("unreproducible supplemental control scores are not published", () => {
  const insights = readJson("insights.json");
  assert.equal(insights.controlScoreMethodology, undefined);
  assert.ok(insights.controlProfiles.every((profile) => profile.scores === undefined));
});

test("Qwen Computer Use reflects the current official capability boundary", () => {
  const insights = readJson("insights.json");
  const evidence = readJson("evidence.json");
  const qwen = insights.controlProfiles.find((profile) => profile.id === "qwen");
  const source = evidence.items.find((item) => item.id === "OFF-QW-004");

  assert.match(qwen.comparison.apiBypass, /无 API/);
  assert.match(qwen.comparison.legacySystems, /可以/);
  assert.match(qwen.comparison.background, /后台/);
  assert.match(qwen.implementation.computer, /不抢占前台焦点|后台/);
  assert.doesNotMatch(qwen.limit, /后台长任务能力相对较弱/);
  assert.equal(source.url, "https://help.aliyun.com/zh/qwenwork/qw-computer-use");
});

test("WorkBuddy logs do not misclassify Feishu as Tencent's office ecosystem", () => {
  const runLog = fs.readFileSync(new URL("../outputs/workbuddy/00-run-log.md", import.meta.url), "utf8");
  const communicationLog = fs.readFileSync(new URL("../outputs/workbuddy/05-communication-check.md", import.meta.url), "utf8");
  const logs = `${runLog}\n${communicationLog}`;

  assert.doesNotMatch(logs, /飞书（(?:Feishu \/ )?Lark\s*\/\s*腾讯办公生态|飞书 Lark.*属腾讯办公生态|飞书.*腾讯自研企业协作平台/);
  assert.doesNotMatch(logs, /企业微信.*结构性不可行|WeCom 结构性不可行/);
  assert.match(logs, /飞书.*?替代通道/);
});

test("practice notes and FDE thinking are explicit reader-facing data", () => {
  const insights = readJson("insights.json");
  assert.equal(insights.practiceNotes.length, 4);
  assert.ok(insights.practiceNotes.every((item) => item.title && item.note));
  assert.equal(insights.fdeThinking.principles.length, 6);
  assert.equal(insights.fdeThinking.opportunities.length, 5);
  assert.ok(insights.fdeThinking.opportunities.every((item) => item.buyer && item.delivery && item.acceptance));
});

test("WorkBuddy industry evidence distinguishes external and internal coverage", () => {
  const cases = readJson("cases.json");
  const education = cases.industries.find((item) => item.name === "教育");
  const gaming = cases.industries.find((item) => item.name === "游戏与互联网");
  assert.equal(education.workbuddy, 3);
  assert.equal(gaming.workbuddy, 2);
  assert.match(gaming.notes, /内部/);
  assert.ok(cases.cases.some((item) => item.product === "workbuddy" && item.caseType === "社区场景记录"));
});

test("new Doubao references are present once without duplicating existing links", () => {
  const evidence = readJson("evidence.json");
  const urls = evidence.items.map((item) => item.url).filter(Boolean);
  for (const url of [
    "https://mp.weixin.qq.com/s/uyvvDhIwl17ESJN3Jre0iQ",
    "https://mp.weixin.qq.com/s/dqvRKQoH45cXL2F8z0ZHYw",
    "https://mp.weixin.qq.com/s/nxoZu1Dz967sNpamgYI9QA",
    "https://mp.weixin.qq.com/s/3nM0tcqmCLSYoAV0kIawSg"
  ]) {
    assert.equal(urls.filter((item) => item === url).length, 1, `${url} must appear exactly once`);
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
