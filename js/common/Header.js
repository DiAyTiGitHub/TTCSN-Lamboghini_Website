let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.header').style.top = "86px";
  } else {
    document.querySelector('.header').style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}