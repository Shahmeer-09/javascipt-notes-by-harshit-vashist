// intro to functions ##################
// function singHappyBirthday(){
//     console.log("happy birthday to you ......");
// }

// function sumThreeNumbers(number1, number2, number3){
//     return number1 + number2 + number3;
// }



// isEven
// input : 1 number 
// output : true , false 

// function isEven(number){
//     return number % 2 === 0;
// }

// console.log(isEven(4));

// function 
// input : string 
// output: firstCharacter 

// function firstChar(anyString){
//     return anyString[0];
// }

// console.log(firstChar("zbc"));

// function 
// input : array, target (number)
// output: index of target if target present in array 

// function findTarget(array, target){
//     for(let i = 0; i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// const myArray = [1,3,8,90]
// const ans = findTarget(myArray, 4);
// console.log(ans);

// function expression #############3 

// const isOdd = function(number){
//     return number %2!=0;
// }

// console.log(isOdd(3));
// function expression 
// function singHappyBirthday(){
//     console.log("happy birthday to you ......");
// }

// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }

// singHappyBirthday();

// const sumThreeNumbers = function(number1, number2, number3){
//     return number1 + number2 + number3;
// }
// const ans = sumThreeNumbers(2,3,4);
// console.log(ans);


// function isEven(number){
//     return number % 2 === 0;
// }
// const isEven = function(number){
    // return number % 2 === 0;
// }
// console.log(isEven(2));

// const firstChar = function(anyString){
    // return anyString[0];
// }

// const findTarget = function(array, target){
    // for(let i = 0; i<array.length; i++){
        // if(array[i]===target){
            // return i;
        // }
    // }
    // return -1;
// }


// Arrow functions #############
// arrow functions
// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }

// const singHappyBirthday = () => {
//     console.log("happy birthday to you ......");
// }

// singHappyBirthday();

// const sumThreeNumbers = (number1, number2, number3) => {
//     return number1 + number2 + number3;
// }

// const ans = sumThreeNumbers(2,3,4);
// console.log(ans);

// // const isEven = function(number){
// //     return number % 2 === 0;
// // }

// const isEven = number => number % 2 === 0;


// console.log(isEven(4));

// const firstChar = anyString => anyString[0];

// console.log(firstChar("harshit"));


// const findTarget = (array, target) => {
//     for(let i = 0; i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }

// hoisting ########################
// hello();
//  function hello() {
//      console.log("hello world");
//  }
//   const hello  = function() {   /*throughs error#####*/
//      console.log("hello world");
//  }

// console.log(name1)
//  var name1 = "shahmeer" ;
//  let name1 = "shahmeer" ; error

// function inside function ##################

// function web (){

//     let power = (num1,num2)=> num1**num2;
//     console.log(power(2,3));
// console.log("website is on");
// }
// web();

// call back function ############### 
//   function myfunc(name) {
//       console.log(`my name is  ${name}`);

//   }
//   function myFunc2(callBack) {
//       console.log("hello bhaio");
//       callBack();
//   }
//   myFunc2(myfunc);

// function returning function ############# 

// function myFunc(){
//      function myFunc2(){
//         return "hello world";
//      }

//    return myFunc2;
// }
// // console.log(myFunc());
// const ans = myFunc();
//  console.log(ans());