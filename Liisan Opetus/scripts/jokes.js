let i = 0;
document.getElementById("gif").style.display = "none";
function moi() {
    document.getElementById("gif").style.display = "block";
    fetch('http://numbersapi.com/42')
        .then(response => response.text())
        .then(data => {
            i++;
            let itemdata =
                '<div class="accordion-item">'
                + '<h2 class="accordion-header" id="flush-heading' + i + '">'
                + '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse' + i + '" aria-expanded="false" aria-controls="flush-collapse' + i + '">'
                + 'Accordion Item #1'
                + '</button>'
                + '</h2>'
                + '<div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-heading' + i + '" data-bs-parent="#accordionFlushExample">'
                + '<div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first items accordion body.</div>'
                + '</div>'
                + '</div>';
            document.getElementById("accordionFlushExample").innerHTML += itemdata;
            document.getElementById("gif").style.display = "none";
        }

        )
}





// Bootstrap


//document.getElementById("gif").style.display = block;

var clicks = 0;

function counter() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};


document.body.style.backgroundImage = "url('images/maalaus.jpg')";
document.body.style.backgroundSize = "cover"