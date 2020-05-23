$(document).ready(function () {
	// Reset scroll position
	$(this).scrollTop(0);

	const logo = document.querySelector("#logo");
	const header = document.querySelector(".projectsHeading");
	
	const tl = new TimelineMax(); 

	// ----------------- PROJECTS ANIMATION -----------------

	tl.fromTo(logo,.25,{x: 200, opacity: 0},{x:-10, opacity: .8});
    tl.fromTo(logo,.25,{x: -20, opacity: .8},{x:0, opacity: 1});
    tl.fromTo(header,.8,{x: 50, opacity: 0},{x:0, opacity: 1});

    $('#items').on('click', function(event) { 
		if (this.hash !== "") {
		//   event.preventDefault();
		  var hash = this.hash;

		  $('html, body').animate({
		    scrollTop: $('#items').offset().top
		  }, 700);
		}
	});
});