$(document).ready(function () {
	'use strict';
	// navbar js start ---
	$(window).on('load scroll', function () {
		var scrolling = $(this).scrollTop();
		if (scrolling > 10) {
			$('.navbar').addClass('nav-fixed')
		} else {
			$('.navbar').removeClass('nav-fixed')
		}
	})


	$(".ham-menu").click(function (event) {
		event.stopPropagation();
		$(".sidebar-wrapper").toggleClass("active");
		$(".ham-menu").toggleClass("active");
		$(".sidebar-wrapper-inner").toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".mobile-menu-close-window-btn").click(function (event) {
		event.stopPropagation();
		$(".sidebar-wrapper").toggleClass("active");
		$(".ham-menu").toggleClass("active");
		$(".sidebar-wrapper-inner").toggleClass("active");
		$("body").toggleClass("active");
	});

	// **..mobile-dropdown-accordion js start..**
	$('.sidebar-submenu-open').on('click', function () {
		$(this).parent().find(".megamenu-wrapper").addClass('active');
	});

	$('.sidebar-close-btn').on('click', function () {
		$(this).parent().parent().parent(".megamenu-wrapper").removeClass('active');
	});
	// **..mobile-dropdown-accordion js end..**

	$(".search-bar-open-btn").click(function (event) {
		event.stopPropagation();
		$(".search-bar").toggleClass("active");
		$(".search-bar-window-close-btn").toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".search-bar-window-close-btn").click(function (event) {
		event.stopPropagation();
		$(".search-bar").toggleClass("active");
		$(this).toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".search-close-btn").click(function (event) {
		event.stopPropagation();
		$(".search-bar").toggleClass("active");
		$(".search-bar-window-close-btn").toggleClass("active");
		$("body").toggleClass("active");
	});

	// navbar js end ---

	// --tab js start--
	$('.tab-btn').click(function () {
		$('.tab-nav-item').removeClass('active');
		$(this).parent().addClass('active');
		$('.tab-content-item').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).fadeIn();
		return false;
	});
	// --tab js end--

	$(".card-varient-tap-btn").click(function () {
		$(this).closest(".product-card").find(".product-varient").addClass("active");
	})
	// $("body").click(function () {
	// 	$(".card-content").find(".product-varient").removeClass("active");
	// })
	$(".product-varient").click(function (e) {
		e.stopPropagation();
	})

	// **..product-accordion js start..**
	$('.product-accordion-toggle-btn').on('click', function () {
		$(this).next().slideToggle();
		$(this).parent().toggleClass('active');
		$(this).parent().siblings().removeClass('active').find('.product-accordion-item-content').slideUp();
	});
	// **..product-accordion js end..**

})

const navbar = document.querySelector(".navbar");
let lastScrollPosition = 0;
window.addEventListener("scroll", () => {
	let currentScrollPosition = window.pageYOffset;

	if (currentScrollPosition - lastScrollPosition > 0) {
		navbar.classList.add("hide");
		navbar.classList.remove("nav-fixed");
	} else {
		navbar.classList.add("nav-fixed");
		navbar.classList.remove("hide");
	}
	lastScrollPosition = currentScrollPosition;
})


// btn js ---
// primary btn---
$(function () {
	$('.primary-btn')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		})
		.on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		});
});

// secondary btn--
$(function () {
	$('.secondary-btn')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		})
		.on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		});
});
// btn js ---

// card slider js start--
var swiper = new Swiper(".card-slider", {
	slidesPerView: 1,
	spaceBetween: 4,
	loop: true,
	pagination: {
		el: ".card-slider-pagination",
		clickable: true,
	}
});
// product slider js end--

// img-gallery slider js start--
var swiper = new Swiper(".img-gallery-slider", {
	slidesPerView: 4.5,
	spaceBetween: 0,
	grabCursor: true,
	loop: true,
	breakpoints: {
		// when window width is >= 320px
		1: {
			slidesPerView: 2.5,
		},
		// when window width is >= 768px
		576: {
			slidesPerView: 3.2,
		},
		// when window width is >= 993px
		993: {
			slidesPerView: 3.5,
		},
		// when window width is >= 1140x
		1140: {
			slidesPerView: 4.5,
		},
		// when window width is >= 1290px
		1290: {
			slidesPerView: 4.5,
		}
	}
});
// img-gallery slider js end--

// testimonial slider js start--
var swiper = new Swiper(".testimonial-slider", {
	slidesPerView: 3.5,
	spaceBetween: 10,
	grabCursor: true,
	loop: false,
	scrollbar: {
		el: ".swiper-scrollbar",
		hide: true,
	},
	breakpoints: {
		// when window width is >= 320px
		1: {
			slidesPerView: 1.1,
		},
		// when window width is >= 768px
		576: {
			slidesPerView: 2.3,
		},
		// when window width is >= 993px
		993: {
			slidesPerView: 2.7,
		},
		// when window width is >= 1140x
		1140: {
			slidesPerView: 3.3,
		},
		// when window width is >= 1290px
		1290: {
			slidesPerView: 3.5,
		}
	}
});
// testimonial slider js end--

