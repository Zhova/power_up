$(document).ready(function () {
  $(".burger").click(() => {
    $(".header-nav").fadeToggle();
    $(".burger__line").toggleClass("active");
  });
  $(".partner-slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow:
      '<div class="slick-custom-arrow-wrap slick-custom-arrow-wrap-right"><div class="slick-custom-arrow slick-custom-arrow-right"></div></div>',
    prevArrow:
      '<div class="slick-custom-arrow-wrap slick-custom-arrow-wrap-left"><div class="slick-custom-arrow slick-custom-arrow-left"></div></div>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });
  $(".reviews-slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow:
      '<div class="slick-custom-arrow-wrap slick-custom-arrow-wrap-right"><div class="slick-custom-arrow slick-custom-arrow-right"></div></div>',
    prevArrow:
      '<div class="slick-custom-arrow-wrap slick-custom-arrow-wrap-left"><div class="slick-custom-arrow slick-custom-arrow-left"></div></div>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });
  $(".about-command-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:
      '<div class="slick-custom-arrow-wrap slick-custom-arrow-wrap-right"><div class="slick-custom-arrow slick-custom-arrow-right"></div></div>',
    prevArrow:
      '<div class="slick-custom-arrow-wrap slick-custom-arrow-wrap-left"><div class="slick-custom-arrow slick-custom-arrow-left"></div></div>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });

  $(".cases-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
      '<div class="slick-custom-arrow-wrap slick-custom-arrow-wrap-right"><div class="slick-custom-arrow slick-custom-arrow-right"></div></div>',
    prevArrow:
      '<div class="slick-custom-arrow-wrap slick-custom-arrow-wrap-left"><div class="slick-custom-arrow slick-custom-arrow-left"></div></div>',
  });

  $(".choice-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
      '<div class="slick-custom-arrow-wrap slick-custom-arrow-wrap-right"><div class="slick-custom-arrow slick-custom-arrow-right"></div></div>',
    prevArrow:
      '<div class="slick-custom-arrow-wrap slick-custom-arrow-wrap-left"><div class="slick-custom-arrow slick-custom-arrow-left"></div></div>',
  });

  $(".cases-similar-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow:
      '<div class="slick-custom-arrow-wrap slick-custom-arrow-wrap-right"><div class="slick-custom-arrow slick-custom-arrow-right"></div></div>',
    prevArrow:
      '<div class="slick-custom-arrow-wrap slick-custom-arrow-wrap-left"><div class="slick-custom-arrow slick-custom-arrow-left"></div></div>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".on-off-toggle__slider").on("click", function () {
    $("body").toggleClass("dark");
  });

  $(".marketing-list__item").on("click", function () {
    $(".marketing-list__item").removeClass("pre-active");
    $(this).addClass("pre-active");

    $(".marketing-list__item").css("pointer-events", "none");
    setTimeout(() => {
      $(".marketing-list__item").css("pointer-events", "auto");
    }, 650);

    $(".marketing-list__item").removeClass("active");
    setTimeout(() => {
      $(this).addClass("active");
    }, 350);

    let indexListItem = $(this).index();
    $(".marketing-info__item").fadeOut();

    $(".marketing-info__item").each((el) => {
      if (el === indexListItem) {
        setTimeout(() => {
          $(`.marketing-info__item:nth-child(${el + 1})`).fadeIn();
        }, 400);
      }
    });
  });

  $(".choice-list__item").on("click", function () {
    $(".choice-list__item").removeClass("pre-active");
    $(this).addClass("pre-active");

    $(".choice-list__item").css("pointer-events", "none");
    setTimeout(() => {
      $(".choice-list__item").css("pointer-events", "auto");
    }, 650);

    $(".choice-list__item").removeClass("active");
    setTimeout(() => {
      $(this).addClass("active");
    }, 350);

    let indexListItem = $(this).index();
    $(".choice-info__item").fadeOut();

    $(".choice-info__item").each((el) => {
      if (el === indexListItem) {
        setTimeout(() => {
          $(`.choice-info__item:nth-child(${el + 1})`).fadeIn();
        }, 400);
      }
    });
  });

  if ($(window).width() < 1199) {
    $(".footer-logo").append($(".facebook"));
  }

  // $(".marketing-list__item").on("mouseleave", function () {

  // });
});
