// let navItems  = document.getElementsByTagName("a");//returns html collection 
// console.log(navItems);

// for (let navitem  of navItems ){
//     navitem.style.color= "green"
//     navitem.style.backgroundColor= "white"
//     navitem.style.fontWeight= "bold"
// }
// for (let i = 0; i < navItems.length; i++) {
//     const navitem = navItems[i];
//     navitem.style.color= "green"
//     navitem.style.backgroundColor= "white"
//     navitem.style.fontWeight= "bold"
// }
// in case HTMLCollection we cant use for each loop
// navItems = Array.from(navItems)
// navItems.forEach(navitem => {
//     navitem.style.color= "green"
//     navitem.style.backgroundColor= "white"
//     navitem.style.fontWeight= "bold"

// });

const navItems = document.querySelectorAll("a");
// console.log(navitems)

// in case of nodelist we can use for each loop
navItems.forEach(navitem => {
        navitem.style.color= "green"
        navitem.style.backgroundColor= "white"
        navitem.style.fontWeight= "bold"
    
    });