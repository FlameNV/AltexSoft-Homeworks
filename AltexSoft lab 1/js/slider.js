$(document).ready(function () {
  $(".slider-single").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
  });

  $(".slider-nav")
    .on("init", function (event, slick) {
      $(".slider-nav .slick-slide.slick-current").addClass("is-active");
    })
    .slick({
      nextArrow: '<img src="./images/arrow-next.svg" class="next" alt="next">',
      prevArrow: '<img src="./images/arrow-prev.svg" class="prev" alt="prev">',
      slidesToShow: 15,
      slidesToScroll: 15,
      dots: false,
      vertical: true,
      focusOnSelect: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 1439,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
      ],
    });

  $(".slider-single").on("afterChange", function (event, slick, currentSlide) {
    $(".slider-nav").slick("slickGoTo", currentSlide);
    var currrentNavSlideElem =
      '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $(".slider-nav .slick-slide.is-active").removeClass("is-active");
    $(currrentNavSlideElem).addClass("is-active");
  });

  $(".slider-nav").on("click", ".slick-slide", function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data("slick-index");

    $(".slider-single").slick("slickGoTo", goToSingleSlide);
  });
});
