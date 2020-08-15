'use strict';

(function () {
  document.querySelector('.no-js').classList.remove('no-js');
})();

'use strict';

window.navigation = (function () {
  var MOBILE_WIDTH_MAX = 939;

  var header = document.querySelector('.page-header');
  var headerToggle = document.querySelector('.page-header__toggle');
  var siteList = document.querySelector('.site-list');

  var isHeaderOpened = function () {
    return header.classList.contains('page-header--opened');
  };

  var isMobileScreen = function () {
    return window.innerWidth <= MOBILE_WIDTH_MAX;
  };

  var showHeader = function () {
    header.classList.remove('page-header--closed');
    header.classList.add('page-header--opened');
    window.addEventListener('resize', resizeWindowHandler);
  };

  var hideHeader = function () {
    header.classList.remove('page-header--opened');
    header.classList.add('page-header--closed');
    window.removeEventListener('resize', resizeWindowHandler);
  };

  var onToggleClick = function () {
    if (isHeaderOpened()) {
      hideHeader();
    } else {
      showHeader();
    }
  };

  var resizeWindowHandler = function () {
    if (!isMobileScreen() && isHeaderOpened()) {
      hideHeader();
    }
  };

  headerToggle.addEventListener('click', onToggleClick);

  return {
    isOpened: isHeaderOpened,
    show: showHeader,
    hide: hideHeader
  };
})();

'use strict';
$(function(){

var isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
var isAndroid = /(android)/i.test(navigator.userAgent);

if (isIOS) {

    var $videostart = $("#video-start");
    var $videoend = $("#video-end");
    var $canvasstart = $("#canvas-start");
    var $canvasend = $("#canvas-end");

    var showVideo = function () {
      $videostart.addClass("promo-video__video-start--active");
      $videoend.addClass("promo-video__video-end--active");
    };

    showVideo();

    var canvasStartVideo = new CanvasVideoPlayer({
      videoSelector: '#video-start',
      canvasSelector: '.promo-video__canvas',
      timelineSelector: false,
      autoplay: true,
      pauseOnClick: false,
      audio: false,
      resetOnLastFrame: false
    });

    var canvasEndVideo = new CanvasVideoPlayer({
      videoSelector: '#video-end',
      canvasSelector: '.promo-video__canvas',
      timelineSelector: false,
      pauseOnClick: false,
      audio: false,
      makeLoop: true,
      resetOnLastFrame: true
    });

    var playEndVideo = function () {
      canvasEndVideo.play();
    }

    $videostart.on("ended", playEndVideo);


    } else if (isAndroid) {
      var $videostart = $("#video-start");
      var $videoend = $("#video-end");

      window.addEventListener('touchstart', function videoStart() {
        videostart.play();
        this.removeEventListener('touchstart', videostart);
      });

      var playEndAndroidVideo = function () {
        videoend.play();
      }

      document.querySelectorAll('.promo-video__canvas')[0].style.display = 'none';

      var hideVideoStart = function () {
        $videostart.removeClass("promo-video__video-start--active");
        $videoend.addClass("promo-video__video-end--active");
      };

      $videostart.on("ended", hideVideoStart);
      $videostart.on("ended", playEndAndroidVideo);
    } else {

    var $videostart = $("#video-start");
    var $videoend = $("#video-end");

    document.querySelectorAll('.promo-video__canvas')[0].style.display = 'none';

    var hideVideoStart = function () {
      $videostart.removeClass("promo-video__video-start--active");
      $videoend.addClass("promo-video__video-end--active");
    };

    $videostart.on("ended", hideVideoStart);
  }
});

$(function() {
  $('.company-info__slides').owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    autoplay: true
  });
});

$(function() {
  $('.partners__slides').owlCarousel({
    items: 1,
    nav: true,
    navContainerClass: ['slider-nav', 'slider-nav--sections'],
    navClass: ['slider__btn slider__btn--prev', 'slider__btn slider__btn--next'],
    responsive: {
      768: {
        items: 2
      },
      1140: {
        items: 3,
        touchDrag: false
      }
    }
  });
});

'use strict';

$(function() {
  $(".catalog-card__btn").on("click", function() {
    var popup = $(this).data("modal");
    $(popup).show();
    $(".overlay").addClass("overlay--show");
  });

  $(".popup").on("click", function(e) {
    var className = e.target.className;
    if(className === "popup" || className === "popup__close-btn"){
      $(this).closest(".popup").hide();
      $(".overlay").removeClass("overlay--show");
    }
  });
});

//# sourceMappingURL=all.js.map
