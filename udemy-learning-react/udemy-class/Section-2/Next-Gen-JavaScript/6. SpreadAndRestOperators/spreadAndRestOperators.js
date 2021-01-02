"use strict";

// Spread: Used to split up array elements OR object properties
// const newArray = [...oldArray,1,2]
// const newObject = {...oldObject, newProp: 5}

// Rest: Used to merge a list of function arguments into an array
// function sortArts(...args) {
//     return args.sort()
// }
//


// *Spread operator usage* //

// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4];
// console.log(newNumbers);

// const person = {
//     name: 'Austin'
// };
//
// const newPerson = {
//     ...person,
//     age: 28
// }
//
// console.log(newPerson);


// *Rest operator usage* //
const filter = (...args) => {
    return args.filter(el => el === 1);
}
console.log(filter(1, 2, 3));