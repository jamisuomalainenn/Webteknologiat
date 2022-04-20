$("#grid").click(function () {
    $("#container").removeClass("list-gallery").addClass("grid-gallery")

});

$("#list").click(function () {
    $("#container").removeClass("grid-gallery").addClass("list-gallery")
});

document.body.style.backgroundImage = "url('images/maalaus.jpg')";
document.body.style.backgroundSize = "cover"
