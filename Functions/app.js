// 1) Write a function that takes an array of numbers as input and returns the largest number in the array.

const largestNum = (...numArr) => {
    return Math.max(...numArr);
};

console.log(largestNum(1, 4, 26, 12, 337, 9, 45, 11, 3));

// 2) Create a simple calculator that can perform basic arithmetic operations (+, -, *, /) on two numbers.

const buttons = document.querySelectorAll('input[type="button"]');

const display = document.querySelector('#display input[name="display"]');

const allClear = () => {
    display.value = ' ';
};

const removeNum = () => {
    display.value = display.value.slice(0, -1);
}

const formatResult = input => {
    const result = eval(input);
    return Number.isInteger(result) ? result.toString() : result.toFixed(2);
}

buttons.forEach(button => {
    button.addEventListener('click', event => {
        const buttonValue = event.target.dataset.type

        switch (buttonValue) {
            case 'AC' :
                allClear();
                break;
            case 'DE' :
                removeNum();
                break;
            case '=' :
                display.value = formatResult(display.value);
                break;
            default:
                display.value += buttonValue
                break;
        }
    });
});


// 3) Create a function that takes a string as input and counts the nr. of vowels in it.

const vowelCount = (input) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
  
    [...input.toLowerCase()].forEach((char) => {
        vowels.includes(char) ? count++ : 0
    });

    return console.log(count);
  };
  
  vowelCount('abracadabra');