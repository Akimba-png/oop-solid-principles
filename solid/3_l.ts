// liskov substitution principle

// bad practice
class Personality {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  getAccess() {
    console.log(`access to ${this.name} is allowed`);
  }
}

class Coder extends Personality {
  constructor(name: string) {
    super(name);
  }
  createReactApp() {
    console.log('react app is warming up');
  }
}

class Stranger extends Personality {
  walkAround() {
    console.log('just walk here and there');
  }
  getAccess() {
    throw new Error('access to strangers is denied');
  }
}

function getAccessToDB(personality: Personality) {
  personality.getAccess();
}

getAccessToDB(new Stranger('Strange'));
// Функция getAccessToDB не может работать c классом Stranger
// т.к. при обращении к методу getAccess будет выброшена ошибка

// way to go
class Personal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employe extends Personal {
  constructor(name: string) {
    super(name);
  }
  getAccess() {
    console.log(`access to ${this.name} is allowed`);
  }
}

class Coderr extends Employe {
  constructor(name: string) {
    super(name);
  }
  createReactApp() {
    console.log('react app is warming up');
  }
}

class Strange extends Personal {
  walkAround() {
    console.log('just walk here and there');
  }
}

function checkAccessToDB(employe: Employe) {
  employe.getAccess();
}
// Введён дополнительный уровень абстракции Employe
// Все наследники этого класса будут иметь метод getAccess
// Функция checkAccessToDB так же работает только с классом
// Employe и его наследниками.
// При этом класс Strange не имеет наследования от Employe
// и не нарушает liskov substitution principle
