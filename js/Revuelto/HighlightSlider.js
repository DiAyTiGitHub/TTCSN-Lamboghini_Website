
$('#nav-slider-next, #nav-slider-prev').on('click', function (e) {
    var inst = $(this).data("slide");
    if(inst== "prev"){ 
    $("#highlightTextControls").carousel("prev")}
    else{ $("#highlightTextControls").carousel("next")}
  })