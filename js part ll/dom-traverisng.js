const rootNode =  document.getRootNode()
const htmlNode = rootNode.childNodes[0];
// console.log(htmlNode.childNodes)
const headHtmlnode = htmlNode.childNodes[0];
const textHtmlnode = htmlNode.childNodes[1];
const bodyHtmlnode = htmlNode.childNodes[2];
// console.log(bodyHtmlnode.parentNode)
// console.log(headHtmlnode.nextSibling)
console.log(headHtmlnode.nextElementSibling)  //it ignores the textnodes
// console.log(headHtmlnode.childNodes)
const  h1 = document.querySelector("h1");
const body = h1.parentNode.parentNode;
body.style.color = "white";
body.style.backgroundColor = "black";


// const body = document.body;
// i can also use selctors to get childs
const head = document.querySelector("head")
const title =head.querySelector("title")

const container = document.querySelector(".container");
console.log(container.children) //ignores empty spaces 
