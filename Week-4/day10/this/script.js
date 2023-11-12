class Person {
  constructor(name, age, gender, nationality) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }

  introduce () {
    return `My name is ${this.name}, I am ${this.age} years old, my gender is ${this.gender}, and my nationality is ${this.nationality}.`;
  }
}

class Student extends Person {
  constructor(name, age, gender, nationality, subject) {
    super(name, age, gender, nationality);
    this.subject = subject;
  }

  study() {
    return this.subject ? `I am studying ${this.subject}.` : `I don't study.`;
  }

}

const person1 = new Person("Messi", 36, "male", "Argentinian");
const person2 = new Person("Neymar", 32, "male", "Brazilian");
const person3 = new Person("Xavi", 45, "male", "Spanish");
console.log(person1.introduce());
console.log(person2.introduce());
console.log(person3.introduce());

const student = new Student("Pedri", 20, "male", "Spanish", "Midfield");
console.log(student.introduce());
console.log(student.study());