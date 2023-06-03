const sildeName = document.querySelector(".slide-name");

function displayEachWord(textElement, delay) {
  const text = textElement.dataset.text;
  const words = text.split("");
  textElement.innerHTML = "";

  const length = words.length;
  let i = 0;
  let setIntervalId = setInterval(function () {
    if (i === length) {
      clearInterval(setIntervalId);
      return;
    }
    const wordElement = document.createElement("span");
    wordElement.classList.add("word");
    wordElement.innerHTML = words[i];
    textElement.appendChild(wordElement);
    i++;
    setTimeout(function () {
      wordElement.classList.add("active");
    }, 50);
  }, delay);
}
const autoSlider = () => {
  let count = 1;
  document.getElementById("radio" + 1).checked = true;
  setInterval(() => {
    console.log("running");
    const autoBtns = document.querySelectorAll(".auto-btn");
    autoBtns.forEach((autoBtn) => {
      autoBtn.onclick = (e) => {
        e.stopPropagation();
        // console.log(autoBtn)
        const attribute = autoBtn.getAttribute("for");
        count = parseInt(attribute[5]);
      };
    });
    setTimeout(() => {
      document.getElementById("radio" + count).checked = true;
      count++;
      if (count > 3) {
        count = 1;
      }
      displayEachWord(document.querySelector(`.name${count}`), 500);
    }, 100);
  }, 10000);
};
displayEachWord(document.querySelector(`.name1`), 500);
autoSlider();


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
