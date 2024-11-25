// storing data in local storage 
// localStorage.setItem(key,value)

// reading data from local storage
// localStorage.getItem(key)

// local storage stores only string data. so storing any value, we need to convert it to the string
// JSON.stringify() 

// example
// const userData={
//     name :"Sagar",
//     email:"sagar@gmail.com"
// }

// localStorage.setItem('user',JSON.stringify(userData))

// retriving the data
// we need to convert the string representation of data back to its original form. we do this my using
// JSON.parse() method

// example 
// const storedUserData=localStorage.getItem('user')

// if (storedUserData){
//     const userData=JSON.parse(storedUserData)
//     console.log(userData);
// }else{
//     console.log('Data not found in local storage');
// }

//deleting data in localStroage
// we use .removeItem() method
// localStorage.removeItem('user');
// console.log("user data deleted");

// deleting all the items in localStorage
// we use clear() method to delete all the files
// localStorage.clear();

// to get the name of key
// we use key() method to get the retrieve the name of the key
// localStorage.key(index);