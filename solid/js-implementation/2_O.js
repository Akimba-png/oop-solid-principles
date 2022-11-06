// Open closed principle

// bad practice
// class Square {
//   size = null;
//   type = 'square';
//   constructor(size) {
//     this.size = size;
//   }
// }

// class Circle {
//   radius = null;
//   type = 'circle';
//   constructor(radius) {
//     this.radius = radius;
//   }
// }

// class AreaCalculator {
//   calcAreas(shapes) {
//     return shapes.reduce((acc, shape) => {
//       if (shape.type === 'square') {
//         return acc += shape.size ** 2;
//       } else if (shape.type === 'circle') {
//         return acc += 2 * Math.PI * shape.radius;
//       } else {
//         return acc;
//       }
//     }, 0);
//   }
// }

// const square = new Square(3);
// const circle = new Circle(4);
// const calculator = new AreaCalculator();
// console.log(calculator.calcAreas([square, circle]));

// class Rectangle {
//   sizaA = null;
//   sizeB = null;
//   type = 'rectangle';
//   constructor(sizeA, sizeB) {
//     this.sizeA = sizeA;
//     this.sizeB = sizeB;
//   }
// }
// AreaCalculator doesn`t know what to do with this shape (Rectangle).
// You need to modify this class


// way to go
class AbstractShape {
  constructor() {
    if (new.target === AbstractShape) {
      throw new Error('Can\'t instantiate Abstract class, only concrete one.');
    }
  }
  getArea() {
    throw new Error(`Abstract method not implemented`);
  }
}

class Square extends AbstractShape {
  size = null;
  constructor(size) {
    super();
    this.size = size;
  }
  getArea() {
    return this.size ** 2;
  }
}

class Circle extends AbstractShape {
  radius = null;
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return 2 * Math.PI * this.radius;
  }
}

class AreaCalculator {
  calcAreas(shapes) {
    return shapes.reduce((acc, shape) => acc += shape.getArea(), 0);
  }
}

const square = new Square(3);
const circle = new Circle(5);
const calculator = new AreaCalculator();
console.log(calculator.calcAreas([square, circle]));
