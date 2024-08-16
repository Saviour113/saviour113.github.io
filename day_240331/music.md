    <audio autoplay loop src="./video/Imagine Dragons,Broiler - Shots (Broiler Remix).mp3" id="myaudio"></audio>
    <button id="playButton">播放音乐</button>
    <script>
        const audio = document.getElementById('myaudio');
        const playButton = document.getElementById('playButton');
        let isPlaying = flase;
        playButton.addEventListener('click', function () {
            if (isPlaying) {
                audio.pause(); // 停止播放音乐
                isPlaying = false;
                playButton.innerText = '播放音乐';
            } else {
                audio.play(); // 播放音乐
                isPlaying = true;
                playButton.innerText = '停止播放';
            }
        });
    </script>
