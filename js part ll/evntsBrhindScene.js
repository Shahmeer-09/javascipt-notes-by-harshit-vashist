console.log("script start !!!!!!!!!")
const buttons = document.querySelectorAll(".My-buttons button");

buttons.forEach((button)=>{
    button.addEventListener("click", (eo)=>{
        let num =0;
        for (let i = 0; i <=1000000000; i++) {
            num += i;
            
        }
        console.log(eo.currentTarget.textContent, num)
    })
})
let outerVal =0;
for (let i = 0; i <=1000000000; i++) {
    outerVal += i;
    
}
console.log("the outer val" ,outerVal)
console.log("script ends !!!!!!!!")




//untill  the  code execcutes the web APIs of browsers put an eye on the click when someone clicks an element it goes in a line and event loop put an eye on them when the GEC pops the events go in the stack and so on