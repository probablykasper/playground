"use strict"

var cdText // countdownText
var minsLeft, secsLeft
var textInput = 0
var ready = false;
var subtractMinute = 0;
var i = -1;
var minLength = 60;
var interval;

function changeText() {
	textInput = Number(document.getElementById("textInput").value);
	if ( isNaN(textInput) ) {
		alert("Please only type in numbers")
		ready = false;
	} else {
		document.getElementById("cdText").innerHTML = textInput + ":00";
		ready = true;
		minsLeft = textInput;
		secsLeft = minsLeft * minLength;
	}
}

function countdown() {
	secsLeft--;
	var secsDisplay = secsLeft % minLength;
	i++;
	if (i % minLength == 0) {
		minsLeft--;
	}

	if (secsDisplay < 10) {
		secsDisplay = "0" + secsDisplay;
	}

	cdText = minsLeft + ":" + secsDisplay;
	document.getElementById("cdText").innerHTML = cdText;

	if (secsLeft == 0) {
		clearInterval(interval);
		document.getElementById("form").style.visibility = "visible";
		i = -1;
		subtractMinute = 0;
		ready = false;
		minsLeft = 0;
		secsLeft = 0;
		ready = true;
	}
}

function startCountdownCheck() {
	if (textInput == 0) {
		alert("Type something at least -.-")
	} else if (ready == false) {
		alert("Numbers, and only numbers. Kthxbai <3")
	} else {
		document.getElementById("form").style.visibility = "collapse";
		interval = setInterval("countdown()", 1000);
	}
}
