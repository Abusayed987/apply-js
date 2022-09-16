// practice: 01 Use for loop

function reverseFactorial1(num) {
    let result = 1;
    for (let i = num; i >= 1; i--) {
        result = result * i;
        console.log(i); // "i" ke console korte hobe 
    }
    return result
}
const result = reverseFactorial1(5);
console.log(result);

// practice: 02 Use for loop
function reverseFactorial2(num) {
    let result = 1;
    for (let i = num; i >= 1; i--) {
        result = result * i;
        console.log(i);
    }
    return result
}
const result2 = reverseFactorial2(6)
console.log(result2);


// practice: 03 Use for loop
function reverseFactorial3(num) {
    let result = 1;
    for (let i = num; i >= 1; i--) {
       result = result * i // i er mann poriborton hoy
       console.log(i);
        
    }
    return result
}
const result3 = reverseFactorial3(7);
console.log(result3);

// practice: 04 Use for loop
function reverseFactorial4(num) {
    let result = 1;
    for (let i = num; i >= 1; i--) {
        result = result * i;
        console.log(i);
    }
    return result
}
const result4 = reverseFactorial4(8);
console.log(result4);
// practice: 05 Use for loop

function reverseFactorial5(number) {
    let result = 1;
    for (let i = number; i>= 1; i--) {
        result= result * i;
        console.log(i);   
    }
    return result
}
const result5 = reverseFactorial5(9);
console.log(result5);

// -------------------------------------------------------------


// practice :01 use while loop
function factorial1(num) {
    let result = 1;
    let i = num;
    while (i >= 1) {
        result = result * i;
        console.log(i);
        i--; // ata sese e dite hobe nahole seser number ti multification korbe na tar age e loop ses hoye jabe
    }
    return result
}
const result11 = factorial1(5);
console.log(result11);

// practice :02 use while loop
function factorial2(num) {
    let result = 1;
    let i = num; // 0 dile hobe na karon reverse way te korteci
    while (i >= 1) {
        result = result*i;
        console.log(i);
        i--;
    }
    return result
}
const result22 = factorial2(6);
console.log(result22);

// practice :03 use while loop
function factorial3(num) {
    let result = 1; 
    let i = num;    // 0 dile hobe na karon reverse way te korteci
    while (i >= 1) {
        result= result*i;
        console.log(i);
        i--;
    }
    return result
}
 const result33 = factorial3(7);
 console.log(result33);

// practice :04 use while loop
function factirial4(num) {
    let result = 1;
    let i = num; // o dile hobe na karon reverse way te korteci
    while (i >= 1) {
        result = result * i;
        console.log(i);
        i--;
    }
    return result
}
 const result44 = factirial4(8);
 console.log(result44);

// practice :05 use while loop
function factorial5(num) {
    let result = 1;
    let i = num; // 0 dile hobe na karon reverse way te korteci
    while (i >= 1) {
        result = result * i;
        console.log(i);
        i--;
    }
    return result
}
const result55 = factorial5(9);
console.log(result55);