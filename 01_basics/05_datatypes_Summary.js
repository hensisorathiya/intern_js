//memory mai rakha jata hai 
//primitive (call by value)=>
// String,Number,Boolean,null,undefined,symbol(unique bnane k liye used),BigInt

const { use } = require("react");



//non primitive(call by reference)=>
//array,objects,functions

const score=100;
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123');
// console.log(id===anotherId)//false

const heros=["A","B","C"];//array
let myObj={
    name:"hensi",
    age:22
}//object

const myFunction=function(){
    console.log("Hello World"); 
}

//return type
let type=(typeof(myFunction));
console.log(type)
// ==========================interview
// number=>number
// double=>number
// Boolean=>Boolean
// null=>object
// undefined=>error
//symbol=>symbol
