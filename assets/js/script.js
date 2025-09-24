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

// product slider js start--
var swiper = new Swiper(".product-slider", {
	slidesPerView: 4,
	spaceBetween: 20,
	grabCursor: true,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: '.product-slider-btn-next',
		prevEl: '.product-slider-btn-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		1: {
			spaceBetween: 10,
			slidesPerView: 1.3,
		},
		// when window width is >= 768px
		576: {
			spaceBetween: 15,
			slidesPerView: 2.2,
		},
		// when window width is >= 993px
		993: {
			spaceBetween: 16,
			slidesPerView: 3,
		},
		// when window width is >= 1140x
		1140: {
			spaceBetween: 20,
			slidesPerView: 3,
		},
		// when window width is >= 1290px
		1290: {
			spaceBetween: 20,
			slidesPerView: 4,
		}
	}
});
// product slider js end--

// testimonial slider js start--
var swiper = new Swiper(".testimonial-slider", {
	slidesPerView: "auto",
	centeredSlides: true,
	spaceBetween: 20,
	grabCursor: true,
	loop: true,
	speed: 1000,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: '.product-slider-btn-next',
		prevEl: '.product-slider-btn-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		1: {
			spaceBetween: 10,
			slidesPerView: 1,
			centeredSlides: false,
			speed: 500,

		},
		// when window width is >= 576px
		576: {
			spaceBetween: 15,
			centeredSlides: false,
			slidesPerView: 1.1,
			speed: 500,
		},
		// when window width is >= 767px
		767: {
			spaceBetween: 15,
			centeredSlides: false,
			slidesPerView: 1.5,
			speed: 500,
		},
		// when window width is >= 993px
		993: {
			spaceBetween: 16,
			centeredSlides: true,
			speed: 1000,
		},
	}
});
// testimonial slider js end--