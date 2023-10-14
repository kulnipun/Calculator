let display = document.getElementById("display");
let equation = "";

function append_To_Display(value) {
  equation += value;
  display.value = equation;
}

function clearDisplay() {
  equation = "";
  display.value = "";
}

function calculateRes() {
  try {
    let result = eval(equation);
    display.value = result;
    equation = result.toString();
  } catch (error) {
    display.value = "Error";
    equation = "";
  }
}
