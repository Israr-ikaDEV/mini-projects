// Day 1: Calculator - core functionality
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';

function updateDisplay(value) {
  display.value = value;
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const v = button.textContent.trim();

    if (button.id === 'clear') {
      currentInput = '';
      updateDisplay('');
      return;
    }

    if (button.id === 'equals') {
      try {
        // Eval for simple learning demo. In production use a parser or safe evaluator.
        const result = eval(currentInput);
        currentInput = String(result);
        updateDisplay(currentInput);
      } catch (err) {
        updateDisplay('Error');
        currentInput = '';
      }
      return;
    }

    // Append number or operator
    currentInput += v;
    updateDisplay(currentInput);
  });
});
