# Vite + Handlebars + SCSS Foundation Template

このテンプレートは

**LP / コーポレートサイト制作を高速化するための実務用UIテンプレート環境です。**

以下の案件に対応します。

* LP制作
* コーポレートサイト
* サービスサイト
* カンプ再現案件
* 相対パス納品案件

Viteをベースに

* Handlebars（HTMLパーツ化）
* SCSS（デザインシステム）
* Vanilla JS（UIモジュール）

を組み合わせた **実務向け制作基盤**です。

---

# 設計思想

このテンプレートは

**UI Foundation型テンプレート**として設計されています。

## 目的

* 制作速度の向上
* UIコンポーネントの再利用
* 案件ごとの差分管理
* HTML/CSS案件の安定制作

## 設計方針

```
foundation = 変更しない設計層
setting    = 案件ごとの差分
```

案件固有の変更は `setting.scss` に集約します。

---

# 主な特徴

* HandlebarsによるHTMLパーツ化
* SCSSによるデザインシステム
* BEMベースのCSS設計
* UIコンポーネント構造
* Gridレイアウトシステム
* JS UIモジュール構造
* utilsベースのDOM操作
* 相対パス納品対応（base: './'）

---

# ディレクトリ構成

```
src
├── assets
│   ├── js
│   │   ├── accordion.js
│   │   ├── dom.js
│   │   ├── form-validation.js
│   │   ├── hamburger.js
│   │   ├── header-menu.js
│   │   ├── slider.js
│   │   └── tabs.js
│   └── styles
│       ├── base
│       │   ├── _global.scss
│       │   └── _reset.scss
│       ├── components
│       │   ├── common
│       │   │   ├── _footer.scss
│       │   │   ├── _grid.scss
│       │   │   ├── _header.scss
│       │   │   ├── _image-wrapper.scss
│       │   │   ├── _section-title.scss
│       │   │   └── _top-header.scss
│       │   ├── sections
│       │   │   ├── _hero.scss
│       │   │   └── _section-block.scss
│       │   └── ui
│       │       ├── _accordion.scss
│       │       ├── _breadcrumb.scss
│       │       ├── _button.scss
│       │       ├── _card.scss
│       │       ├── _cta.scss
│       │       ├── _faq.scss
│       │       ├── _feature-grid.scss
│       │       ├── _feature-media.scss
│       │       ├── _form.scss
│       │       ├── _logo-list.scss
│       │       ├── _pagination.scss
│       │       ├── _price-plan.scss
│       │       ├── _price-table.scss
│       │       ├── _slider.scss
│       │       ├── _tabs.scss
│       │       └── _voice-card.scss
│       ├── foundation
│       │   ├── README.md
│       │   ├── _function.scss
│       │   ├── _grid.scss
│       │   ├── _media.scss
│       │   ├── _mixin.scss
│       │   ├── _setting.scss
│       │   ├── _variables-custom.scss
│       │   ├── _variables.scss
│       │   └── import.scss
│       ├── layout
│       │   ├── _center.scss
│       │   ├── _cluster.scss
│       │   ├── _container.scss
│       │   ├── _layout-section.scss
│       │   ├── _main.scss
│       │   ├── _stack.scss
│       │   └── _switcher.scss
│       ├── style.scss
│       └── utility
│           ├── _aspect-ratio.scss
│           ├── _display.scss
│           ├── _link-cover.scss
│           ├── _overflow.scss
│           ├── _responsive.scss
│           ├── _text.scss
│           └── _visually-hidden.scss
├── counter.js
├── data
│   ├── navData.json
│   ├── pricePlans.json
│   ├── priceTables.json
│   ├── tabs.json
│   └── voices.json
├── index.html
├── main.js
├── partials
│   ├── components
│   │   ├── cta
│   │   │   ├── cta-actions.hbs
│   │   │   └── cta.hbs
│   │   ├── drawer.hbs
│   │   ├── faq.hbs
│   │   ├── feature-grid.hbs
│   │   ├── feature-media.hbs
│   │   ├── form
│   │   │   ├── form-group.hbs
│   │   │   └── form.hbs
│   │   ├── logo-list.hbs
│   │   ├── price-plan.hbs
│   │   ├── price-table.hbs
│   │   ├── tabs.hbs
│   │   ├── voice-card.hbs
│   │   └── voice-section.hbs
│   ├── layout
│   │   ├── footer.hbs
│   │   ├── header.hbs
│   │   └── section.hbs
│   ├── sections
│   │   └── hero.hbs
│   └── ui
│       ├── card.hbs
│       ├── pagination.hbs
│       └── section-title.hbs
└── public
    └── images
        ├── hero_sample.jpg
        ├── hero_sample.png
        ├── logo.png
        └── sample_img.jpg
```

---

# SCSS設計

## トークン管理

`variables.scss`

```css
:root {

 --main-color: #2e499d;
 --sub-color: #d13209;

 --space-xs: .25rem;
 --space-s: .5rem;
 --space-m: 1rem;
 --space-l: 2rem;

 --layout-container: 1200px;

}
```

デザインの基準値を管理します。

---

## 案件ごとの変更

```
assets/styles/foundation/_setting.scss
```

ここでデザインの上書きを行います。

foundationレイヤーは基本的に変更しません。

