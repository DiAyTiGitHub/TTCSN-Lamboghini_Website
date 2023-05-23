const videoSliderHor = document.querySelector("#overlay-h1");
const videoSliderTitle = document.querySelector("#overlay-h2");
const videoSliderBtn = document.querySelectorAll(".overlay-button");
const videoSliderVert = document.querySelectorAll(".overlay-vert");

function active() {
  videoSliderHor.classList.add("active");
  videoSliderVert.forEach((vert) => {
    vert.classList.add("active");
  })
  videoSliderBtn.forEach((button) => {
    button.classList.add("active");
  })
  displayEachWord(videoSliderTitle, 50);
}


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

window.addEventListener("load", active);
// console.log('fuck');