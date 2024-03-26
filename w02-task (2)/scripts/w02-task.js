/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let name = 'Zackary Sinclair';

document.querySelector('#name').textContent = name;


let year = 2024;


let currentYear = document.getElementById('year');
currentYear.textContent = year;


let myImage = new Image;
myImage.src = 'images/Mexico.jpg';


document.querySelector('img').setAttribute('src', 'images/Mexico.jpg');

/* ARRAYS */


const foods = [' Burritos', ' Sushi', ' Tacos', ' Hamburgers']


let food = document.getElementById('food');
food.textContent = foods;


let anotherFood = "Yogurt"


foods.push(anotherFood);


food.textContent = foods;

foods.shift();


food.textContent = foods;


foods.pop();


food.textContent = foods;
