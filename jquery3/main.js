$("document").ready(function() {

	$("img").delay(500).fadeOut(300, function() {
		$(this).attr("src", "resources/1.png").fadeIn(500);
	});

});
