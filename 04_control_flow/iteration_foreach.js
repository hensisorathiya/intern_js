const coding=["js","ruby","java","python","cpp"]
//foreach loop no return any value
//filter return value

// coding.forEach(function (val){
//     console.log(val)
// })//method1

// coding.forEach((val)=>{
//     console.log(val)
// })//method2

// function greeting(item)
// {
//     console.log(item)
// }
// coding.forEach(greeting)//method3


// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })


//====important============
const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js",
        fees:999
    },
    {
        languageName:"java",
        languageFileName:"java",
        fees:999
    },
    {
        languageName:"python",
        languageFileName:"py",
        fees:99

    },

]
myCoding.forEach((item)=>{
    // console.log(item.languageName)
})



//filter


const myNums=[1,2,3,4,5,6]
// const newNums=myNums.filter((num)=>num>4)//method1
//  const newNums=myNums.filter((num)=>
//     {
//         return num>4
//     })method2
// console.log(newNums)


const code=myCoding.filter((c)=>{
    return c.fees===999
})
console.log(code)