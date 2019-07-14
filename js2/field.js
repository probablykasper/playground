"use strict"

var nameField = document.getElementsByName("name")[0];

nameField.onfocus = function() {
	if (nameField.value == "Enter name here") {
		nameField.value = "";
	};
}

nameField.onblur = function() {
	if (nameField.value == "") {
		nameField.value = "Enter name here";
	}
};
