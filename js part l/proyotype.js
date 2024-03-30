// introduction to prototype################

// function hello(){
//     console.log("hello world");
// }

// javascript function ===> function  + object

// console.log(hello.name);

// you can add your own properties 
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more usefull properties.


// console.log(hello.prototype); // {}

// only functions provide prototype property

// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing = function(){
//     return "lalalla";
// };
// console.log(hello.prototype.sing());


// using prototype ###########################




// const methods = {
//    about :  function () {
//     return `${this.firstName} is ${this.age} years old `
//  },
//    is18 : function () {
//       return this.age >=18;
//    }
    
// }

// function createUser(firstName, age, address, gmail,password) {
//    const user = Object.create(createUser.prototype);
//    user.firstName = firstName;
//    user.age = age;
//    user.address =address;
//    user.gmail= gmail;
//    user.password = + password;
//    return user;
// }

// createUser.prototype.about =   function () {
//     return `${this.firstName} is ${this.age} years old `
//  }
//  createUser.prototype.is18  = function () {
//     return this.age >=18;
//  }

// const user1 = createUser('shah',19,'haya','shsh@gmail.com','12334')
// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18());