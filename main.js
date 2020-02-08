$(".images img").css("max-width", "900px").css("height", "400px");

var all_images = $(".images");

$(document).ready(function() {
  all_images.hide();
  $(".images:first").show();
  $(".images:first").addClass("active");
});

$("#next").click(function(){
    if($(".active").next("li").length > 0){
      $(".active").next("li").show();
      var c_active = $(".active");
      $(".active").next("li").addClass('active');
      c_active.removeClass("active");
      c_active.hide();
    }else{
      var c_active = $(".active");
      c_active.removeClass("active");
      all_images.hide();
      $(".images:first").show();
      $(".images:first").addClass("active");
    }
});

$("#prev").click(function(){
  if ($(".active").prev("li").length == 0) {
    var c_active = $(".active");
    c_active.removeClass("active");
    all_images.hide();
    $(".images:last").show();
    $(".images:last").addClass("active");
  }else {

    var c_active = $(".active");
    c_active.removeClass("active");
    all_images.hide();
    $(".images:first").show();
    $(".images:first").addClass("active");
  }
});
