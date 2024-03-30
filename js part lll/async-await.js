console.log('script starts')
const URL  = "https://jsonplaceholder.typicode.com/posts";


async function getReguest(){
    const response  = await fetch(URL)
    const data =await response.json()
    if(!response.ok){
        throw new Error('something went wrong')
    }
    // console.log(response)
    return data;
}
 getReguest() 
 .then(data=>{
    console.log(data)
 })
 .catch(error=>{
    console.log(error)
 })



 