var viewInfo = document.getElementById('info');

window.onload = function () {
    console.log('Moro mään')
}

function sayHelloTo(name) {

    console.log("sayHello-funktio suoritettu");
    //alert("Hei " + name + "!");
    document.getElementById('hello-div').innerHTML = 'Hei ' + name;

}

function hideText() {
    helloElement.innerHTML = ' ';
}

//let kartta = "file:///C:/Users/OMISTAJA/Documents/Visual%20Studio%20files/webteknologia/Webteknologiat/Liisan%20Opetus/map.html"
//let carousel = "file:///C:/Users/OMISTAJA/Documents/Visual%20Studio%20files/webteknologia/Webteknologiat/Liisan%20Opetus/carousel.html"
//function kaikkiTehtävät() {
//   (document.getElementById("navbarDropdownMenuLink").src) = kartta;}

document.body.style.backgroundImage = "url('images/maalaus.jpg')";
document.body.style.backgroundSize = "cover"