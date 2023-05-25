var carouselWidth = $(".tablet-highlight .carousel-inner")[0].scrollWidth;
var cardWidth = $(".tablet-highlight .carousel-item").width();
var scrollPosition = 0;

$(".tablet-highlight .carousel-control-next").on("click", function () {
  if (scrollPosition < (carouselWidth - cardWidth * 6)) { //check if you can go any further
    scrollPosition += cardWidth;  //update scroll position
    console.log('1');
    $(".tablet-highlight .carousel-inner").animate({ scrollLeft: scrollPosition },600); //scroll left
  }
});

$(".tablet-highlight .carousel-control-prev").on("click", function () {
  if (scrollPosition > 0) {
    scrollPosition -= cardWidth;
    console.log('2');
    $(".tablet-highlight .carousel-inner").animate(
      { scrollLeft: scrollPosition },
      600
    );
  }
  

});

$('#nav-slider-next, #nav-slider-prev').on('click', function (e) {
  var inst = $(this).data("slide");
  if(inst== "prev"){ 
  $("#highlightTextControls").carousel("prev")}
  else{ $("#highlightTextControls").carousel("next")}
})
console.log('2');