

$(document).ready(function(){

	console.log('hello');

	$('a').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);
		return false;
	});

	$(window).scroll(function (){
	//what the y position of scroll is
		var y = $(window).scrollTop();
		//whether that's below the form
		if (y >= 651){
			//if so, add the fixed class
			$('#main-nav').addClass('fixed');
			}
		else {
			//otherwise, leave it
			$('#main-nav').removeClass('fixed');
		}
	});
});