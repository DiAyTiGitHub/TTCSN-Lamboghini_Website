const configSliderTitle = document.querySelector(".config__slider--title");
const paginationList = document.querySelectorAll(".pagination-item");

paginationList.forEach(paginationItem => {
  paginationItem.addEventListener("click", handleClick)
})

function handleClick(e) {
  document.querySelector(".pagination-item.active").classList.remove("active");
  console.log(e.target);
  // e.target
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

displayEachWord(configSliderTitle, 50);

