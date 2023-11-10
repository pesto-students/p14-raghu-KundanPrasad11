class Calculator {
  constructor() {}

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
}

class ScientificCalculator extends Calculator {
  constructor() {
    super();
  }

  square(a) {
    return a * a;
  }

  cube(a) {
    return a * a * a;
  }

  power(a, b) {
    return Math.pow(a, b);
  }
}

const calc = new ScientificCalculator();

const sum = calc.add.call(calc, 10, 5);
console.log(sum);

const difference = calc.subtract.apply(calc, [10, 5]);
console.log(difference);

const multiplyBy2 = calc.multiply.bind(calc, 2);
console.log(multiplyBy2(5));

const powerOf3 = calc.power.bind(calc, 3);
console.log(powerOf3(2));