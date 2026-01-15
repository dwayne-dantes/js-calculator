# JavaScript Calculator

A frontend calculator built with vanilla JavaScript.  
Uses a custom expression parser for accurate evaluation, parenthesis support, and clean state management.

---

## Features

- Two-line display (full expression + current result)
- Button-only input (no keyboard)
- Supports:
  - +, -, *, /
  - Parentheses: (...)
  - Implicit multiplication: `2(3)`, `(4)(5)`, `(2+3)4`
  - Decimal numbers
- Backspace support with safe deletion rules
- Clear (C) functionality
- Error handling for:
  - Missing or extra parentheses
  - Operator at end of expression
  - Two operators in a row
  - Multiple decimal points
  - Division by zero
- Result continuation (pressing "=" again keeps evaluating)

---

## Tech Stack

- JavaScript (ES6+)
- HTML
- CSS
- Custom expression parser (included as Git submodule)

## How It Works

1. User interacts only through on-screen buttons.
2. Calculator constructs the input expression as a string.
3. Expression is processed by the custom parser:
   - Tokenizes input
   - Validates syntax rules
   - Evaluates using safe arithmetic
4. Result is formatted to avoid unnecessary decimal digits.
5. The display is updated with:
   - Top line: previous full expression
   - Bottom line: current input or result


## Running the Project

This is a pure frontend JavaScript project with no backend or external dependencies.

### Option 1: Open directly
You can open `index.html` directly in a browser.

> Note: Some browsers may restrict certain features when opening files directly.

### Option 2: Using a simple local server (recommended)

#### Python
```bash
python3 -m http.server
```
## Notes
This project was built as a first JavaScript project to learn core JS concepts such as DOM manipulation, state handling, and testing, without relying on external libraries or frameworks.
