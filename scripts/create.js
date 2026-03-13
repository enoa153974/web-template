import fs from "fs";
import path from "path";
import { exec } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const name = process.argv[2];

if (!name) {
    console.log("案件名を入力してください");
    process.exit();
}

// テンプレート
const templatePath = path.resolve(__dirname, "../project_starter");

// 出力先
const projectPath = path.resolve(__dirname, "../../../../Projects/2026", name);

// siteディレクトリ
const sitePath = path.join(projectPath, "02_source", "site");

if (fs.existsSync(projectPath)) {
    console.log("その案件名は既に存在します");
    process.exit();
}

// フォルダ作成
fs.mkdirSync(projectPath, { recursive: true });
fs.cpSync(templatePath, projectPath, { recursive: true });

console.log("案件作成完了:", projectPath);

// VSCodeでsiteフォルダを開く
exec(`code "${sitePath}"`);

console.log("VSCodeを起動しました:", sitePath);
