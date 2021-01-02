"use strict";

// const number = 1;    // Primitive type
// const num2 = number; // creates a real copy
//
// console.log(num2);


// const person = {
//     name: 'Austin'
// };
// const secondPerson = person;
// console.log(secondPerson);

// will print same value but it will NOT actually have copied the person
// person the object is stored in memory
// a constant person is a pointer to that place in memory
// if we assign person to second person the pointer will be copied

//
// const person = {
//     name: 'Austin'
// };
// const secondPerson = person;
//
// person.name = 'Kathy';
//
// console.log(secondPerson);


// This technique is important
const person = {
    name: 'Austin'
};
const secondPerson = {
    ...person
};

person.name = 'Kathy';

console.log(secondPerson);
