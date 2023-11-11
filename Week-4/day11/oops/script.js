//Inheritance
class Vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive() {
    console.log(`Driving ${make} ${model}.`)
  }
}

class Car extends Vehicle {
  constructor(make, model, year, color, numSeats) {
    super(make, model, year, color);
    this.numSeats = numSeats;
  }
}

class RideShareCar extends Car {
  constructor(make, model, year, color, numSeats, isAvailable) {
    super(make, model, year, color, numSeats);
    this.isAvailable = isAvailable;
  }
}

//Polymorphism
class Shape {
  constructor() {}
  calculateArea() {}
}

class Rectangle extends Shape {
  constructor(length, breadth) {
    super();
    this.length = length;
    this.breadth = breadth;
  }
  calculateArea() {
    return this.length * this.breadth;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  calculateArea() {
    return this.base * this.height / 2;
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calculateArea() {
    return 3.14 * this.radius * this.radius;
  }
}

const rectangle = new Rectangle(10, 5);
console.log("Reactangle's area with length 10 and width 5 is ", rectangle.calculateArea());

const triangle = new Triangle(10, 5);
console.log("triangle's area with base 10 and height 5 is ", triangle.calculateArea());

const circle = new Circle(10);
console.log("Circle's area with radius 10 is ", circle.calculateArea());


//Abstraction and Encapsulation

class BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    this._accountNumber = accountNumber;
    this._balance = balance;
    this._accountHolderName = accountHolderName;
  }

  getBalance() {
    return this._balance;
  }
  deposit(amount) {
    this._balance += amount;
  }
}

class CheckingAccount extends BankAccount {
  deposit(amount) {
    this._balance += amount;
    console.log(`Deposit of ${amount} complete, updated balance is ${this._balance}`)
  }
  withdraw(amount) {
    this._balance -= amount;
    console.log(`Withdrawal of ${amount} complete, updated balance is ${this._balance}`)
  }
}

class SavingsAccount extends BankAccount {
  deposit(amount) {
    this._balance += amount;
    console.log(`Deposit of ${amount} complete, updated balance is ${this._balance}`);
  }

  withdraw(amount) {
    if (this.getBalance() >= amount) {
      this._balance -= amount;
      console.log(`Withdrawal of ${amount} complete, updated balance is ${this._balance}`);
    } else {
      console.log("Withdrawal failed. Insufficient balance.");
    }
  }
}

const checking = new CheckingAccount("93845612342", 50000, "Raj");
checking.deposit(10000);
checking.withdraw(30000);
checking.withdraw(25000);
checking.withdraw(8000);

const saving = new SavingsAccount("289345235908", 50000, "Raj");
saving.deposit(10000);
saving.withdraw(30000);
saving.withdraw(25000);
saving.withdraw(8000);