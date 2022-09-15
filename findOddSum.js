// practice :01
/*
function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index]
        sum = sum + elements;
        console.log(index, elements,sum)
        return sum;
    }

}
const mynumbers = [12, 65, 45, 78, 32, 45, 91]
getSumOfAnArray(mynumbers);

// practice :02
function getSumOfAnArray(numbers) {
    sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i; // position janar jonno
        const elements = numbers[i] // index position e kon elements asa seta janar jonno
        sum = sum + elements;
        console.log( index,elements, sum);
    }
}
const yourNumbers =[12, 65, 45, 78, 32, 45, 91]
getSumOfAnArray(yourNumbers)

// practice :03
function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        sum = sum + elements // akta sum er sate onno Sum jog korar jonno
        console.log(index, elements , sum);      
    }
    return sum

}
herNumbers = [12, 23, 34, 45, 56, 67, 78, 78, 89, 90]
getSumOfAnArray(herNumbers)

// practice :04
function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
       const index = i;
       const elements = numbers[index];
        sum = sum + elements;
       console.log(index, elements ,sum); 

    }
}
const serialNumbers = [98, 87, 76, 65, 54, 43, 42, 32, 21];
getSumOfAnArray(serialNumbers)

// practice :05
function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[i];
        sum = sum + elements;
        console.log(index, elements, sum);
    }
    return sum
}
const rollNumbers = [98, 89, 87, 78, 76, 76, 56, 65, 34];
getSumOfAnArray(rollNumbers)

// practice :06
function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements= numbers[i]
        sum = sum + elements;
        console.log(sum,elements, index);
    }
     return sum
}
const idNumbers = [667,76,94,23,66,77,88,99];
getSumOfAnArray(idNumbers)
*/

// practice :07
function gerSumoOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i; //
        const elements = numbers[i]; //element khoje ber kora
        sum = sum + elements;
        console.log(elements, sum, index);
    }
    return sum
}
const myArray = [11, 22, 33, 44, 55, 66, 77, 88, 99, 00];
gerSumoOfAnArray(myArray)
