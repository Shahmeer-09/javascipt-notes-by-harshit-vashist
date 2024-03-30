// array #########################3
// let mixed= ["hello","hiii", 2, 3.6 ]
// console.log(mixed)
// console.log(typeof mixed)
// console.log(Array.isArray(mixed))
// intro to arrays 
// reference type 
// how to create arrays

// ordered collection of items 

// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);
// console.log(numbers);
// console.log(fruits[2]);
// let fruits = ["apple", "mango", "grapes"];
// let obj = {}; // object literal
// console.log(fruits);
// fruits[1] = "banana";
// console.log(fruits);
// console.log(typeof fruits);
// console.log(typeof obj);
// console.log(Array.isArray(fruits));
// console.log(Array.isArray(obj));


// array indexing 

// array push pop########################## 

// array shift unshift ###########################33

// let fruits = ["apple", "mango", "grapes"];
// let popped = fruits.pop()
// console.log(fruits);
// console.log(popped)

// console.log(fruits);
// push 
// fruits.push("banana");
// console.log(fruits);
// pop 
// let poppedFruit = fruits.pop();
// console.log(fruits);
// console.log("popped fruits is", poppedFruit);

// unshift 
// fruits.unshift("banana");
// fruits.unshift("myfruit");
// console.log(fruits);

// shift 
// let removedFruit = fruits.shift();
// console.log(fruits);
// console.log("removed fruits is ", removedFruit);

// clone array ###########################

// let arr1 = ["ali", "shahmeer", "usama"];
// let arr2 = arr1.slice(0);
// let arr2 = arr1.slice(0).concat(["item3", "item4"]);
// arr1.push("ali")
// console.log(arr1===arr2);
// console.log(arr1);
// console.log(arr2);

// concat array ######################
// let arr1 = ["ali", "shahmeer", "usama"];
// let arr2 = [].concat(arr1, ["hiii","hello"]);
// arr1.push("ali")
// console.log(arr1===arr2);
// console.log(arr1);
// console.log(arr2);

// spread operator ##################
// let arr1 = ["ali", "shahmeer", "usama"];
// let newArr = ["you","me"];
// let arr2 = [...arr1, ...newArr];
// arr1.push("ali")
// console.log(arr1===arr2);
// console.log(arr1);
// console.log(arr2);

// for loop in array ##################
// for loop in array 

// let fruits = ["apple", "mango", "grapes", "banana"];

// for(let i=0; i<=9;i++){
//     console.log(i);
// }

// console.log(fruits.length);
// console.log(fruits[fruits.length-2]);
// let fruits2 = [];
// for(let i=0; i < fruits.length; i++){
    // fruits2.push(fruits[i].toUpperCase());
// }

// console.log(fruits2);

// use const for creating arrays#######################
// use const for creating array

// heap memory ["apple", "mango"] 0x11

// const fruits = ["apple", "mango"]; // 0x11
// fruits.push("banana");
// console.log(fruits);

// while loop in arrays #################
// use const for creating array

// heap memory ["apple", "mango"] 0x11

// const fruits = ["apple", "mango"]; // 0x11
// fruits.push("banana");
// console.log(fruits);

// for of loop ################### 


// const fruits = ["apple","mango","bnanana","orange", "guava"];
// const fruits2 = [];
// for (let fruit of fruits){
//     fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2)

// for in loop####################3
// const fruits = ["apple","mango","bnanana","orange", "guava"];
// const fruits2 = [];
// for (let fruitsi in fruits){
//     fruits2.push(fruits[fruitsi].toUpperCase());
// }
// console.log(fruits2)

// array destructuring #################

// const myArray = ["apple","mango","bnanana","orange", "guava"];

// let [ myVar1, , myVar2, ...myNewVar  ]= myArray;
// console.log(myVar1);
// console.log(myVar2);
// console.log(myNewVar);



