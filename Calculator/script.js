let displayValue = '';
let currentOperator = '';
let firstOperand = '';
let waitingForSecondOperand = false;

const display = document.getElementById('display');

document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
function handleButtonClick(event) {
    const buttonValue = event.target.innerText;
    
    if (buttonValue >= '0' && buttonValue <= '9' || buttonValue === '.') {
        if (waitingForSecondOperand === true) {
            displayValue = buttonValue;
            waitingForSecondOperand = false;
        } else {
            displayValue += buttonValue;
        }
    } else if (buttonValue === 'C') {
        clearCalculator();
    } else if (buttonValue === '=') {
        if (currentOperator) {
            calculate();
        }
    } else {
        if (currentOperator) {
            calculate();
        }
        currentOperator = buttonValue;
        firstOperand = displayValue;
        waitingForSecondOperand = true;
    }
    display.value = displayValue;
}
function clearCalculator() {
    displayValue = '';
    currentOperator = '';
    firstOperand = '';
    waitingForSecondOperand = false;
    display.value = '';
}
function calculate() {
    const operand1 = parseFloat(firstOperand);
    const operand2 = parseFloat(displayValue);
    let result = 0;

    switch (currentOperator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            if (operand2 === 0) {
                result = 'Error';
            } else {
                result = operand1 / operand2;
            }
            break;
    }
    displayValue = result.toString();
    currentOperator = '';
    firstOperand = '';
    waitingForSecondOperand = false;
}