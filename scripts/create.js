import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const name = process.argv[2];
if (!name) {
    console.log("案件名を入力してください");
    process.exit();
}

// テンプレ本体
const templatePath = path.resolve(__dirname, "../template");

// 出力先（Freelance/projects/2026）
const projectPath = path.resolve(
    __dirname,
    "../../../../projects/2026",
    name
);

if (fs.existsSync(projectPath)) {
    console.log("その案件名は既に存在します");
    process.exit();
}

fs.mkdirSync(projectPath, { recursive: true });
fs.cpSync(templatePath, projectPath, { recursive: true });

console.log("案件作成完了:", projectPath);