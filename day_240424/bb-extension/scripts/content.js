// feature 1
// 场景描述：只能调整特定的倍速<br>
// 插件解法：通过快捷键快速调整任意倍速<br>
// 快捷键用法：<br>
//  - 按下 u 键，每次增加 0.5 倍速<br>
//  - 按下 d 键，每次减少 0.5 倍速<br>
//  - 按下 0 键，回到正常 1.0 倍速

setTimeout(function () {
  let playBackRateMenus = document.getElementsByClassName('bpx-player-ctrl-playbackrate-menu');

  if(playBackRateMenus.length > 0) {
    let thatMenu = playBackRateMenus[0];
    const rates = [2.5, 3, 3.5];
    for (const rate of rates) {
      let li = document.createElement("li");
      li.setAttribute('class', 'bpx-player-ctrl-playbackrate-menu-item ');
      li.setAttribute('data-value', rate)
      li.innerHTML = rate + 'x';
      thatMenu.prepend(li);
    }
  }

  let videos = document.getElementsByTagName('video');
  if(videos.length > 0) {
    let thatVideo = videos[0];
    showCurrentRate(thatVideo);
    window.addEventListener("keydown", (e) => {
      //console.log(`Key "${e.key}" released [event: keydown]`);
      try {
        if(e.key === 'u') {
          thatVideo.playbackRate += 0.5;
          showCurrentRate(thatVideo);
        } else if(e.key === 'd') {
          thatVideo.playbackRate -= 0.5;
          showCurrentRate(thatVideo);
        } else if(e.code === 'Digit0') {
          thatVideo.playbackRate = 1;
          showCurrentRate(thatVideo);
        }
      } catch (error) {
        console.log(error.message);
      }
    });
  }

}, 2000)

function showCurrentRate(thatVideo) {
  let playbackrateResultDivs = document.getElementsByClassName('bpx-player-ctrl-playbackrate-result');
  if(playbackrateResultDivs.length > 0) {
    playbackrateResultDivs[0].innerHTML = showRateOrString(thatVideo.playbackRate);
  } else {
    console.log("current playbackrate=" + showRateOrString(thatVideo.playbackRate));
  }
}

function showRateOrString(rate) {
  return rate === 1 ? '倍速' : rate;
}



// === === ===



// feature 2
// 场景描述：未登录状态下，观看 60 秒左右会自动弹出登录窗口并暂停视频<br>
// 插件解法：一旦监听到登录窗口被弹出，自动关闭它并自动重新播放视频

var target = document.getElementsByClassName("bpx-player-row-dm-wrap")[0];

var config = {attributes: true, attributeFilter: ["class"]};

var observer = new MutationObserver(function (motationList) {
    setTimeout(function () {
      if (document.getElementsByClassName("bili-mini-mask").length > 0) {
        //console.log("captured!");
        //console.log(motationList[0]);
        console.log('检测到登录框弹出...');
        document.getElementsByClassName("bili-mini-close-icon")[0].click();
        console.log('已自动关闭登录框');
        if (document.getElementsByClassName("bili-paused").length > 0) {
          document.getElementsByClassName("bpx-player-ctrl-btn bpx-player-ctrl-play")[0].click();
          console.log('并自动恢复视频播放');
        }
      }
    }, 1000);
  });

observer.observe(target, config);

