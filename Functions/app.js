// 1) Write a function that takes an array of numbers as input and returns the largest number in the array.

const largestNum = (...numArr) => {
    return Math.max(...numArr);
};

console.log(largestNum(1, 4, 26, 12, 337, 9, 45, 11, 3));

// 2) Create a simple calculator that can perform basic arithmetic operations (+, -, *, /) on two numbers.

const buttons = document.querySelectorAll('input[type="button"]');
const display = document.querySelector('#display input[name="display"]');

buttons.forEach(button => {
    button.addEventListener('click', event => {
        display.value += event.target.value;
    });
});