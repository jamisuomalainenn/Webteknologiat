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
    //window.setInterval('$("#next").click()', 2000);
});

$(function(){
var timer = null, interval = 2000, value = 0;
$('#start').click(function (){
    if (timer !== null) return;
    timer = setInterval(function() {
        $('#start').val('$("#next").click()');
    }, interval);
    });


$("#stop").click(function(){
    clearInterval(timer);
    timer = null;
});
});

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


document.body.style.backgroundImage = "url('images/maalaus.jpg')";
document.body.style.backgroundSize = "cover"
