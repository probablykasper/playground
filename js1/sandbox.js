function validateTextbox() {
    var box = document.getElementById("username");
    var box2 = document.getElementById("address");

    if (box.value.length < 2) {
        alert("Username needs to be at least 10 characters");
        box.focus();
        box.style.border = "solid 1px red";
        return false;
    }
}
