let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)//object interview

// let d1=new Date(2023,0,23)
// console.log(d1.toDateString())
// let d2=new Date(2023,0,23,5,3)
// console.log(d2.toLocaleString())
// let d3=new Date("01-01-2025")
// console.log(d3.toLocaleString())

let d4=Date.now()//ms ans
console.log(d4)
console.log(Math.floor(Date.now()/1000))//convert into s

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());//1->monday

newDate.toLocaleString('defalt',{
    weekday:"long"
})
