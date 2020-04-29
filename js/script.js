$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 7000,
    values: [ 100 , 6000 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "от " + ui.values[ 0 ] + " $");
      $( "#amount_2" ).val( "до " + ui.values[ 1 ] + " $" );
    }
  });
  $( "#amount" ).val( "от " + $( "#slider-range" ).slider( "values", 0 ) + " $" );

  $( "#amount_2" ).val( "до " + $( "#slider-range" ).slider( "values", 1 ) + " $" );
});



$( "#menuToggle" ).click(function() {
  $( "ul.menu" ).toggleClass("open");
   $( ".bg-box" ).toggleClass("open");
});



  $('.product-img').on('click', function(){
    $(this).toggleClass('opened');
    $('.label-wrap').slideToggle(350);
  });

  $('.price-img').on('click', function(){
    $(this).toggleClass('opened');
    $('.prise-slid').slideToggle(350);
  });

  $('.cauntry-img').on('click', function(){
    $(this).toggleClass('opened');
    $('.caunry__label').slideToggle(350);
  });


$('.sl').slick({
  asNavFor: '.sl2',
  arrows:false,
});

$('.sl2').slick({
  slidesToShow: 3,
  centerMode: true,
  centerPadding: '60px',
  asNavFor: '.sl',
  focusOnSelect: true,
  prevArrow: '<button class="btn-slick-prev"><i class="fas fa-angle-left"></i></button>',
  nextArrow: '<button class="btn-slick-next"><i class="fas fa-angle-right"></i></i></button>'
});




$('.minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
  });
  $('.plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
  });





