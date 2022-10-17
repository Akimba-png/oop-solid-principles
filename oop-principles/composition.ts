class Engine {
  drive() {
    console.log('Engine is working')
  }
}

class Transmission {
  drive() {
    console.log('Transmission is on drive mode')
  }
}

class Car {
  engine: Engine;
  transmission: Transmission;
  constructor() {
    this.engine = new Engine();
    this.transmission = new Transmission();
  }

  drive() {
    this.engine.drive();
    this.transmission.drive();
  }
}

const myCar = new Car();
myCar.drive();

// Класс Car включает в себя классы Engine и Transmission
// При этом инициализация данных классов происходит внутри конструктора Car
// Данные классы не передаются в Car из вне в виде параметров и отдельно от Car существовать не могут
// Так же, при удалении экземпляра Car вместе с ним будут удалены и экземпляры
// Engine и Transmission
