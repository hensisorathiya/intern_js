const name="hensi"
const age=12
//console.log(name+age+"is");//not used
console.log(`hello my name is ${name} and age is ${age}` )//used

const name1=new String("keya")//used
console.log(name1[0])//k
console.log(name1.__proto__)//{}
console.log(name1.length)//4
console.log(name1.toUpperCase())//KEYA
console.log(name1.charAt(1));//e
console.log(name1.indexOf('k'))//0
console.log(name1);
//substring=>positive value allowed
//slice =>negative value allowed

const s1="    hensi    ";
console.log(s1.trim()) ;

const s2="https:/hnesi.com/hoitesh"
console.log(s2.replace('hnesi','hensi'))
console.log(s2)
