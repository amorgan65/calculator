//set buttons to have listener event?
var num1 = ''
var num2 = ''
var operator = null

let firstTerm = true

var currNumber = '0'


var numButtons = document.querySelectorAll('button[data-value]')
var equalButton = document.getElementById('equals')
const subButton = document.getElementById('subtract')
var addButton = document.getElementById('add')
const multButton = document.getElementById('multiply')
const divButton = document.getElementById('divide')

var clearButton = document.getElementById('clear')
//var oneButton = document.getElementById('1')
var display = document.getElementById('display')

numButtons.forEach((button) => {
    //TODO attach listener to each?
    button.addEventListener('click', () => numberPressed(button.getAttribute('id')))
})

function numberPressed(num) {
    if (firstTerm == false) {
        currNumber = '0'
        firstTerm = true
    }

    if (currNumber == '0') {
        currNumber = num //TODO generalize, change to string value of whatever number button being pressed
        refreshDisplay()
    } else {
        currNumber += num //TODO generalize, change to string value of whatever number button being pressed
        refreshDisplay()
    }
}

/*
//TODO Generalize this function to use ID of whichever button is of class number? to find what number it actually is
function numOnePressed() {
    if (firstTerm == false) {
        currNumber = '0'
    }

    if (currNumber == '0') {
        currNumber = '1' //TODO generalize, change to string value of whatever number button being pressed
        refreshDisplay()
    } else {
        currNumber += '1' //TODO generalize, change to string value of whatever number button being pressed
        refreshDisplay()
    }
} */

//TODO generalize function to all operator buttons?
function addPressed() {
    num1 = currNumber 
    currNumber = '0'
    operator = '+' //TODO operator one of either ['/', '*', '-', '+']
    firstTerm = false
}

function clear() {
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

//TODO create listener events for number buttons

addButton.addEventListener('click', addPressed)

equalButton.addEventListener('click', solve)

//TODO create listener events for operator buttons

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

function solve() {
    num2 = currNumber
    let result = operate(operator, num1, num2);
    //TODO num1 = CONVERT STRING TO INT!!!
    let asString = result.toString()
    //TODO need to fix? should be using currNumber variable, and change display to the result instead?
    currNumber = asString
    refreshDisplay();
    firstTerm = true
    num1 = ''
    num2 = ''
    operator = null
    currNumber = '0'
}

//on button click, one of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], update display with new number.
// first number, then just add to right of it. so treat display nums like appending string

//num1 == numbers pressed before operator?
// once operator pressed (multiply, divide, sub, add), then start registering buttons pressed into next variable
//num2 == numbers pressed after operator

//then do operate() from these given parameters when equals is pressed