$(".solve-slider").slick({
  infinite: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 30000,
  nextArrow: false,
  prevArrow: false,
});

$(".skout-plans-slider").slick({
  infinite: false,
  slidesToShow: 4,
  dots: false,
  nextArrow: false,
  prevArrow: false,
  responsive: [
    {
      breakpoint: 1439,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: false,
        dots: false,
      },
    },
  ],
});

$(".companies-slider").slick({
  infinite: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 15000,
  arrows: false,
});