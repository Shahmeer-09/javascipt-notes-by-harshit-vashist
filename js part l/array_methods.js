// array methods ################

// for each ##################
// const numbers = [3,5,6,4];

// function mult2(number, index) {
//     console.log(` the number is ${number} : index is ${index}`);
//     // console.log(`${number} * 2 =${number * 2} `);
// }
// for (let i = 0; i < numbers.length; i++) {
//        mult2(numbers[i], i);
// }

// numbers.forEach(function(number , index){
//     console.log(`the number is ${number} : index is ${index}`);
//     console.log(`${number}*2  = ${ number*2}`);
// });

// numbers.forEach((number,index)=> console.log(number,index))
// const users = [
//    {firstName : "shah meer" , age : 12},
//    {firstName : "shah veer" , age : 13},
//    {firstName : "shah zain" , age : 14},
// ]
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i].firstName)
    
// }
// users.forEach(function(user){
//     console.log(user.firstName)
// })

// for (let user in users){
//     console.log(users[user].firstName)
// }
// for (let user of users){
//     console.log(user.firstName)
// }



// map method ####################
// const numbers = [3,5,6,4];

// let  multnumber = (Number)=>{
//   return  Number*Number;
// } 

// const ans =   numbers.map(function(number){
//     return number* number
// })
// console.log(ans)
// const users = [
//        {firstName : "shah meer" , age : 12},
//        {firstName : "shah veer" , age : 13},
//        {firstName : "shah zain" , age : 14},
//     ]

// const ans=     users.map(function (user) {
//         return user.firstName
//     })

//     console.log(ans)


// filter method ##################

// const numbers = [2,3,4,5,5,9,4];

// function iseven(num){
//         return num%2===0;
// }

// const evenNumber = numbers.filter(iseven);
// const evenNumber = numbers.filter((num)=> num%2===0);
// console.log(evenNumber)


// reduce methode  ######################

// const product = [
//     {prodame :"phone", price : 12000},
//     {prodame :"purse", price : 5000},

// ];

// const total_price =   product.reduce((accumulator ,  currenProduct)=>accumulator + currenProduct.price, 0)
// const total_price =  product.reduce((accumulator,currenProduct)=>{ 
//     return accumulator + currenProduct.price;
// }, 0)
// console.log(total_price)

// sort methode #################### 
// sort method 
// ASCII TABLE 
//char : ascii value


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125


// sort  

// 5,9,1200, 400, 3000
// 5, 9, 400, 1200, 3000 (expected)

// ["5", "9", "1210", "410", "3000"] 
// [53, 57, 49, 52, 51]

// const userNames = ['harshit', 'abcd', 'mohit', 'nitish', 'aabc', 'ABC', 'Harshit'];
// userNames.sort();
// console.log(userNames);

// const numbers = [5,9,1200, 410, 3000];
// numbers.sort((a,b)=>{
//     return b-a;
// });
// numbers.sort((a,b)=>a-b);
// console.log(numbers);

// 1200,410 
// a-b ---> 790
// a-b ---> postive (greater than 0) ---> b, a
// 410 , 1200

// a-b ---> negative ----> a,b
// 5, 9 ---> -4 
// price lowToHigh HighToLow 
// const products = [
//     {productId: 1, produceName: "p1",price: 300 },
//     {productId: 2, produceName: "p2",price: 3000 },
//     {productId: 3, produceName: "p3",price: 200 },
//     {productId: 4, produceName: "p4",price: 8000 },
//     {productId: 5, produceName: "p5",price: 500 },
// ]

// // lowToHigh
// const lowToHigh = products.slice(0).sort((a,b)=>{
//     return a.price-b.price
// });

// const highToLow = products.slice(0).sort((a,b)=>{
//     return b.price-a.price;
// });



// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 20},
// ]


// users.sort((a,b)=>{
//     if(a.firstName > b.firstName){
//         return 1;
//     }else{
//         return -1;
//     }
// });

// console.log(users);




// const number = [1,2,45,6,778,12];
// const sortNumber = number.sort((a,b)=> a-b);
// console.log(sortNumber);


// const product = [
//     {item: "item1", color : "skip", price : 300 },
//     {item: "item2", color : "skip", price : 200 },
//     {item: "item3", color : "skip", price : 100 },
//     {item: "item4", color : "skip", price : 400 },
//     {item: "item5", color : "skip", price : 250 },
// ]

// const productSort =  [].concat(product).sort((a,b)=> a.price-b.price);
// console.log(productSort)
// console.log(product)



// find methode ################
// find method 

// const myArray = ["Hello", "catt", "dog", "lion"];

// function isLength3(string){
//     return string.length === 3;
// }

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);

// const users = [
//     {userId : 1, userName: "harshit"},
//     {userId : 2, userName: "harsh"},
//     {userId : 3, userName: "nitish"},
//     {userId : 4, userName: "mohit"},
//     {userId : 5, userName: "aaditya"},
// ];

// const myUser = users.find((user)=>user.userId===3);
// console.log(myUser);

// every methode #######################
//  const numbers =[2,4,6,8,10];

//  const ans  = numbers.every((num)=>num%2===0);
//  console.log(ans);


//  const products = [
//         {productId: 1, produceName: "p1",price: 300 },
//         {productId: 2, produceName: "p2",price: 3000 },
//         {productId: 3, produceName: "p3",price: 400 },
//         {productId: 4, produceName: "p4",price: 8000 },
//         {productId: 5, produceName: "p5",price: 500 },
//     ]

// const ans2 = products.every((prodPrice)=>prodPrice.price>200)
// console.log(ans2)


// some mrthode ##########################
// products = [
//     {productId: 1, produceName: "p1",price: 300 },
//     {productId: 2, produceName: "p2",price: 3000 },
//     {productId: 3, produceName: "p3",price: 400 },
//     {productId: 4, produceName: "p4",price: 8000 },
//     {productId: 5, produceName: "p5",price: 500 },
// ]

// const ans2 = products.some((prodPrice)=>prodPrice.price<200)
// console.log(ans2)

// fill mehtode ###############

// const myArray = new Array(10).fill(2);
// console.log(myArray)


// const array = [1,2,3,4,5,6,7,8,9];

// const ans = array.fill(0,1,8);
// console.log(ans)


// splice methode ##########################

// const string = ["item1","item2","item3"]
// const result = string.splice(1,1,"hello");
// console.log(result);
// console.log(string)

// iterables 
// jispe hum for of loop laga sakein
// string , array are iterable 

// const firstName = "Harshit";
// for(let char of firstName){
//     console.log(char);
// }

// const items = ['item1', 'item2', 'item3'];
// for(let item of items){
//     console.log(item);
// }

// array like object 
// jinke pas length property hoti hai 
// aur jiko hum index se access kar sakte hai
// example :- string 

// const firstName = "harshit";
// console.log(firstName.length);
// console.log(firstName[2]);