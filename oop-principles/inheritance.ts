class Person {
  name: string;
  age: number;
  private _id;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this._id = this._generateId();
  }

  private _generateId() {
    return this.name + this.age.toString();
  }

  protected getId() {
    return this._id;
  }

  public sayHello() {
    return 'Hello world!';
  }
}

class Employee extends Person {
  constructor(name: string, age: number) {
    super(name, age);
  }

  useId() {
    return this.getId();
  }
}

const monthEmployee = new Employee('me', 20);

// Модификаторы:
// private - доступны только внутри самого класса с объявленным свойством;
// protected - доступны внути наследуемых классов;
// publice - доступны для всех наследуемых классов и созданых экземпляров;

// Экземпляру monthEmployee будут доступны свойства и методы:
// age name sayHello useId
