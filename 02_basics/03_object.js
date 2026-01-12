//object

//sigleton->made with constructor
// Object.create
//const a=new object()

//non-singleton object
//object literals

const mySym=Symbol("key1")
const jsUser={
    name:"hensi ",
    age:18,
    location:"jaipur",
    [mySym]:"mykey1",
    email:"hensi@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}
// console.log(jsUser.name);
// console.log(jsUser["name"])
// // console.log(typeof jsUser["mySym"])//string not a symbol
// console.log( jsUser[mySym])

// jsUser.email="yaksh@gmail.com"
// Object.freeze(jsUser)//not change
// jsUser.email="abc@gmail.com"
// console.log(jsUser.email)
// console.log(jsUser)

jsUser.greeting=function(){
    console.log("hello js user");
}
jsUser.greetingTwo=function(){
    console.log(`hello js user,${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())