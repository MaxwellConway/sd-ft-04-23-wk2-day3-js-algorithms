
function fizzbuzz(input) {

    let result = (input - Math.floor(input)) !== 0;

    if (input/3 != result) {
        console.log("not a decimal")
    }

    if (result) {
    console.log("FizzBuzz");
    } 
    
    else if (input is divisble by 3 but not 5) {
        console.log("Fizz");
    } 
    
    else if (input is divisible by 5 but not 3) {
        console.log("Buzz");
    } 
    
    else {
        console.log(input);
    }
}

??????

function fizzbuzz(input) {

    
    let result = (input - Math.round(input)) !== 0;



    input/3
    
    if (result) {
        console.log("not a decimal");
    } else {console.log("is a decimal");}
}

??????????

// write a function that takes in a number
// if that number is divisible by 3
// if that number is divisible by 5
// if that number is divisible by 3 and 5
// if that number is not divisible by 3 or 5


function fizzBuzz(number) {
    if(number % 3 === 0 && number % 5 ===0){
        console.log("FizzBuzz");
    } else if (number % 3 === 0) {
        console.log("Fizz");
    } else if (number % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }
}


Write a function that takes an array of strings as an argument and returns a new array with all the strings sorted in alphabetical order.

let arr1 = ["Banana", "Mango", "Apricot", "Watermelon", "Starfruit"]


function alphabetSort(array) {
    array.sort();
    return array;
    console.log(array)
}

