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
  constructor(engine: Engine, transmission: Transmission) {
    this.engine = engine;
    this.transmission = transmission;
  }

  drive() {
    this.engine.drive();
    this.transmission.drive();
  }
}

const myCar = new Car(new Engine(), new Transmission());
myCar.drive();

// Класс Car включает в себя класс Engine и Transmission
// При этом экземпляры Engine и Transmission создаются внутри класса Car
// И отдельно от него существовать не могут.
// Т.е. при удалении экземпляра Car вместе с ним будут удалены и экземпляры
// Engine и Transmission
