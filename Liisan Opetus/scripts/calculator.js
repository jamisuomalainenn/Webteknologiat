let defaultValue;

$(function () {
  defaultValue = 5;
  $("#first-nr").val(defaultValue);
  $("#second-nr").val(defaultValue);
});

function setFirstNr(type) {
  let currentValue = document.getElementById("first-nr").value;

  if (type == 'plus') {
    // alert ('+');
    currentValue = currentValue + 1;
  } else {
    // alert('-');
    currentValue = currentValue - 1;
  }
  document.getElementById("first-nr").value = currentValue;
}
document.body.style.backgroundImage = "url('images/maalaus.jpg')";