import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const workspace = path.resolve(scriptDir, "..");
const dataDir = path.join(workspace, "office-agent-report", "data");

const readJson = (name) => JSON.parse(fs.readFileSync(path.join(dataDir, name), "utf8"));
const report = {
  features: readJson("features.json"),
  evidence: readJson("evidence.json"),
  cases: readJson("cases.json"),
  runs: readJson("runs.json"),
  controlSurfaces: readJson("control-surfaces.json"),
  insights: readJson("insights.json")
};

const requiredProducts = new Set(["doubao", "workbuddy", "qwen"]);
const evidenceIds = new Set(report.evidence.items.map((item) => item.id));

for (const product of report.features.products) requiredProducts.delete(product.id);
if (requiredProducts.size) throw new Error(`Missing products: ${[...requiredProducts].join(", ")}`);

for (const feature of report.features.features) {
  for (const product of ["doubao", "workbuddy", "qwen"]) {
    for (const evidenceId of feature[product].evidence) {
      if (!evidenceIds.has(evidenceId)) throw new Error(`Unknown evidence ${evidenceId} on ${feature.id}.${product}`);
    }
  }
}

for (const item of report.cases.cases) {
  for (const evidenceId of item.evidence) {
    if (!evidenceIds.has(evidenceId)) throw new Error(`Unknown case evidence ${evidenceId}`);
  }
}

const visibleData = JSON.stringify(report, null, 2)
  .replaceAll("<", "\\u003c")
  .replace(/[—–]/g, "-");

fs.writeFileSync(path.join(workspace, "report-data.js"), `window.REPORT_DATA = ${visibleData};\n`, "utf8");

const legacyHtml = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="refresh" content="0; url=../index.html">
  <title>三款办公 Agent 产品组合</title>
</head>
<body>
  <p><a href="../index.html">打开新版报告</a></p>
</body>
</html>
`;
fs.writeFileSync(path.join(workspace, "office-agent-report", "index.html"), legacyHtml, "utf8");

console.log(JSON.stringify({
  features: report.features.features.length,
  industries: report.cases.industries.length,
  evidence: report.evidence.items.length,
  runs: report.runs.runs.length,
  output: "report-data.js"
}));
