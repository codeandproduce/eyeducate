
var menuOpened = false;

$(document).on('click', '.menu-button', function(){
  if(menuOpened == false){

  	$(".contain-big-nav").css('left','0px');


    $('.shorter-span-left').css('transform','translate(0,-4.5px) rotate(45deg)  scale(1)');
    $('.shorter-span-right').css('transform','translate(0px,4.5px) rotate(-45deg) scale(1)');
    $('.span-center').css('height','0');
    $(this).toggleClass('opened-menu');

    // show nothing but the menu button
    $(".nav").children().css("display","none");
    $(".menu-left").css("display", "block");
    menuOpened=true;
  }else{
    $('.shorter-span-left').css('transform','translate(0,0) rotate(0deg)  scale(1)');
    $('.shorter-span-right').css('transform','translate(0px,0) rotate(0deg) scale(1)');
    $('.span-center').css('height','4px');

    $(".contain-big-nav").css('left','-1000px');

    $(".nav").children().css("display","inline-block");

    menuOpened = false;
  }
});


$(window).scroll(function() {
  parallax();
});

function parallax() {

  var wScroll = $(window).scrollTop()
  console.log("($(document).height()/4)*2 height", ($(document).height()/4)*2);
  console.log("scroll: "+wScroll);

  $('.floating-box').css('top', 33 + (wScroll*.015)+'em')


  if(wScroll > ($(document).height()/4.5)*2){
    $('.third-slide').css('background-position', 'center ' + (wScroll*0.025)+'px');
  }else{
    $('.second-slide').css('background-position', 'center ' + (wScroll*0.05)+'px');
  }



}