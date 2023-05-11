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
      video.setAttribute("controls","controls");
       
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

//media query check

const smallDevice = window.matchMedia("(min-width:992px)");
const desktopView = document.querySelectorAll(".desktop-view");
const tabletView = document.querySelectorAll(".tablet-view");

smallDevice.addListener(handleDeviceChange);

function handleDeviceChange(e) {
  if (e.matches) {
    console.log("desktop");
    desktopView.forEach((view) => {
      view.style.display = "block";
    })
    tabletView.forEach((view) => {
      view.style.display = "none";  
    })
  }
  else {
    console.log("tablet");
    desktopView.forEach((view) => {
      view.style.display = "none";
    })
    tabletView.forEach((view) => {
      view.style.display = "block";  
    })
  }
}

handleDeviceChange(smallDevice);
