
// synchronous programming vs asynchronous programming
// synchronous programming
// synchronous programming single threaded
// console.log("script start");

// for (let i = 1; i < 10000; i++) {
    //   console.log("inside for loop");
// }

// console.log("script end");

// setTimeout

console.log("script start ");

const id= setTimeout(()=>{
    console.log("hello to this fucking world")
}, 2000)

for(let i= 0; i< 100 ; i++){
    console.log("shahmeer gonna be a fulstack developer someday inn sha Allah");
}
console.log(id)
// clearTimeout(id)
console.log("script ends");
