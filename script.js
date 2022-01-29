// Simple Calculator

let outputscreen = document.getElementById("output-display");

function display(num) {
  outputscreen.value += num;
}

//function for result calculation  
function calculate() {
  try {
    outputscreen.value = eval(outputscreen.value);
  } catch (err) {
    alert("invalid")
  }
}

//Clear function
function clr() {
  outputscreen.value = "";
}

//Delete function      
function del() {
  outputscreen.value = outputscreen.value.slice(0, -1);
}