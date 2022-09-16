// practice :01
/*
function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index]
        sum = sum + elements;
        // console.log(index, elements,sum)
    }
    // console.log(sum);
    return sum;
}
function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = [];  //akane odd number gula push korte hobe
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[i];
        if (element % 2 === 1) {
            console.log(index, element);
            oddNumbers.push(element)
        }
    }
    return oddNumbers
}
const mynumbers = [12, 65, 45, 78, 32, 45, 91]
const oddNumbers = getOddNumbersOfAnArray(mynumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(oddNumbers);
console.log('Hera Is Your Odd Numbers Sum:',oddNumberSum);


// practice :02
function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        sum = sum + elements;
        // console.log(sum);
    }
    return sum;
}

function getOddAnArray(numbers) {
    const oddNumbers = [];  //akane odd number gula push korte hobe
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[i];
        if (element % 2 === 1) {
            console.log(index, element);
            oddNumbers.push(element)
        }
    }
    return oddNumbers
}
const yourNumbers = [12, 65, 45, 78, 32, 45, 91];
var oddNumbers =getOddAnArray(yourNumbers);
console.log(oddNumbers); //ata na korle array show korbe na!
const SumOfAnArray = getSumOfAnArray(oddNumbers);
console.log(SumOfAnArray);

// practice :03
function getSumOfAnArray(numbers) {
    let sum = 0 ;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        sum =sum + elements;
    }
    return sum
}
function getOddAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        console.log(index, elements);
        if (elements % 2 !== 0) {
             oddNumbers.push(elements)
        }
    }
    return oddNumbers ;
}
herNumbers = [12, 23, 34, 45, 56, 67, 78, 78, 89, 90]
const oddNumbers = getOddAnArray(herNumbers)
console.log(oddNumbers);
var getSumOfAnArray= getSumOfAnArray(herNumbers)
console.log(getSumOfAnArray);



// practice :04
function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i; //For position
        const elements = numbers[index];
        sum = sum + elements;
    }
    return sum;
}
function getOddNumberOfAnArray(numbers) {
    let oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i ; //For position
        const elements = numbers[index]; //for elements
        if (elements %2 === 1) {
            console.log(index,elements);
            oddNumbers.push(elements)
        }     
    }
    return oddNumbers
}
const serialNumbers = [98, 87, 76, 65, 54, 43, 42, 32, 21];
const getOddNumbers =getOddNumberOfAnArray(serialNumbers);
console.log(getOddNumbers);
const sumOfAnArray = getSumOfAnArray(serialNumbers);
console.log(sumOfAnArray);

// practice :05
function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        sum = sum + elements;
    }
    return sum
}
function getOddAnArray(numbers) {
    const oddNumbers = []; // for push element here!
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        if (elements % 2 !== 0) {
            console.log(index, elements);
            oddNumbers.push(elements)
        }
    }
    return oddNumbers
}
const rollNumbers = [98, 89, 87, 78, 76, 76, 56, 65, 34];
const getOddNumbers= getOddAnArray(rollNumbers);
console.log(getOddNumbers);
const SumOfAnArray = getSumOfAnArray(rollNumbers);
console.log(SumOfAnArray);

// practice :06
function getSumoOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[i];
        sum = sum + elements
    }
    return sum
}
function getOddOfAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index]
        if (elements % 2 === 1) {
            console.log(index,elements);
            oddNumbers.push(elements);
        }
    }
    return oddNumbers
}

const idNumbers = [667, 76, 94, 23, 66, 77, 88, 99];
const getOddNumbers = getOddOfAnArray(idNumbers);
console.log(getOddNumbers);
const sumOfAnArray = getSumoOfAnArray(idNumbers);
console.log(sumOfAnArray);
// practice :07
*/
function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        sum = sum + elements;
    }
    return sum
}
function getOddOfAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        if (elements % 2 !== 0) {
            console.log(index, elements);
            oddNumbers.push(elements)
        }
    }
    return oddNumbers
}
const myArray = [11, 22, 33, 44, 55, 66, 77, 88, 99, 00];
const getOddNumbers = getOddOfAnArray(myArray);
console.log(getOddNumbers);
const getSumNumber = getSumOfAnArray(myArray)
console.log(getSumNumber);
