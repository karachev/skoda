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
  
  $('.gallery-point__item').each(function(index, element) {
    $xCord = $(this).data("x");
    $yCord = $(this).data("y");
    $(this).find('span').css("top", $yCord + '%');
    $(this).find('span').css("left", $xCord + '%');
  
    $(this).find('span').on('click', function () {
      $(".gallery-point__tooltip").removeClass('active');
      $(".gallery-point__tooltip").css('display', 'none');
      $xCord = $(element).data("x");
      $yCord = $(element).data("y");
      if (Number($xCord) < 50) {
        $(element).find(".gallery-point__tooltip").css("transform", "translateX(6%)");
        $(element).find(".gallery-point__tooltip:before").css("transform", "scale(-1, 1);");
        
      }
      if (Number($yCord) > 50) {
        $(element).find(".gallery-point__tooltip").css("transform", "translateY(-106%)");
        $(element).find(".gallery-point__tooltip:before").css("transform", "scale(1, -1);");
      }
      console.log($yCord + '%');
      $(element).find(".gallery-point__tooltip").css("display", "flex");
      $(element).find(".gallery-point__tooltip").addClass('active');
      $(element).find(".gallery-point__tooltip").css("top", $yCord + '%');
      $(element).find(".gallery-point__tooltip").css("left", $xCord + '%');
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
  var modal=$(".modal-popup_signin"),
      btnModal = $(".header-buttons__login"),
      btnCloseModal = $(".btn-close"),
      overLay = $(".modal-overlay");

  btnModal.on('click', function(event) {
      event.preventDefault();
      modal.addClass('open');
  });

  btnCloseModal.on('click', function(event) {
      event.preventDefault();
      modal.removeClass('open');
  });

  overLay.on('click', function(event) {
      event.preventDefault();
      modal.removeClass('open');
  });

//signup

  var modal=$(".modal-popup_signup"),
      btnModal = $(".header-buttons__registration"),
      btnCloseModal = $(".btn-close"),
      overLay = $(".modal-overlay");

  btnModal.on('click', function(event) {
      event.preventDefault();
      modal.addClass('open');
  });

  btnCloseModal.on('click', function(event) {
      event.preventDefault();
      modal.removeClass('open');
  });

  overLay.on('click', function(event) {
      event.preventDefault();
      modal.removeClass('open');
  });


    overLay.on('click', function(event) {
        event.preventDefault();
        modal.removeClass('open');
    });
  
  $('.filter-model').SumoSelect({
    captionFormat:'{0} Выбрано',
    captionFormatAllSelected:'Комплектация:  {0} все выбраны!',
    okCancelInMulti: true,
    locale: ['Применить', 'Сбросить'],
  });
  
  $('.filter-complect').SumoSelect({
    captionFormat:'{0} Выбрано',
    captionFormatAllSelected:'Комплектация:  {0} все выбраны!',
    okCancelInMulti: true,
    locale: ['Применить', 'Сбросить'],
  });
  
  $('.filter-engine').SumoSelect({
    captionFormat:'{0} Выбрано',
    captionFormatAllSelected:'Комплектация:  {0} все выбраны!',
    okCancelInMulti: true,
    locale: ['Применить', 'Сбросить'],
  });
  
  $('.filter-sort').SumoSelect({
    captionFormat:'{0} Выбрано',
    captionFormatAllSelected:'Комплектация:  {0} все выбраны!',
    okCancelInMulti: true,
    locale: ['Применить', 'Сбросить'],
  });

  //JQ-validate

    $("#form-signup").validate({

        rules: {
            form_name: {
                required:true
            },
            pass:{
                required:true
            },
            pass2:{
              required:true
            }
        },
        messages:{
            form_name: "Заполните это поле",
            pass:"Заполните это поле",
            pass2:"Заполните это поле"
        }
    });
});


