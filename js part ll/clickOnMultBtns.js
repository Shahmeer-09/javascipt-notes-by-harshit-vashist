const allButtons = document.querySelectorAll(".My-buttons button");

for( let btn of allButtons){
    btn.addEventListener("click", function(){
        console.log(this.textContent);
    })
}

// allButtons.forEach(function(button){
//     button.addEventListener("click", function(){
//         console.log("hi)
//     })
// })
