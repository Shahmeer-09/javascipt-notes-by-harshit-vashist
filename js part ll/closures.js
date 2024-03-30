// closures ####################
// if a function  is return from a function it returns with the local memory of the parent function 




// function myFunction(power){
//     return function(number){
//         return number ** power
//     }
// }
// const square = myFunction(2);
// const ans = square(3);
// console.log(ans);


// const cube = myFunction(3);
// const ans2 = cube(3);
// console.log(ans2);


// function myFunction(power){
//     return function(number){
//         return number ** power
//     }
// }
// const square = myFunction(2);
// const ans = square(3);
// console.log(ans);


// const cube = myFunction(3);
// const ans2 = cube(3);
// console.log(ans2);


// closure last example #######################

// function myfunc(){
//     return function(){
//         let counter = 0;
//         if(counter <1){
//             console.log("i called once ")
//         }
//         else{
//             console.log("i have been already called ")
//         }
//     }
// }

// const myfunc1 = myfunc();
// myfunc1();
// myfunc1();