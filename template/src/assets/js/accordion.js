import { qsa, hasClass, addClass, removeClass } from './dom.js';

/* ==================================================
Accordion
--------------------------------------------------

■概要
--------------------------------------------------
汎用アコーディオン機能。

以下のようなUIに利用可能。

・FAQ
・利用規約
・メニュー
・折りたたみコンテンツ


■基本HTML構造
--------------------------------------------------

<div class="accordion">

    <button class="accordion__btn">
        質問タイトル
    </button>

    <div class="accordion__content">
        回答内容
    </div>

</div>


■構造ルール
--------------------------------------------------

.accordion
    ├ .accordion__btn
    └ .accordion__content

※ btn の直後の要素が content である必要がある
（nextElementSibling を使用しているため）


■複数配置例
--------------------------------------------------

<div class="faq-list">

    <div class="accordion">

        <button class="accordion__btn">
            質問1
        </button>

        <div class="accordion__content">
            回答1
        </div>

    </div>

    <div class="accordion">

        <button class="accordion__btn">
            質問2
        </button>

        <div class="accordion__content">
            回答2
        </div>

    </div>

</div>


■挙動
--------------------------------------------------

1. ボタンをクリック
2. すべてのアコーディオンを閉じる
3. 押されたものだけ開く

※同時に1つだけ開く仕様


■CSS例
--------------------------------------------------

.accordion__content {
    max-height: 0;
    overflow: hidden;
    transition: max-height .3s ease;
}

.accordion.open .accordion__content {
    padding-top: 1rem;
}

================================================== */


export function initAccordion() {

    // すべてのアコーディオンボタン取得
    const accordionButtons = qsa('.accordion__btn');

    accordionButtons.forEach((button) => {

        button.addEventListener('click', () => {

            // 対応するコンテンツ
            const content = button.nextElementSibling;

            // 親アコーディオン
            const container = button.closest('.accordion');

            // 現在開いているか
            const isOpen = hasClass(content, 'is-open');


            /* ---------------------------------
            すべて閉じる
            --------------------------------- */

            qsa('.accordion__content').forEach((c) => {

                removeClass(c, 'is-open');
                c.style.maxHeight = null;

                // 親の状態クラス削除
                removeClass(c.closest('.accordion'), 'open');

            });


            /* ---------------------------------
            押されたものを開く
            --------------------------------- */

            if (!isOpen) {

                addClass(content, 'is-open');
                addClass(container, 'open');

                // アニメーション用高さ設定
                content.style.maxHeight = content.scrollHeight + 'px';

            }

        });

    });

}