'use strict';
$(function(){

var isIOS = /iPad|iPhone|iPod/.test(navigator.platform);

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
