//reduce

myNums=[1,2,3]
// const myTotal=myNums.reduce(function (acc,currval){
//     return acc+currval
// },0)

const myTotal=myNums.reduce((acc,currval)=>{
    return acc+currval
},0)
// console.log(myTotal);



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

const c=myCoding.reduce((acc,item)=>{
    return acc+item.fees
},0)
console.log(c)