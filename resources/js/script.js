$(document).ready(function () {


    $(".js-section-about").waypoint(function (direction) {
        if (direction === "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    }, {
        offset: '60px'
    });


    $(".js-scroll-to-about").click(function () {
        $("body, html").animate({
            scrollTop: $(".js-section-about").offset().top
        }, 1000);
    });

    $(".js-scroll-to-projects").click(function () {
        $("body, html").animate({
            scrollTop: $(".js-section-projects").offset().top
        }, 1000);
    });


    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });


    $('.soft-skills-box').mouseover(function () {
        $('.soft-skills', this).addClass('animated bounce');
    });

    $('.soft-skills-box').mouseleave(function () {
        $('.soft-skills', this).removeClass('animated bounce');
    });


    $('#js-wp-1').waypoint(function () {
        $('#js-wp-1').addClass('animated fadeInLeft');
    }, {
        offset: '70%'
    });

    $('#js-wp-2').waypoint(function () {
        $('#js-wp-2').addClass('animated fadeInRight');
    }, {
        offset: '70%'
    });

    $('#js-wp-3').waypoint(function () {
        $('#js-wp-3').addClass('animated fadeInLeft');
    }, {
        offset: '70%'
    });


    $('.js-nav-icon, .js-main-nav a, .black-logo').click(function (element) {
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon i');

        var clicked = element.target.className;

        if (icon.hasClass('ion-navicon-round') && clicked == 'logo-black')
            return;

        if ($(window).width() < 768) {
            nav.slideToggle(200);
        }


        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });


    $(window).resize(function () {
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon i');

        if ($(window).width() > 745) {
            nav.css("display", "block");
        } else {
            nav.css("display", "none");
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

    });

    var map = new GMaps({
        div: '#map',
        lat: 50.061898,
        lng: 19.937512
    });

    map.addMarker({
        lat: 50.061898,
        lng: 19.937512,
    });
});
