// 1) Write a function that takes an array of numbers as input and returns the largest number in the array.

const largestNum = (...numArr) => {
    return Math.max(...numArr);
};

console.log(largestNum(1, 4, 26, 12, 337, 9, 45, 11, 3));

// 2) Create a simple calculator that can perform basic arithmetic operations (+, -, *, /) on two numbers.

const buttons = document.querySelectorAll('input[type="button"]');
const display = document.querySelector('#display input[name="display"]');
const formatResult = result => {
    return Number.isInteger(result) ? result.toString() : result.toFixed(2);
}

buttons.forEach(button => {
    button.addEventListener('click', event => {
        const buttonValue = event.target.value

        buttonValue === 'AC' 
            ? display.value = ' ' 
                : buttonValue === 'DE' 
                    ? display.value = display.value.slice(0, -1)
                        : buttonValue === '='
                            ? display.value = formatResult(eval(display.value))
                            : display.value += buttonValue;

    });
});