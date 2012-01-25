$('article#cover').hover(
	function() {
		$('article#cover h2 a').addClass('coverHover');
	},
	function() {
		$('article#cover h2 a').removeClass('coverHover');
	}
)

$('article#cover, article#cover a').click(function() {
	$('article#cover').fadeOut('slow');
	$('article#index').fadeIn('slow');
});

$('div#back a').click(function() {
	$('article#contents').fadeOut('slow');
	$('article#index').fadeIn('slow');
});

$('article#index li a').click(function() {
	contentSwap($(this).attr('class'));
});

function contentSwap (content) {
	$('article#index').fadeOut('slow');
	$('article#contents').fadeIn('slow');
	$('article#contents h2:first').empty();
	$('div#' + content + ' h2').clone().appendTo('article#contents h2:first');
	$('article#contents ul:first').empty();
	$('div#' + content + ' ul').clone().appendTo('article#contents ul:first');
	document.getElementById("contents").style.backgroundImage = 'url(images/grab-' + content + '.gif)';
	// document.getElementById("back").style.marginTop = '30px';
}

$('article#contents ul:first li').hover(
	function () {
		$(this).css('background-image', '../images/bullet-yellow.png');
	},
	function () {
		$(this).css('background-image', '../images/bullet-white.png');
	}
)

$('article#index div#legend dl dt span, article#index div#legend dl dd').hover(
	function() {
		$('article#index li').fadeTo('fast', 0.11);
		$('article#index h2').fadeTo('fast', 0.11);
		$('article#index li span.' + $(this).attr('class')).parent().fadeTo('fast', 1.00);
	},
	function () {
		$('article#index li').fadeTo('fast', 1.00);
		$('article#index h2').fadeTo('fast', 1.00);
	}
)

$('article#index li span').hover(
	function() {
		$('div#legend dd.' + $(this).attr('class')).addClass('highlight');
	},
	function() {
		$('div#legend dd.' + $(this).attr('class')).removeClass('highlight');
	}
)