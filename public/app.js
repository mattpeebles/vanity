var sticky = $('.navbar').offset().top;

var stickyNav = function(){
	var scrollTop = $(window).scrollTop();
	     
	if (scrollTop > sticky) { 
	    $('.navbar').addClass('sticky');
	} else {
	    $('.navbar').removeClass('sticky'); 
	}
};

$(() => {
	stickyNav()
	$(window).scroll(() => {
		stickyNav()
	})
})