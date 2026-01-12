// function addTwoNumbers(num1,num2)//parameters
// {
//     console.log(num1+num2)
// }
// addTwoNumbers(3,4)//arguments

function addTwoNumbers1(num1,num2)//parameters
{
    let result=num1+num2;
    return result
}
const result=addTwoNumbers1(3,4)//arguments
console.log(result)

function loginUserMessage(username="sam"){
    if(username===undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())


//rest operator
function calculateCartPrice(...num1)
{
    return num1
}
console.log(calculateCartPrice(200,400,500))

function calculateCartPrice1(val1,val2,...num1)
{
    return num1
}
console.log(calculateCartPrice1(200,400,500,900,1000))


//object pass
const user={
    username:"hensi",
    price:100
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)//method 1
handleObject({
    username:"hensi",
    price:100
})//method 2


//array pass
const myNewArray=[200,400,100,600]
function handleArray(anyarray){
    return anyarray[1]
}
// console.log(handleArray(myNewArray))//method1
console.log(handleArray([200,400,100,600]))//method2