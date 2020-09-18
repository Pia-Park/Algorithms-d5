// Create a function that takes two numbers as arguments (num, length) 
// and returns an array of multiples of num up to length.

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

// the arrows points to the expected answers


function arrayOfMultiples(num, length){
    const arr = [];
    for (let i = 1; i <= length; i++){
        arr.push(num * i);
    }
    return arr;
}

// console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));


// const arrayOfMultiples = (num, length) => Array.from({ length }, (_, i) => num * (i + 1));
