// // let msg = "    hello!   ";
// // console.log(msg.trim().toUpperCase());

// // let naam = "jitender";
// // console.log(naam.slice(0, 3));
// // console.log(naam.indexOf("te"));
// // console.log(naam.replace("jit", "dev"));

// let months = ["january", "june", "march", "august"];

// months[0] = "july";

// console.log(months);

// let lang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];

// lang.reverse();
// console.log(lang);
// console.log(lang.indexOf("javascript"));

// let tic = [["x", null, "0"], [(null, "x", null)], [("o", null, "x")]];
// console.log(tic);
// tic[0][1] = "o";
// console.log(tic[0]);

// //que1

// let arr = [7, 9, 0, -2];
// // arr.pop();
// // console.log(arr);
// arr.shift();
// console.log(arr);

// let naam = "  fdsk  ";

// if (naam == "") {
//   alert("string is empty");
// } else {
// }
// naam.trim();
// console.log(naam);

// let arr = [];

// if ((arr = "")) {
//   alert("your array is empty");
// }

// for (i = 1; i <= 15; i = i + 2) {
//   console.log(i);
// }
// for (i = 0; i <= 15; i = i + 2) {
//   console.log(i);
// }

// let n = prompt("write your number");
// n = parseInt(n);
// for (i = n; i <= n * 10; i = i + n) {
//   console.log(i);
// }

// let fmovie = "avatar";
// let guess = prompt("");

// while (guess != fmovie && guess != "quit") {
//   guess = prompt("Wrong guess try again");
// }

// let hero = [
//   ["a", "b", "c", "d"],
//   ["e", "f", "g", "h"],
// ];

// for (let i = 0; i <= hero.length; i++) {
//   // console.log(hero[i]);
//   for (let j = 0; j < hero[i].length; j++) {
//     console.log(hero[i][j]);
//   }
// }

// let result = [
//   ["aman", 95],
//   ["rahul", 90],
//   ["sumit", 78],
// ];

// // console.log(result[2][0]);

// for (i = 0; i < result.length; i++) {
//   // console.log(result[i]);

//   for (j = 0; j < result[i].length; j++) {
//     console.log(result[i][j]);
//   }
// }

// let todo = [];

// let req = prompt("Please enter your request");

// while (true) {
//   if (req == "quit") {
//     console.log("thank you for visiting");
//     break;
//   }
//   if (req == "add") {
//     let add = prompt("please add a task");
//     todo.push(add);
//     console.log("task added");
//   } else if (req == "list") {
//     console.log("---------------");
//     for (let i = 0; i < todo.length; i++) {
//       console.log(i, todo[i]);
//     }
//     console.log("---------------");
//   } else if (req == "delete") {
//     let dele = prompt("enter the index number of task");
//     todo.splice(dele, 1);
//     console.log("task deleted");
//   } else {
//     console.log("wrong request");
//   }
//   req = prompt("Please enter your request");
// }

// const post = {
//   user: "jitu",
//   content: "this is my era",
//   likes: 23,
//   repost: 5,
//   tags: ["rahul", "sumit", "arjun"],
// };

// for (i = 0; i <= 10; i++) {
//   setInterval(() => {
//     console.log(i);
//   }, 5000);
// }

// function dice() {
//   let num = parseInt(Math.random() * 6);
//   console.log(num);
// }
// function avg(a, b, c) {
//   console.log((a + b + c) / 3);
// }
// function table(a) {
//   for (let i = a; i <= a * 10; i += a) {
//     console.log(i);
//   }
// }
// function sum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(sum);
//   return sum;
// }
// for (let i = 1; i < 6; i++) {
//   document.write(i);
//   document.write(1);
//   for (let k = i; k <= i; k++) {
//     document.write(k);
//   }
//   document.write(1);
//   for (let k = i; k <= i; k++) {
//     document.write(k);
//   }
//   document.write("<br>");
// }
// for (let i = 1; i < 6; i++) {
//   document.write(`${i}${i * i}${i * i * i}1<br>`);
// }

// let str = ["jeet", "is", "good", "boy"];
// function result() {
//   let output = "";
//   for (i = 0; i < str.length; i++) {
//     output += str[i];
//   }
//   return output;
// }

// let greet = "hello";
// function changeGreet() {
//   let greet = "namste";
//   console.log(greet);

