function addition(a, b) {
    return a + b;
}

console.log(addition(10, 20)); //prints 30




function oddOrEven(number) {
    if(number % 2 == 0) {
        return console.log('Your number is EVEN');
    } else {
        return console.log('Your number is ODD');
    }
}

oddOrEven(11) //prints odd

function backwards(string) {
    if (typeof string !== 'string') {
        return 
    } else {
    let reverseWord = string.split(" ").map(word => word.split("").reverse().join(""));
    return reverseWord.join(" ");
    }
    
}
 const bckwrd = backwards(123);
console.log(bckwrd);