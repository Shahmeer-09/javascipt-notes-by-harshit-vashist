const URL  = "https://jsonplaceholder.typicode.com/posts"

 function sendRequest (methode, url ){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(methode,url);
        xhr.onload= function(){
            if(xhr.status >= 200 &&  xhr.status<300){
                // const response = xhr.response
                // const data = JSON.parse(response)
                resolve(xhr.response)
            }
            else{
                reject(new Error("something went wrong"))
            }
        }
        xhr.onerror = function(){
            console.log("network connection failed")
        }
        xhr.send();
    })
}

sendRequest("GET",URL)
   .then(response=>{
      const data = JSON.parse(response);
    
      return data
   })
   .then(data=>{
     const title =data[2].title
    //  console.log(data)
     return title
     
   })
   .then(title=>{
     console.log(title)
   })
   .catch(error=>{
    console.log(error)
   })