//   function innerGreet() {
//     console.log(greet);
//   }
// }
// console.log(greet);
// changeGreet();

// function plus(a, b) {
//   return a + b;
// }

// const result = function (a, func) {};
// greet();

// function greet() {
//   console.log("Namaste Bharat");
// }
// greetArrow();

// const greetArrow = () => {
//   console.log("Namaste Bharat");
// };

// for (let i = 1; i <= 5; i++) {
//   document.write("1");
//   for (let j = 1; j < i; j++) {
//     document.write(j + 1);
//   }
//   document.write("<br>");
// }

// for (let i = 1; i <= 5; i++) {
//   for (let j = 5; j >= i; j--) {
//     document.write("&nbsp");
//   }
//   for (let k = 1; k <= i; k++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// for (let i = 1; i <= 10; i++) {
//   document.write(1);
//   for (let j = 1; j < i; j++) {
//     document.write(j + 1);
//   }
//   document.write("<br>");
// }

// for (let i = 1; i <= 10; i++) {
//   document.write(i);
//   for (let j = 1; j <= 10; j++) {
//     document.write(j);
//   }
//   document.write("<br>");
// }

// for (let i = 1; i <= 5; i++) {
//   document.write(i);
//   for (j = 1; j < i; j++) {
//     document.write(i);
//   }
//   document.write("<br>");
// }s

// let a = "true";
// switch (a) {
//   case "true":
//     console.log("Correct");
//     break;
//   case true:
//     console.log("right");
//     break;
// }

// let arr = [2, 55, 77, 44, 22];

// console.log(Math.max(...arr));
// let n = 0;
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     n++;
//     document.write(n);
//   }
//   document.write("<br>");
// }

// function greet() {
//   var a = 2;
//   function b() {
//     console.log(a);
//   }
//   b();
// }
// greet();

// let a = [1, 3, 4, 5, 7, 9, 5];
// a.forEach((c) => {
//   console.log(c + 1);
// });

// const a = () => {
//   console.log("jitender");
// };
// a();

// (function () {
//   console.log("arjun");
// })();

// function arjun() {
//   let a = 15;
//   function vaja() {
//     let b = 2;
//     console.log(a);
//     function sir() {
//       console.log(a);
//       console.log(b);
//     }
//     sir();
//   }
//   vaja();
// }
// arjun()
// let a = document.getElementById("btn");
// function print() {
//   console.log("jitender");
// }
// a.addEventListener("click", arjun);
// let a= 10;

// function dataBase(data) {
//   return new Promise((resolve, reject) => {
//     if (data >= 2) {
//       resolve("Promise fullfiled");
//     } else {
//       reject("We are unable to perform task");
//     }
//   });
// }

// let box = document.querySelector(".box");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       box.style.backgroundColor = color;
//       resolve("color changed");
//     }, delay);
//   });
// }

// async function change() {
//   await changeColor("red", 2000);
//   await changeColor("blue", 2000);
//   await changeColor("green", 2000);
//   await changeColor("purple", 2000);
//   await changeColor("brown", 2000);
//   await changeColor("yellow", 2000);
//   await changeColor("black", 2000);
// }

// changeColor("red", 2000)
//   .then(() => {
//     return changeColor("blue", 2000);
//   })
//   .then(() => {
//     return changeColor("green", 2000);
//   })
//   .then(() => {
//     return changeColor("pink", 2000);
//   });
// let char = 9;
// switch (char) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
// }

// let char = "b";
// switch (char) {
//   case "a":
//     console.log(`This is a vowel => ${char}`);
//     break;
//   case "e":
//     console.log(`This is a vowel => ${char}`);
//     break;
//   case "i":
//     console.log(`This is a vowel => ${char}`);
//     break;
//   case "o":
//     console.log(`This is a vowel => ${char}`);
//     break;
//   case "u":
//     console.log(`This is a vowel => ${char}`);
//     break;
//   default:
//     console.log(`This is a constant => ${char}`);
// }
// for (let i = 972; i >= 897; i--) {
//   console.log(i);
// }
// let a = 0;
// let b = 1;
// for (let i = 1; i <= 5; i++) {
//   let c = a + b;
//   console.log(c);
//   a = b;
//   b = c;
// }
