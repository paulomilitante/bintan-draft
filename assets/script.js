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

$(".arrow-left-link").hover(function(){
	$(".arrow-left-hover",this).show();
	$(".arrow-left",this).hide();
},function(){
	$(".arrow-left-hover",this).hide();
	$(".arrow-left",this).show();
});

$(".arrow-right-link").hover(function(){
	$(".arrow-right-hover",this).show();
	$(".arrow-right",this).hide();
},function(){
	$(".arrow-right-hover",this).hide();
	$(".arrow-right",this).show();
});