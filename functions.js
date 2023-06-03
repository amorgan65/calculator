//set buttons to have listener event?
var num1 = ''
var num2 = ''
var operator = null

var currNumber = '0'

const numButtons = document.querySelectorAll('[data-value]')
const equalButton = document.getElementById('equals')
const subButton = document.getElementById('subtract')
const addButton = document.getElementById('add')
const multButton = document.getElementById('multiply')
const divButton = document.getElementById('divide')

var clearButton = document.getElementById('clear')
var oneButton = document.getElementById('1')
var display = document.getElementById('display')

//TODO Generalize this function to use ID of whichever button is of class number? to find what number it actually is
function numOnePressed() {
    if (currNumber == 0) {
        currNumber = '1' //TODO generalize, change to string value of whatever number button being pressed
        refreshDisplay()
    } else {
        currNumber += '1' //TODO generalize, change to string value of whatever number button being pressed
        refreshDisplay()
    }
}

//TODO generalize function to all operator buttons?
function addPressed() {
    num1 = currNumber 
    currNumber = '0'
    operator = '+' //TODO operator one of either ['/', '*', '-', '+']
}

function clear() {
    //TODO CLEAR BUTTON, erases all stored values??
    num1 = ''
    num2 = ''
    operator = null
    currNumber = '0'
    refreshDisplay()
}

function refreshDisplay() {
    display.innerText = currNumber
}

clearButton.addEventListener('click', clear)

oneButton.addEventListener('click', numOnePressed)

addButton.addEventListener('click', addPressed)

equalButton.addEventListener('click', solve)

//TODO create listener events for operator buttons

//TODO create listener events for number buttons

//TODO create listener event for display? make it refresh whenever num, clear, or equal is pressed

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    var n1 = Number(num1)
    var n2 = Number(num2)

    if (operator == "/") {
        return divide(n1, n2);
    } else if (operator == "*") {
        return multiply(n1, n2);
    } else if (operator == "-") {
        return subtract(n1, n2);
    } else if (operator == "+") {
        return add(n1, n2)
    }
    return null;
}

function solve() {
    let result = operate(operator, num1, num2);
    clear();
    //TODO num1 = CONVERT STRING TO INT!!!
    return result;
}

//on button click, one of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], update display with new number.
// first number, then just add to right of it. so treat display nums like appending string

//num1 == numbers pressed before operator?
// once operator pressed (multiply, divide, sub, add), then start registering buttons pressed into next variable
//num2 == numbers pressed after operator

//then do operate() from these given parameters when equals is pressed