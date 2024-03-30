const nummer = +prompt("Enter a number to check a prime nubmer ");

let prime=true;
if(nummer==1){
    console.log("1 is neither prime nor a composite number ");

}
for(let i = 2; i<=nummer/2; i++){
    if (nummer%i===0) {
        prime =false;
        break;
    }
    else if(nummer/2===(nummer/2)+1){
        prime= true
        break
    }
}
if(prime){
    console.log(`${nummer} is prime `)
}
else{
    console.log(`${nummer} is not prime`);
}

