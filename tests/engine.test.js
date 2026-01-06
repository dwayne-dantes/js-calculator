import { decideInput } from "../engine.js"
import test from "node:test";
import assert from "node:assert/strict";

function createInitialState() {
  return {
    currentInput: "",
    currentOperator: "",
    storedValue: "",
    currentText: ""
  };
}
let state = createInitialState()


test("operations at the beginning", () => {
   state = createInitialState()
   const operators = ["+", "-", "*", "/"] 
   for (const value of operators) {
      state = decideInput(state, state.currentInput, state.storedValue, state.currentOperator, state.currentText, value)
      assert.strictEqual(state.currentText, "")
      state = createInitialState()
   }
})


test("operation after operation 4 ++, 4...", () => {
   state = createInitialState()
   const operators = ["+", "-", "*", "/"] 
   for (const value of operators) {
      state = decideInput(state, state.currentInput, state.storedValue, state.currentOperator, state.currentText, "4")
      state = decideInput(state, state.currentInput, state.storedValue, state.currentOperator, state.currentText, value)
      state = decideInput(state, state.currentInput, state.storedValue, state.currentOperator, state.currentText, value)
      assert.strictEqual(state.currentText, `4${value}`)
      state = createInitialState()
   }
})


test("1+5=", () => {
   state = createInitialState()
   const operations = [..."1+5="]
   for (const value of operations) {
      state = decideInput(state, state.currentInput, state.storedValue, state.currentOperator, state.currentText, value)
   }
   
   assert.strictEqual(state.currentText, "6")
   assert.strictEqual(String(state.storedValue), "6")
})


test("1+5==", () => {
   state = createInitialState()
   const operations = [..."1+5=="]
   for (const value of operations) {
      state = decideInput(state, state.currentInput, state.storedValue, state.currentOperator, state.currentText, value)
   }
  
   assert.strictEqual(state.currentText, "6")
   assert.strictEqual(String(state.storedValue), "6")
})


test("1+5+9=", () => {
   state = createInitialState()
   const operations = [..."1+5+9="]
   for (const value of operations) {
      state = decideInput(state, state.currentInput, state.storedValue, state.currentOperator, state.currentText, value)
   }
   
   assert.strictEqual(state.currentText, "15")
   assert.strictEqual(String(state.storedValue), "15")
})


test("1+5+9=+5=", () => {
   state = createInitialState()
   const operations = [..."1+5+9=+5="]
   for (const value of operations) {
      state = decideInput(state, state.currentInput, state.storedValue, state.currentOperator, state.currentText, value)
   }
   
   assert.strictEqual(state.currentText, "20")
   assert.strictEqual(String(state.storedValue), "20")
})


test("0.5-0.3*3=", () => {
   state = createInitialState()
   const operations = [..."0.5-0.3*3="]
   for (const value of operations) {
      state = decideInput(state, state.currentInput, state.storedValue, state.currentOperator, state.currentText, value)
   }
   
   assert.strictEqual(state.currentText, "0.6000000000000001")
   assert.strictEqual(String(state.storedValue), "0.6000000000000001")
})


test("300b/6b3=", () => {
   state = createInitialState()
   const operations = [..."300b/6b3="]
   for (const value of operations) {
      state = decideInput(state, state.currentInput, state.storedValue, state.currentOperator, state.currentText, value)
   }
   
   assert.strictEqual(state.currentText, "10")
   assert.strictEqual(String(state.storedValue), "10")
})


test("0.5b7-0.3b1=", () => {
   state = createInitialState()
   const operations = [..."0.5b7-0.3b1="]
   for (const value of operations) {
      state = decideInput(state, state.currentInput, state.storedValue, state.currentOperator, state.currentText, value)
   }
   
   assert.strictEqual(state.currentText, "0.6")
   assert.strictEqual(String(state.storedValue), "0.6")
})



test("30/bb6=", () => {
   state = createInitialState()
   const operations = [..."30/bb6="]
   for (const value of operations) {
      state = decideInput(state, state.currentInput, state.storedValue, state.currentOperator, state.currentText, value)
   }
   
   assert.strictEqual(state.currentText, "5")
   assert.strictEqual(String(state.storedValue), "5")
})


test("±5-10=", () => {
   state = createInitialState()
   const operations = [..."±5-10="]
   for (const value of operations) {
      state = decideInput(state, state.currentInput, state.storedValue, state.currentOperator, state.currentText, value)
   }
   
   assert.strictEqual(state.currentText, "-15")
   assert.strictEqual(String(state.storedValue), "-15")
})


test("±5-10=0-4=", () => {
   state = createInitialState()
   const operations = [..."±5-10=0-4="]
   for (const value of operations) {
      state = decideInput(state, state.currentInput, state.storedValue, state.currentOperator, state.currentText, value)
   }
   
   assert.strictEqual(state.currentText, "-154")
   assert.strictEqual(String(state.storedValue), "-154")
})