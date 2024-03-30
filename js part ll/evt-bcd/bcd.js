const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

grandparent.addEventListener("click",()=>{
    console.log("capture grandparent")
},true)
parent.addEventListener("click",()=>{
    console.log("capture parent")
},true)
child.addEventListener("click",()=>{
    console.log("capture child")
},true)
document.body.addEventListener("click",()=>{
    console.log("capture body")
},true)


grandparent.addEventListener("click",()=>{
    console.log("bubble grandparent")
})
parent.addEventListener("click",()=>{
    console.log("bubble parent")
})
child.addEventListener("click",()=>{
    console.log("bubble child")
})
document.body.addEventListener("click",()=>{
    console.log("bubble body")
})