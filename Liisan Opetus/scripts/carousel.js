let pics_array = [
    { "name": "Maisema", "src": "images/maisema.jpg" },
    { "name": "Avaruus", "src": "images/avaruus.jpg" },
    { "name": "Tyyppi", "src": "images/tyyppi.jpg" },
]
let toiminnontunnisto;
let x = 1;
let index;

$(function () {
    index = 1;

    $('#text-content').text(pics_array[index].name);
    $('#images').attr("src", pics_array[index].src);
});

$('#prev').click(function () {
    index = index - 1;
    if (index < 0) {
        index = 2;
    }
    $('#text-content').text(pics_array[index].name);
    $('#images').attr("src", pics_array[index].src);
})

$('#mid').click(function () {
    index = 1;
    if (x == 1) {
        $('#text-content').text(pics_array[index].name);
        $('#images').attr("src", pics_array[index].src);
        toiminnontunnisto = window.setInterval('$("#next").click()', 2000);
        x = 0;

    }

    else {
        window.clearInterval(toiminnontunnisto);
        x = 1;

    }

});



$('#next').click(function () {
    index = index + 1;
    if (index > 2) {
        index = 0;
    }
    $('#text-content').text(pics_array[index].name);
    $('#images').attr("src", pics_array[index].src);
})




document.body.style.backgroundImage = "url('images/maalaus.jpg')";
document.body.style.backgroundSize = "cover"
