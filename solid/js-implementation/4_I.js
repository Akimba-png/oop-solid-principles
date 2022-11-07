// Interface segregation principle

// bad practice
// class AbstractDeveloper {
//   name;
//   constructor(name) {
//     if (new.target === AbstractDeveloper) {
//       throw new Error('Mustn`t create instanses from abstract class')
//     }
//     this.name = name;
//   }
//   useJs() { throw new Error('Method must be implemented in nested classes') }
//   writeProgram() { throw new Error('Method must be implemented in nested classes') }
//   useCss() { throw new Error('Method must be implemented in nested classes') }
//   configureDb() { throw new Error('Method must be implemented in nested classes') }
//   createEndPoint() { throw new Error('Method must be implemented in nested classes') }
// }

// class FrontendDeveloper extends AbstractDeveloper {
//   constructor(name) { super(name) }
//   useJs() { console.log(`${this.name} knows JS language`) }
//   writeProgram() { console.log(`${this.name} is writing program`) }
//   useCss() { console.log(`${this.name} is using CSS rules`) }
// }
// class FrontendDeveloper extends AbstractDeveloper but doesn`t use all of it methods


// way to go
class AbstractDeveloper {
  name;
  constructor(name) {
    if (new.target === AbstractDeveloper) {
      throw new Error('Mustn`t create instanses from abstract class')
    }
    this.name = name;
  }
  useJs() { throw new Error('Method must be implemented in nested classes') }
  writeProgram() { throw new Error('Method must be implemented in nested classes') }
}

class FrontendDeveloper extends AbstractDeveloper {
  constructor(name) { super(name) }
  useJs() { console.log(`${this.name} knows JS language`) }
  writeProgram() { console.log(`${this.name} is writing program`) }
  useCss() { console.log(`${this.name} is using CSS rules`) }
}

class BackendDeveloper extends AbstractDeveloper {
  constructor(name) { super(name) }
  configureDb() { console.log(`${this.name} can configure DB`) }
  createEndPoints() { console.log(`${this.name} is creating endpoints`)}
}

const frontendDeveloper = new FrontendDeveloper('me');
frontendDeveloper.useJs();
const backendDeveloper = new BackendDeveloper('me');
backendDeveloper.createEndPoints();
// class FrontendDeveloper & class BackendDeveloper extends AbstractDeveloper
// and uses only methods they need
