import { eveluate } from "./engine.js";

const buttons = document.querySelectorAll("button");

let currentDisplay = "";
let expression ="";


buttons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.dataset.value;
    handleButton(value, display)    
  });
});


function handleButton(symbol, display) {
  if (symbol === "=") {
    try {
      expression = currentDisplay;
      const result = eveluate(expression);
      display.value = result;
      expression = result;
      currentDisplay= result;
    }
    catch (err) {
      display.value = err.message;
      expression = "";
    }
  }
  if (symbol === "c") {
    currentDisplay = ""
    expression = "";
    display.value = ""
    return;
  }
  else if (!["=", "c", "b"].includes(symbol)) {
    currentDisplay += symbol
    display.value = currentDisplay 
    display.scrollLeft = display.scrollWidth;
  }
}