//  const obj1 = {
//     firstName : "shahmeer",
//     age :21,
//     about: function(){
//           console.log(`my name is ${this.firstName} and my age is ${this.age} `)   
//     }
//  }

//  obj1.about()
//  function ownmethod (){
//     console.log(`my name is ${this.firstName} and my age is ${this.age} `)   
// }
//  const obj2 = {
//     firstName : "meer",
//     age :20,
//     about: ownmethod
//  }

// short syntax #################3

//  const obj3 = {
//     firstName : "meer",
//     age :20,
//     about(){
//       console.log()
//     }
//  }

//  obj2.about()


// using function to create objects ##################
// function createUser(firstName, age, address, gmail,password) {
//    const user = {};
//    user.firstName = firstName;
//    user.age = age;
//    user.address =address;
//    user.gmail= gmail;
//    user.password = + password;
//    user.about = function () {
//       return `${this.firstName} is ${this.age} years old `
//    }
//    user.is18 = function () {
//       return this.age >=18;
//    }

//    return user;
// }
// const user1 = createUser('shah',12,'haya','shsh@gmail.com','12334')
// console.log(user1);



// another methode ######################

// making methods in separate objects so that they may utilize the space only once 


// const methods = {
//    about :  function () {
//       return `${this.firstName} is ${this.age} years old `
//    },
//    is18 : function () {
//       return this.age >=18;
//    }

// }

// function createUser(firstName, age, address, gmail,password) {
//    const user = {};
//    user.firstName = firstName;
//    user.age = age;
//    user.address =address;
//    user.gmail= gmail;
//    user.password = + password;
//   user.about = methods.about
//   user.is18 = methods.is18
//    return user;
// }
// const user1 = createUser('shah',12,'haya','shsh@gmail.com','12334')
// console.log(user1);
// console.log(user1.about());


// using Object.create ########################

// using object.create we can make a relationship between objets

// const methods = {
//    about :  function () {
//       return `${this.firstName} is ${this.age} years old `
//    },
//    is18 : function () {
//       return this.age >=18;
//    }
    
// }

// function createUser(firstName, age, address, gmail,password) {
//    const user = Object.create(methods);
//    user.firstName = firstName;
//    user.age = age;
//    user.address =address;
//    user.gmail= gmail;
//    user.password = + password;
//    return user;
// }
// const user1 = createUser('shah',19,'haya','shsh@gmail.com','12334')
// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18());


