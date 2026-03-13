# Foundation 設計ガイド

foundation は、このテンプレートの「設計の土台」です。

目的は、

- 案件ごとの差分を吸収する
- レイアウトとタイポグラフィの思想を固定する
- 自動化しすぎず、実務で調整しやすくする

ことです。

---

# 🎯 設計方針

## 1. 7割自動化 / 3割調整余地

この foundation は「完全自動化」を目指しません。

- よく変わるもの → settings で管理
- 構造そのもの → foundation に固定
- デザイン微調整 → コンポーネント側で対応

実務で一番重要なのは「調整しやすさ」です。

---

# 📂 構成と役割

## _variables.scss
Sass変数のデフォルト定義。

- container幅
- breakpoint
- fluidレンジ
- カラー
- フォント
- radius
- レイアウト高さ

すべて `!default` を付け、
settings から上書き可能にする。

⚠ 原則として直接編集しない。

---

## _settings.scss

案件ごとの差分を定義する場所。

ここで上書きする。

例：

@forward 'variables' with (
$container-max-width: 1100px,
$fluid-min-width: 640,
$fluid-max-width: 1280
);


案件が変わるときはここだけ触る。

---

## _variables-custom.scss

Sass変数を CSS変数として `:root` に出力する。

構造：

Sass変数 → settings上書き → CSS変数化

例：


--container-max-width: #{v.$container-max-width};
--font-size-xl: #{fluid(1.125rem, 1.5rem)};


---

## _mixin.scss

レイアウトやタイポグラフィ用のmixinを定義。

mixinは `settings` を参照する。

例：

- media-query
- fluid-font
- truncate
- flex系

設計は固定し、案件差分は持たせない。

---

## _functions.scss

fluidなどの共通計算ロジックを定義。

例：


@function fluid($min, $max) { ... }


fluidレンジは settings に依存する。

---

# 🧠 タイポグラフィ設計

## フォントサイズの扱い

- `--font-size-*` は標準タイポスケール
- vw直書きはしない
- fluidレンジと連動させる
- 特殊演出は fluid-font mixin を使用

---

## 使い分け

### 通常テキスト

font-size: var(--font-size-base);


### 見出し

font-size: var(--font-size-2xl);


### ヒーロー演出

@include fluid-font(28px, 64px);


---

# 🏗 レイアウト設計

## container幅

settingsで管理する。

ブランドや案件特性によって変える。

---

## breakpoint

variablesに定義し、settingsで上書き可能。

mixinは settings を参照する。

---

# 🎨 テーマ設計

カラー・フォントはSass変数化し、
CSS変数に変換する。

メリット：

- デザインテーマの一括変更が可能
- JSからも参照可能
- 将来的なダークモード対応も容易

---

# 🚀 実務での運用ルール

## カンプ再現案件
- 必要なら固定px指定OK
- トークンに縛られない

## LP制作
- トークン優先
- ヒーローはfluid活用

## 案件切替
- settingsのみ変更

---

# 📌 まとめ

foundation は

「設計を縛るもの」ではなく  
「設計を安定させるもの」。

- 変わるものは settings
- 構造は固定
- 微調整は自由

これがこのテンプレの思想。