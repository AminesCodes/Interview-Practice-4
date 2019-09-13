// Question Name: noTriples

// Problem Statement: Given an array of numbers(integers), we'll say that a triple is a value appearing 3 times in a row in the array. Return true if the array does not contain any triples.

// Examples:

// noTriples([1,1,2,2,1]) → true
// noTriples([1,1,2,2,2,1]) → false
// noTriples([1,1,2,2,2,1]) → false

const noTriples = (array) => {
    for (let i = 0; i< array.length - 2; i++) {
        if (array[i] === array[i+1] && array[i] === array[i+2]) {
            return false;
        }
    }
    return true;
}

console.log(noTriples([1,1,2,2,1]));
console.log(noTriples([1,1,2,2,2,1]));