$(document).ready(function () {
    $('.section__slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        easing: 'ease-out',
        infinite: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    dots: false,
                }
            }
        ]
    });
    $('.burger__menu').click(function (event) {
        $('.burger__menu,.burger__list').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.burger__link').click(function (event) {
        $('.burger__menu,.burger__list').removeClass('active');
        $('body').removeClass('lock');
    });
    $('a[href*="#"]').on('click.smoothscroll', function (e) {
        var hash = this.hash, _hash = hash.replace(/#/, ''), theHref = $(this).attr('href').replace(/#.*/, '');
        if (theHref && location.href.replace(/#.*/, '') != theHref) return;
        var $target = _hash === '' ? $('body') : $(hash + ', a[name="' + _hash + '"]').first();
        if (!$target.length) return;
        e.preventDefault();
        $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 1500, 'swing', function () {
            window.location.hash = hash;
        });
    });
});