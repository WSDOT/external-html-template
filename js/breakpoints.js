(function ($) {
	'use strict';
	behaviors.filter_toggle = {
		attach: function (context, settings) {
			/*Breakpoint control for certain elements*/
			var width = $(window).width();
			if (width >= 992) {
				$('.break-md-control').attr('aria-hidden','true');
				$('.break-lg-control').attr('aria-hidden','false');
				$('.break-md-control').css('display','none');
				$('.break-lg-control').css('display','block');
			}
			if (width < 992) {
				$('.break-md-control').attr('aria-hidden','false');
				$('.break-lg-control').attr('aria-hidden','true');
				$('.break-md-control').css('display','block');
				$('.break-lg-control').css('display','none');
			}
			$(window).on('resize', function() {
				var win = $(this);
				if (win.width() >= 992) {
					$('.break-md-control').attr('aria-hidden','true');
					$('.break-lg-control').attr('aria-hidden','false');
					$('.break-md-control').css('display','none');
					$('.break-lg-control').css('display','block');
				}
				if (win.width() < 992) {
					$('.break-md-control').attr('aria-hidden','false');
					$('.break-lg-control').attr('aria-hidden','true');
					$('.break-md-control').css('display','block');
					$('.break-lg-control').css('display','none');
				}
			});
			
		}
	}
})