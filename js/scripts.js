var navCompressed = false; 
var minimizedController;

$(document).ready(function () {

	const header = document.querySelector(".header");
	const nav1 = document.querySelector(".nav1");
	const nav2 = document.querySelector(".nav2");
	const nav3 = document.querySelector(".nav3");
	const nav4 = document.querySelector("#nav4");
	// const nav_helper = document.querySelector("#nav_helper");

	const tl = new TimelineMax(); 

	// Nav slide-in
	tl.fromTo(nav1,.5,{x: 800, opacity: 0},{x:-20, opacity: 1});
	tl.fromTo(nav1,.25,{x: -20},{x:0});
	tl.fromTo(nav2,.5,{x: 800, opacity: 0},{x:-20, opacity: 1},"-=.6");
	tl.fromTo(nav2,.20,{x: -20},{x:0});
	tl.fromTo(nav3,.5,{x: 800, opacity: 0},{x:-20, opacity: 1},"-=.75");
	tl.fromTo(nav3,.15,{x: -20},{x:0});

	// Nav resize 
	var navLink = $('.nav3');
	var landing = $('.landing');
	var $window = $(window);

	$window.scroll(function(event) { 

		var yDist = (navLink.offset()['top'] + navLink.height());
		var divHeight = (landing.height());

		if (yDist > divHeight) {
			if (!navCompressed) {
				tl.fromTo(nav3,.4,{width: '40%', height: '10%', fontSize: '1.75em'},{width: '25%', height: '7.5%', fontSize: '1.5em'});
				tl.fromTo(nav4,.4,{width: '30%', top: '50%', right: '6%'},{width: '20%', top: '48.75%', right: '6.1%'},"-=.4");
				tl.fromTo(nav2,.4,{width: '40%', height: '10%', fontSize: '1.75em'},{width: '25%', height: '7.5%', fontSize: '1.5em'}, "-=.35");
				tl.fromTo(nav1,.4,{width: '40%', height: '10%', fontSize: '1.75em'},{width: '25%', height: '7.5%', fontSize: '1.5em'},"-=.3");
			}
			navCompressed = true; 

		} else if (yDist < divHeight) {
			if (navCompressed) {
				tl.fromTo(nav1,.5,{width: '25%', height: '7.5%', fontSize: '1.5em'},{width: '40%', height: '10%', fontSize: '1.75em'});
				tl.fromTo(nav2,.5,{width: '25%', height: '7.5%', fontSize: '1.5em'},{width: '40%', height: '10%', fontSize: '1.75em'},"-=.45");
				tl.fromTo(nav3,.5,{width: '25%', height: '7.5%', fontSize: '1.5em'},{width: '40%', height: '10%', fontSize: '1.75em'},"-=.4");
				tl.fromTo(nav4,.5,{width: '20%', top: '48.75%', right: '6.1%'},{width: '30%', top: '50%', right: '6%'},"-=.5");
			}
			navCompressed = false; 			
		}
	  
	});

	// Other Listeners
	$('#nav1').on('click', function(event) { 
		if (this.hash !== "") {
		  event.preventDefault();
		  var hash = this.hash;

		  $('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, function(){
		    window.location.hash = hash;
		  });
		}
	});
	$('#nav2').on('click', function(event) { 
		if (this.hash !== "") {
		  event.preventDefault();
		  var hash = this.hash;

		  $('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, function(){
		    window.location.hash = hash;
		  });
		}
	});
	$('#nav3button').on('click', function(event) { 

		// Toggle dropdown 
		if ($('#nav4').height() == 0) {
			tl.fromTo(nav4,.5,{height: '0%', paddingTop: '0%'},{height: '100px', paddingTop: '4%'});
		} else {
			tl.fromTo(nav4,.5,{height: '100px', paddingTop: '4%'},{height: '0px', paddingTop: '0%'});
		}


		// else if ($('#nav4').height() > 0) {
		// 	tl.fromTo(nav4,.4,{height: '100px', paddingTop: '5%'},{height: '0%', paddingTop: '0%'});
		// }
	});
	$('#nav4').on('mouseover', function(event) { 

		//Fade nav3 to white 
		// tl.fromTo(nav3,.3,{backgroundColor: '#4e71ba', color: 'lightgray', right: '6%'},{backgroundColor: '#4e71ba', color: 'white', right: '6%'});

		// Unindent if nav4 NOT showing 
		// if ($('#nav4').height() == 0) {
		// 	tl.fromTo(nav3,.3,{backgroundColor: '#4e71ba', color: 'lightgray', right: '6%'},{backgroundColor: '#2f55a4', color: 'white', right: '6%'});
		// } 
		// else if ($('#nav4').height() > 0) {
		// 	tl.fromTo(nav4,.4,{height: '100px', paddingTop: '5%'},{height: '0%', paddingTop: '0%'});
		// }
	});
	
	// $('#mouseover-col').on('mouseover', function(event) { 
	// 	if ($('#nav4').height() > 50) {
	// 		tl.fromTo(nav4,.4,{height: '100px', paddingTop: '4%'},{height: '0%', paddingTop: '0%'});
	// 	}
	// });

	// Minimize nav4 on nav mouseover 
	$('.mouseout-hide').on('mouseover', function(event) { 
		if ($('#nav4').height() > 0) {
			tl.fromTo(nav4,.4,{height: '100px', paddingTop: '4%'},{height: '0%', paddingTop: '0%'});
		}
	});
	// $('#nav3').on('mouseout', function(event) { 

	// 	//Show dropdown 
	// 	if ($('#nav4').height() > 0) {
	// 		tl.fromTo(nav4,.4,{height: '100px', paddingTop: '5%'},{height: '0%', paddingTop: '0%'});
	// 		// tl.fromTo(nav_helper,.2,{height: '10%'},{height: '0%'});
	// 	}
	// });

	//CHANGE COLOR 
	// $('#nav3').on('hover', function(event) { 
	// 	$('');
	// };

    // $('.nav').on('hover', function(){
    //     document.getElementById("loading-list").style.display = "block";
    //     document.getElementById("name-list").style.display = "none";
    //     document.getElementById("loading-modal").style.display = "none";
    // });

});


function toggleNav() {
	if (!navCompressed) {
		tl.fromTo(nav1,.5,{width: '40%'},{width: '30%'});
		// nav1.style.width = '30%';
		// nav2.style.width = '30%';
		// nav3.style.width = '30%';
	}
};