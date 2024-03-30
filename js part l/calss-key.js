



// class Animal{
//     constructor(firstName, age){
      
//      this.firstName = firstName;
//      this.age = age;
     

//     }

//     about(){
//         return `${this.firstName} is ${this.age} years old `
//     }
//     is18(){
//     return this.age >=2? "is cute": 'is not cute';

//     }
// }

// class dog extends Animal{
        
// }

// const tommy =  new Animal('tomy', 2)
// console.log(tommy)
// console.log(tommy.about())
// console.log(tommy.is18())

// const Animal1 = new Animal('cow',3);
// console.log(Animal1);
// console.log(Animal1.about());
// console.log(Animal1.is18());


// super key word ##########################

// class Animal{
//     constructor(firstName, age){
      
//      this.firstName = firstName;
//      this.age = age;
     

//     }

//     about(){
//         return `${this.firstName} is ${this.age} years old `
//     }
//     is18(){
//     return this.age >=2? "is cute": 'is not cute';

//     }
// }

// class dog extends Animal{
//         constructor(firstName, age, speed){
//               super(firstName,age)
//               this.speed=speed; 
//         }

//         about(){
//             return `${this.firstName} is ${this.age} years old and ${this.speed}`

//         }
//         run(){
//             return this.speed
//         }
// }

// const tommy =  new dog('tomy', 2,24)
// console.log(tommy)
// console.log(tommy.about())
// console.log(tommy.is18())
// console.log(tommy.run())

// const Animal1 = new Animal('cow',3);
// console.log(Animal1);
// console.log(Animal1.about());
// console.log(Animal1.is18());

// setters and getters #############################



class person{
    constructor(firstName, lastnName, age){
        this.firstName=firstName;
        this.lastnName=lastnName;
        this.age=age;
    }
    static information(){
        return "hello js"
    }

    get fullName(){
        return `${this.firstName} ${this.lastnName} `
    }

    set fullName(fullName){
        const [firstName, lastnName]= fullName.split(" ");
        this.firstName=firstName;
        this.lastnName= lastnName;
    }
    set SfirstName(firstName){
        this.firstName=firstName;
    }
    set slastnName(lastnName){
        this.lastnName=lastnName;
    }
  

}



const person1 = new person("shah", "meer", 20)
console.log(person1);
console.log(person1.fullName)
person1.SfirstName = "ali";
person1.slastnName = "haider";
console.log(person1)
console.log(person1.firstName)
console.log(person1.lastnName)
const ans =  person.information;
console.log(ans())