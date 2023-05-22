//diayti config
const overlay = document.querySelector('.loading__overlay');
const backGroundCarVideo = document.querySelector('#bg-vid');

setInterval(function () {
  if (backGroundCarVideo.readyState >= 2) {
    backGroundCarVideo.play();
    overlay.style.display = 'none';
  }
}, 200);
