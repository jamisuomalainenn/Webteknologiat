var viewInfo = document.getElementById('info');

function showInfo() {
    document.getElementById('info').innerHTML = 'Kanootti on punainen. Kanootti kestää kolmen aikuisen ihmisen painon. Olemme vastaavien kanoottien jälleenmyyjä';
}

function hideText() {
    viewInfo.innerHTML = ' ';
}

let defaultValue;

$(function () {
    defaultValue = 1;
    $("#first-nr").val(defaultValue);
});

function setFirstNr(type) {
    let currentValue = document.getElementById("first-nr").value;

    let newValue = parseInt(currentValue);

    if (type == 'plus') {
        currentValue = newValue + 1;
    }
    else if (currentValue < 1) {
        newValue = 0;
    }
    else {
        currentValue = currentValue - 1;
    }
    document.getElementById("first-nr").value = currentValue;
}

function calculate() {
    h1 = 15;
    h2 = 30;            //jos kanoottien hinnat vaihtuvat, ne voi näppärästi päivittää tässä hintamäärittelyosiossa.
    h3 = 40;
    h4 = 60;
    x = null;
    //y = document.getElementById("ans");
    z = document.getElementById("palvelu").value;
    if (z == 1) {
        x = parseInt(document.getElementById("first-nr").value) * h1;
        document.getElementById("summa").value = x;
    }
    else if (z == 2) {
        x = document.getElementById("first-nr").value * h2;
        document.getElementById("summa").value = x;
    }
    else if (z == 3) {
        x = document.getElementById("first-nr").value * h3;
        document.getElementById("summa").value = x;
    }
    else {
        x = document.getElementById("first-nr").value * h4;
        document.getElementById("summa").value = x;
    }
}
//let defaultPalvelu = null;
/*let defaultItems = 1;

function varaa() {
    //document.getElementById("summa").innerHTML.reset();
    document.getElementById("palvelu").reset();
    document.getElementById("first-nr").reset();
}*/

document.body.style.backgroundImage = "url('saimaa.jpg')";
document.body.style.backgroundSize = "cover"