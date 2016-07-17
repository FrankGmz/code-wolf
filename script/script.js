function updateContent() {

	$("iframe").contents().find("html").html('<html><head><style type="text/css">' + $('#cssArea').val() + '</style></head><body>' + $('#htmlArea').val() + '</body></html>');

	document.getElementById('outputArea').contentWindow.eval($('#javascriptArea').val());


};

$(document).ready(function() {


	$('.btn').hover(function() {

		$(this).addClass('hoverBtn');

	}, function() {

		$(this).removeClass('hoverBtn');

	})


	$('button').click(function() {


		$(this).toggleClass('active');


		var areaID = $(this).attr('id') + 'Area';

		$('#' + areaID).toggleClass('hidden');

		var numOfHidden =4 - $('#hidden').length

		$('.area').width($(window).width() / numOfHidden - 5);
	})


	$('.area').height($(window).height() - $('#topbar').height() - 5);


	$('.area').width($(window).width() / 2 - 5);

	updateContent();

	$("textarea").on('change keyup paste', function() {

    	updateContent();

});


});