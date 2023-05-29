const openBtn = document.querySelector(".car__infor-btn");
const html = document.querySelector("html");
const main = document.querySelector(".main");
const mobileOpenBtn = document.querySelector(".car__infor-btn-open-mobile");
const mobileCloseBtn = document.querySelector(".car__infor-btn-close-mobile");
const closeBtn = document.querySelector(".car__infor-btn-close");
const carInforGeneral = document.querySelector(".car__infor-general");
const carInforDetails = document.querySelector(".car__infor-details");

openBtn.addEventListener("click", () => {
  openBtn.classList.add("disabled");
  carInforDetails.classList.add("display");
  carInforDetails.scrollIntoView({ behavior: "smooth", block: "start" });
});

mobileOpenBtn.addEventListener("click", () => {
  carInforDetails.classList.add("display");
  html.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  openBtn.classList.remove("disabled");
  carInforGeneral.scrollIntoView({ behavior: "smooth", block: "end" });
  setTimeout(function () {
    specificationsDetail.classList.remove("display");
  }, 500);
});

mobileCloseBtn.addEventListener("click", () => {
  carInforDetails.classList.remove("display");
  html.style.overflow = "auto";
});
