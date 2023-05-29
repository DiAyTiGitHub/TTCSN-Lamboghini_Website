const openBtn = document.querySelector(".car__infor-btn");
const html = document.querySelector("html");
const main = document.querySelector(".main");
const mobileOpenBtn = document.querySelector(".btn-open-mobile");
const mobileCloseBtn = document.querySelector(".btn-close-mobile");
const closeBtn = document.querySelector(".btn-close");
const specificationsGeneral = document.querySelector(".spec-general");
const carInforDetails = document.querySelector(".car__infor-details");

openBtn.addEventListener("click", () => {
  openBtn.classList.add("disabled");
  carInforDetails.classList.add("display");
  carInforDetails.scrollIntoView({ behavior: "smooth", block: "start" });
});

mobileOpenBtn.addEventListener("click", () => {
  specificationsDetail.classList.add("display");
  html.style.overflow = 'hidden';
});

closeBtn.addEventListener("click", () => {
  openBtn.classList.remove("disabled");
  specificationsGeneral.scrollIntoView({ behavior: "smooth", block: "end" });
  setTimeout(function () {
    specificationsDetail.classList.remove("display");
  }, 500);
});

mobileCloseBtn.addEventListener("click", () => {
    specificationsDetail.classList.remove("display");
    html.style.overflow = 'auto';
});