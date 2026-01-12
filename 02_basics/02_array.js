const fruit=["apple","banana","cherry","papaya"];
const food=["dabeli","vadapav","noodles"]

// fruit.push(food);//not in new array//1st method
// console.log(fruit);
// console.log(fruit[4][1])

// const food1=fruit.concat(food);//new array//2nd method
// console.log(food1);

//spread operator
const new_all=[...fruit,...food]//3rd method very used
// console.log(new_all)

const another_array=[1,2,[4,5],6,[7,8,[9,10]]]
// const real_another_array=another_array.flat(Infinity);
// console.log(real_another_array)

console.log(Array.isArray("hensi"))//false
console.log(Array.from("hensi"))//['h','e']
console.log(Array.from({name:"hensi"}))//[]//interesting

let s1=10;
let s2=20;
let s3=30;
console.log(Array.of(s1,s2,s3))