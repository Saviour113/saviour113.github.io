$(function () {
    let videoElements = document.getElementsByTagName('video');

    if (videoElements.length > 0) {
        let thatVideoPlayer = videoElements[0];
        showCurrentPlaybackRate(thatVideoPlayer);

        $(document).keydown(function (e) {
            //console.log(e.which);
            try {
                // `+`
                if (e.which === 187) {
                    thatVideoPlayer.playbackRate += 0.5;
                    showCurrentPlaybackRate(thatVideoPlayer);
                }
                // `-`
                if (e.which === 189) {
                    thatVideoPlayer.playbackRate -= 0.5;
                    showCurrentPlaybackRate(thatVideoPlayer);
                }
                // `0`
                if (e.which === 48) {
                    thatVideoPlayer.playbackRate = 1;
                    showCurrentPlaybackRate(thatVideoPlayer);
                }
            } catch (error) {
                console.log(error.message);
            }
        });
    }
});

function showCurrentPlaybackRate(thatVideoPlayer) {
    console.log('current playbackRate=' + thatVideoPlayer.playbackRate);
}
