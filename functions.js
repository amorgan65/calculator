//set buttons to have listener event?
let num1 = ''
let num2 = ''
let operator = null

let display = 0

constant numButtons = document.querySelectorAll('[data-value]')
constant equalButton = document.getElementById('equals')
constant subButton = document.getElementById('subtract')
constant addButton = document.getElementById('add')
constant multButton = document.getElementById('multiply')
constant divButton = document.getElementById('divide')
constant clearButton = document.getElementById('clear')

equalButton.addEventListener('click', solve)
clearButton.addEventListener('click', clear)

//TODO create listener events for operator buttons

//TODO create listener events for number buttons

//TODO create listener event for display? make it refresh whenever num, clear, or equal is pressed


//TODO create function for what to do when number button is clicked?

//TODO create function for what to do when operator button is clicked?

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

function clear() {
    //TODO CLEAR BUTTON, erases all stored values??
    num1 = ''
    num2 = ''
    operator = null
    resetDisplay();
}

function resetDisplay() {
    //TODO gets rid of stored value for text display, sets back to 0 or null?
    display = 0;
}




//on button click, one of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], update display with new number.
// first number, then just add to right of it. so treat display nums like appending string

//num1 == numbers pressed before operator?
// once operator pressed (multiply, divide, sub, add), then start registering buttons pressed into next variable
//num2 == numbers pressed after operator

//then do operate() from these given parameters when equals is pressed