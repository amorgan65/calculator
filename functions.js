var num1 = ''
var num2 = ''
var operator = ''
var currNumber = '0'
let firstTerm = true

var numButtons = document.querySelectorAll('button[data-value]')
var operatorButtons = document.querySelectorAll('button[data-operator]')
var equalButton = document.getElementById('equals')
var clearButton = document.getElementById('clear')
var display = document.getElementById('display')

/* Assigns listener for click event to each number button [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] */
numButtons.forEach((button) => {
    button.addEventListener('click', () => numberPressed(button.getAttribute('id')))
})

function numberPressed(num) {
    if (firstTerm == false) {
        currNumber = '0'
        firstTerm = true
    }

    if (currNumber == '0') {
        currNumber = num
        refreshDisplay()
    } else {
        currNumber += num
        refreshDisplay()
    }
}

/* Assigns listener for click event to each operator button [+, -, *, /] */
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => operatorPressed(button.getAttribute('id')))
})

function operatorPressed(oper) {
    num1 = currNumber 
    currNumber = '0'
    operator = oper
    firstTerm = false
}

function clear() {
    num1 = ''
    num2 = ''
    operator = null
    currNumber = '0'
    refreshDisplay()
}

/* Updates div with class display to display the current number */
function refreshDisplay() {
    display.innerText = currNumber
}

clearButton.addEventListener('click', clear)

equalButton.addEventListener('click', solve)

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(term, n1, n2) {
    var nm1 = parseInt(n1)
    var nm2 = parseInt(n2)

    if (term == "/") {
        return divide(nm1, nm2);
    } else if (term == "*") {
        return multiply(nm1, nm2);
    } else if (term == "-") {
        return subtract(nm1, nm2);
    } else if (term == "+") {
        return add(nm1, nm2)
    }
    return null;
}

/* Function called when equal button is pressed */
function solve() {
    num2 = currNumber
    let result = operate(operator, num1, num2);
    let asString = result.toString()
    currNumber = asString
    refreshDisplay();
    firstTerm = true
    num1 = ''
    num2 = ''
    operator = null
    currNumber = '0'
}