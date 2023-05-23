//diayti config
const overlay = document.querySelector('.loading__overlay');

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

const hideOverlayInterval = setInterval(function () {
    isReady = isReadyForImages && isReadyForVideos;
    if (isReady) {
        overlay.style.display = 'none';
    }
}, 100);

setInterval(function () {
    if (isReady) {
        clearInterval(videosCheckInterval);
        clearInterval(imagesCheckInterval);
        clearInterval(hideOverlayInterval);
    }
}, 5000);
