$(function () {

    //$(".first").removeClass("hidden");

    var animationShowTime = 2000;
    var animationHideTime = 500;

    var setButtonHref = function(){
        $(".conditions").attr("href","http://oleg-yan.com");
        $(".order").attr("href","http://oleg-yan.com");
        $(".guarantee").attr("href","http://oleg-yan.com");
        $(".who-is").attr("href","http://oleg-yan.com");
    };

    var showButtons = function(){
        $(".buttons").animate({opacity: 1}, animationShowTime, null, function () {
            setButtonHref();
        });

        $(".skip-intro").animate({opacity: 0}, animationShowTime, null, function () {
            $("#skipIntro").css("display","none");
        });

        $(".who-is").animate({opacity: 1}, animationShowTime, null, function () {

        });
    };

    var showBg2 = function(){
        $(".page2").animate({opacity: 1}, 1000, null, function () {
            showButtons();
        });
    };

    var hideBase = function(){
        $(".base").animate({opacity: 0}, animationHideTime, null, function () {

        });
        $(".action-result").animate({opacity: 0}, animationHideTime, null, function () {

        });
    };

    var showActionResult = function(){
        $(".action-result").animate({opacity: 1}, animationShowTime, null, function () {
            showBg2();
            hideBase();
        });
    };

    var showBg = function(){
        $(".page").animate({opacity: 1}, animationShowTime, null, function () {
            showActionResult();
        });
    };

    var showBase = function () {
        $(".base").animate({opacity: 1}, animationShowTime, null, function () {
            showBg();
        });
    };

    var hideTextContainer = function () {
        $(".text-container").animate({opacity: 0}, animationHideTime, null, function () {
            showBase()
        });
    };

    var showThird = function () {
        $(".third").animate({opacity: 1}, animationShowTime, null, function () {
            setTimeout(hideTextContainer,2000);
        });
    };

    var showSecond = function () {
        $(".second").animate({opacity: 1}, animationShowTime, null, function () {
            showThird()
        });
    };

    var showFirst = function () {
        $(".first").animate({opacity: 1}, animationShowTime, null, function () {
            showSecond()
        });
    };


    function preloadImages(arrayOfImages,callback) {
        $(arrayOfImages).each(function(){
            $('<img/>')[0].src = this;
            // Alternatively you could use:
            // (new Image()).src = this;
            console.log('loaded '+this);
        });

        if(callback){

            setTimeout(callback,1000);

            //callback();
        }
    }

    preloadImages([
        'images/action-result.png',
        'images/base.png',
        'images/bg.jpg',
        'images/bg2.jpg',
        'images/conditions.png',
        'images/first.png',
        'images/guarantee.png',
        'images/order.png',
        'images/second.png',
        'images/third.png',
        'images/who-is.png'
    ], showFirst);

    //setTimeout(showFirst, animationShowTime);


    $("#skipIntro").on("click", function () {
        $(".text-container").css("display", "none");
        $(".second-container").css("display", "none");
        $(".page2").css("opacity", 1);
        $(".buttons").css("opacity", 1);
        $(".who-is").css("opacity", 1);
        setButtonHref();
        $(this).parent().css("display", "none");
    });


});