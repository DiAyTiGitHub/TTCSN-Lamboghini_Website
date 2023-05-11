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
