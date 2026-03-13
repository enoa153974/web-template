# Vite + Handlebars + Sass テンプレート
このテンプレートは、納品案件など 素のHTML/CSS/JS構成での開発 を効率化するためのVite環境です。

## 特徴
- HTMLのパーシャル化: Handlebars
- CSSプリプロセッサ: Sass (SCSS)
- 画像や納品物に最適化: 相対パス・minifyなし

## ディレクトリ構成
```
    project/
    ├─ public/                  # ビルド後そのままコピーされるファイル (画像など)
    │   └─ images/
    │        ├─ logo.png
    │        └─ bg.jpg
    ├─ src/
    │   ├─ partials/            # HTMLパーシャル（ヘッダーやフッター等）
    │   │    ├─ head.hbs
    │   │    └─ header.hbs
    │   ├─ assets/
    │   │    ├─ style.scss      # Sassエントリーポイント
    │   │    └─ _variables.scss # Sass変数・共通スタイル
    │   ├─ main.js              # JSエントリーポイント
    │   └─ index.html           # 開発のルートHTML
    ├─ dist/                    # ビルド後の納品用ディレクトリ（自動生成）
    └─ vite.config.js           # Vite設定
```

## 開発環境の使い方
1. セットアップ
    - npm install
2. 開発サーバー起動
    - npm run dev
    - ブラウザで http://localhost:5173 が自動的に開きます。
    - ファイルを編集するとホットリロードされます。

3. ビルド（納品用出力）
    - npm run build
    - dist/ フォルダが生成されます。
    - minifyなし、コメントはそのまま残ります。
    - 画像は public/ 内のものがそのままコピーされます。

## 開発のルール・注意点
1. HTML（Handlebars）
- 共通パーツは src/partials にパーシャルとして作成(ファイル拡張子は.hbs)

    index.html から呼び出し例：
        {{> head }}
        {{> header }}
    パスは 相対パス 推奨（ビルド後も崩れない）

2. Sass（style.scss）
- エントリーポイントは src/assets/style.scss
    部分ファイルは _variables.scss や _mixins.scss のように作成して @use or @forward で読み込む
    @use 'variables' as *;
        body {
        color: $text-color;
        }

3. JS（main.js）
- エントリーポイントは src/main.js
    必要なJSファイルはここからインポートする
        import './assets/style.scss'
        import './js/menu.js'
        SPAのような #app マウント要素は不要。
        HTML内で直接DOMを書いてOK。

4. 画像
- 画像は public/images に置く。
    HTML・CSSから相対パスで参照：
        <img src="./images/logo.png" alt="logo">
        background-image: url('../images/bg.jpg');

5. パス設定
- vite.config.js で base: './' に設定済みなので、ビルド後も相対パスでリンクが維持されます。

## 納品用チェックリスト
- npm run build で dist/ フォルダを出力
- HTMLが相対パスで正しくリンクされているか確認
- コメントが削除されていないか確認
- 画像やフォントは dist/images/ に含まれているか確認


## よくあるトラブル
- 画像のパスが崩れる
    → base: './' がvite.config.jsに設定されているか確認
    → publicフォルダの相対パスで指定しているか確認

- パーシャルが読み込まれない
    → partialsフォルダのパス指定が正しいか
    → {{> partial名 }} のスペルミスに注意

