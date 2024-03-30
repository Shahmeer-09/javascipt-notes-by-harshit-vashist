  const  btn =  document.querySelector(".btn-headline");
// methode that we gonnna use the most 
btn.addEventListener("click", ()=>{
     console.log(this);
    // in this function the value of this would be a wndow object
})
btn.addEventListener("click", function(){
     console.log(this);
    // in this function the value of this would be this button in which it is being called
})