/**
 * main.js
 * 
 * Viteのエントリーポイント
 * - index.html で必ず <script type="module" src="/main.js"></script> として読み込まれる必要がある
 * - Sass/CSSや必要なJSをここでまとめて読み込む
 * - ページ全体で使う処理をここに書く
 */
import $ from "jquery";

window.$ = $;
window.jQuery = $;

import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/scss/style.scss'
import { initHeaderMenu } from "./assets/js/header-menu.js";
import { initAccordion } from "./assets/js/accordion.js";
import { initForm } from "./assets/js/form-validation.js";
import { initHamburger } from "./assets/js/hamburger.js";
import { initSlider } from "./assets/js/slider.js";

initHeaderMenu();
initForm();
initAccordion();
initHamburger();
initSlider();
