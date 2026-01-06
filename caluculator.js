export function isDigit(value) {
  return /^\d$/.test(value);
}


export function inputDigit(currentInput, value) {
  currentInput += value  
  return currentInput
}


export function equal(storedValue, currentInput, currentOperator) {

  if (currentOperator === "+") {
    storedValue = Number(storedValue)+ Number(currentInput);
  }
  else if (currentOperator === "-") {
    storedValue = Number(storedValue) - Number(currentInput);
  }
  else if (currentOperator === "*") {
    storedValue = Number(storedValue) * Number(currentInput);
  }
  else if (currentOperator === "/") {
    storedValue = Number(storedValue) / Number(currentInput);
  };
  return storedValue
};


export function updateText(currentText, text, stateBool=false) {
  if (currentText === undefined || stateBool === true) {
    currentText = ""
  }
  currentText += text

  return currentText
}


export function backSpace(state, currentText, storedValue, currentInput) {
  if (currentInput !== "") {
    currentInput = String(currentInput).slice(0, -1)
  } 
  else if (storedValue !== "") {
    storedValue = String(storedValue).slice(0, -1)
  }
  currentText = currentText.slice(0, -1)
  currentText = updateText(currentText, "")
  return {
    ...state,
    currentInput: currentInput,
    storedValue: storedValue,
    currentText: currentText
  }
};


export function clear(state, currentInput, storedValue, currentOperator, currentText) {
    storedValue = ""
    currentOperator = "";
    currentInput = "";
    currentText = updateText(currentText, "", true)
    return {
      ...state,
      currentInput: currentInput,
      currentOperator: currentOperator,
      storedValue: storedValue,
      currentText: currentText
    }
}
