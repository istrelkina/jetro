$(function(){

  $('.menu__btn').on('click',function(){
    /*console.log('test');*/
    $('.header__menu-main').slideToggle();
  });

  $('.slider__item-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider__inner-nav',
  
});

$('.slider__inner-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.slider__item-for',
  dots: false,
  arrows: false,
  focusOnSelect: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: false,
        
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: false,
        
      }
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: false,
        
      }
    }        
  ]
});


});