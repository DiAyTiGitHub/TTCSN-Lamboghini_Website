
$(document).ready(function() {
  // Get the carousel element
  var carousel = $('#highlightImgControls');
    // Handle carousel control click event
  $('.carousel-control-prev, .carousel-control-next').click(function(e) {
    e.preventDefault();
    console.log('test')
    // Get the slide direction (previous or next)
    var slideDirection = $(this).data('slide');
    console.log(slideDirection);

    // Scroll the carousel to the desired slide
    carousel.carousel("cycle");
  });
});


$('#nav-slider-next, #nav-slider-prev').on('click', function (e) {
  var inst = $(this).data("slide");
  if(inst== "prev"){ 
  $("#highlightTextControls").carousel("prev")}
  else{ $("#highlightTextControls").carousel("next")}
})
console.log('4');