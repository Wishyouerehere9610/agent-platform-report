import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.resolve(scriptDir, "../outputs/office-agent-benchmark-input");
await fs.mkdir(outputDir, { recursive: true });

const workbook = Workbook.create();
const inputs = workbook.worksheets.add("Company Inputs");
const economics = workbook.worksheets.add("Unit Economics");
const industries = workbook.worksheets.add("Industry Criteria");

workbook.comments.setSelf({ displayName: "User" });

inputs.showGridLines = false;
inputs.getRange("A1:D1").merge();
inputs.getRange("A1").values = [["FieldPilot AI — Standard Benchmark Assumptions"]];
inputs.getRange("A3:D14").values = [
  ["Assumption", "Value", "Unit", "Notes"],
  ["FDE headcount", 8, "people", "Available for customer delivery"],
  ["Platform engineer headcount", 4, "people", "Shared platform and integration support"],
  ["Enterprise sales headcount", 3, "people", "New-logo enterprise sales"],
  ["12-month commercialization budget", 8000000, "RMB", "Total commercial budget ceiling"],
  ["90-day paid pilot target", 3, "pilots", "Signed paid pilots"],
  ["90-day qualified pipeline target", 5000000, "RMB", "Evidence-backed qualified pipeline"],
  ["Minimum 12-month gross margin", 0.55, "%", "Combined software and FDE delivery"],
  ["Maximum FDEs per pilot", 2, "people", "Concurrent delivery ceiling"],
  ["Maximum target pilot duration", 45, "days", "Contract-to-acceptance target"],
  ["Working days per person", 220, "days/year", "Planning assumption"],
  ["Target billable utilization", 0.7, "%", "After internal work and enablement"]
];

inputs.getRange("A1:D1").format = {
  fill: "#172554",
  font: { bold: true, color: "#FFFFFF", size: 16 },
  verticalAlignment: "center"
};
inputs.getRange("A3:D3").format = {
  fill: "#DBEAFE",
  font: { bold: true, color: "#172554" },
  borders: { preset: "doubleBottom", style: "thin", color: "#93C5FD" }
};
inputs.getRange("A4:D14").format = {
  font: { color: "#111827" },
  borders: { insideHorizontal: { style: "thin", color: "#E5E7EB" } },
  verticalAlignment: "center"
};
inputs.getRange("B7:B9").format.numberFormat = "¥#,##0";
inputs.getRange("B10:B10").format.numberFormat = "0.0%";
inputs.getRange("B14:B14").format.numberFormat = "0.0%";
inputs.getRange("A1:D14").format.wrapText = true;
inputs.getRange("A1:D14").format.autofitRows();
inputs.getRange("A:A").format.columnWidth = 34;
inputs.getRange("B:B").format.columnWidth = 18;
inputs.getRange("C:C").format.columnWidth = 14;
inputs.getRange("D:D").format.columnWidth = 42;
inputs.getRange("A1:D1").format.rowHeight = 34;
inputs.freezePanes.freezeRows(3);

economics.showGridLines = false;
economics.getRange("A1:F1").merge();
economics.getRange("A1").values = [["Cost and Capacity Reference Model"]];
economics.getRange("A3:F8").values = [
  ["Cost input", "Annual cost / unit", "Headcount", "Annual total", "Unit", "Notes"],
  ["FDE", 720000, null, null, "RMB", "Fully loaded annual cost"],
  ["Platform engineer", 900000, null, null, "RMB", "Fully loaded annual cost"],
  ["Enterprise sales", 840000, null, null, "RMB", "Fully loaded annual cost"],
  ["Model and tooling per pilot", 120000, 3, null, "RMB", "Variable cost at 90-day target"],
  ["Travel, security and integration per pilot", 80000, 3, null, "RMB", "Variable cost at 90-day target"]
];
economics.getRange("C4:C6").formulas = [["='Company Inputs'!B4"], ["='Company Inputs'!B5"], ["='Company Inputs'!B6"]];
economics.getRange("D4").formulas = [["=B4*C4"]];
economics.getRange("D4:D8").fillDown();
economics.getRange("A10:C14").values = [
  ["Capacity metric", "Value", "Unit"],
  ["Annual available FDE days", null, "days"],
  ["Maximum annual pilot equivalents at 2 FDE × 45 days", null, "pilots"],
  ["90-day target variable delivery cost", null, "RMB"],
  ["Annual fixed personnel cost", null, "RMB"]
];
economics.getRange("B11").formulas = [["='Company Inputs'!B4*'Company Inputs'!B13*'Company Inputs'!B14"]];
economics.getRange("B12").formulas = [["=B11/('Company Inputs'!B11*'Company Inputs'!B12)"]];
economics.getRange("B13").formulas = [["=SUM(D7:D8)"]];
economics.getRange("B14").formulas = [["=SUM(D4:D6)"]];
economics.getRange("A1:F1").format = {
  fill: "#172554",
  font: { bold: true, color: "#FFFFFF", size: 16 },
  verticalAlignment: "center"
};
economics.getRange("A3:F3").format = { fill: "#DBEAFE", font: { bold: true, color: "#172554" } };
economics.getRange("A10:C10").format = { fill: "#DBEAFE", font: { bold: true, color: "#172554" } };
economics.getRange("A3:F8").format.borders = { insideHorizontal: { style: "thin", color: "#E5E7EB" } };
economics.getRange("A10:C14").format.borders = { insideHorizontal: { style: "thin", color: "#E5E7EB" } };
economics.getRange("B4:B8").format.numberFormat = "¥#,##0";
economics.getRange("D4:D8").format.numberFormat = "¥#,##0";
economics.getRange("B11:B12").format.numberFormat = "#,##0.0";
economics.getRange("B13:B14").format.numberFormat = "¥#,##0";
economics.getRange("A1:F14").format.wrapText = true;
economics.getRange("A1:F14").format.autofitRows();
economics.getRange("A:A").format.columnWidth = 38;
economics.getRange("B:D").format.columnWidth = 18;
economics.getRange("E:E").format.columnWidth = 12;
economics.getRange("F:F").format.columnWidth = 42;
economics.getRange("A1:F1").format.rowHeight = 34;
economics.freezePanes.freezeRows(3);

