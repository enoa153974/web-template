import { qsa, addClass, removeClass } from "./dom.js";

export function initTabs() {

    const buttons = qsa(".tabs__btn");

    buttons.forEach((btn) => {

        btn.addEventListener("click", () => {

            const tabId = btn.dataset.tab;

            // 全タブ非アクティブ
            qsa(".tabs__btn").forEach((b) => {
                removeClass(b, "is-active");
            });

            qsa(".tabs__panel").forEach((p) => {
                removeClass(p, "is-active");
            });

            // 選択タブ
            addClass(btn, "is-active");

            const panel = document.getElementById(tabId);

            if (panel) {
                addClass(panel, "is-active");
            }

        });

    });

}