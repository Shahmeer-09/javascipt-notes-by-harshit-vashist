// using call we can pass ay object to function along with some parameters

function about(song, anime){
    console.log(`the name is ${this.firstName} and the age is ${ this.age} ${song} , ${anime}`)
}


const obj1={
    firstName:"shah",
    age: 8
}
const obj2={
    firstName:"shahmeer",
    age: 10
}
about.call(obj2, "kun",'hxh');
about.apply(obj2, ['kun','hxh']); /*use list */
const funct=  about.bind(obj2, ['kun','hxh']); /*returns function*/
console.log(funct)


//  in case of arrow functiom ################3


// this key word is window not the object in which it lies or call a no effect on it