industries.showGridLines = false;
industries.getRange("A1:E1").merge();
industries.getRange("A1").values = [["Candidate Industries — Research Questions"]];
industries.getRange("A3:E9").values = [
  ["Industry", "Primary workflow hypothesis", "Key buyer", "Evidence to collect", "Regulatory focus"],
  ["Manufacturing", "Quality, maintenance, procurement and production workflows", "COO / CIO / plant operations", "Digitalization spend, workflow pain, target accounts", "Operational safety and data boundary"],
  ["Retail and e-commerce", "Merchandising, content, customer service and operations", "E-commerce GM / CMO / COO", "Channel complexity, labor intensity, target accounts", "Consumer data and advertising compliance"],
  ["Financial services", "Research, compliance, operations and customer workflows", "CIO / business head / compliance", "Technology budgets, process evidence, target accounts", "Model risk, privacy and regulated data"],
  ["Healthcare", "Clinical administration, research and operational workflows", "CIO / operations / research", "Non-clinical workflow evidence and target accounts", "Medical claims, privacy and patient safety"],
  ["Enterprise software", "Implementation, support, migration and customer success", "CEO / CRO / services leader", "Services margin, implementation burden, target accounts", "Customer credential and tenant isolation"],
  ["Professional services", "Research, document review and client delivery", "Managing partner / practice lead", "Knowledge intensity, utilization and target accounts", "Confidentiality and professional liability"]
];
industries.getRange("A1:E1").format = {
  fill: "#172554",
  font: { bold: true, color: "#FFFFFF", size: 16 },
  verticalAlignment: "center"
};
industries.getRange("A3:E3").format = { fill: "#DBEAFE", font: { bold: true, color: "#172554" } };
industries.getRange("A3:E9").format.borders = { insideHorizontal: { style: "thin", color: "#E5E7EB" } };
industries.getRange("A1:E9").format.wrapText = true;
industries.getRange("A1:E9").format.autofitRows();
industries.getRange("A:A").format.columnWidth = 24;
industries.getRange("B:E").format.columnWidth = 34;
industries.getRange("A1:E1").format.rowHeight = 34;
industries.freezePanes.freezeRows(3);

workbook.comments.addThread({ cell: economics.getRange("B4") }, "Standardized benchmark assumption. Products may challenge the assumption but must keep the input unchanged and label any alternative scenario.");

const previewInputs = await workbook.render({ sheetName: "Company Inputs", autoCrop: "all", scale: 1.5, format: "png" });
await fs.writeFile(`${outputDir}/company-inputs-preview.png`, new Uint8Array(await previewInputs.arrayBuffer()));
const previewEconomics = await workbook.render({ sheetName: "Unit Economics", autoCrop: "all", scale: 1.5, format: "png" });
await fs.writeFile(`${outputDir}/unit-economics-preview.png`, new Uint8Array(await previewEconomics.arrayBuffer()));
const previewIndustries = await workbook.render({ sheetName: "Industry Criteria", autoCrop: "all", scale: 1.5, format: "png" });
await fs.writeFile(`${outputDir}/industry-criteria-preview.png`, new Uint8Array(await previewIndustries.arrayBuffer()));

const inspection = await workbook.inspect({
  kind: "table",
  range: "'Unit Economics'!A3:F14",
  include: "values,formulas",
  tableMaxRows: 20,
  tableMaxCols: 8
});
await fs.writeFile(`${outputDir}/inspection.ndjson`, inspection.ndjson, "utf8");

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  summary: "formula error scan"
});
await fs.writeFile(`${outputDir}/formula-errors.ndjson`, errors.ndjson, "utf8");

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(`${outputDir}/financial-assumptions.xlsx`);
