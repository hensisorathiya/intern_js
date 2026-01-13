// for loop
let myHero=["flash","batman","superman"]

for(let index=0; index<myHero.length; index++)
{
    // const element=myHero[index];
    // console.log(element)
}

//break and continue

for(let index=1; index<=20; index++)
{
    if(index==5)
    {
        // console.log(`detected 5`);
        break;
    }
   console.log(`value of i is ${index}`)
}
for(let index=1; index<=20; index++)
{
    if(index==5)
    {
        // console.log(`detected 5`);
        continue;
    }
//    console.log(`value of i is ${index}`)
}


//while loop
//do while loop




//for of//array
//["","",""]
//[{},{},{}]
//in array direct value can fetch with used of key


const arr=[1,2,3,4,5]
for(const i of arr)
{
    // console.log(i)
}

const greetings="hello world"
for(const greet of greetings)
{
   // console.log(`each char ${greet}`)
}


//Maps
//unique value
//for of loop used
//for in loop not used

const map=new Map()
map.set('IN','india')
map.set('USA','united states of america')
map.set('Fr','france')
map.set('IN','india')
// console.log(map)

for (const [key,value] of map) {
    console.log(key,':-',value)
}


//objects in for of loop
 //for of loop not iteratable in object
const myobj={
    game1:'hocky',
    game2:'cricket',
    game3:'ludo'
};
// for (const obj of myobj) {
//     console.log(`key ${obj}`)
// }


//for in loop//object
//it is used with object 
//array :it is used with array but key is fetch direct 

for (const key in myobj) { 
    console.log(`key ${key} ,value ${myobj[key]}`)
}

const programming=["js","cpp","rb","py","java"]
for(const key in programming)
{
    console.log(`${programming[key]}`)
}