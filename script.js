document.getElementById('plusButton').onclick = function() {
  let input1 = parseFloat(document.getElementById('firstNumber').value);
  let input2 = parseFloat(document.getElementById('secondNumber').value);
  let output = input1 + input2;
  // document.getElementById('result').value = output;
  alert("The result is: " + output);
};

document.getElementById('minusButton').onclick = function() {
  let input1 = parseFloat(document.getElementById('firstNumber').value);
  let input2 = parseFloat(document.getElementById('secondNumber').value);
  let output = input1 - input2;
  alert("The result is: " + output);
};

document.getElementById('mulButton').onclick = function() {
  let input1 = parseFloat(document.getElementById('firstNumber').value);
  let input2 = parseFloat(document.getElementById('secondNumber').value);
  let output = input1 * input2;
  alert("The result is: " + output);
};

document.getElementById('divButton').onclick = function() {
  let input1 = parseFloat(document.getElementById('firstNumber').value);
  let input2 = parseFloat(document.getElementById('secondNumber').value);
  let output = input1 / input2;
  alert("The result is: " + output);
};

document.getElementById('percentButton').onclick = function() {
  let input1 = parseFloat(document.getElementById('firstNumber').value);
  let input2 = parseFloat(document.getElementById('secondNumber').value);
  let output = (input1 * input2) / 100;
  alert("The result is: " + output);
};