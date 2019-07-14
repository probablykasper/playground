"use strict";

var myRequest;

if (window.XMLHttpRequest) {
	myRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) {
	myRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

myRequest.onreadystatechange = function() {
	console.log("We were called!");
	console.log(myRequest.readyState);
	if (myRequest.readyState == 4) {
		var p = document.createElement("p");
		var t = document.createTextNode(myRequest.responseText);
		p.appendChild(t);
		document.getElementById("stuff").appendChild(p);
	}
};

myRequest.open("GET", "resources/simple.txt", true);
myRequest.send(null);
