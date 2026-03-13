import { qsa, addClass, removeClass, hasClass } from "./dom.js";

export function initHeaderMenu() {

    const items = qsa(".header__item--has-children");

    if (!items.length) return;

    items.forEach((item) => {

        const link = item.querySelector(".header__link");
        const mega = item.querySelector(".header__mega");

        if (!link || !mega) return;

        link.addEventListener("click", (e) => {

            /* ------------------------------
            SPのみアコーディオン動作
            ------------------------------ */

            if (window.innerWidth > 768) return;

            e.preventDefault();

            const isOpen = hasClass(item, "open");

            /* ------------------------------
            全部閉じる
            ------------------------------ */

            items.forEach((i) => {

                removeClass(i, "open");

                const m = i.querySelector(".header__mega");
                if (m) m.style.maxHeight = null;

            });

            /* ------------------------------
            押されたものを開く
            ------------------------------ */

            if (!isOpen) {

                addClass(item, "open");

                mega.style.maxHeight = mega.scrollHeight + "px";

            }

        });

    });


    /* --------------------------------
    リサイズ時リセット
    -------------------------------- */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 768) {

            items.forEach((item) => {

                removeClass(item, "open");

                const mega = item.querySelector(".header__mega");

                if (mega) mega.style.maxHeight = null;

            });

        }

    });

}