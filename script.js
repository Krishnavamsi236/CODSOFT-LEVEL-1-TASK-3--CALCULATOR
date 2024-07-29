let history = [];
let currentInput = '';

function appendCharacter(char) {
    if (currentInput === '0' && char !== '.') {
        currentInput = char;
    } else {
        currentInput += char;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        history.push(`${currentInput} = ${result}`);
        if (history.length > 3) {
            history.shift();
        }
        currentInput = result.toString();
        updateDisplay();
    } catch (e) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('currentInput').innerText = currentInput || '0';
    document.getElementById('history').innerText = history.join('\n');
}
