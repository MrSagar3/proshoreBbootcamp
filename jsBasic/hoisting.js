// Hoisting => behaviour where variable and function declaration are moved to the top during compilation phase. 
// it makes the use of variable or function without first delcaring it. it doesnot gives the error but can give undefined as output

// if variable is made using the 'var' then that variable can be used without declaring it first but varible is made using the 'let' and when used before declaring can give an error

// example here var is used and we used the variable before declaring it so we will get undefined as the output

// console.log(name)
// var name="Sagar" 

// let => can never be hoisted. we will get like in the example below

// console.log(name)
// let name ="Sagar";

// regular function are always hoisted

// example => we made a regular function. and we used the function before it is defined and it gave the output as well

// add()
// function add(){
//     console.log(1+1);
   
// }

// arrow function can never be hoisted and as in the example below we will get the output

// add()
// let add=()+>{
//     console.log(1+1)
// }

// named function can never be hoisted 
// example below we will get error
// add()
// var add=function(){
//     console.log(1+2)
// }

