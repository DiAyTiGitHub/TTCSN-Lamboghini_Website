const sildeName = document.querySelector(".slide-name");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const img = document.querySelector(".models__chooser--img img");
const linkItems = document.querySelectorAll(".link-item");

function debounce(func, delay) {
  let timerId;
  
  return function() {
    clearTimeout(timerId);
    timerId = setTimeout(func, delay);
  }
}

function replaceImage(currentIndex) {
  img.src = `../resources/Huracan/Huracan_chooser0${currentIndex}.webp`;
  document.querySelector(".link-item.active").classList.remove("active");
  linkItems.forEach((linkItem) => {
    if (linkItem.dataset.index == currentIndex)
      linkItem.classList.add("active");
  });
}

function showImage() {
  let currentIndex = 1;
  prevBtn.onclick = function () {
    currentIndex--;
    if (currentIndex < 1) currentIndex = 2;
    replaceImage(currentIndex);
  };
  nextBtn.onclick = function () {
    currentIndex++;
    if (currentIndex > 2) currentIndex = 1;
    replaceImage(currentIndex);
  };
}

const debouncedClick = debounce(showImage, 200);
debouncedClick()

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
        displayEachWord(document.querySelector(`.name${count}`), 50);
      };
    });
    setTimeout(() => {
      document.getElementById("radio" + count).checked = true;
      count++;
      if (count > 3) {
        count = 1;
      }
      displayEachWord(document.querySelector(`.name${count}`), 50);
    }, 100);
  }, 10000);
};

displayEachWord(document.querySelector(`.name1`), 50);
autoSlider();


