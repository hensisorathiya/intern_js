
//promise created

//method-1
// const promiseOne=new Promise(function(resolve,reject){
//     //do and async task
//     //DB calls,cryptography,network 
//     setTimeout(function(){
//         console.log('Async task is complete')
//         resolve()//method call and it connect with resolve and then
//     },1000)
// });

// //promise consuption
// //.then->resolve
// promiseOne.then(function(){
//     console.log("promise consumed");
    
// })


//method-2

// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Async task 2")
//         resolve();
//     }, 2000);
// }).then(function(){
//     console.log("Async 2 resolved")
// })



// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//             resolve({username:"chai",
//                 email:"chai@gmail.com"
//             })
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })


// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username:"hensi",
//         password:"123"})
//         }else{
//             reject('ERROR:something went wrong')
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);   
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("the promise is either resolved or rejected")
// })


//method-2
// const promiseFive=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error=true;
//         if(!error){
//             resolve({username:"keya",password:"abc"})
//         }else
//         {
//             reject(`error:something went wrong`)
//         }  
//     },2000)
// })

// //async and await is second method of promise
// //either use then catch or async and await
// //async and await is not handle error it is always assume all work is successfully done 

// async function consumePromiseFive(){
//     try{
//         const response=await promiseFive
//         console.log(response)
//     }catch(error){
//         console.log(error)
//     }
// }
// consumePromiseFive()



//method-1
const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
// async function getAllUsers(){
//     try{
//         const response=await fetch(requestUrl);
//         const data=await response.json()
//         console.log(data)
//     }catch(error){
//         console.log('error',error)
//     }
// }

// getAllUsers();


//method-2
fetch(requestUrl).then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error)
})