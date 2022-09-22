(function ($) {
	$(document).ready(function () {
		

		var swiper = new Swiper(".mySwiper-2", {
			slidesPerView: 3,
			loop: true,
			spaceBetween: 10,
			watchSlidesProgress: true
		});
		var swiper2 = new Swiper(".mySwiper-1", {
			slidesPerView: 1,
			loop: true,
			effect: "fade",
			speed: 0,
			navigation: {
				nextEl: '.swiper-button-next-1',
				prevEl: '.swiper-button-prev-1',
			},
			thumbs: {
				swiper: swiper,
			},
		});

		var swiper3 = new Swiper(".mySwiper-3", {
			slidesPerView: 3,
			spaceBetween: 45,
			loop: true,
			navigation: {
				nextEl: '.swiper-button-next-2',
				prevEl: '.swiper-button-prev-2',
			},
			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				1024: {
					slidesPerView: 3,
				  	spaceBetween: 45,
				},
				1770: {
					spaceBetween: 40,
				},
			},
		});

		var swiper4 = new Swiper(".mySwiper-4", {
			slidesPerView: 1,
			spaceBetween: 45,
			loop: true,
			pagination: true,
			effect: "fade",
			speed: 0,
			pagination: {
				el: ".swiper-pagination",
			},
			navigation: {
				nextEl: '.swiper-button-next-3',
				prevEl: '.swiper-button-prev-3',
			},
			breakpoints: {
				320: {
					spaceBetween: 100,
				},
				1024: {
				  spaceBetween: 45,
				},
			},
		});

		//slider news-single
		var swiper5 = new Swiper(".mySwiper-5", {
			spaceBetween: 30,
			slidesOffsetAfter: 0,
			loop: true,
			navigation: {
				nextEl: '.swiper-button-next-5',
				prevEl: '.swiper-button-prev-5',
			},
			slidesPerView: 2,
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				1024: {
					slidesPerView: 2,
				  	spaceBetween: 30,
				},
			},
		});

		//slider about-bdf
		var swiper = new Swiper(".mySwiper-7", {
			slidesPerView: 5,
			loop: false,
			spaceBetween: 30,
			watchSlidesProgress: true
		});
		var swiper = new Swiper(".mySwiper-6", {
			slidesPerView: 1,
			spaceBetween: 100,
			loop: false,
			navigation: {
				nextEl: '.swiper-button-next-6',
				prevEl: '.swiper-button-prev-6',
			},
			breakpoints: {
				320: {
					spaceBetween: 10,
				},
				1024: {
				  	spaceBetween: 100,
				},
			},
			thumbs: {
				swiper: swiper,
			},
		});

		var swiper = new Swiper(".mySwiper-8", {
			slidesPerView: 1,
			spaceBetween: 100,
			loop: false,
			navigation: {
				nextEl: '.swiper-button-next-8',
				prevEl: '.swiper-button-prev-8',
			},
			breakpoints: {
				320: {
					spaceBetween: 10,
				},
				1024: {
				  	spaceBetween: 100,
				},
			},
		});

		var swiper = new Swiper(".mySwiper-9", {
			slidesPerView: 1,
			spaceBetween: 100,
			loop: false,
			navigation: {
				nextEl: '.swiper-button-next-9',
				prevEl: '.swiper-button-prev-9',
			},
			breakpoints: {
				320: {
					spaceBetween: 10,
				},
				1024: {
				  	spaceBetween: 100,
				},
			},
		});

		var swiper = new Swiper(".mySwiper-10", {
			slidesPerView: 1,
			spaceBetween: 100,
			loop: false,
			navigation: {
				nextEl: '.swiper-button-next-10',
				prevEl: '.swiper-button-prev-10',
			},
			breakpoints: {
				320: {
					spaceBetween: 10,
				},
				1024: {
				  	spaceBetween: 100,
				},
			},
		});

		

		//Header menu logo + ico
		$('.btn-menu').on('click', function(){
			
			$('.full-menu').toggleClass('hide-menu');
			$('.full-menu').toggleClass('show-menu');

			$('.btn-menu-f').toggleClass('hide'); 
			$('.btn-menu-m').toggleClass('show');

			if ($(window).width() < 767){
				$('.header__logo-fixed').toggleClass('none');
				$('.header__logo-m').toggleClass('block');
				$('.header.fixed').toggleClass('height');
			}
		});
		
	});

	//Scroll menu + perfomance panel
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		
		if (scroll <= 450) {
			$(".perfomance-panel").addClass("hide");
		} else {
			$(".perfomance-panel").removeClass("hide");
		}


		if (scroll >= 450) {
			$(".header").addClass("fixed");
			$(".header__logo-fixed").addClass("show");
			$('.header__logo').hide();

			$(".perfomance-panel").addClass("fixed");
		} else {
			$(".header").removeClass("fixed");
			$(".header__logo-fixed").removeClass("show");
			$('.header__logo').show();

			$(".perfomance-panel").removeClass("fixed");
		}
	});

	//Custom select
	$('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').show();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    
})(jQuery);