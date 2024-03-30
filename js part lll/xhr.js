// const URL =  "https://jsonplaceholder.typicode.com/posts"
// const xhr = new XMLHttpRequest();
// console.log(xhr);


// xhr.open("GET", URL);
// xhr.onreadystatechange= function(){
//     if (xhr.readyState ===4) {
//         const response = this.response;
//         const Data = JSON.parse(response)
//         console.log(typeof Data)
//     }
// }
// xhr.onload = function (){
//     console.log(xhr.readyState)
//     const response = this.response;
//     const Data = JSON.parse(response)
// }

// xhr.send()

// ################### error handling ########################

const URL =  "https://jsonplaceholder.typicode.com/posts"

const xhr   = new XMLHttpRequest();

xhr.open("GET", URL)
xhr.onload= ()=>{
    if(xhr.status >=200 && xhr.status < 300){
        const response  = xhr.response;
        const data = JSON.parse(response);
        console.log(data);
        const id = data[3].id
        const URL2 = `${URL}/4${id}`
        const xhr2   = new XMLHttpRequest();
        xhr2.open("GET", URL2)
        xhr2.onload =()=>{
            const data2 = JSON.parse(xhr2.response)
            console.log(data2) 
        }
        xhr2.send()    
    }
    else{
        console.log ("something went wrong")
    }
    
}
xhr.onerror=()=>{
    console.log("no internet connection")
}
xhr.send();

