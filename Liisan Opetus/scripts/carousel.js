let pics_array = [
    { "name": "Maisema", "src": "images/maisema.jpg" },
    { "name": "Avaruus", "src": "images/avaruus.jpg" },
    { "name": "Tyyppi", "src": "images/tyyppi.jpg" },
]

//let pics_json_data = '[{"name":"Maisema", "src":"images/maisema.jpg"}, {"name": "Avaruus", "src": "images/avaruus.jpg"}, {"name":"Tyyppi", "src":"images/tyyppi.jpg"}]';
//let pics_array = JSON.parse(pics_json_data);

let index;
let start;
constIndex = 'myPics';

$(function () {
    if (localStorage.hasOwnProperty(IndexKey)) {
        index = localStorage.getItem(IndexKey);
        console.log('index is:' + index);
    }
    else {
        index = 0;
    }
    start = 0;
    $('#kuva').attr("src", story_array[index].src);
    $('#text-title').text(story_array[index].title);
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
    $('#text-content').text(pics_array[index].name);
    $('#images').attr("src", pics_array[index].src);
})

$('#mid').click(function () {
    if (mid == 1) {
        mid = window.setInterval('$("#next").click()', 2000);
        $("#mid").html('<i class="bi bi-pause-btn-fill"></i>');
    }
    else {
        window.clearInterval(mid);
        mid = 1;
        $("#start").html('<i class="bi bi-play-btn-fill"></i>');

    }
$('#next').click(function () {
    index = index + 1;
    if (index > 2) {
        index = 0;
    }
    $('#text-content').text(pics_array[index].name);
    $('#images').attr("src", pics_array[index].src);
})

//$('#mid').click(function () {
   // clearInterval(timer);
    //let toiminnonTunniste = window.setInterval('$("#next").click()', 2000);
   // var timer = setInterval('$("#next").click()', 2000);
    //window.clearInterval('$("#next").click()', 2000);
//if (toiminnonTunniste = 2,4,6,8,10,12,14,16,18,20){
  //  window.clearInterval(toiminnonTunniste);
//}
//})
/*
$('#mid').click(function () {
    var timer = setInterval('$("#next").click()', 2000);
    window.clearInterval('$("#next").click()', 2000);
})
*/

document.body.style.backgroundImage = "url('images/maalaus.jpg')";
document.body.style.backgroundSize = "cover";
