//Immediately Invoked Function Expressions(IIFE)
//global scope k polution se bach n k liye

(function chai(){
    console.log(`DB CONNECTED`)
})(); //()()

((name)=>{
    console.log(`DB CONNECTED TWO`)
})('hensi');