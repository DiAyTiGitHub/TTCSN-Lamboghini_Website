//diayti config
const overlay = document.querySelector('.loading__overlay');
function getAutoplayVideos() {
    const videos = document.querySelectorAll("video");
    const autoplayVideos = [];

    videos.forEach(function (video) {
        if (video.hasAttribute("autoplay")) {
            autoplayVideos.push(video);
        }
    });

    return autoplayVideos;
}

const autoPlayVideos = getAutoplayVideos();
autoPlayVideos.forEach(function (video) {
    video.removeAttribute("autoplay");
});

let isReady = false;

const videos = document.getElementsByTagName('video');
let isReadyForVideos = false;
const videosCheckInterval = setInterval(function () {
    isReadyForVideos = true;
    for (let i = 0; i < videos.length; i++) {
        if (videos[i].readyState != 4) {
            isReadyForVideos = false;
            break;
        }
    }
}, 100);

const images = document.getElementsByTagName('img');
let isReadyForImages = false;
const imagesCheckInterval = setInterval(function () {
    isReadyForImages = true;
    for (let i = 0; i < images.length; i++) {
        if (!images[i].complete) {
            isReadyForImages = false;
            break;
        }
    }
}, 100);

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function playAutoPlayVideos() {
    let count = 0;
    autoPlayVideos.forEach(function (video) {
        if (isReady && isElementInViewport(video)) {
            video.play();
        }
    });
}

const hideOverlayInterval = setInterval(function () {
    isReady = isReadyForImages && isReadyForVideos;
    if (isReady) {
        overlay.style.display = 'none';
        playAutoPlayVideos();
    }
}, 100);

setInterval(function () {
    if (isReady) {
        clearInterval(videosCheckInterval);
        clearInterval(imagesCheckInterval);
        clearInterval(hideOverlayInterval);
        playAutoPlayVideos();
    }
}, 3000);