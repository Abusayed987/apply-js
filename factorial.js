// practice: 01

function multification(number1) {
    let result = 1 ; // function er modde use korte , function er baire use korte parbe> local variablr
    for (let i = 1; i < number1; i++) {
       result = result * i; // i use korte hobe !
       console.log(result);
    }
    return result
}
 const result1 =multification(7) // it's a global variable
 console.log(result1);

// practice: 02    
function factorial2(num2) {
    let result = 1; // local variable
    for (let i = 1; i < num2; i++) {
        result = result * i   ;  
        console.log(result);
    }
    return result;
}

factorial2(7);

// practice: 03

function factorial3(num3) {
    let result = 1;
    for (let i = 1; i < num3; i++) {
       result = result * i;
       console.log(result); 
    }
    return result

}
const result3= factorial3(11)
console.log(result3);
// practice: 04 

function factorial4(num4) {
    let result = 1;
    for (let i = 1; i < num4; i++) {
        result = result * i;
        console.log(result); 
    }   
    return result
}
factorial4(6)

// practice: 05
function factorial5(num5) {
    let result = 1;
    for (let i = 1; i < num5; i++) {
        result = result * i;
        console.log(result);
    }
}
factorial5(12)