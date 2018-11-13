$(function () {
  
  /*==========FOR SVG ==============*/
  svg4everybody();
  /*FOR MENU*/
  $('.header__btn-menu').click(function (e) {
    e.preventDefault();
    $('body').addClass('menu_open');
    $('.modal-menu').addClass('open');
    
    
    $(document).keydown(function (evt) {
      if (evt.keyCode === 27) {
        $('body').removeClass('menu_open');
        $('.modal-menu').removeClass('open');
        return false;
      }
    });
  });
  
  $('.gallery-point__item').each(function (index, element) {
    $xCord = $(this).data("x");
    $yCord = $(this).data("y");
    $(this).find('span').css("top", $yCord + '%');
    $(this).find('span').css("left", $xCord + '%');
    
    $(this).find('span').on('click', function () {
      $(".gallery-point__tooltip").removeClass('active');
      $(".gallery-point__tooltip").css('display', 'none');
      $xCord = $(element).data("x");
      $yCord = $(element).data("y");
      if (Number($xCord) < 55) {
        $(element).find(".gallery-point__tooltip").css("transform", "translateX(6%)");
        // $(element).find(".gallery-point__tooltip:before").css("transform", "scale(-1, 1);");
        console.log(1);
        
      }
      if (Number($yCord) > 45) {
        $(element).find(".gallery-point__tooltip").css("transform", "translateY(-106%)");
        console.log(2);
        // $(element).find(".gallery-point__tooltip:before").css("transform", "scale(1, -1);");
      }
      console.log($yCord + '%');
      $(element).find(".gallery-point__tooltip").css("display", "flex");
      $(element).find(".gallery-point__tooltip").addClass('active');
      $(element).find(".gallery-point__tooltip").css("top", $yCord + '%');
      $(element).find(".gallery-point__tooltip").css("left", $xCord + '%');
      // $(element).find(".gallery-point__tooltip::before").css("transform", "scale(1, 1);");
    });
  });
  
  $('.modal-menu .icon-close').click(function (e) {
    $('body').removeClass('menu_open');
    $('.modal-menu').removeClass('open');
  });
  
  var homeSlider = new Swiper('.home-slider .swiper-container', {
    slidesOffsetBefore: 0,
    speed: 800,
    slidesPerView: 'auto',
    centeredSlides: true,
    paginationClickable: true,
    loop: true,
    simulateTouch: true,
    mousewheelControl: true,
    pagination: {
      el: '.home-slider__pagination.swiper-pagination',
      clickable: 'true',
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
    },
  });
  
  $(document).ready(function () {
    $('.review-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 2,
      arrows: true,
      // fade: true,
      variableWidth: true,
      centerMode: true,
      infinite: true,
      touchMove: true,
      draggable: true,
    });
    $('.gallery-for').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 2,
      arrows: true,
      // fade: true,
      variableWidth: true,
      asNavFor: '.gallery-nav',
      centerMode: true,
      infinite: true,
      touchMove: true,
      draggable: true,
    });
    $('.gallery-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 2,
      asNavFor: '.gallery-for',
      dots: false,
      focusOnSelect: true,
      centerMode: true,
      infinite: true,
      variableWidth: true,
      draggable: true,
    });
  });
  
  if ($(window).width() < 753) {
    var homeNewsSlider = new Swiper('.news-list', {
      speed: 800,
      spaceBetween: 5,
      slidesPerView: 'auto',
      centeredSlides: true,
      paginationClickable: true,
      loop: true,
      simulateTouch: true,
      mousewheelControl: true,
      initialSlide: 1,
      pagination: {
        el: '.news__pagination.swiper-pagination',
        clickable: 'true',
      },
    });
    
    var homeReviewsSlider = new Swiper('.reviews-list', {
      speed: 800,
      spaceBetween: 5,
      slidesPerView: 'auto',
      centeredSlides: true,
      paginationClickable: true,
      loop: true,
      simulateTouch: true,
      mousewheelControl: true,
      initialSlide: 1,
      pagination: {
        el: '.reviews__pagination.swiper-pagination',
        clickable: 'true',
      },
    });
    
    var homeDiscussionSlider = new Swiper('.discussion-list', {
      speed: 800,
      spaceBetween: 10,
      slidesPerView: 1,
      centeredSlides: true,
      paginationClickable: true,
      loop: true,
      simulateTouch: true,
      mousewheelControl: true,
      initialSlide: 2,
      pagination: {
        el: '.discussion__pagination.swiper-pagination',
        clickable: 'true',
      },
    });
  }

//modals
  var modalSignin = $(".modal-popup_signin"),
    btnModalSignin = $(".header-buttons__login"),
    btnCloseModal = $(".btn-close"),
    overLay = $(".modal-overlay");
  
  btnModalSignin.on('click', function (event) {
    event.preventDefault();
    modalSignin.addClass('open');
    $(document).keydown(function (evt) {
      if (evt.keyCode === 27) {
        modalSignin.removeClass('open');
      }
    });
  });
  
  btnCloseModal.on('click', function (event) {
    event.preventDefault();
    modalSignin.removeClass('open');
    modalRegistration.removeClass('open');
  });
  
  overLay.on('click', function (event) {
    event.preventDefault();
    modalSignin.removeClass('open');
    modalRegistration.removeClass('open');
  });
  
  var modalRegistration = $(".modal-popup_registration"),
    btnModalRegistration = $(".header-buttons__registration");
  
  btnModalRegistration.on('click', function (event) {
    event.preventDefault();
    modalRegistration.addClass('open');
    $(document).keydown(function (evt) {
      if (evt.keyCode === 27) {
        modalRegistration.removeClass('open');
      }
    });
  });
  
  
  $('.filter-model').SumoSelect({
    captionFormat: '{0} Выбрано',
    captionFormatAllSelected: 'Комплектация:  {0} все выбраны!',
    okCancelInMulti: true,
    locale: ['Применить', 'Сбросить'],
  });
  
  $('.filter-complect').SumoSelect({
    captionFormat: '{0} Выбрано',
    captionFormatAllSelected: 'Комплектация:  {0} все выбраны!',
    okCancelInMulti: true,
    locale: ['Применить', 'Сбросить'],
  });
  
  $('.filter-engine').SumoSelect({
    captionFormat: '{0} Выбрано',
    captionFormatAllSelected: 'Комплектация:  {0} все выбраны!',
    okCancelInMulti: true,
    locale: ['Применить', 'Сбросить'],
  });
  
  $('.filter-sort').SumoSelect({
    captionFormat: '{0} Выбрано',
    captionFormatAllSelected: 'Комплектация:  {0} все выбраны!',
    okCancelInMulti: true,
    locale: ['Применить', 'Сбросить'],
  });
  
  //JQ-validate
  
  $("#form-signup").validate({
    
    rules: {
      form_name: {
        required: true
      },
      pass1: {
        required: true
      },
      pass2: {
        required: true
      }
    },
    messages: {
      form_name: "Введите email",
      pass1: "Введите пароль",
      pass2: "Повторите пароль"
    }
  });
  
  $("#form-signin").validate({
    
    rules: {
      form_name2: {
        required: true
      },
      pass3: {
        required: true
      }
    },
    messages: {
      form_name2: "Введите email",
      pass3: "Введите пароль"
    }
  });
});


