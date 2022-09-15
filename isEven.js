// debug kore kore dekho
// number % 2 = 0 ; hole oi Number ti Even-Number


// practice 01:
function isEven(number) {
    const remainder = number / 2;
    // return remainder;
    if (remainder === 0) {
        return true
    }
    else {
        return false;
    }
}
const yourNumber1 = 155;
console.log('your number is even', isEven(yourNumber1))

// practice 02:
function isEven(number) {
    var remainder = number % 2; // look Moduler sign! 
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}
const yourNumber2 = 12;
console.log('This Number is Even:', isEven(yourNumber2))

// practice 03:
function isEven(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        return true
    }
    else {
        return false;
    }
}
const yourNumber3 = 524154;
console.log('This number is Even:', isEven(yourNumber3))


// practice 04:
function checkEven(Number) {
    const remainder = Number % 2;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}
const yourNumber = 25442156;
console.log('This Number Is Even:', checkEven(yourNumber))

// practice 05:
function varifyEven(num) {
    const remainder = num % 2;
    if (remainder === 0) {
        return true
    }
    else {
        return false;
    }
}
const YourNumber = 31313131;
console.log('This Number is Even:', varifyEven(YourNumber));