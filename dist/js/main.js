$(function () {

  $('.mobile-menu').on('click', function () {
    $('.mobile-menu').toggleClass('active');
    $('.nav__list').toggleClass('active');
  });

  $(window).resize(function () {
    if ($(window).width() > 950) {
      $('.mobile-menu').removeClass('active');
      $('.nav__list').removeClass('active');
    }
  });



  $("#calculator__range-slider--1").slider({
    range: "max",
    value: 0,
    min: 0,
    max: 150,
    step: 1,
    slide: function (event, ui) {
      $("#amount-1").val(ui.value);
    }
  });
  $("#amount-1").val($("#calculator__range-slider--1").slider("value"));

  $("#calculator__range-slider--2").slider({
    range: "max",
    value: 0,
    min: 0,
    max: 100000,
    step: 1,
    slide: function (event, ui) {
      $("#amount-2").val(ui.value + ' руб.');
    }
  });
  $("#amount-2").val($("#calculator__range-slider--2").slider("value"));

  $("#calculator__range-slider--3").slider({
    range: "max",
    value: 0,
    min: 0,
    max: 150,
    step: 1,
    slide: function (event, ui) {
      $("#amount-3").val(ui.value + '%');
    }
  });
  $("#amount-3").val($("#calculator__range-slider--3").slider("value"));


  $('.reviews-slider').slick({
    dots: true,
    prevArrow: '<div class="reviews-slider__prev"><img src="img/reviews/reviews-arrow.svg" alt=""></div>',
    nextArrow: '<div class="reviews-slider__next"><img src="img/reviews/reviews-arrow.svg" alt=""></div>'
  });


  $('.advertising-slider').slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [{
        breakpoint: 950,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
    ]
  });


  let link = $('[data-popup="true"]'),
    close = $('.modal-close'),
    overlay = $('.overlay');


  link.on('click', function () {
    $('.modal').addClass('active');
    overlay.show();
    if ($('.modal').hasClass('active')) {
      $('body').css('overflow', 'hidden');
    }
    return false;
  });
  close.click(function () {
    $('.modal').removeClass('active');
    overlay.hide();
    $('body').css('overflow', 'auto');
  });
});