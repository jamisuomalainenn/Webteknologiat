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

function calculate() {
  x = null;
  //y = document.getElementById("ans");
  z = document.getElementById("ans").value;
  if (z == 1){
    x = parseInt(document.getElementById("first-nr").value) + parseInt(document.getElementById("second-nr").value);
    document.getElementById("answer").value = x;
  }
  else if (z == 2){
    x = document.getElementById("first-nr").value - document.getElementById("second-nr").value;
    document.getElementById("answer").value = x;
  }
  else if (z == 3){
    x = document.getElementById("first-nr").value * document.getElementById("second-nr").value;
    document.getElementById("answer").value = x;
  }
  else {
    x = document.getElementById("first-nr").value / document.getElementById("second-nr").value;
    document.getElementById("answer").value = x;
  }
}

//let newAnswer = calculate(type)



document.body.style.backgroundImage = "url('images/maalaus.jpg')";