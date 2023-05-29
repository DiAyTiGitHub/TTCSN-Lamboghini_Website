const carInfoOpenBtn = document.querySelector(".car__infor-btn");
const carInfoMobileOpenBtn = document.querySelector(".car__infor-btn-open-mobile");
const carInfoMobileCloseBtn = document.querySelector(".car__infor-btn-close-mobile");
const carInfoCloseBtn = document.querySelector(".car__infor-btn-close");
const carInforGeneral = document.querySelector(".car__infor-general");
const carInforDetails = document.querySelector(".car__infor-details");

carInfoOpenBtn.addEventListener("click", () => {
  carInfoOpenBtn.classList.add("disabled");
  carInforDetails.classList.add("display");
  carInforDetails.scrollIntoView({ behavior: "smooth", block: "start" });
});

carInfoMobileOpenBtn.addEventListener("click", () => {
  carInforDetails.classList.add("display");
  html.style.overflow = "hidden";
});

carInfoCloseBtn.addEventListener("click", () => {
  carInfoOpenBtn.classList.remove("disabled");
  carInforGeneral.scrollIntoView({ behavior: "smooth", block: "end" });
  setTimeout(function () {
    specificationsDetail.classList.remove("display");
  }, 500);
});

carInfoMobileCloseBtn.addEventListener("click", () => {
  carInforDetails.classList.remove("display");
  html.style.overflow = "auto";
});
