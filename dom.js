import { decideInput } from "./engine.js";

const buttons = document.querySelectorAll("button");
let value;

let state = createInitialState();

buttons.forEach(button => {
  button.addEventListener("click", () => {
    value = button.dataset.value;
    state = decideInput(state, state.currentInput, state.storedValue, state.currentOperator, state.currentText, value);
    display.value = state.currentText;
    display.scrollLeft = display.scrollWidth;
  });
});


function createInitialState() {
  return {
    currentInput: "",
    currentOperator: "",
    storedValue: "",
    currentText: ""
  };
}

