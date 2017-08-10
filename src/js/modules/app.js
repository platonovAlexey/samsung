console.log('Hellow World');
$('.reviews-pages__back').on('click', function(event) {
	event.preventDefault();
	var from = document.referrer;
	fromTo = from.toString();
	console.log(from);
	console.log(fromTo);
	window.location.href = fromTo;
});
$("#owl-demo").owlCarousel({
				navigation: true,
				pagination: true,
				items: 1,
				loop:true,
				autoPlay: 5000,
				margin:10,
				responsiveClass:true,
				itemsDesktop: [1199, 1],
				itemsDesktopMedium: [992, 1],
				itemsDesktopSmall: [480, 1],
				responsive:{
		480:{
			items:1,
			nav:true
		},
		600:{
			items:1,
			nav:false
		},
		1000:{
			items:1,
			nav:true,
			loop:false
		}
	}
});

$("#owl-demo2").owlCarousel({
				navigation: true,
				pagination: true,
				items: 3,
				loop:true,
				autoPlay: 5000,
				margin:10,
				responsiveClass:true,
				itemsDesktop: [1199, 3],
				itemsDesktopMedium: [992, 2],
				itemsDesktopSmall: [480, 1],
				responsive:{
		480:{
			items:1,
			nav:true
		},
		600:{
			items:1,
			nav:false
		},
		1000:{
			items:1,
			nav:true,
			loop:false
		}
	}
});
