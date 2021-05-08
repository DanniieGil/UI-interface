 // * Dinamics
	$(document).ready(function(){
		$('.menu-icon').click(function(){
			$('.menu-icon,.menu,.main-box,footer,.logo,.subscribe').toggleClass('active')
		})
	})

+function ArrowMove(){
	var arrow = document.getElementById("arrow-move")
	$(arrow).click(function() {
		$('html, body').animate({
		scrollTop: $(".right").offset().top
		}, 2000);
	   });
 }()
