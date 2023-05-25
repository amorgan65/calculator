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
    if (operator == "/") {
        return divide(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "+") {
        return add(num1, num2)
    }
    return null;
}

function clear() {
    // reset
}

//on button click, one of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], update display with new number.
// first number, then just add to right of it. so treat display nums like appending string

//num1 == numbers pressed before operator?
// once operator pressed (multiply, divide, sub, add), then start registering buttons pressed into next variable
//num2 == numbers pressed after operator

//then do operate() from these given parameters when equals is pressed