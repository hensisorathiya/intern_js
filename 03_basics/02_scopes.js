if(true)
{
    let a=10;//block
    const b=20;
    var c=30;//global 
}
// console.log(a);
// console.log(b);
console.log(c);//problem

//clauser    
function one(){
    const username="hensi"
    function two(){
        const website="youtube"
        console.log(username);
    }
    two()
}
one()


//interesting

console.log(addone(5))//possible
function addone(num){
    return num+1
}

// addtwo(5)//error
const addtwo=function(num){
    return num+2
}
console.log(addtwo(5))
