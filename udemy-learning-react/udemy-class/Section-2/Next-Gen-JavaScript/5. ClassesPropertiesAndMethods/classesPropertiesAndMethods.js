"use strict";
"use strict";

// all taken from the previous section to use new syntax


// Old Syntax
// class Human {
//     constructor() {
//         this.gender = 'Male'
//     }
//     printGender() {
//         console.log(this.gender);
//     }
// }

// New Syntax
class Human {
    gender = 'male';
    // we turn this method into an arrow function to unlock the 'this' methods
    printGender = () => {
        console.log(this.gender)
    }
}

// Old Syntax
// class Person extends Human {
//     constructor() {
//         super();   // super(); is required when extending from another class with a constructor
//         this.name = 'Austin'
//     }
//
//     printMyName() {
//         console.log(this.name);
//     }
// }
// const person = new Person();


// New Syntax

class Person extends Human {
    name = 'Austin';
    gender = 'female';

    printMyName =  () => {
        console.log(this.name);
    }
}


const person = new Person();
person.printMyName();
person.printGender();


    
