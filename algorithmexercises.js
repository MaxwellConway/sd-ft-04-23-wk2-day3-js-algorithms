// 1. Write a function that takes two numbers as arguments and returns their sum.

// function sumOf(num1, num2) {
//   let result = num1 + num2;
//   return result;
//   console.log(result);
// }

function sumOf(num1, num2) {
  return num1 + num2;
}


// 2. Write a function that takes a string as an argument and returns the length of the string.

function stringLength(string) {
    return string.length;
}


// 3. Write a function that takes an array of numbers as an argument and returns the largest number in the array.

function largestNum(array) {
    return Math.max(...array);
}

// 4. Write a function that takes an array of strings as an argument and returns a new array with all the strings capitalized.

function capitalizeStrings(stringArray) {
    return stringArray.map((word) => {
        const capitalizedFirst = word.charAt(0).toUpperCase();
        const rest = word.slice(1).toLowerCase();
        return capitalizedFirst + rest;
    });
}

// 5. Write a function that takes a number as an argument and returns true if the number is even, and false if it is odd.

function isEven(number) {
    if (number % 2) {
        return false;
    }
    else {return true;}
}

// 6. Write a function that takes two arrays as arguments and returns a new array that contains all the elements from both arrays, in the order they appear.

function combineArrays(array1, array2) {
    return array1.concat(array2);
}

// 7. Write a function that takes a string as an argument and returns a new string with all the vowels removed.

function removeVowels(string) {
    let newString = string1.replace(/[aeiou]/g, "");
    return newString;
}

// 8. Write a function that takes an array of numbers as an argument and returns a new array with all the numbers doubled.

function doubleNumbers(array) {
    function double(num){
        return num * 2;
    }
    let newArray = array.map(double);
    return newArray;
}

// 9. Write a function that takes an array of strings as an argument and returns a new array with all the strings sorted in alphabetical order.

function sortStrings(array) {
   return array.sort();
}

// 10. Write a function that takes a number as an argument and returns the factorial of that number (i.e., the product of all the numbers from 1 to that number).

function factorial(number) {
  if (number < 0) return -1;
  else if (number == 0) return 1;
  else {
    return number * factorial(number - 1);
  }
}