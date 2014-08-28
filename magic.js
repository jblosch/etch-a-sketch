$(document).ready(function(){
	
	GRID_WIDTH = $('#container').width();
	row = 1;

	gridMaker(16);

	$('#submit').on('click', function(){
		$('#container').remove();
		$('#frame').append('<div id = "container"></div>');
		count = $('#value').val();
		gridMaker(count);
	});

	start();

	$('#default').on('click', function(){
		start();
	});

	$('#color').on('click', function(){
		colorChange();
	});

	$('#trail').on('click', function(){
		trail();
	});

	$('#renew').on('click', function(){
		renew();
	});

	function start() {
		$('.cell').off();
		$('.cell').on('mouseenter', function(){
			$(this).css('background-color', '#666666');
		});
	}

	function renew() {
		count = $('div#1 > .cell').length;
		$('#container').remove();
		$('#frame').append('<div id = "container"></div>');
		gridMaker(count);
		start();
	} 

	function colorChange() {
		$('.cell').off();
		$('.cell').on('mouseenter', function(){
			r_val = Math.floor((Math.random() * 256));
			g_val = Math.floor((Math.random() * 256));
			b_val = Math.floor((Math.random() * 256));
			$(this).css('background-color', 'rgb(' + r_val + ',' + g_val + ',' + b_val + ')');
		});
	}

	function trail() {
		$('.cell').off();
		$('.cell').hover(function(){
			$(this).css('background-color', '#666666');
			}, function(){
			$(this).animate({'background-color': '#dddddd'}, 1000);
		});
	}

	function gridMaker(num) {

		for(i = 1; i <= num; i++) {
			$('#container').prepend('<div class = "col" id = ' + i + '></div>');
			}

		$('.col').width(GRID_WIDTH / num);

		for(j = 1; j <= Math.pow(num, 2); j++) {
			$('div#' + row).append('<div class = "cell"></div>');
				if(j % num == 0) {
					row++
				}
			}
		$('.cell').width((GRID_WIDTH / num) - 2);
		$('.cell').height((GRID_WIDTH / num) - 2);

		row = 1;
		start();
	}

});
