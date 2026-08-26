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

test("control surface conclusions expose direct business language", () => {
  const data = readJson("control-surfaces.json");
  for (const product of data.products) {
    assert.ok(product.conclusion, `${product.id} needs a direct conclusion`);
    assert.ok(product.businessMeaning, `${product.id} needs a business meaning`);
  }
});
