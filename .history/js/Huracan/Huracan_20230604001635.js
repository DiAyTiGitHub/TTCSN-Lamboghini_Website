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
    // displayEachWord(document.querySelector(".name"+count), 10000);
    if (count > 3) {
        count = 1;
    }
    console.log(document.querySelector(`.name${count}`), count)
    }, 100);
  }, 1000);
};


autoSlider();
