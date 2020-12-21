$(document).ready(function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");
		var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};
	function isIE() {
		ua = navigator.userAgent;
		var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
		return is_ie;
	}
	if(isIE()){
		$('body').addClass('ie');
	}
	if(isMobile.any()){
		$('body').addClass('touch');
	}

	//Перенос элементов
	$(window).resize(function(event) {
		adaptive_function();
	});
	function adaptive_header(w,h) {
			var headerMenu=$('.header__menu');
			var headerLang=$('.header__content');
		if(w<550){
			if(!headerLang.hasClass('done')){
				headerLang.addClass('done').appendTo(headerMenu);
			}
		}else{
			if(headerLang.hasClass('done')){
				headerLang.removeClass('done').appendTo($('.header__body'));
			}
		}
	}
	function adaptive_function() {
			var w=$(window).outerWidth();
			var h=$(window).outerHeight();
		adaptive_header(w,h);
	}
	adaptive_function();

	//Меню бургер
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".header__menu");
	if (iconMenu) {
		iconMenu.addEventListener("click", function () {
			iconMenu.classList.toggle("active");
			menuBody.classList.toggle("active");
		});
	}

	//POPUP
	$('.pl').click(function (event) {
		var pl = $(this).attr('href').replace('#', '');
		var v = $(this).data('vid');
		popupOpen(pl, v);
		return false;
	});
	function popupOpen(pl, v) {
		$('.popup').removeClass('active').hide();
		if (!isMobile.any()) {
			$('body').css({ paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth() }).addClass('lock');
			$('.pdb').css({ paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth() });
		} else {
			setTimeout(function () {
				$('body').addClass('lock');
			}, 300);
		}
		history.pushState('', '', '#' + pl);
		if (v != '' && v != null) {
			$('.popup-' + pl + ' .popup-video__value').html('<iframe src="https://www.youtube.com/embed/' + v + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		}
		$('.popup-' + pl).fadeIn(300).delay(300).addClass('active');

		if ($('.popup-' + pl).find('.slick-slider').length > 0) {
			$('.popup-' + pl).find('.slick-slider').slick('setPosition');
		}
	}
	function openPopupById(popup_id) {
		$('#' + popup_id).fadeIn(300).delay(300).addClass('active');
	}
	function popupClose() {
		$('.popup').removeClass('active').fadeOut(300);
		if (!$('.menu__body').hasClass('active')) {
			if (!isMobile.any()) {
				setTimeout(function () {
					$('body').css({ paddingRight: 0 });
					$('.pdb').css({ paddingRight: 0 });
				}, 200);
				setTimeout(function () {
					$('body').removeClass('lock');
					//$('body,html').scrollTop(parseInt($('body').data('scroll')));
				}, 200);
			} else {
				$('body').removeClass('lock');
				//$('body,html').scrollTop(parseInt($('body').data('scroll')));
			}
		}
		$('.popup-video__value').html('');

		history.pushState('', '', window.location.href.split('#')[0]);
	}
	$('.popup-close,.popup__close').click(function (event) {
		popupClose();
		return false;
	});
	$('.popup').click(function (e) {
		if (!$(e.target).is(".popup>.popup-table>.cell *") || $(e.target).is(".popup-close") || $(e.target).is(".popup__close")) {
			popupClose();
			return false;
		}
	});
	$(document).on('keydown', function (e) {
		if (e.which == 27) {
			popupClose();
		}
	});

	//Слайдер
	$('.catalog__list').slick({
		slidesToShow: 7,
		variableWidth: true,
	});

});
