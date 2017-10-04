var sticky = $('.navbar').offset().top;

var stickyNav = function(){
	var scrollTop = $(window).scrollTop();
	     
	if (scrollTop > sticky) { 
	    $('.navbar').addClass('sticky');
	} else {
	    $('.navbar').removeClass('sticky'); 
	}
};

function applyScrollSpy(){
	$('.navbar').on('activate.bs.scrollspy', function() {
		console.log('hi')
		window.location.hash = $('.nav .active a').attr('href').replace('#', '#/');
	});
}

$(() => {
	$('body').scrollspy({target: ".navbar"})
	$('.navbar').on('activate.bs.scrollspy', function() {
		console.log('hi')
		window.location.hash = $('.nav .active a').attr('href').replace('#', '#/');
	});
	stickyNav()
	applyScrollSpy()
	$(window).scroll(() => {
		stickyNav()
		applyScrollSpy()
	})
})