// const obj={}
// obj.id="123abc"
// obj.name="sammy"
// obj.isLoggedIn=false
// console.log(obj)

// const regularUser={
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"hensi",
//             lastname:"sorathiya"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.firstname)

 const obj1={1:"a",2:"b"}
// const obj2={3:"a",4:"b"}
// // const obj3={obj1,obj2}//method1
// // const obj3=Object.assign({},obj1,obj2) //method2
// const obj3={...obj1,...obj2}//method3 apread operator
// console.log(obj3)

const user=[
    {
        id:1,
        name:"keya"
    },
     {
        id:2,
        name:"keya"
    },
     {
        id:3,
        name:"keya"
    }
]
// console.log(user[1].id)


// console.log(Object.keys(obj1));//array
// console.log(Object.values(obj1));//array
// console.log(Object.entries(obj1));//array


//=======destructuring=====  
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
course.price//method1
const {p}=course//method2
console.log(p)//999 

