const videoSlider = document.querySelector(".video__slider");
const videoSliderContent = document.querySelector(".video__slider--content");
const videoSliderTitle = document.querySelector(".video__slider--title");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const img = document.querySelector(".models__chooser--img img")
const linkItems = document.querySelectorAll(".link-item");

function showImage() {
  let currentIndex = 1;
  prevBtn.onclick = function() {
    currentIndex--;
    if(currentIndex<1) currentIndex = 2;
    img.src = `../resources/Urus/Urus_chooser0${currentIndex}.webp`
    document.querySelector(".link-item.active").classList.remove("active");
    linkItems.forEach(linkItem => {
      if(linkItem.dataset.index===currentIndex) linkItem.classList.add("active")
    })
  }
  nextBtn.onclick = function() {
    currentIndex++;
    if(currentIndex>2) currentIndex = 1;
    img.src = `../resources/Urus/Urus_chooser0${currentIndex}.webp`
    document.querySelector(".link-item.active").classList.remove("active");
    linkItems.forEach(linkItem => {
      if(linkItem.dataset.index===currentIndex) linkItem.classList.add("active")
    })
  }
}
showImage()

function active() {
  videoSliderContent.classList.add("active");
  displayEachWord(videoSliderTitle, 50);
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
