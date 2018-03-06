    //sticky nav
    $(".js-section-about").waypoint(function(direction) {
       if(direction === "down") {
          $("nav").addClass("sticky");
       } else {
           $("nav").removeClass("sticky");
       }
        }, {
          offset: '60px'
        });


    //scrolling to about me and projects - buttons
    $(".js-scroll-to-about").click(function() {
        $("body, html").animate({scrollTop: $(".js-section-about").offset().top}, 1000);
    });

    $(".js-scroll-to-projects").click(function() {
        $("body, html").animate({scrollTop: $(".js-section-projects").offset().top}, 1000);
    });


    //Navigation scroll
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
    
    
    //animation on scroll
    $('#js-wp-1').waypoint(function() {
        $('#js-wp-1').addClass('animated fadeInDown');
        }, {
        offset: '70%'
    });

    $('#js-wp-2').waypoint(function() {
        $('#js-wp-2').addClass('animated fadeInUp');
        }, {
        offset: '70%'
    });


    //menu icon
    $('.js-nav-icon, .js-main-nav a, .black-logo').click(function(element){
            var nav = $('.js-main-nav');
            var icon = $('.js-nav-icon i');

            //Gets the class name of the element that triggered the event
            var clicked = element.target.className;

            //Exists the function if the menu is closed AND the logo-black element (logo image) was clicked
            if (icon.hasClass('ion-navicon-round') && clicked == 'logo-black')
                return;

            //Opens and closes the menu
            if ($(window).width() < 768){
                nav.slideToggle(200);
            }

            //Changes icon states of the menu button
            if (icon.hasClass('ion-navicon-round')) {
                icon.addClass('ion-close-round');
                icon.removeClass('ion-navicon-round');
            } else {
                icon.addClass('ion-navicon-round');
                icon.removeClass('ion-close-round');
            }
        });


        $(window).resize(function(){
            var nav = $('.js-main-nav');
            var icon = $('.js-nav-icon i');

            if ($(window).width() > 767){
                nav.css("display", "block");
                icon.addClass('ion-close-round');
                icon.removeClass('ion-navicon-round');
            } else {
                nav.css("display", "none");
                icon.addClass('ion-navicon-round');
                icon.removeClass('ion-close-round');
            }

        });






