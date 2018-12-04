$(function() {
  $('.company-info__slides').owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    autoplay: true
  });
});

$(function() {
  $('.partners__slides').owlCarousel({
    items: 1,
    nav: true,
    navContainerClass: ['slider-nav', 'slider-nav--sections'],
    navClass: ['slider__btn slider__btn--prev', 'slider__btn slider__btn--next'],
    responsive: {
      768: {
        items: 2
      },
      1140: {
        items: 3,
        touchDrag: false
      }
    }
  });
});
