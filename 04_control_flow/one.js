//if
//if else

// && ||

//switch 


//truthy value
const userEmail="h@gmail.com"
if(userEmail){
    console.log('got user email')
}
else
{
    console.log("do't have user email")
}

//falsy value
// false,0,-0,BigInt 0n,"",null,undefined,NaN
//truthy value
// "0" ,'false',true," ",[],{},function(){}


//array is empty or not
// if(userEmail.length===0){
//     console.log("array is empty")
// }


//object is empty or not
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty")
}


//false==0 ->true
//false==''->true
//0==''->true



//nullish coalescing operator(??): null undefined
let val1;
// val1=5??10
 //val1=null??10
 val1=null??10??15
console.log(val1)


//terniary operator ?true:false