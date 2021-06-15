$('.menu-btn__inner').click(() => {
    $('.menu').toggleClass('menu--open');
    $('.menu-btn__inner').toggleClass('menu-btn--active');
})


$('.catalog__toggler').click(() => {
    $('.catalog__body').toggleClass('catalog__body--open');
    $('.catalog__toggler').toggleClass('catalog__toggler--open');
    $('.content').toggleClass('content--hidden');
})


$('.companies__slider').slick({
    slidesToShow: 5,
    appendArrows: $('.companies__arrows'),
    nextArrow: '<a href="javascript://" class="arrow arrow--right"><img src="./img/svg/right-chevron.svg" alt=""></a>',
    prevArrow: '<a href="javascript://" class="arrow arrow--left"><img src="./img/svg/right-chevron.svg" alt=""></a>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
        },

        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3
            }
        },

        {
            breakpoint: 670,
            settings: {
                slidesToShow: 2
            }
        },

        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1
            }
        }
    ]
})

$('.portfolio__slider').slick({
    slidesToShow: 4,
    appendArrows: $('.portfolio__arrows'),
    nextArrow: '<a href="javascript://" class="arrow arrow--right"><img src="./img/svg/right-chevron.svg" alt=""></a>',
    prevArrow: '<a href="javascript://" class="arrow arrow--left"><img src="./img/svg/right-chevron.svg" alt=""></a>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },

        {
            breakpoint: 760,
            settings: {
                slidesToShow: 2
            }
        },

        {
            breakpoint: 570,
            settings: {
                slidesToShow: 1
            }
        }
    ]
})