// console.log('Hello World from NodeJS')

// const fs = require('fs')
// fs.writeFileSync('hello.txt', 'Hello World')

// const myArray = ["axe", "brush", "chair", "door"];

// myArray.push("d");

// const x = [...myArray];
// x.unshift('z');
// console.log(x);

// const person = {
//   name: "Robert",
//   age: 32,
//   greet() {
//     return "Hi, my name is " + this.name + ".";
//   },
// };

// console.log(person.greet());
// const { name, age } = person;
// const [a, b, , d] = myArray;

// console.log(name, age);
// console.log(a, b);

const fetchData = (callback) => {
  setTimeout(() => {
    console.log(callback);
  }, 2000);
};

setTimeout(() => {
    fetchData('Robert for King')
}, 1000);
