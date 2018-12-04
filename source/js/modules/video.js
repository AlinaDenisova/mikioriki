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
