let person = new Map();
person.set('key', 'value')
person.set('key2', 'value2')
person.set(2, 'value3')
// console.log(person.get(2));
// console.log(person.keys())
for (let [key,value] of person){
    console.log(key,value)

}

for(let key of person.keys()){
    console.log(key)
}
// const person1= {
//     id: "sahh",
//     age: 13
    
// }

// const personmap = new Map();
// personmap.set(person1, {title: "shah"});
// console.log(personmap.get(person1).title); 

const obj  = {
    name : 'shsh',
    age: 12,
}
const obj2 = Object.assign({}, obj)
console.log(obj2)
console.log(obj)
const obj1 = Object.assign({},obj)
console.log(obj1);

// source code ###########################
// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key
// like array, number, string 

// object literal 
// key -> string 
// key -> symbol
// const person = {
//     firstName : "harshit",
//     age: 7,
//     1:"one"
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// // console.log(person[1]);
// for(let key in person){
//     console.log(typeof key);
// }

// key value pair 
// const person = new Map();
// person.set('firstName', 'Harshit');
// person.set('age', 7);
// person.set(1,'one');
// person.set([1,2,3],'onetwothree');
// person.set({1: 'one'},'onetwothree');
// console.log(person);
// console.log(person.get(1));
// for(let key of person.keys()){
//     console.log(key, typeof key);
// }
// for(let [key, value] of person){
//     // console.log(Array.isArray(key));
//     console.log(key, value)
// }

// const person1 = {
//     id: 1,
//     firstName: "harshit"
// }
// const person2 = {
//     id: 2,
//     firstName: "harshta"
// }

// const extraInfo = new Map();
// extraInfo.set(person1, {age: 8, gender: "male"});
// extraInfo.set(person2, {age: 9, gender: "female"});
// // console.log(userInfo);
// console.log(person1.id);
// console.log(extraInfo.get(person1).gender);
// console.log(extraInfo.get(person2).gender);