let currentInput = '';
let operator = null;
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateResult(currentInput);
}

function setOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (currentInput === '' || previousInput === '' || operator === null) return;
    let result;
    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Cannot divide by zero");
                clearResult();
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }
    updateResult(result);
    currentInput = result.toString();
    operator = null;
    previousInput = '';
}

function clearResult() {
    currentInput = '';
    operator = null;
    previousInput = '';
    updateResult('');
}

function updateResult(value) {
    document.getElementById('result').value = value;
}
