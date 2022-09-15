// year % 4 = 0 ; hole oi Year ti Leap-Year hobe.
// mane kono year k 4 diye vag korle VagSes 00 hole oi year ti Leap-Year hobe.
// practice 01:
/*
function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder===0) {
        return true
    }
    return false // this is a shortHand, without else
}
const yourYear = 1952;
console.log(yourYear,'This Year is leap-Yaer: ', isLeapYear(yourYear));

// practice 02:
function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder===0) {
        return true
    }
    return false; // this is a shortHand, without else
}
const yourYear = 1971;
console.log(yourYear,'This Year is leap-Yaer: ', isLeapYear(yourYear));

// practice 03:
function isLeapYear(year) {
    const remainder = year % 4;
    if(remainder===0){
        return true
    }
    return false // this is a shortHand, without else
}
const myYear = 2002;
const myBirthDate = isLeapYear(myYear);
console.log(myYear, 'This year is Leap-Year', myBirthDate);
*/
// practice 04:
function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true
    }
    return false;   // this is a shortHand, without else
}
const thisYear = 2024;
console.log(thisYear, 'this Year is Leap Year:', isLeapYear(thisYear) );

// practice 05:
function isLeapYear(year){
    const remainder = year % 4;
    if(remainder===0){
        return true
    }
    return false;   // this is a shortHand, without else
}
const tawhidBirthDate = 2011;
console.log(tawhidBirthDate, 'this year is leap year:', isLeapYear(tawhidBirthDate))