var counter = 0;
var index = 0;
$("#gif").hide();

$("#btn").click(function () {
    let urlNorrisJokes = "https://api.icndb.com/jokes/random";
    index++;
    $("#gif").show();

    setTimeout(() => {
        $.ajax({
            url: urlNorrisJokes,
            type: "GET",
            dataType: "json",
            success: function (response) {
                // show data in DIV

                // Bootstrap
                let data = '<div class="accordion-item">'
                    + '<h2 class="accordion-header" id="flush-heading' + index + '">'
                    + '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse' + index + '" aria-expanded="false" aria-controls="flush-collapse' + index + '">'
                    + 'Vitsi' + index
                    + '</button>'
                    + '</h2>'
                    + '<div id="flush-collapse' + index + '" class="accordion-collapse collapse" aria-labelledby="flush-heading' + index + '" data-bs-parent="#accordionFlushExample">'
                    + response.value.joke
                    + '</div>';
                document.getElementById("accordionFlushExample").innerHTML += data;
                $("#gif").hide();
                counter++;
                $("#clicks").text(counter);
            },
            error: function (jqxhr, textStatus, error) {
                console.log("Error: " + textStatus);
                //$("#flush-collapseOne").append("<br>" + "<i>" + "Ei löydy" + "</i>");
            },
        });
    }, "2000");
});



document.body.style.backgroundImage = "url('images/maalaus.jpg')";
document.body.style.backgroundSize = "cover"