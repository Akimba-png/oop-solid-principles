// open closed principle

// bad practice
class Square {
  size: number;
  constructor(size: number) {
    this.size = size;
  }
}

class Circle {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
}

type Shapes = (Square | Circle)[];
const shapes: Shapes = [new Square(2), new Circle(3)];

class AreaCalculator {
  shapes: Shapes;
  constructor(shapes: Shapes) {
    this.shapes = shapes;
  }
  sumArea() {
    return this.shapes.reduce((acc, shape) => {
      if (shape instanceof Square) {
        return acc += shape.size ** 2;
      }
      else if (shape instanceof Circle) {
        return acc += shape.radius * Math.PI * 2;
      }
      else {
        return acc;
      }
    }, 0)
  }
}


// way to go
interface IArea {
  getArea: () => number;
}

class Rectangle implements IArea {
  sizeA: number;
  sizeB: number;
  constructor(sizeA: number, sizeB: number) {
    this.sizeA = sizeA;
    this.sizeB = sizeB;
  }
  getArea() {
    return this.sizeA * this.sizeB;
  }
}

class Triangle implements IArea {
  base: number;
  height: number;
  constructor(base: number, height: number) {
    this.base = base;
    this.height = height;
  }
  getArea() {
    return 0.5 * this.base * this.height;
  }
}

type ShapesImproved = (Rectangle | Triangle)[];
const shapesImproved: ShapesImproved = [new Rectangle(2, 3), new Triangle(4, 5)];

class AreaCalculatorImproved {
  shapes: ShapesImproved;
  constructor(shapes: ShapesImproved) {
    this.shapes = shapes;
  }
  sumArea() {
    return this.shapes.reduce((acc, shape) => acc += shape.getArea(), 0);
  }
}
