$(document).ready(function(){

    $('.sidenav').sidenav();
	$(".dropdown-trigger").dropdown();
	$('.slider').slider({
		interval: 10000
	});
	$('.carousel').carousel();

	var artArr;

  });

$(".article").hover(function(){
	$(".article-img", this).hide();
	$(".article-text", this).hide();
	$(".article-text-2", this).show();
}, function(){
	$(".article-img", this).show();	
	$(".article-text", this).show();
	$(".article-text-2", this).hide();
});

$("#arrow-left").hover(function(){
	artArr = $(this).attr('src');
	$(this).attr('src','assets/img/blue-arrows-left-hover.png');
},function(){
	$(this).attr('src',artArr);
});

$("#arrow-right").hover(function(){
	artArr = $(this).attr('src');
	$(this).attr('src','assets/img/blue-arrows-right-hover.png');
},function(){
	$(this).attr('src',artArr);
});