var navCompressed = false; 
var minimizedController;

$(document).ready(function () {

	const header = document.querySelector(".header");
	const nav1 = document.querySelector(".nav1");
	const nav2 = document.querySelector(".nav2");
	const nav3 = document.querySelector(".nav3");
	const nav4 = document.querySelector("#nav4");
	nav4.style.display = 'none';
	const tag_module = document.querySelector(".tag-module");
	// const nav_helper = document.querySelector("#nav_helper");

	const tl = new TimelineMax(); 

	// Nav slide-in
	tl.fromTo(nav1,.5,{x: 800, opacity: 0},{x:-20, opacity: 1});
	tl.fromTo(nav1,.25,{x: -20},{x:0});
	tl.fromTo(nav2,.5,{x: 800, opacity: 0},{x:-20, opacity: 1},"-=.6");
	tl.fromTo(nav2,.20,{x: -20},{x:0});
	tl.fromTo(nav3,.5,{x: 800, opacity: 0},{x:-20, opacity: 1},"-=.75");
	tl.fromTo(nav3,.15,{x: -20},{x:0});
	tl.fromTo(nav3button,.5,{x: 800, opacity: 0},{x:-20, opacity: 1},"-=1");
	tl.fromTo(nav3button,.15,{x: -20},{x:0});

	// Module border animation:

	// var style = document.createElement('style');
	//   style.innerHTML = `
	//   .tag_module {
	// 	  border-image: 
	// 	    linear-gradient(
	// 	      to bottom, 
	// 	      #9DC3C2, 
	// 	      rgba(0, 0, 0, 0)
	// 	    ) 1 100%;
	//   }
	//   `;
	// document.head.appendChild(style);

	// tl.fromTo(tag_module,.5,{borderRightWidth: 0, borderLeftWidth: 0},{borderRightWidth: 10, borderLeftWidth: 10},"-=0");

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
				tl.fromTo(nav3button,.4,{width: '4.7%', height: '10%', fontSize: '1.75em'},{width: '3%', height: '7.5%', fontSize: '1.5em'},"-=.4");
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
				tl.fromTo(nav3button,.5,{width: '3%', height: '7.5%', fontSize: '1.5em'},{width: '4.7%', height: '10%', fontSize: '1.75em'},"-=.5");
				tl.fromTo(nav4,.5,{width: '20%', top: '48.75%', right: '6.1%'},{width: '30%', top: '50%', right: '6%'},"-=.5");
			}
			navCompressed = false; 			
		}
	  
	});

	// Other Listeners:

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
			nav4.style.display = 'block';
			tl.fromTo(nav4,.5,{height: '0%', paddingTop: '0%'},{height: '100px', paddingTop: '4%'});
		} else {
			tl.fromTo(nav4,.5,{height: '100px', paddingTop: '4%'},{height: '0px', paddingTop: '0%'});
		}

	});
	
	

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