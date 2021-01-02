"use strict";

// classes are a blueprint for objects
// classes can have properties and methods

// class Person {
    // name = 'Austin'  // example of a property
    //  call = () => {'...'}  // example of a method
// }

// classes are instantiated using the 'New' keyword
    // const myPerson = new Person()
    // myPerson.call()
    // console.log(myPerson.name)

// classes can also inherit with this syntax
    // class Person extends Master

class Human {
    constructor() {
        this.gender = 'Male'
    }
    printGender() {
        console.log(this.gender);
    }
}


// Creating a new class//
class Person extends Human {
    constructor() {
        super();   // super(); is required when extending from another class with a constructor
        this.name = 'Austin'
    }

    printMyName() {
        console.log(this.name);
    }
}
const person = new Person();
person.printMyName();
person.printGender();
    
