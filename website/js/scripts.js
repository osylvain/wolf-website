var appMaster = {

    preLoader: function(){
        imageSources = []
        $('img').each(function() {
            var sources = $(this).attr('src');
            imageSources.push(sources);
        });
        if($(imageSources).load()){
            $('.pre-loader').fadeOut('slow');
        }
    },

    smoothScroll: function() {
        // Smooth Scrolling
        $('a[href*=#]:not([href=#carousel-example-generic])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    },

    animateScript: function() {
        $('.scrollpoint.sp-effect1').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInLeft');},{offset:'100%'});
        $('.scrollpoint.sp-effect2').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInRight');},{offset:'100%'});
        $('.scrollpoint.sp-effect3').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInDown');},{offset:'100%'});
        $('.scrollpoint.sp-effect4').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeIn');},{offset:'100%'});
        $('.scrollpoint.sp-effect5').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInUp');},{offset:'100%'});
    },

    revSlider: function() {

//        var docHeight = Math.min($(window).height(), $(window).width());

        var mainSlider = $('.tp-banner').revolution({
            delay: 9000,
            startwidth: 1170,
            startheight: 700,
            hideThumbs: 10,
            touchenabled: true,
            fullWidth: "on",
            hideTimerBar: "on",
            fullScreen: "off",
            onHoverStop: "off",
            fullScreenOffsetContainer: "",
            spinner: null
        });
        
    },

    scrollMenu: function(){
        var num = 50; //number of pixels before modifying styles

        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > num) {
                $('nav').addClass('scrolled');

            } else {
                $('nav').removeClass('scrolled');
            }
        });
    },

    placeHold: function(){
        // run Placeholdem on all elements with placeholders
        Placeholdem(document.querySelectorAll('[placeholder]'));
    },

    setRandomColor: function() {
        var colors = [
            '#50A6C2',
            '#f39c12',
            '#57d08a',
            '#f15c39'
        ];

        var randomColor = colors[Math.floor((Math.random() * colors.length))];

        $('.wolf-random-color').css('color', randomColor);
        $('.wolf-random-border-color').css('border-color', randomColor);
        $('.wolf-random-bg-color').css('background-color', randomColor);

        $('.wolf-random-hover').hover(function(){
            $(this).css('background-color', randomColor);
            $(this).css('color', '#fff');
        },function(){
            $(this).css('background-color', 'transparent');
            $(this).css('color', randomColor);
        });
    },

}; // AppMaster


$(document).ready(function() {

    appMaster.smoothScroll();

    appMaster.animateScript();

    appMaster.revSlider();

    appMaster.scrollMenu();

    appMaster.placeHold();

    appMaster.setRandomColor();

});
