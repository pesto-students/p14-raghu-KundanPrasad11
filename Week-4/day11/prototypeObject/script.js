//Protecting the object
const person = {};

Object.defineProperty(person, "name", {
  value: "Pablo",
  writable: false,
  configurable: false
});

Object.defineProperty(person, "age", {
  value: 25,
  writable: true,
  configurable: false
});

Object.defineProperty(person, "email", {
  value: "pablo.esco@bar.email",
  writable: false,
  configurable: true
});

Object.defineProperty(person, "getAge", {
  value: function() {
    return this.age;
  },
  writable: false,
  configurable: false
});
Object.defineProperty(person, "setAge", {
  value: function(age) {
    if(typeof age == 'number' && age > 0 && age < 150) {
      this.age = age;
    } else {
      console.log("invalid age");
    }
  },
  writable: false,
  configurable: false
});



// JS Prototype
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Vehicle.prototype.getDetails = function () {
  return `${this.year} ${this.make} ${this.model}`;
};

function Car(make, model, year, numDoors) {
  Vehicle.call(this, make, model, year);
  this.numDoors = numDoors;
}

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.getDetails = function () {
  return `${this.year} ${this.make} ${this.model}, ${this.numDoors} doors`;
};

const vehicle = new Vehicle("Maruti Suzuki", "Swift Desire", 2022);
const car = new Car("Maruti Suzuki", "Swift Desire", 2022, 4);

console.log(vehicle.getDetails());
console.log(car.getDetails());
