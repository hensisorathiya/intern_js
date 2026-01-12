//array

const myArr=[1,2,3,4]
const name1=["abc","jiyan","keya"]
// console.log(myArr[0])//1
// console.log(name1[0])

const arr=new Array(1,3,5);
// console.log(arr[1])

// //array methods
// arr.push(6);//add last
// arr.push(7);
// arr.pop()//delete last
// arr.unshift(0)//add first
// arr.shift()//delete first
// console.log(arr)

// console.log(arr.includes(6))//false
// console.log(arr.indexOf(9))//-1
// console.log(arr.indexOf(5))//2


// const newArr=arr.join()
// console.log(arr);
// console.log(newArr)//string


const hh=new Array(1,2,3,4,5,6)
console.log("A ",hh);
const myn1=hh.slice(1,3)//index 1 and 3 not include //not original array change
console.log(myn1);
console.log("B ",hh);

const myn2=hh.splice(1,3)//index 1 and 3 included //original array change(splice item is not include in array)
console.log(myn2)
console.log("B ",hh);



