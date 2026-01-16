const user={
    username:"hensi",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        console.log(this);//current context
        console.log(`Username:${this.username}`)
    }
}
// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);//{}
// console.log(this);//in browser console->window


function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
   // return this;
}
const userOne=new User("hitesh",12,true)
const userTwo=new User("hensi",12,false)
console.log(userOne)//if you are not write new keyword value is overwrite
//new->constructor create new object
