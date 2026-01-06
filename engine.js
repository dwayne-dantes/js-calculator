import { isDigit, inputDigit, equal, updateText, backSpace, clear } from "./caluculator.js"


export function decideInput(state, currentInput, storedValue, currentOperator, currentText, value) {
  const operators = ["+", "-", "*", "/"]
  currentInput = String(currentInput) 
  storedValue = String(storedValue)

    if (isDigit(value) || value === "." || value === "±") {
      if (value === ".") {
        if (!currentInput.includes(".") && currentInput !== "")
        {
        currentInput = inputDigit(currentInput, value)
        currentText = updateText(currentText, value)
        }
      } 
      else if (value === "±") {
        if (storedValue === "") {
          if (currentInput.includes("-")) {
          
          currentInput = "+" + currentInput.slice(1)
          currentText = "+" + currentText.slice(1)
            
          }
          else if (currentInput.includes("+")){
          currentInput = "-" + currentInput.slice(1)
          currentText = "-" + currentText.slice(1)
          }
          else {
          currentInput = "-" + currentInput
          currentText = "-" + currentText
          }
        }
        else if (storedValue !== "" && currentInput !== ""){
          const lengthStoredValue = storedValue.length
          if (currentOperator === "-") {
            currentOperator = "+"
            currentText = currentText.slice(0, lengthStoredValue) + currentText.slice(lengthStoredValue).replace("-", "+")
          //divide currentText to storedValue part + operator and currentInput part
          }
          else if (currentOperator === "+"){
            currentOperator = "-"
            currentText = currentText.slice(0, lengthStoredValue) + currentText.slice(lengthStoredValue).replace("+", "-")
          }
        }
        else if (storedValue !== "" && currentInput === "") {
          storedValue = storedValue
          if (storedValue[0] === "-") {
          
            storedValue = "+" + storedValue.slice(1)
            currentText = "+" + currentText.slice(1)
            
          }
          else if (storedValue[0] === "+"){
            storedValue = "-" + storedValue.slice(1)
            currentText = "-" + currentText.slice(1)
          }
          else {
            storedValue = "-" + storedValue
            currentText = "-" + currentText
          }
        }
        }
      else if (currentOperator === "" && storedValue !== "" && currentInput === "") {
        storedValue = inputDigit(storedValue, value)
        currentText = updateText(currentText, value)
      }
      else {
        currentInput = inputDigit(currentInput, value)
        currentText = updateText(currentText, value)
      }
    }

    else if (currentOperator === "" && operators.includes(value) && currentText !== "") {
      // currentOperator is empty but not currentText ex: currentText = "1"
      currentOperator = value;
      currentText = updateText(currentText, value)
      if (storedValue === "") {
        storedValue = currentInput
        currentInput = ""
      }
    }
    
    else if (currentOperator !== "" && operators.includes(value) && currentText !== "" && currentInput !== "") {
      // currentInput, currentOperator, storedValue all three isnt empty ex: currentText = "3+5" 
      storedValue = equal(storedValue, currentInput, currentOperator);
      currentText = updateText(currentText, value)
      currentOperator = value;
      currentInput = "";
      
    }

    else {
      if (storedValue !== ""  && value === "="){

        if (currentInput !== "" && currentOperator !== "") {
          storedValue = equal(storedValue, currentInput, currentOperator);
          let result = storedValue.toFixed(5)
          currentText = updateText(currentText, Number(result), true)
          currentOperator = "";
          currentInput = ""
        }
        else {
          currentText = updateText(currentText, "")
        }
      }

      else if (value === "c"){
        return clear(state, currentInput, storedValue, currentOperator, currentText)
      }

      else if (value === "b") {
        if (isDigit(currentText.at(-1))) {
        return backSpace(state, currentText, storedValue, currentInput)
        }
      }
      else {
      }
  }
  return {
    ...state,
    currentInput: currentInput,
    currentOperator: currentOperator,
    storedValue: storedValue,
    currentText: currentText,
    }
}