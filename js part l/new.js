

function CreateUser(firstName, age, address, gmail,password) {
  
   this.firstName = firstName;
   this.age = age;
   this.address =address;
   this.gmail= gmail;
   this.password = + password;
}

CreateUser.prototype.about =   function () {
    return `${this.firstName} is ${this.age} years old `
 }
 CreateUser.prototype.is18  = function () {
    return this.age >=18;
 }

const user1 = new CreateUser('shah',19,'haya','shsh@gmail.com','12334')
console.log(user1);
console.log(user1.about());
console.log(user1.is18());

// for checking the keys in only the constructor or the object function we use hasOwnProperty 
for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key)
    }
}



// more about prototype################################

let numbers = [1,2,3];

console.log(Object.getPrototypeOf(numbers));
console.log(Array.prototype);
console.log(numbers);

function hello(){
    console.log("hello");
}