const carInfoOpenBtn = document.querySelector(".car__infor-btn");
const carInfoMobileOpenBtn = document.querySelector(".car__infor-btn-open-mobile");
const carInfoMobileCloseBtn = document.querySelectorAll(".car__infor-btn-close-mobile");
const carInfoCloseBtn = document.querySelector(".car__infor-btn-close");
const carInforGeneral = document.querySelector(".car__infor-general");
const carInforDetails = document.querySelectorAll(".car__infor-details");

carInfoOpenBtn.addEventListener("click", () => {
  carInfoOpenBtn.classList.add("disabled");
  carInforDetails[0].classList.add("display");
  carInforDetails[0].scrollIntoView({ behavior: "smooth", block: "start" });
});

carInfoMobileOpenBtn.addEventListener("click", () => {
  carInforDetails[1].classList.add("display");
//   html.style.overflow = "hidden";
});

carInfoCloseBtn.addEventListener("click", () => {
  carInfoOpenBtn.classList.remove("disabled");
  carInforGeneral.scrollIntoView({ behavior: "smooth", block: "end" });
  setTimeout(function () {
    carInforDetails[0].classList.remove("display");
  }, 500);
});

carInfoMobileCloseBtn[1].addEventListener("click", () => {
  carInforDetails[1].classList.remove("display");
  html.style.overflow = "auto";
});
