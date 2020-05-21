var navCompressed = false; 
// var minimizedController;

var maxWidth = window.matchMedia("(max-width: 760px)")
navMediaQuery(maxWidth) 
maxWidth.addListener(navMediaQuery)

$(document).ready(function () {
	// Reset scroll position
	$(this).scrollTop(0);

	const header = document.querySelector(".header");
	const nav1 = document.querySelector(".nav1");
	const nav2 = document.querySelector(".nav2");
	const nav3 = document.querySelector(".nav3");
	const nav4 = document.querySelector("#nav4");
	const headerImg = document.querySelector(".header-img");
	const tagSection = document.querySelector(".tag-module");
	const mobileNav = document.querySelector("#mobile-nav");

	const tl = new TimelineMax(); 


	// ----------------- LANDING ANIMATION -----------------

	// Nav slide-in
	tl.fromTo(nav1,.5,{x: 800, opacity: 0},{x:-20, opacity: 1});
	tl.fromTo(nav1,.25,{x: -20},{x:0});
	tl.fromTo(nav2,.5,{x: 800, opacity: 0},{x:-20, opacity: 1},"-=.6");
	tl.fromTo(nav2,.20,{x: -20},{x:0});
	tl.fromTo(nav3,.5,{x: 800, opacity: 0},{x:-20, opacity: 1},"-=.75");
	tl.fromTo(nav3,.15,{x: -20},{x:0});
	tl.fromTo(nav3button,.5,{x: 800, opacity: 0},{x:-20, opacity: 1},"-=1");
	tl.fromTo(nav3button,.15,{x: -20},{x:0});
	tl.fromTo(mobileNav,.3,{x: '100vw', opacity: 0},{x: '-5vw', opacity: 1},"-=1");
	tl.fromTo(mobileNav,.15,{x: '-5vw'},{x: '0vw'},"-=.7");
	tl.fromTo(headerImg,.75,{opacity: '0'},{opacity: '1'},"-=.25");

	// ------------- IMG FADE IN --------------
	var $window = $(window);

	$window.scroll( function(){
        $('div.banner img').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight()/3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){ 
				$(this).animate({'opacity':'1'},500); 
			}
        }); 
    
	});

	// MOBILE NAV POSITION
	$window.scroll( function(){
		var offset = $(window).scrollTop()
		// console.log(offset)
		$('#mobile-nav').css('top', offset)
		// $('#mobile-nav').css('top', function(index){
		// 	var offset = $(window).scrollTop()
		// 	console.log(offset)
		// 	// console.log(index)
		// 	return offset
		// })
	})

	$('#nav3-mobile').on('click', function(){
		var path = window.location.pathname.substring(0, window.location.pathname.indexOf('index.html'))
		window.location = path + "projects.html"
	})

	// ------------- NAV COMPRESSION ------------- 
	var navLink = $('.nav3');
	var landing = $('.landing');

	WIDTH = '40%';
	C_WIDTH = '35%';

	HEIGHT = '10%';
	C_HEIGHT = '7.5%';

	FONT = '1.75em';
	C_FONT = '1.5em';

	TIME = .3
	C_TIME = .4

	$window.scroll(function(event) { 
		var yDist = (navLink.offset()['top'] + navLink.height());
		var divHeight = (landing.height());

		if (yDist > divHeight) {
			if (!navCompressed) {
				tl.fromTo(nav3,TIME,{width: WIDTH, height: HEIGHT, fontSize: FONT},{width: C_WIDTH, height: C_HEIGHT, fontSize: C_FONT});
				tl.fromTo(nav3button,TIME,{width: '4.7%', height: HEIGHT, fontSize: FONT},{width: '3%', height: C_HEIGHT, fontSize: C_FONT},"-=.4");
				tl.fromTo(nav4,TIME,{width: '30%', top: '50%', right: '6%'},{width: '20%', top: '48.75%', right: '6.1%'},"-=.4");
				tl.fromTo(nav2,TIME,{width: WIDTH, height: HEIGHT, fontSize: FONT},{width: C_WIDTH, height: C_HEIGHT, fontSize: C_FONT}, "-=.35");
				tl.fromTo(nav1,TIME,{width: WIDTH, height: HEIGHT, fontSize: FONT},{width: C_WIDTH, height: C_HEIGHT, fontSize: C_FONT},"-=.3");
			}
			navCompressed = true; 

		} else if (yDist < divHeight) {
			if (navCompressed) {
				tl.fromTo(nav1,C_TIME,{width: C_WIDTH, height: C_HEIGHT, fontSize: C_FONT},{width: WIDTH, height: HEIGHT, fontSize: FONT});
				tl.fromTo(nav2,C_TIME,{width: C_WIDTH, height: C_HEIGHT, fontSize: C_FONT},{width: WIDTH, height: HEIGHT, fontSize: FONT},"-=.45");
				tl.fromTo(nav3,C_TIME,{width: C_WIDTH, height: C_HEIGHT, fontSize: C_FONT},{width: WIDTH, height: HEIGHT, fontSize: FONT},"-=.4");
				tl.fromTo(nav3button,C_TIME,{width: '3%', height: C_HEIGHT, fontSize: C_FONT},{width: '4.7%', height: HEIGHT, fontSize: FONT},"-=.5");
				tl.fromTo(nav4,C_TIME,{width: '20%', top: '48.75%', right: '6.1%'},{width: '30%', top: '50%', right: '6%'},"-=.5");
			}
			navCompressed = false; 			
		}
	  
	});

	// ------------- NAV COMPRESSION END ------------- 

	//Mobile Nav Listener:
    $(".segmented label input[type=radio]").each(function(){
        $(this).on("change", function(){
            if($(this).is(":checked")){
               $(this).parent().siblings().each(function(){
                    $(this).removeClass("checked");
                });
                $(this).parent().addClass("checked");
            }
        });
    });

	// Nav Clicks:
	$('#nav1').on('click', function(event) { 
		if (this.hash !== "") {
		//   event.preventDefault();
		  var hash = this.hash;

		  $('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700);
		}
	});
	$('#nav2, #nav2-mobile').on('click', function(event) { 
		if (this.hash !== "") {
		//   event.preventDefault();
		  var hash = this.hash;

		  $('html, body').animate({
		    scrollTop: $('.about').offset().top
		  }, 700);
		}
	});
	$('#nav1-mobile').on('click', function(event) { 
		if (this.hash !== "") {
		//   event.preventDefault();
		  var hash = this.hash;

		  $('html, body').animate({
		    scrollTop: 0
		  }, 700);
		}
	});

	$('#nav3button').on('click', function(event) { 
		const button = document.querySelector("#dropDownButton");

		// Toggle dropdown 
		if ($('#nav4').height() == 0) {
			nav4.style.display = 'block';
			tl.fromTo(nav4,.5,{height: '0%', paddingTop: '0%'},{height: '80px', paddingTop: '6.5vh'});
			tl.fromTo(button,.25,{rotation: '90'},{rotation: '0'},'-=.5');
		} else {
			tl.fromTo(nav4,.25,{height: '80px', paddingTop: '6.5vh'},{height: '0px', paddingTop: '0%'},'-=0.5');
			tl.fromTo(button,.25,{rotation: '0'},{rotation: '90'});
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


function navMediaQuery(maxWidth) {
  if (maxWidth.matches) { 
  	document.querySelector("#mobile-nav").style.display = "block";
  	document.querySelector("#desktop-nav").style.display = "none";
  	document.querySelector("#landing-div").style.paddingTop = "0vh";
  } else {
  	document.querySelector("#mobile-nav").style.display = "none";
    document.querySelector("#desktop-nav").style.display = "block";
    document.querySelector("#landing-div").style.paddingTop = "10vh";
  }
}


function toggleNav() {
	if (!navCompressed) {
		tl.fromTo(nav1,.5,{width: '40%'},{width: '30%'});
		// nav1.style.width = '30%';
		// nav2.style.width = '30%';
		// nav3.style.width = '30%';
	}
};