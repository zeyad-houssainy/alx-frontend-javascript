class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // toString() {
  //   return `[object ${this.name}] `;
  // }
  // get [Symbol.toStringTag]() {
  //   // console.log(`constructing...\n${Symbol.toStringTag}`);
  //   return [this.age, this.name];
  //   // return this.name
  // }
}

const human = new Human('zeyad', 13);
console.log(human);
console.log(human.toString());
console.log(Object.prototype.toString.call(human));
// console.log(human[Symbol.toStringTag]);
// console.log(human.toString());
// console.log(Object.prototype.toString());
// console.log(Object.prototype);
// console.log(Object);
// console.log(Human.toString());
// console.log(Human.prototype.toString());
// console.log(Object.prototype.toString.call(human));
// console.log(human.toString());
// console.log(human);
// console.log(human.Symbol.toStringTag());