// product slider js start--
let mql = window.matchMedia("(max-width: 767px)");
if (mql.matches) {
	var swiper = new Swiper(".product-details-thumb-slider", {
		loop: false,
		spaceBetween: 2,
		slidesPerView: 4.2,
		breakpoints: {
			1: {
				slidesPerView: 4.2,
			},
			576: {
				slidesPerView: 5.2,
			}
		}
	});
	var swiper2 = new Swiper(".product-details-slider", {
		spaceBetween: 0,
		direction: "vertical",
		slidesPerView: "auto",
		freeMode: true,
		mousewheel: true,
		scrollbar: {
			el: ".swiper-scrollbar",
		},
		thumbs: {
			swiper: swiper,
		},
		breakpoints: {
			1: {
				freeMode: false,
				spaceBetween: 5,
				slidesPerView: 1,
				mousewheel: false,
				direction: "horizontal",
			},
			576: {
				freeMode: false,
				spaceBetween: 5,
				slidesPerView: 1,
				mousewheel: false,
				direction: "horizontal",
			},
			767: {
				spaceBetween: 0,
				direction: "vertical",
				slidesPerView: "auto",
				freeMode: true,
				mousewheel: true,
			},
			1024: {
				spaceBetween: 0,
				direction: "vertical",
				slidesPerView: "auto",
				freeMode: true,
				mousewheel: true,
			}
		}
	});
} else {
	var swiper2 = new Swiper(".product-details-slider", {
		spaceBetween: 0,
		direction: "vertical",
		slidesPerView: "auto",
		freeMode: true,
		mousewheel: true,
		scrollbar: {
			el: ".swiper-scrollbar",
		},
	});

}




// var productDetailsThumbslider = new Swiper(".product-details-thumb-slider", {
// 	loop: true,
// 	spaceBetween: 2,
// 	slidesPerView: 4.2,
// 	breakpoints: {
// 		1: {
// 			slidesPerView: 4.2,
// 		},
// 		576: {
// 			slidesPerView: 5.2,
// 		}
// 	}
// });
// var swiper2 = new Swiper(".product-details-slider", {
// 	spaceBetween: 0,
// 	direction: "vertical",
// 	slidesPerView: "auto",
// 	freeMode: true,
// 	mousewheel: true,
// 	scrollbar: {
// 		el: ".swiper-scrollbar",
// 	},
// 	thumbs: {
// 		swiper: productDetailsThumbslider,
// 	},
// 	breakpoints: {
// 		1: {
// 			freeMode: false,
// 			spaceBetween: 5,
// 			slidesPerView: 1,
// 			mousewheel: false,
// 			direction: "horizontal",
// 		},
// 		576: {
// 			freeMode: false,
// 			spaceBetween: 5,
// 			slidesPerView: 1,
// 			mousewheel: false,
// 			direction: "horizontal",
// 		},
// 		768: {
// 			freeMode: true,
// 			spaceBetween: 0,
// 			slidesPerView: "auto",
// 			mousewheel: true,
// 			direction: "vertical",
// 			thumbs: {
// 				enabled: false, // Disable thumbs at this breakpoint and below
// 			},
// 		},
// 		1024: {
// 			freeMode: true,
// 			spaceBetween: 0,
// 			slidesPerView: "auto",
// 			mousewheel: true,
// 			direction: "vertical",
// 			thumbs: {
// 				enabled: false, // Disable thumbs at this breakpoint and below
// 			},
// 		}
// 	}
// });

// var productDetailsThumbslider = new Swiper(".product-details-thumb-slider", {
// 	loop: true,
// 	spaceBetween: 2,
// 	slidesPerView: 4.2,
// 	breakpoints: {
// 		1: {
// 			slidesPerView: 4.2
// 		},
// 		576: {
// 			slidesPerView: 5.2
// 		}
// 	}
// });

// var swiper2 = new Swiper(".product-details-slider", {
// 	spaceBetween: 0,
// 	direction: "vertical",
// 	slidesPerView: "auto",
// 	freeMode: true,
// 	mousewheel: true,
// 	scrollbar: {
// 		el: ".swiper-scrollbar",
// 	},
// 	breakpoints: {
// 		1: {
// 			freeMode: false,
// 			spaceBetween: 5,
// 			slidesPerView: 1,
// 			mousewheel: false,
// 			direction: "horizontal",
// 		},
// 		576: {
// 			freeMode: false,
// 			spaceBetween: 5,
// 			slidesPerView: 1,
// 			mousewheel: false,
// 			direction: "horizontal",
// 		},
// 		768: {
// 			freeMode: true,
// 			spaceBetween: 0,
// 			slidesPerView: "auto",
// 			mousewheel: true,
// 			direction: "vertical",
// 		},
// 		1024: {
// 			freeMode: true,
// 			spaceBetween: 0,
// 			slidesPerView: "auto",
// 			mousewheel: true,
// 			direction: "vertical",
// 		}
// 	}
// });

// // ✅ Enable/disable thumbs dynamically
// function handleThumbs() {
// 	if (window.innerWidth < 768) {
// 		if (!swiper2.thumbs.swiper) {
// 			swiper2.thumbs.swiper = productDetailsThumbslider;
// 			swiper2.thumbs.init();
// 			swiper2.thumbs.update();
// 		}
// 	} else {
// 		if (swiper2.thumbs.swiper) {
// 			swiper2.thumbs.swiper = null; // unlink thumbs
// 		}
// 	}
// }

// // Run on load + resize
// swiper2.on("init", handleThumbs);
// swiper2.on("resize", handleThumbs);
// swiper2.init();

// product slider js end--