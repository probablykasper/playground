"use strict"

var images = ["resources/1.png", "resources/2.png", "resources/3.png"];
var img = document.getElementById("slideshow");
var imageIndex = 0;
var slideshowOn = false;
function incrIndex() {
	imageIndex++;
	if (imageIndex >= images.length) {
		imageIndex = 0;
	}
	img.src = images[imageIndex];
}
img.onclick = function() {
	slideshowOn = !slideshowOn;
	if (slideshowOn == true) {
		var ssInterval = setInterval(incrIndex, 1000);
	}
	if (slideshowOn == false) {
		clearInterval(ssInterval);
	}
};
