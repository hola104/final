import Swiper, {Navigation, Pagination} from 'swiper';
Swiper.use([Navigation, Pagination]);

const cards = document.querySelector('.brands');
let swiper;
const activeSwiper = function () {
    swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 16,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        slidesPerView: 'auto',
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

};

const breakpoint = window.matchMedia('(max-width: 767px)');
const breakpointChecker = function () {
    if (breakpoint.matches) {
        activeSwiper();
        return;
    }

    if (!breakpoint.matches && swiper !== undefined) {
        swiper.destroy(true, true);
    }
};

breakpoint.addEventListener('change', breakpointChecker);
breakpointChecker();
