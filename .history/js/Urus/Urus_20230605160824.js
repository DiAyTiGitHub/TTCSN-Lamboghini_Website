const videoSlider = document.querySelector(".video__slider");
const videoSliderContent = document.querySelector(".video__slider--content");
const videoSliderTitle = document.querySelector(".video__slider--title");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
console.log(prevBtn, nextBtn)

function active() {
  videoSliderContent.classList.add("active");
  displayEachWord(videoSliderTitle, 100);
}

window.addEventListener("load", active);

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
