const allButons = document.querySelectorAll(".My-buttons button");
allButons.forEach(button => {
    button.addEventListener("click", (e)=>{
        e.currentTarget.style.color = "red"
        e.currentTarget.style.backgroundColor = "black"
    })
});
// style= {bac}