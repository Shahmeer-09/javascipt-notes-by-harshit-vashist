// const bucket = ["fruits", "veg", "rice", "sauces"];

// const promiseFunction = new Promise((resolve, reject) => {
//   if (
//     bucket.includes("fruits") &&
//     bucket.includes("veg") &&
//     bucket.includes("rice")
//   ) {
// resolve({value: "friedRice"})
// resolve("friedRice");
// } else {
// reject( new error("couldnt do it !!!!!"))we can do this too
//     reject("couldnt do it !!!!!");
//   }
// });

// ############# it goes in microtast que and handeled by browser
// promiseFunction.then((myFriedrice)=>{
//     console.log("so we are done with our ", myFriedrice)
// },(error)=>{console.log(error)})
// promiseFunction
//   .then((myFriedrice) => {
//     console.log("so we are done with our ", myFriedrice);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// setTimeout(()=>{
//     console.log("hello world")
// }, 0);
// ################## using functon
// function reicePromide (){
//   const bucket = ["fruits", "veg", "rice", "sauces"];
//      return new Promise((resolve, reject) => {
//     if (
//       bucket.includes("fruits") &&
//       bucket.includes("veg") &&
//       bucket.includes("rice")
//     ) {
//       // resolve({value: "friedRice"})
//       resolve("friedRice");
//     } else {
//       // reject( new error("couldnt do it !!!!!"))we can do this too
//       reject("couldnt do it !!!!!");
//     }
//   });

// }

// reicePromide().then((myFriedrice) => {
//   console.log("so we are done with our ", myFriedrice);
// })
// .catch((error) => {
//   console.log(error);
// });
// setTimeout(()=>{
//   console.log("hello world")
// }, 0);
// for (let i = 0; i < 100; i++) {
//     console.log(Math.random(), i)

// }

// console.log("script ends")

// promise and set timeout################

// function promise() {
//   const value = false;
//   return new Promise((resolve, reject) => {
//   setTimeout(() => {
//       if (value) {
//         resolve();
//       } else {
//         reject();
//       }
//     });
//   }, 2000);
// }

// promise()
//   .then(() => {
//     console.log("resolved");
//   })
//   .catch(() => {
//     console.log("hello world");
//   });


// Promise.resolve and promise chaining #################


// function myPromise(){
//   return new Promise((resolve, reject)=>{
//     resolve("shah")
//   })
// }

// myPromise().then(value=>{
//   console.log(value);
//   value += " Meer"
//   return value
// }).then(value=>{
//   console.log(value);
//   value+= " Ali"
//   return value;
// }).then(value=>{
//   console.log(value)
// })


// call back to flat code ####################

const heading1 = document.querySelector(".heading1")
 const heading2 = document.querySelector(".heading2")
 const heading3 = document.querySelector(".heading3")
 const heading4 = document.querySelector(".heading4")
 const heading5 = document.querySelector(".heading5")
 const heading6 = document.querySelector(".heading6")
 const heading7 = document.querySelector(".heading7")


 function changeText(element, text, color,time){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      if(element){
          
      element.textContent = text;
      element.style.color = color;
       resolve()
      }
      else{
       reject( "error occured")
      }
  },time)
  })
}

changeText(heading1, "0ne", "blue",1000)
.then(()=>changeText(heading2, "tow", "green",1000))
.then(()=>changeText(heading3, "three", "purple",1000))
.then(()=>changeText(heading4, "four", "green",1000))
.then(()=>changeText(heading5, "five", "yellow",1000))
.then(()=>changeText(heading6, "six", "orange",1000))
.catch(error=>alert(error))