let pics_array = [
    { "name": "Maisema", "src": "images/maisema.jpg" },
    { "name": "Avaruus", "src": "images/avaruus.jpg" },
    { "name": "Tyyppi", "src": "images/tyyppi.jpg" },
]

//let pics_json_data = '[{"name":"Maisema", "src":"images/maisema.jpg"}, {"name": "Avaruus", "src": "images/avaruus.jpg"}, {"name":"Tyyppi", "src":"images/tyyppi.jpg"}]';
//let pics_array = JSON.parse(pics_json_data);

let index;

$(function () {
    index = 1;

    $('#text-content').text(pics_array[index].name);
    $('#images').attr("src", pics_array[index].src);
});

$('#prev').click(function () {
    index = index - 1;
    $('#text-content').text(pics_array[index].name);
    $('#images').attr("src", pics_array[index].src);
})

$('#mid').click(function () {
    index = 1;
    $('#text-content').text(pics_array[index].name);
    $('#images').attr("src", pics_array[index].src);
})
$('#next').click(function () {
    index = index + 1;
    if (index > 2) {
        index = 0;
    }
    $('#text-content').text(pics_array[index].name);
    $('#images').attr("src", pics_array[index].src);
})

$('#mid').click(function () {
    var timer = setInterval('$("#next").click()', 2000);
    window.clearInterval('$("#next").click()', 2000);
})

