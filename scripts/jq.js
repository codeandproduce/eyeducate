$(document).ready(function(){
	$("#menu_button").click(function(){
		$(".contain-big-nav").css('left','0px');
	});
	$("#close-big-nav").click(function(){
		$(".contain-big-nav").css('left','-1000px');
	});
})