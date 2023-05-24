// video toggle 
const playBtn = document.querySelector("#play-button");
const exitBtn = document.querySelector("#exit-button");
const videoContainer = document.querySelector(".vid-cont");
const video = document.querySelector(".vid");

function toggleFullscreen() {
  goFullscreen();
  toggleControls();
  toggleExitButton();
}

function goFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else if (document.webkitFullscreenElement) {
    document.webkitExitFullscreen();
  } else if (videoContainer.webkitRequestFullscreen) {
    videoContainer.webkitRequestFullscreen();
  } else {
    videoContainer.requestFullscreen();
  }
}

function toggleControls() {
  if (video.hasAttribute("controls")) {
    video.removeAttribute("controls");

  } else {
    video.setAttribute("controls", "controls");

  }
}

function toggleExitButton() {
  if (exitBtn.style.display === "none") {
    exitBtn.style.display = "block";
  } else {
    exitBtn.style.display = "none";
  }
}

playBtn.addEventListener('click', toggleFullscreen);
exitBtn.addEventListener('click', toggleFullscreen);

