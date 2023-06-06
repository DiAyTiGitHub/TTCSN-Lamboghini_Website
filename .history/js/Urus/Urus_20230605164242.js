const videoSlider = document.querySelector(".video__slider");
const videoSliderContent = document.querySelector(".video__slider--content");
const videoSliderTitle = document.querySelector(".video__slider--title");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const img = document.querySelector(".models__chooser--img img")

function showImage() {
  let currentIndex = 1;
  prevBtn.onclick = function() {
    currentIndex--;
    if(currentIndex<1) currentIndex = 2;
    console.log(currentIndex)
    img.src = `../resources/Urus/Urus_chooser0${currentIndex}.webp`
  }
  nextBtn.onclick = function() {
    currentIndex++;
    if(currentIndex>2) currentIndex = 1;
    console.log(currentIndex)

    img.src = `../resources/Urus/Urus_chooser0${currentIndex}.webp`
  }
}
showImage()

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
