const user={
    username:"hensi",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

console.log(this)//{}

// function chai(){
//     let username="yaksh"
//     console.log(this.username)//undefined
// }
// chai()//only used in object not a function

// const chai=function(){
//     let username="yaksh"
//     console.log(this.username)//undefined
// }
// chai()//only used in object not a function

// const chai = ()   =>{
//     let username="yaksh"
//     console.log(this.username)//undefined
// }
// chai()//only used in object not a function 

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// const addTwo=(num1,num2)=> num1+num2
// const addTwo=(num1,num2)=> (num1+num2)
const addTwo=(num1,num2)=> ({username:"hneis"})//object return

console.log(addTwo(2,5))
 