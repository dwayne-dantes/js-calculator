import { evaluate } from "./src/parser/engine.js";

const buttons = document.querySelectorAll("button");

let state = defineState();

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let symbol = button.dataset.value;
    state = handleButton(symbol, state.currentDisplay, state.oldExpression, state.expression, state.expressionDisplay, state.error);
    document.getElementById("top-expression").textContent = state.expressionDisplay;
    document.getElementById("bottom-expression").textContent = state.currentDisplay;
  });
});


function handleButton(symbol, currentDisplay, oldExpression, expression, expressionDisplay, error) {
  if (symbol === "=" && currentDisplay !== "" && error === "") {
    try {
      oldExpression = expression
      expressionDisplay = currentDisplay;
      const result = evaluate(oldExpression);
      oldExpression = result;
      currentDisplay = formatResult(result);
    }
    catch (err) {
      console.log(err.message);
      error = err.message;
      currentDisplay = "Error";
      expression = "";
      oldExpression = "";
      expressionDisplay = "";
    }
  }
  if (symbol === "c") {
    currentDisplay = ""
    expression = "";
    oldExpression = "";
    expressionDisplay= "";
    error = "";
  }
  else if (symbol === "b" && error === "") {
    currentDisplay = currentDisplay.slice(0, currentDisplay.length-1);

    if (expression !== "" && oldExpression === "") {
      expression = expression.slice(0, expression.length-1);
    }
    if (oldExpression !== "") {
      oldExpression = oldExpression.slice(0, oldExpression.length-1);
      expression = oldExpression;
    }
  }
  else if (!["=", "c", "b"].includes(symbol) && error === "") {
    currentDisplay += symbol;
    expression += symbol;
  }

  return {
    oldExpression: oldExpression,
    expression: expression,
    currentDisplay: currentDisplay,
    expressionDisplay: expressionDisplay,
    error: error
  }
}


function defineState() {
  return {
    oldExpression: "",
    expression: "",
    currentDisplay: "",
    expressionDisplay: "",
    error: ""
  }
}


function formatResult(expression, maxDecimals = 6) {
    let str = Number(expression).toFixed(maxDecimals);   
    str = str.replace(/\.?0+$/, '');      
    return str;
}