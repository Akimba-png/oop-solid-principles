// Liskov substitution principle

// bad practice
// class Person {
//   name;
//   constructor(name) {
//     this.name = name;
//   }
//   getAccess() {
//     console.log(`Access to ${this.name} is allowed`)
//   }
// }

// class Programmer extends Person {
//   constructor(name) { super(name) }
//   createProgram() { console.log('constructing program') }
// }

// class Tester extends Person {
//   constructor (name) { super(name) }
//   testProgram() { console.log('testing programm') }
// }

// class Guest extends Person {
//   constructor(name) { super(name) }
//   walkAround() { console.log(`just walking around`) }
//   getAccess() { throw new Error('access to guests is denied') }
// }

// function openStaffOnlyDoor(person) {
//   person.getAccess();
// }

// const programmer = new Programmer('me');
// const tester = new Tester('tester');
// openStaffOnlyDoor(programmer);
// openStaffOnlyDoor(tester);

// way to go
class Person {
  name;
  constructor(name) {
    this.name = name;
  }
}

class Employee extends Person {
  constructor(name) { super(name) }
  getAccess() {
    console.log(`access to ${this.name} is allowed`);
  }
}

class Programmer extends Employee {
  constructor(name) { super(name) }
  createProgram() { console.log('constructing program') }
}

class Tester extends Employee {
  constructor(name) { super(name) }
  testProgram() { console.log('testing programm') }
}

class Guest extends Person {
  constructor(name) { super(name) }
  walkAround() { console.log('just walk around') }
}

function openStaffOnlyDoor(employee) {
  employee.getAccess();
}

const programmer = new Programmer('me');
const tester = new Tester('tester');
openStaffOnlyDoor(programmer);
openStaffOnlyDoor(tester);
