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

$(document).ready(function(){
    var playCounter = 0;
    var clipArray = [];

    var $videostart = $("#video-start");
    var $videoend = $("#video-end");

    $videostart.attr("src", "video/start.mp4");
    $videoend.attr("src", "video/end.mp4");

    var timerID;

    var $canvas = $("#myCanvas");
    var ctx = $canvas[0].getContext("2d");

    function stopTimer() {
        window.clearInterval(timerID);
    }

    function startVideo() {
        stopTimer();
        playCounter = $('#playbackNum').val();
        clipArray = [];

        // addd element to the end of the array
        clipArray.push(1);
        for (var i = 0; i < playCounter; i++) {
            clipArray.push(2);
        }

        $videoend[0].load();
        $videostart[0].play();
    };

    window.onload = startVideo;

    function drawImage(video) {
        ctx.drawImage(video, 0, 0, 1506, 870);
    }

    // copy the 1st video frame to canvas as soon as it is loaded
    $videostart.one("loadeddata", function () { drawImage($videostart[0]); });

    // copy video frame to canvas every 30 milliseconds
    $videostart.on("play", function () {
        timerID = window.setInterval(function () { drawImage($videostart[0]); }, 10);
    });
    $videoend.on("play", function () {
        timerID = window.setInterval(function () { drawImage($videoend[0]); }, 10);
    });

    function onVideoEnd() {
        //stop copying frames to canvas for the current video element
        stopTimer();

        // remove 1st element of the array
        clipArray.shift();

        //IE fix

        if (clipArray.length > 0) {
            if (clipArray[0] === 1) {
                $videostart[0].play();
            }
            if (clipArray[0] === 2) {
                $videoend[0].play();
            }
        }
        else {
            // in case of last video, make sure to load 1st video so that it would start from the 1st frame
            $videoend[0].play();
        }
    }

  $videostart.on("ended", onVideoEnd);
  $videoend.on("ended", onVideoEnd);
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

//# sourceMappingURL=all.js.map
