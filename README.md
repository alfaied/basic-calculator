# Basic Calculator

A simple HTML-based calculator for performing basic arithmetic operations (addition, subtraction, multiplication, division, percentage) with a clean and responsive UI.

## Pros
- Clean, centered layout with responsive flexbox design
- Zero dependencies; works in all modern browsers without external libraries
- Clear operation buttons with intuitive labels for each function
- Beginner-friendly code structure ideal for learning DOM manipulation
- Minimalist styling with consistent padding and spacing

## Cons
- Results displayed via alert() dialogs which disrupt user workflow
- Result input field is present but not updated (commented out code)
- No input validation for non-numeric values or division by zero
- Percentage operation uses two inputs (a*b/100) which may confuse standard calculator expectations
- No error messages for invalid operations (e.g., division by zero)
- No clear/reset button to start new calculations

## Takeaways
- Excellent starting point for learning HTML/CSS/JavaScript fundamentals
- Simple setup: open index.html in browser and start calculating
- Easy to enhance with features like:
  - Directly updating the result field instead of alerts
  - Adding input validation and error handling (e.g., "Cannot divide by zero")
  - Standardizing percentage calculation (e.g., a% of b)
  - Adding a "Clear" button to reset all fields
  - Supporting more operations (e.g., square root, exponentiation)
- Great foundation for building more complex calculator applications

## License
This project is licensed under the MIT License – see the LICENSE file for details.