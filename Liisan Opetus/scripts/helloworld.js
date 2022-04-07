var helloElement = document.getElementById('hello-div');

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
