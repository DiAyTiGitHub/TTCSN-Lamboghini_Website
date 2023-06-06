let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.header').style.transform = " translateY(0%)";
  } else {
    document.querySelector('.header').style.transform = " translateY(-100%)";
  }
  prevScrollpos = currentScrollPos;
}