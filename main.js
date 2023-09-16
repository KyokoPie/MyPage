document.addEventListener('DOMContentLoaded', function() {
	// 在這裡放置你的JavaScript代碼
    var btn = document.getElementById("123")
    if(btn){
        	
	btn.addEventListener('click', function() {
		document.getElementById("Illustrations").scrollIntoView();
	}, false)
        
    }

	$(function() {
		$('#BackTop').click(function() {
			$('html,body').animate({
				scrollTop: 0
			}, 333);
		});
		$(window).scroll(function() {
			if ($(this).scrollTop() > 300) {
				$('#BackTop').fadeIn(222);
			} else {
				$('#BackTop').stop().fadeOut(222);
			}
		}).scroll();
	});
	$(document).ready(function() {
		$(window).scroll(function() {
			$(".top-anime").css("opacity", 1 - $(window).scrollTop() / 200);
		});
	});
	$(document).ready(function() {
		$(window).scroll(function() {
			$(".top").css("right", 15 + $(window).scrollTop() / 1);
		});
	});
	$(document).ready(function() {
		$(window).scroll(function() {
			$(".top2").css("left", 15 + $(window).scrollTop() / 1);
		});
	});
	$(document).ready(function() {
		$(window).scroll(function() {
			$(".anime").css("opacity", 1 - $(window).scrollTop() / 250);
		});
	});
	$(document).ready(function() {
		$(window).scroll(function() {
			$(".anime").css("right", -80 - $(window).scrollTop() / 2);
		});
	});
	// 縮小版面後選單按鈕
	$(document).on('click', '.nav-menu a, .scrollto', function(e) {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			e.preventDefault();
			var target = $(this.hash);
			if (target.length) {
				var scrollto = target.offset().top;
				$('html, body').animate({
					scrollTop: scrollto
				}, 1500, 'easeInOutExpo');
				if ($(this).parents('.nav-menu, .mobile-nav').length) {
					$('.nav-menu .active, .mobile-nav .active').removeClass('active');
					$(this).closest('li').addClass('active');
				}
				if ($('body').hasClass('mobile-nav-active')) {
					$('body').removeClass('mobile-nav-active');
					$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu fa-bars');
				}
				return false;
			}
		}
	});
	$(document).ready(function() {
		if (window.location.hash) {
			var initial_nav = window.location.hash;
			if ($(initial_nav).length) {
				var scrollto = $(initial_nav).offset().top;
				$('html, body').animate({
					scrollTop: scrollto
				}, 1500, 'easeInOutExpo');
			}
		}
	});
	$(document).on('click', '.mobile-nav-toggle', function(e) {
		$('body').toggleClass('mobile-nav-active');
		$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
	});
	$(document).click(function(e) {
		var container = $(".mobile-nav-toggle");
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			if ($('body').hasClass('mobile-nav-active')) {
				$('body').removeClass('mobile-nav-active');
				$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
			}
		}
	});
	// Initiate venobox (lightbox feature used in portofilo)
$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
});
    

    
});
	$(document).ready(function() {
		$('.Illustrations-wrap').venobox();
	});
$(document).ready(function() {
  // 初始化 Masonry
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 0,
  });

  // 在每個圖片載入完成後重新排列 Masonry
  $grid.imagesLoaded().progress(function() {
    $grid.masonry('layout');
  });
});

