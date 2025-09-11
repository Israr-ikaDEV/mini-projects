// Day 1 + Day 2: Calculator - core functionality
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
        const result = eval(currentInput);
        currentInput = String(result);
        updateDisplay(currentInput);
      } catch (err) {
        updateDisplay('Error');
        currentInput = '';
      }
      return;
    }

    currentInput += v;
    updateDisplay(currentInput);
  });
});

// ✅ Day 3: Keyboard support
document.addEventListener('keydown', (e) => {
  if (/[0-9+\-*/]/.test(e.key)) {
    currentInput += e.key;
    updateDisplay(currentInput);
  } else if (e.key === 'Enter') {
    try {
      const result = eval(currentInput);
      currentInput = String(result);
      updateDisplay(currentInput);
    } catch {
      updateDisplay('Error');
      currentInput = '';
    }
  } else if (e.key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput);
  } else if (e.key.toLowerCase() === 'c') {
    currentInput = '';
    updateDisplay('');
  }
});
