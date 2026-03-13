import { qs, qsa, removeClass, addClass } from "./dom.js";

export function initForm() {


    document.addEventListener("DOMContentLoaded", () => {

        const form = qs(".c-form", document);

        if (!form) return;

        form.addEventListener("submit", (e) => {

            let isValid = true;

            const groups = qsa(form, ".c-form__group");

            groups.forEach(group => {

                const input = qs(group, ".c-form__control");
                const error = qs(group, ".c-form__error");

                error.textContent = "";
                removeClass(group, "is-error");

                if (!input) return;

                if (input.hasAttribute("required") && !input.value.trim()) {

                    error.textContent = "必須項目です";
                    addClass(group, "is-error");

                    isValid = false;

                }

                if (input.type === "email") {

                    const emailPattern =
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                    if (input.value && !emailPattern.test(input.value)) {

                        error.textContent = "メールアドレスの形式が正しくありません";
                        addClass(group, "is-error");

                        isValid = false;

                    }

                }

            });

            if (!isValid) {
                e.preventDefault();
            }

        });

    });
}