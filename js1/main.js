// Change text red
var styleChanged = false;

function changeStyle() {
    var text;
    if (styleChanged === false) {
        text = document.getElementById("para").style.color = "red";
        styleChanged = true;
    } else {
        text = document.getElementById("para").style.color = "black";
        styleChanged = false;
    }
}


// Add/remove text via buttons
var textOn = false;

function newEl() {
    if (textOn === false) {

        textOn = true;
        section1Div = document.getElementById("section1");

        // Create h2
        var elementH = document.createElement("h2");
        section1Div.appendChild(elementH);
        var textH = document.createTextNode("A fancy-ass header");
        elementH.appendChild(textH);

        // Create p
        var elementP = document.createElement("p");
        section1Div.appendChild(elementP);
        var textP = document.createTextNode("Texxxxt");
        elementP.appendChild(textP);
    }
}
function removeEl() {
    if (textOn === true) {

        textOn = false;

        // Delete h2
        section1Div.removeChild(section1Div.getElementsByTagName("h2")[0]);

        // Delete p
        section1Div.removeChild(section1Div.getElementsByTagName("p")[1]);
    }
}

function toggleEl() {
    if (textOn === true) {
        removeEl();
    } else {
        newEl();
    }
}



// Make text red via sibling
function changeText() {
    var confirmation = confirm("These changes are permanent");

    if (confirmation === true) {
    var para2 = document.getElementById("para2");
    var sibling = para2.nextElementSibling;
    sibling.style.color = "red";

    document.getElementById("test").style.visibility = "hidden";
    }
}
