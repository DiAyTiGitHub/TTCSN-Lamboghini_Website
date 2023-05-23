//media query check
const smallDevice = window.matchMedia("(min-width:992px)");
const infoLoop = document.querySelectorAll(".info-loop");

smallDevice.addListener(handleDeviceChange);

function handleDeviceChange(e) {
  if (!e.matches) {
    let count = 0;
    setInterval(() => {
      infoLoop.forEach((info) => {
        info.classList.add("d-none");
        if(info.dataset.infoIndex == count) {
          info.classList.remove("d-none");
        }
      })
      count++;
      if(count > 2) {
        count = 0;
      }
    },5000)
  }
}

handleDeviceChange(smallDevice);
