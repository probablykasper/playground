"use strict"

//Checks (bool) if getElementsByClassName is supported
if (document.getElementsByClassName) {}

var myRE = /hello/;
var myString = "Does this sentence have the word hello in it?";
// Checks if the word "hello" is in myString
if (myRE.test(myString)) {
	console.log("\"" +myRE+ "\": Yes");
} else {
	console.log("\"" +myRE+ "\": No");
}
