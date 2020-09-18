// Write me a function that converts any integer(up to 255) into binary. 

function convertTobinary(num){
    return (num >>> 0).toString(2);
}

console.log(convertTobinary(255));