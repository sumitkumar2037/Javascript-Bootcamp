const accountId=2037
let accountEmail="sumitkumar2037@gmail.com"
var accountPassword=123456789
accountCity="sheikhpura"//this is also the way to reserve the memory for variable but it is not recommended
// there is two way to declare the variable 
//1. use of const 
//2. use of  let

// NOTE 
/* 
----->semi colon is not mandatory.
----->prefer not to use var because of issue in block scope and function scope 
 */

// accountId=2 //. not allowed;


// to print multiple output in a table :
//use console.table([//write all the variaable you want to print])
console.table([accountId,accountEmail,accountPassword,accountCity])

let x;// the output is undefined if you donot initlize
console.log(x);