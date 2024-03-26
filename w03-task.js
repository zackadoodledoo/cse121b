/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2){
    return number1 + number2;
}

function addNumbers() {
    let num1 = parseInt(document.querySelector("#addend1").value);
    let num2 = parseInt(document.querySelector("#addend2").value);
    document.getElementById("sum").value = add(num1, num2);
}
document.getElementById("addNumbers").addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number3, number4) {
    return number3 - number4;
}

function subtractNumbers() {
    let num3 = parseInt(document.querySelector("#minuend").value);
    let num4 = parseInt(document.querySelector("#subtrahend").value);
    document.getElementById("difference").value = subtract(num3, num4);
}
document.getElementById("subtractNumbers").addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

multiply = (number5, number6) => number5 * number6;
multiplyNumbers = () => {
    let num5 = parseInt(document.querySelector("#factor1").value);
    let num6 = parseInt(document.querySelector("#factor2").value);
    document.getElementById("product").value = multiply(num5, num6);
}
document.getElementById("multiplyNumbers").addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number7, number8) {
    return number7 / number8;
}

function divideNumbers() {
    let num7 = parseInt(document.querySelector("#dividend").value);
    let num8 = parseInt(document.querySelector("#divisor").value);
    document.getElementById("quotient").value = divide(num7, num8);
}
document.getElementById("divideNumbers").addEventListener('click', divideNumbers);

/* Decision Structure */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let newDate = new Date();
// Step 2: Declare a variable to hold the current year
let currentYear;
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = newDate.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById("year").innerHTML = currentYear;

/* ARRAY METHODS - Functional Programming */


const array_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

document.getElementById("array").innerHTML = array_1;

document.getElementById("odds").innerHTML = array_1.filter(oddNumbers);

function oddNumbers(number) {
    return number % 2 != 0;
}

document.getElementById("evens").innerHTML = array_1.filter(evenNumbers);

function evenNumbers(number) {
    return number % 2 === 0;
}

document.getElementById("sumOfArray").innerHTML = array_1.reduce(sumArray);

function sumArray(total, num) {
    return total + num;
}


let new_array = document.getElementById("multiplied").innerHTML = array_1.map(mapArray);

function mapArray(mapNumber) {
    return mapNumber * 2;
}

document.getElementById("sumOfMultiplied").innerHTML = new_array.reduce(newSumArray);

function newSumArray(newTotal, newNum) {
    return newTotal + newNum;
}
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
