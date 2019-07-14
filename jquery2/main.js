jQuery("#ID").addClass("myclass");
$(".class").removeClass("myclass");
$("p").toggleClass("myclass");

$("#ID.p").hide(4000);
$("p").fadeOut(4000);

$("#pageID").click(function() {
	$("#pageID").text("You clicked me!");
});

$("h2").click(function() {
	$(this).text("You clicked me!");
})

$("p").click(function() {
	$(this).fadeOut(2000);
});

$(document).ready(function () {
	$("#pageID").text("The DOM is fully loaded");
})
