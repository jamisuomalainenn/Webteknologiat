let defaultValue;

$(function () {
  defaultValue = 5;
  $("#first-nr").val(defaultValue);
  $("#second-nr").val(defaultValue);
});

function setFirstNr(type) {
  let currentValue = document.getElementById("first-nr").value;

  let newValue= parseInt(currentValue);

  if (type == 'plus') {
    currentValue = newValue + 1;
  } else {
    currentValue = currentValue - 1;
  }
  document.getElementById("first-nr").value = currentValue;
}

function setSecondNr(type) {
  let currentValue = document.getElementById("second-nr").value;

  let newValue= parseInt(currentValue); 

  if (type == 'plus') {
    currentValue = newValue + 1;
  } else {
    currentValue = currentValue - 1;
  }
  document.getElementById("second-nr").value = currentValue;
}

/*
let selectedText = $("#operationSelect option:selected").text(); // +
let selectedValue = $("#operationSelect").val(); // 1
*/
document.body.style.backgroundImage = "url('images/maalaus.jpg')";