
/* ==================================================
Slider
--------------------------------------------------
Foundation 汎用スライダー

works
voice
logo
hero
gallery

すべて対応

■使用例

<div class="slider"
        data-slides="3"
        data-scroll="1"
        data-autoplay="true"
        data-speed="4000"
        data-dots="true"
        data-arrows="true"
        data-center="false"
        data-fade="false"
        data-loop="true">

</div>

================================================== */

export function initSlider() {

    window.addEventListener('DOMContentLoaded', () => {
        const $sliders = $('.slider');

        if (!$sliders.length) {
            console.warn('.slider 要素が見つかりませんでした');
            return;
        }

        $sliders.each(function () {

            const $slider = $(this);

            /* ===============================
                data属性取得
            =============================== */

            const slides = $slider.data('slides') ?? 1;
            const scroll = $slider.data('scroll') ?? 1;

            const autoplay = $slider.data('autoplay') ?? false;
            const speed = $slider.data('speed') ?? 4000;

            const dots = $slider.data('dots') ?? true;
            const arrows = $slider.data('arrows') ?? true;

            const center = $slider.data('center') ?? false;

            const fade = $slider.data('fade') ?? false;
            const loop = $slider.data('loop') ?? true;

            const variable = $slider.data('variable') ?? false;

            const gap = $slider.data('gap') ?? 'm';

            $slider.addClass(`slider--gap-${gap}`);

            /* ===============================
                slick 初期化
            =============================== */

            $slider.slick({

                slidesToShow: slides,
                slidesToScroll: scroll,

                autoplay: autoplay,
                autoplaySpeed: speed,

                dots: dots,
                arrows: arrows,

                infinite: loop,

                centerMode: center,
                centerPadding: '40px',

                fade: fade,

                variableWidth: variable,

                accessibility: false,

                prevArrow: `
                    <button type="button" class="slider__arrow slider__arrow--prev" aria-label="前へ">
                        <span></span>
                    </button>
                `,

                nextArrow: `
                    <button type="button" class="slider__arrow slider__arrow--next" aria-label="次へ">
                        <span></span>
                    </button>
                `,

                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                            centerMode: false
                        }
                    }
                ]

            });

        });

    });

}