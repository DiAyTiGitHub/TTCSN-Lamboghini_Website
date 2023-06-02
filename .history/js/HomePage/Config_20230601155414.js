const configSliderBackground = document.querySelector(".config__slider--bg");
const paginationList = document.querySelectorAll(".pagination-item");
const links = document.querySelectorAll(".link-item");

paginationList.forEach(paginationItem => {
  paginationItem.addEventListener("click", handleClick)
})

function handleClick(e) {
  document.querySelector(".pagination-item.active").classList.remove("active");
  e.target.classList.add("active")
  const index = e.target.getAttribute("data-index")
  document.querySelector(".link-item.active").classList.remove("active");
  links.forEach(linkItem => {
    if(linkItem.getAttribute("data-index")===index) {
      configSliderBackground.style.src = `../resources/HomePage/imgs/config${index}.webp`
      linkItem.classList.add("active");
      displayEachWord(linkItem.firstElementChild, 50);
    }
  })
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


