let i = 0;
let item = 0;
document.getElementById("gif").style.display = "none";
function fetchApi() {
    document.getElementById("gif").style.display = "block";
    fetch('https://api.icndb.com/jokes/random'), {
        url: urlNorrisJokes,
        type: "GET",
        dataType: "json",
        success: function (response) { }
            .then(response => response.json())
            .then(data => {


                i++;
                item++;
                let data =
                    '<div class="accordion-item">'
                    + '<h2 class="accordion-header" id="flush-heading' + i + '">'
                    + '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse' + i + '" aria-expanded="false" aria-controls="flush-collapse' + i + '">'
                    + 'Juttu ' + item;
                + '</button>'
                    + '</h2>'
                    + '<div id="flush-collapse' + i + '" class="accordion-collapse collapse" aria-labelledby="flush-heading' + i + '" data-bs-parent="#accordionFlushExample">'
                    + response.value.joke
                    + '</div>';
                document.getElementById("accordionFlushExample").innerHTML += data;
                document.getElementById("gif").style.display = "none";
            }

            )
    }



    var clicks = 0;

    function counter() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };


    document.body.style.backgroundImage = "url('images/maalaus.jpg')";
    document.body.style.backgroundSize = "cover"