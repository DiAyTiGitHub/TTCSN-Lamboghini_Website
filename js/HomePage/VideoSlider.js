const videoSliderContent = document.querySelector(".video__slider--content");

function moveText() {
    videoSliderContent.classList.add("active");
}

window.addEventListener("load", moveText);

function displayEachWord(text, element, delay) {
    const wordsStorage = document.querySelector(element);
    const words = text.split("");
    const lenght = words.length;
    let i = 0;
    setInterval(function() {
        if(i===lenght) {
            clearInterval(this);
            return;
        }
        const wordElement = document.createElement("span");
        wordElement.classList.add("word");
        wordElement.innerHTML = words[i];
        wordsStorage.appendChild(wordElement);
        i++;
        setTimeout(function() {
            wordElement.classList.add('active');
        }, 50);
    },delay)
}


window.addEventListener("load", displayEachWord('60th Anniversary', '.video__slider--title', 30));