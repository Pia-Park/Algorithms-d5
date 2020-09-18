// Write me a function that converts any integer(up to 255) into binary. 


function convertTobinary(num){
    let binary = "";
    if (num < 0) {
      num = num >>> 0;
    }
    while(Math.ceil(num / 2) > 0){
        binary = num % 2 + binary;
        num = Math.floor(num / 2);
    }
    return binary;
}

 

console.log(convertTobinary(255));


// function convertTobinary(num){
//     return (num >>> 0).toString(2);
// }

// const convertTobinary = function(num){
//     let result = [];
//     let number = num;

//     while(number >= 1){
//         result.unshift(Math.floor(num % 2));
//         number = number / 2;
//     }
//     return result;
// }