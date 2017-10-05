var sticky = $('.navbar').offset().top;

var stickyNav = function(){
	var scrollTop = $(window).scrollTop();
	     
	if (scrollTop > sticky) { 
	    $('.navbar').addClass('sticky');
	} else {
	    $('.navbar').removeClass('sticky'); 
	}
};

function smoothScroll(){
	$('a[href*="#"]:not([href="#"])').on('click', function(e)
	{
		e.preventDefault();
		
		if( $( $.attr(this, 'href') ).length > 0 )
		{
			$('html, body').animate(
			{
				scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 400);
		}
		return false;
	});
}

$(() => {
	stickyNav()
	smoothScroll()
	$(window).scroll(() => {
		stickyNav()
	})
})