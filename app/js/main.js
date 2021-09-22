$(window).on("load" , function () {
    const heroSwiper = new Swiper('.hero__slider', {
        navigation: {
            nextEl: '.hero__next',
            prevEl: '.hero__prev'
        },
        loop: true
    });

    const peopleSwiper = new Swiper('.people__slider', {
        spaceBetween: 20,
        navigation: {
            nextEl: '.people__next',
            prevEl: '.people__prev'
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
        }
    });
    if ($('.swiper-pagination-current').length < 2) {
        let text = $('.swiper-pagination-current').text()
        $('.swiper-pagination-current').text('0' + text)
    }
    if ($('.swiper-pagination-total').text() < 10) {
        let textQ = $('.swiper-pagination-total').text()
        $('.swiper-pagination-total').text('0' + textQ)
    }
    peopleSwiper.on('slideChange', () => {
        if ($('.swiper-pagination-current').text() < 10) {
            let text = $('.swiper-pagination-current').text()
            $('.swiper-pagination-current').text('0' + text)
        }
        if ($('.swiper-pagination-total').text() < 10) {
            let text = $('.swiper-pagination-total').text()
            $('.swiper-pagination-total').text('0' + text)
        }
    })

    const smallSwiper = new Swiper('.small__slider', {
        spaceBetween: 20,
        navigation: {
            nextEl: '.small__next',
            prevEl: '.small__prev'
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
        }
    });
    if ($('.swiper-pagination-current').length < 2) {
        let text = $('.swiper-pagination-current').text()
        $('.swiper-pagination-current').text('0' + text)
    }
    if ($('.swiper-pagination-total').text() < 10) {
        let textQ = $('.swiper-pagination-total').text()
        $('.swiper-pagination-total').text('0' + textQ)
    }
    smallSwiper.on('slideChange', () => {
        if ($('.swiper-pagination-current').text() < 10) {
            let text = $('.swiper-pagination-current').text()
            $('.swiper-pagination-current').text('0' + text)
        }
        if ($('.swiper-pagination-total').text() < 10) {
            let text = $('.swiper-pagination-total').text()
            $('.swiper-pagination-total').text('0' + text)
        }
    })

    $('.header__burger').on('click', () => {
        $('.header').toggleClass('header_active')
        if ($('.header').hasClass('header_active')) {
            $('.header__mob').slideDown()
            $('body').addClass('scroll')
        } else {
            $('.header__mob').slideUp()
            $('body').removeClass('scroll')
        }
    })
    $('.header__mob-close').on('click', () => {
        $('.header').removeClass('header_active')
        $('body').removeClass('scroll')
        $('.header__mob').slideUp()
    })


    $('.brands-btn').each(function (index) {
        $(this).on('click', () => {
            $('.brands-btn').removeClass('brands-btn_active')
            $(this).addClass('brands-btn_active')
            $('.brands__wrapper').removeClass('brands__wrapper_active')
            $('.brands__wrapper').eq(index).addClass('brands__wrapper_active')
        })
    })
    let i = 0
    let j = 0
    $('.brands__name').each(function (index) {
        $(this).on('click', () => {
            $('.brands__name').removeClass('brands__name_active')
            $(this).addClass('brands__name_active')
            $('.brands__beer').removeClass('brands__beer_active')
            $('.brands__beer').eq(index).addClass('brands__beer_active')
            i = index
        })
    })
    $('.brands__name-non').each(function (index) {
        $(this).on('click', () => {
            $('.brands__name-non').removeClass('brands__name_active')
            $(this).addClass('brands__name_active')
            $('.brands__beer-non').removeClass('brands__beer_active')
            $('.brands__beer-non').eq(index).addClass('brands__beer_active')
            j = index
        })
    })
    $('.brands__prev').on('click', () => {
        if (i > 0) {
            i--
            $('.brands__name').removeClass('brands__name_active')
            $('.brands__name').eq(i).addClass('brands__name_active')
            $('.brands__beer').removeClass('brands__beer_active')
            $('.brands__beer').eq(i).addClass('brands__beer_active')
        }
    })
    $('.brands__next').on('click', () => {
        if (i < ($('.brands__name').length - 1)) {
            i++
            $('.brands__name').removeClass('brands__name_active')
            $('.brands__name').eq(i).addClass('brands__name_active')
            $('.brands__beer').removeClass('brands__beer_active')
            $('.brands__beer').eq(i).addClass('brands__beer_active')
        }
    })
    $('.brands__prev-non').on('click', () => {
        if (j > 0) {
            j--
            $('.brands__name-non').removeClass('brands__name_active')
            $('.brands__name-non').eq(j).addClass('brands__name_active')
            $('.brands__beer-non').removeClass('brands__beer_active')
            $('.brands__beer-non').eq(j).addClass('brands__beer_active')
        }
    })
    $('.brands__next-non').on('click', () => {
        if (j < ($('.brands__name-non').length - 1)) {
            j++
            $('.brands__name-non').removeClass('brands__name_active')
            $('.brands__name-non').eq(j).addClass('brands__name_active')
            $('.brands__beer-non').removeClass('brands__beer_active')
            $('.brands__beer-non').eq(j).addClass('brands__beer_active')
        }
    })

    $('.age-yes').on('click', () => {
        $('.age').addClass('age_hide')
        $('body').removeClass('scroll')
    })

    $('.media-video-open').on('click', () => {
        $('.popup_video').addClass('popup_active')
        $('body').addClass('scroll')
    })
    $('.popup__close').on('click', () => {
        $('.popup_video').removeClass('popup_active')
        $('body').removeClass('scroll')
    })

    $('.media-photo-open').on('click', () => {
        $('.popup_photo').addClass('popup_active')
        $('body').addClass('scroll')
    })
    $('.popup__close').on('click', () => {
        $('.popup_photo').removeClass('popup_active')
        $('body').removeClass('scroll')
    })

    $('.media-manual-open').on('click', () => {
        $('.popup_manual').addClass('popup_active')
        $('body').addClass('scroll')
    })
    $('.popup__close').on('click', () => {
        $('.popup_manual').removeClass('popup_active')
        $('body').removeClass('scroll')
    })


    $('.header__open-phone').on('click', () => {
        $('.header__open-phone').toggleClass('header__open-phone_active')

        if ($('.header__open-phone').hasClass('header__open-phone_active')) {
            $('.header__phone-wrapper').slideDown()
            $('body').addClass('scroll')
            $('.header').addClass('header_active')
        } else {
            $('.header__phone-wrapper').slideUp()
            $('body').removeClass('scroll')
            $('.header').removeClass('header_active')
        }
    })
})

















