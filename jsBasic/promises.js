//promise = "promise of the code execution". it is an object representing the eventual completion (or failure) of an async operation and allows us to handle the result once its ready.

// life cycle of promise
// 1. Pending- the operation is going, result is not availabe yet.
// 2. Fulfilled- the operation is successful, the result is available
// 3. Rejected - the operation failed, and error occured

// using the promise
// declaring the promise
// let promiseName= new Promise(function(myResolve,myReject)){
// other codes
//     myResolve(); //when successfull
//     myReject(); //when error
// });


// promiseName.then(
//     function(value){
//         //code if successful
//     }
//     function(error){
//         // code if error
//     }
// )

// example of the promise

// let myPromise=new Promise(function(resolve,reject){
//     const x="letsPromiseToStayForever";
//     const y="letsPromiseToStayForever";
//     if(x===y){
//         resolve();
//     }else{
//         reject();
//     }
// });

// myPromise.then(function(){
//     console.log('Some promises lasts forver');
// })
// .catch(function(){
//     console.log('See you in next universe');
// });

// chaining the promises -> allows us to perfrom a series of async tasks in specific order
