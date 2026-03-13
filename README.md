# Web制作 開発フロー（案件受注後）

最終更新：2026-03

このドキュメントは  
Freelance フォルダ構造 + project_starter + Viteテンプレート  
を前提とした **案件受注後の開発フロー** を定義する。

---

# 1. 案件フォルダ作成

案件受注後、CLIスクリプトで案件フォルダを作成する。

例


npm run new LP cafeA


生成


Freelance/
└ Projects/
└ 2026/
└ 2026-03_LP_cafeA/


---

# 2. フォルダ構成確認

案件フォルダには以下の構造が生成される。


project_starter
├ 01_brief
├ 02_source
│ └ site
│ ├ package.json
│ ├ vite.config.js
│ ├ public
│ └ src
├ 03_export
├ 04_preview
├ 05_client_material
├ 06_reference
├ 07_admin
└ memo.md


---

# 3. 素材・資料整理

クライアントから受け取った素材を格納。


05_client_material


例


logo/
images/
copy/
pdf/


---

# 4. 参考サイト整理

参考デザイン・競合サイトなどを保存


06_reference


例


reference_site.md
screenshot/
competitor/


---

# 5. 要件整理

ワイヤーフレーム  
仕様メモ  
構成案を保存


01_brief


例


site-map.md
wireframe.fig
requirements.md


---

# 6. 開発環境起動

作業ディレクトリ


02_source/site


初回セットアップ


npm install


開発サーバー起動


npm run dev


---

# 7. ディレクトリ構造


src
├ assets
│ ├ js
│ ├ scss
│ ├ images
│ └ svg
│
├ components
├ partials
├ data
└ index.html