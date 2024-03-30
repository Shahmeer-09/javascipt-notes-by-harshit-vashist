const body = document.querySelector("body");
const buton = document.querySelector("button")

function randomColor(){
    const red = Math.floor(Math.random()*200)
    const green = Math.floor(Math.random()*200)
    const blue = Math.floor(Math.random()*200)
    const colorgenerator = `rgb(${red}, ${green}, ${blue})`
    return colorgenerator;
}


    var intervalID= setInterval(()=>{
       const randomcolor = randomColor();
       body.style.background = randomcolor; 
   },1000)

 buton.addEventListener("click", (e)=>{
    clearInterval(intervalID);
   buton.textContent = body.style.background
   
 })
 