// HOF-> Higher Order Function
// function that takes one or more functions as arguments or returns a function as its result

// example of higher order functions: calculating the area

// const radius= [1,2,3];

// const area=function(radius){
//     return Math.PI * radius *radius;
// }

// const diameter=function(radius){
//     return 2*radius;
// }

// const calculate = function(radius,logic){
//     const output =[];
//     for(let i = 0; i< radius.length;i++){
//         output.push(logic(radius[i]))
//     }
//     return output;
// }

// console.log(calculate(radius,area));
// console.log(calculate(radius,diameter));

// using HOF involves various ways.  
/*
working with arrays, we can use the
->we can use map(), reduce(), filter(), and sort()

-> working with objects, we can use the Object.entriers() function to create a new array from an object.

-> when working with functions, we can use the compose() function to create complex functions from simpler ones.

*/

// .reduce() method
// this method iterates through an arrray and returns a single value.
// it takes callback function and two args -> accumulator -> result of previous iterationand currentValue -> current element 
// example : sum up all the elements of arrray
// const arrayofNums=[1,2,3,4,5];
// const sum=arrayofNums.reduce((accumulator,currentValue)=> {
//     return accumulator+ currentValue;
// });

// console.log(sum)

// .forEach() Method
//  this method executes a callback function on each of the elements in an array in order
// executes a provided function once for each element in an array

// const nums=[1,2,3,4,5];
// nums.forEach(num => {
//     console.log(num);
// });

//.filter() method
// creates a new array containing only the elements that meet a specified condition.
// example 
// const nums=[1,2,3,4,5,6,7,8];
// const evenNums=nums.filter(num=>{
//     return num%2==0;
// });

// console.log(evenNums);

// .map() method
// executes a callback function on each element in array and return a new array made up of the return values from the callback function.
// the original array is not altered.

// example 
// const names=['Elon','Mark','Alen'];
// const message=names.map(name=>{
//     return name + 'are techgeeks';
// });
// console.log(message);
// // next example
// const nums=[1,2,3,4,5];
// const doubleNums=nums.map((num)=>num*2);

// console.log(doubleNums);

// .filter() and .map() => both used when working with array, but 
// .filter() is for selecting items in an array based on a conditiom.

// .map() is for transforming each item in array without changing the original array.