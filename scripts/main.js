$(function () {

    //$(".first").removeClass("hidden");

    var animationShowTime = 2000;
    var animationShowTime1 = 1000;
    var animationHideTime = 500;

    var setButtonHref = function () {
        $(".conditions").attr("href", "http://oleg-yan.com");
        $(".order").attr("href", "http://oleg-yan.com");
        $(".guarantee").attr("href", "http://oleg-yan.com");
        $(".who-is").attr("href", "http://oleg-yan.com");
    };

    var showButtons = function () {
        $(".buttons").animate({opacity: 1}, animationShowTime, null, function () {
            setButtonHref();
        });

        $(".skip-intro").animate({opacity: 0}, animationShowTime, null, function () {
            $("#skipIntro").css("display", "none");
        });

        $(".who-is").animate({opacity: 1}, animationShowTime, null, function () {

        });
    };

    var showBg2 = function () {
        $(".page2").animate({opacity: 1}, 1000, null, function () {
            showButtons();
        });
    };

    var hideBase = function () {
        $(".base").animate({opacity: 0}, animationHideTime, null, function () {

        });
        $(".action-result").animate({opacity: 0}, animationHideTime, null, function () {

        });
    };

    var showActionResult = function () {
        $(".action-result").animate({opacity: 1}, animationShowTime, null, function () {
            showBg2();
            hideBase();
        });
    };

    var showBg = function () {
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
            setTimeout(hideTextContainer, 2000);
        });
    };

    var showLiterature = function () {
        $(".literature").animate({opacity: 1}, animationShowTime1, null, function () {
            showThird()
        });
    };

    var showFacts = function () {
        $(".facts").animate({opacity: 1}, animationShowTime1, null, function () {
            showLiterature()
        });
    };
    var showCompetitions = function () {
        $(".competitions").animate({opacity: 1}, animationShowTime1, null, function () {
            showFacts()
        });
    };

    var showSuccess = function () {
        $(".success").animate({opacity: 1}, animationShowTime1, null, function () {
            showCompetitions()
        });
    };

    var showWriting = function () {
        $(".writing").animate({opacity: 1}, animationShowTime1, null, function () {
            showSuccess()
        });
    };

    var showMotivation = function () {
        $(".motivation").animate({opacity: 1}, animationShowTime1, null, function () {
            showWriting()
        });
    };

    var showCommunication = function () {
        $(".communication").animate({opacity: 1}, animationShowTime1, null, function () {
            showMotivation()
        });
    };

    var showFirst = function () {
        slideSwowStarted = true;

        $(".first").animate({opacity: 1}, animationShowTime, null, function () {
            showCommunication()
        });
    };

    var os = navigator.platform,
        browser = navigator.userAgent,
        slideSwowStarted = false,
        u;

    var deviceInfo = {
        isTouch: false,
        isIPad: false,
        isIPhone: false,
        isAndroid: false
    };

    deviceInfo.browser = browser;
    deviceInfo.os = os;

    if ((window.devicePixelRatio !== u) && (window.devicePixelRatio > 1)) {
        deviceInfo.isRetina = true;
    }


    if (os.indexOf('Win') !== -1) {
        deviceInfo.isWindows = true;
    } else if (os.indexOf('Mac') !== -1) {
        deviceInfo.isMac = true;
    } else if ((os.indexOf('iPhone') !== -1) || (os.indexOf('iPod') !== -1)) {
        deviceInfo.isIPhone = true;
    } else if (browser.indexOf('Android') !== -1) {
        deviceInfo.isAndroid = true;
        if (document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Shape', '1.0')) {
        } else {
            deviceInfo.isOldAndroid = true;
        }
    } else if (os.indexOf('iPad') !== -1) {
        deviceInfo.isIPad = true;
        if (deviceInfo.isRetina) {
            deviceInfo.iPadVersion = 3;
        }
    }

    deviceInfo.isTouch = deviceInfo.isIPad || deviceInfo.isIPhone || deviceInfo.isAndroid;

    var horizontalOrientation =
        function(){
            return $(window).width() > $(window).height();
        };



    var startSlideShow = function () {
        console.log('started');
        if (deviceInfo.isTouch) {
            if (horizontalOrientation() === true) {
                console.log('hor');
                showFirst();
                $(".messageBox").css("display", "none");
            }
            else {
                $(".messageBox").css("display", "block");
            }
        } else {
            showFirst();
        }
    };


    $(window).on('resize', function () {
        console.log(slideSwowStarted);
        if (slideSwowStarted === false) {
            startSlideShow();
        }
    });


    function preloadImages(arrayOfImages, callback) {
        $(arrayOfImages).each(function () {
            $('<img/>')[0].src = this;
            // Alternatively you could use:
            // (new Image()).src = this;
            //console.log('loaded '+this);
        });

        if (callback) {
            setTimeout(callback, 1000);
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
        'images/who-is.png',

        'images/communication.png',
        'images/motivation.png',
        'images/writing.png',
        'images/success.png',
        'images/competitions.png',
        'images/facts.png',
        'images/literature.png'

    ], startSlideShow);

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