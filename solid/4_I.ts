// Interface segregation principle

// bad practice
interface Character {
  name: string,
  think: () => void,
}

interface Develop extends Character {
  writeCode: () => void;
  useIde: () => void;
  configureDB: () => void;
  useVueJs: () => void;
}

class FrontDevelop implements Develop {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  think() { console.log(`${this.name} is thinking`) }
  writeCode() { console.log(`${this.name} is working`) }
  useIde() { console.log(`${this.name} is using powerful IDE`) }
  useVueJs() { console.log(`${this.name} knows Vue`) }
  configureDB() { console.log(`Error - FrontDev don't have to know DB, but must to implement it`) }
}

// way to go
interface Char {
  name: string,
  think: () => void,
}

interface Dev extends Char {
  writeCode: () => void;
  useIde: () => void;
}

interface FrontDev extends Dev {
  useVueJs: () => void;
}

interface BackDev extends Dev {
  configureDB: () => void;
}

class FDev implements FrontDev {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  think() { console.log(`${this.name} is thinking`) }
  writeCode() { console.log(`${this.name} is working`) }
  useIde() { console.log(`${this.name} is using powerful IDE`) }
  useVueJs() { console.log(`${this.name} knows Vue`) }
}

// FDev имплементирует только те методы и свойства, которые он использует.
