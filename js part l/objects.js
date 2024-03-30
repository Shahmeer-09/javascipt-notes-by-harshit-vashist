// intro to objects #######################
// const students = { name :"ali", age:12,};
// const student = { 
//     name :"usama",
//     "age" : 12, /*can also write it this way*/
//     roll_num : 23,
//     marks : [12,34,23,32],
// }

// student.skill = "c++";
// console.log(student.age);
// console.log(student["skill"]);

// dot vs bracket notation ####################
// difference between dot and bracket notaion
// const key = "email";
// const person = {
//     name: "harshit",
//     age: 22,
//     "person hobbies": ["guitar", "sleeping", "listening music"]

// }

// console.log(person["person hobbies"]);
// person[key] = "harshitvashisth@gmail.com";
// // console.log(person);

// const key = "password";
// const person = {
//         name: "harshit",
//         age: 22,
//         "person hobbies": ["guitar", "sleeping", "listening music"]
    
//     }
    
//     person[key]="123ahah2";
//     console.log(person)
// iterate through object ####################

const person = {
            name: "harshit",
            age: 22,
            "person hobbies": ["guitar", "sleeping", "listening music"]
        
}

for (let key in person) {
    // console.log(key,":" ,person[key])
    console.log(`${key} : ${person[key]}`)
}

for(let key of Object.keys(person)){
    console.log(key)
}
// computed properties ############################
// const key1 = "name";
// const key2 = "age"

// const value1 = "shahmeer";
// const value2 = 23;

// const person= {
//     [key1]: value1,
//     [key2]: value2
// }
// console.log(person)

// const person2 = {}
// person2[key1]= value1;
// person2[key2]=value2;
// console.log(person)


//  object destructuring ######################

// const playList ={
//     song:"blinding lights",
//     singer:"weeknd",
//     year:2016,
//     production: "Hollywood"
// }

// // const {song, singer} = playList;
// // const {song:name, singer :gayak } = playList;
// const {song, singer, ...restKeys } = playList;
// console.log(song);
// console.log(singer);
// console.log(restKeys);

// objects in array #########################

// const array1 = [
//     {my_id : 12, my_name: "shahmeer", age: 20},
//     {my_id : 13, my_name: "ali", age: 21},
//     {my_id : 14, my_name: "sheikh", age: 22}
// ]

// console.log(arra1);
// for(let array of array1){
    // console.log(array["my_name"])
    // console.log(array.my_name)
// }

// nested array destructuring ###############333

// const [{age: myAge, my_name:Name}, {...restvalue}]=array1;
// console.log(myAge);
// console.log(Name)
// console.log(restvalue)
// console.log(myId)