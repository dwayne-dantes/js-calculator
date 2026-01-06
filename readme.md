# JavaScript Calculator

A frontend calculator built with vanilla JavaScript, focusing on clean state management and testable calculation logic.

## Features
- Button-only input (no keyboard input)
- Result displayed in a read-only input field
- Basic arithmetic operations: `+`, `-`, `*`, `/`
- Step-by-step evaluation (e.g. `3 + 4 + 3` is evaluated as `7 + 3`)
- Decimal number support
- Sign toggle (`+ / -`)
- Clear (`C`) functionality
- Backspace support (operators are protected from deletion)

## Tech Stack
- JavaScript (ES6+)
- HTML
- CSS

## Project Structure
- `dom` – Handles UI interactions and DOM updates
- `calculator` – Coordinates user input and calculator state
- `engine` – Core calculation logic
- `engine.test` – Integration tests for calculation behavior

## How It Works
- User input is handled exclusively through button interactions via the DOM layer
- Calculator state is updated step by step
- The engine evaluates expressions incrementally instead of parsing full expressions
- Integration tests ensure correct behavior across user interactions

## Testing
- Integration tests validate calculation flow and edge cases
- Tests cover operators, decimals, sign changes, and clearing behavior

## Notes
This project was built as a first JavaScript project to learn core JS concepts such as DOM manipulation, state handling, and testing, without relying on external libraries or frameworks.