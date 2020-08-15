'use strict';

$(function() {
  $(".catalog-card__btn").on("click", function() {
    var popup = $(this).data("modal");
    $(popup).show();
    $(".overlay").addClass("overlay--show");
  });

  $(".popup").on("click", function(e) {
    var className = e.target.className;
    if(className === "popup" || className === "popup__close-btn"){
      $(this).closest(".popup").hide();
      $(".overlay").removeClass("overlay--show");
    }
  });
});
