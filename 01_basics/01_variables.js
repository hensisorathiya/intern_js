const accountId=1234;
let accountEmail="hensi1@gmail.com";
var accountPassword=123;
accountCity="jaipur";
let accountState;//undefined

// accountId=678 //not allowed

 accountEmail="riya@gmail.com";
var accountPassword=456;
accountCity="bengluru";

// prefer not used var
// because of issue in block scope and function scope

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])