---

# Gridシステム

foundationには

**12カラムグリッドMixin**が用意されています。

提供Mixin

```
grid-12
span
stack
grid-auto
```

---

# CSS命名規則（BEM）

```
.block
.block__element
.block--modifier
```

---

# JavaScript設計

JavaScriptは

**Vanilla JS + UIモジュール構造**

で構築されています。

カルーセルのみjqueryを使用して、slickライブラリで実装

---

# DOMユーティリティ

`dom.js`

提供関数

```
qs()
qsa()
addClass()
removeClass()
toggleClass()
hasClass()
createElement()
```

---

# UIコンポーネント
SCSS・Handlebars・JavaScriptを組み合わせた **UIコンポーネントライブラリ構造**になっています。

---

## Layout系

```
container
section
layout-section
center
cluster
stack
switcher
```

ページのレイアウト構造を構築するためのユーティリティです。

---

## Commonコンポーネント

```
header
footer
top-header
grid
image-wrapper
section-title
```

サイト全体で共通利用される基本コンポーネント。

---

## UIコンポーネント

```
accordion
breadcrumb
button
card
cta
faq
feature-grid
feature-media
form
logo-list
pagination
price-plan
price-table
slider
tabs
voice-card
```

LP / サービスサイト / コーポレートサイトで頻出するUIをコンポーネント化しています。

---

## Handlebarsコンポーネント

`partials/components`

```
cta
faq
feature-grid
feature-media
form
logo-list
price-plan
price-table
tabs
voice-card
voice-section
drawer
```

データや構造をパーシャル化し、再利用可能なUIとして実装しています。

---

## Layoutパーシャル

`partials/layout`

```
header
footer
section
```

ページ構造の共通レイアウトを提供します。

---

## UIパーシャル

`partials/ui`

```
card
pagination
section-title
```

小規模UIパーツの再利用用コンポーネント。

---

## Sectionコンポーネント

`partials/sections`

```
hero
```

ページの主要セクションを構成するコンポーネント。

---

# 開発手順

## セットアップ

```
npm install
```

## 開発

```
npm run dev
```

## ビルド

```
npm run build
```

納品ファイルは

```
dist/
```

に出力されます。

# Lint / Format（コード品質管理）

このテンプレートには、実務開発でのコード品質を保つために以下のLint / Formatterが導入されています。

## ESLint

JavaScriptの構文エラーや潜在的なバグを検出します。

例

* 未使用変数の検出
* 再宣言エラー
* 危険な書き方の警告

実行

```
npm run lint:js
```

---

## Stylelint

SCSS / CSS のコード品質チェックを行います。

主なチェック内容

* 不正なCSS構文
* SCSSルール違反
* スペースや空行などのスタイル統一

実行

```
npm run lint:css
```

---

## HTMLHint

HTML / Handlebarsテンプレートの構造チェックを行います。

主なチェック内容

* 属性クォート
* HTML構造
* 基本的なHTML記述ミス

実行

```
npm run lint:html
```

---

## Prettier

コードフォーマットの自動整形を行います。

主な目的

* インデント統一
* 改行整形
* コードスタイル統一

---

## 一括Lint実行

すべてのLintをまとめて実行する場合

```
npm run lint
```

---

これにより

* コード品質の維持
* チーム開発時のスタイル統一
* バグの早期検出

が可能になります。

---

# このテンプレートの位置づけ

これは

**UIフレームワークではなく**

```
実務用UI制作テンプレート
```

です。

目的

* HTML/CSS案件の制作効率化
* UI再利用
* デザインシステム化


# UI追加ルール

新しいUIコンポーネントを追加する場合

styles/components/ui
partials/components
assets/js

の3層で追加する。


## 開発フロー

このテンプレートでは以下の流れで制作を進めます。  
Foundationを変更せず、UIコンポーネントを組み合わせてページを構築します。

1. **プロジェクトセットアップ**  
   依存パッケージをインストールし、開発サーバーを起動します。

2. **案件設定（setting）**  
   `_setting.scss` を編集し、カラー・コンテナ幅・余白など案件ごとのデザイン設定を行います。

3. **データ設定**  
   `src/data` のJSONファイルを編集し、ナビゲーションや料金表などのコンポーネントデータを設定します。

4. **ページ構造作成**  
   `index.html` で header / section / footer などのレイアウトパーシャルを配置し、ページの骨組みを作ります。

5. **セクション構築**  
   `partials/sections` のコンポーネントを使い、ページの主要セクションを構成します。

6. **UI配置**  
   `partials/components` のUIコンポーネントをセクション内に配置します。

7. **UIスタイル調整**  
   `styles/components/ui` を編集し、BEM規則に沿ってスタイルを調整します。

8. **レイアウト調整**  
   `layout` ユーティリティやGridシステムを使用してレイアウトを整えます。

9. **JavaScript実装**  
   `assets/js` のUIモジュールを利用して、タブ・アコーディオン・スライダーなどの動作を実装します。

10. **Lintチェック**  
   ESLint / Stylelint / HTMLHint を実行してコード品質を確認します。

11. **ビルド**  
   `npm run build` を実行し、納品用ファイルを `dist` に出力します。

UIコンポーネントを再利用することで  
LP / コーポレートサイト制作を高速化できます。