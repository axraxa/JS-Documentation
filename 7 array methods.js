//map 


[1,5,19,1,2,4].map(number => console.log(number)) // mapping is sort of , for loop
// array    //map  //variable name so each one of array element is called number  // after var name we can write even function
//example >

// [1,5,19].map(number => {
//   console.log(number);
//   console.log("jemaliko");
//   console.log("nanuli");
// })  // for some reason it does not work in vscode


// top print it out like an array
let sum = [5,20,10,20,500].map(number => number*10)
console.log(sum)  






//Filters -loops and returns array


const filters = (numbers,greaterThan) =>{
  let result = []
  for(var i=0;i<numbers.length;i++){
    if(numbers[i] > greaterThan){
      result.push(numbers[i])
    }
  }
  return result
}

console.log(filters([1,2,3,4,5,6],3))

// now we gonna use .filter
const nums = [1,2,3,4,5,6]
console.log(nums.filter(jem => jem >= 4))
console.log(nums.filter(jem => jem >= 2))





// to make array as string we use > array.join("how we want them seperated here") and if we want to make it from string to array we use > array.split("") or array.push





// Summing array with .reduce

const ricxvebi = [2,10,2,50]
const jami = ricxvebi.reduce(function(a,b){    // in function arguments it can be anything, even a and b.
  return a + b
  // return a * b
  // return a - b
  // return a / b
})
console.log(jami)

// also we can get return of multiplied sum .

//Also we can give a and b first value
// > example
const ricxvebii = [2,10,2,50]
const jamii = ricxvebi.reduce((a,b) => a + b, 0)
console.log(jamii)

// this is useful when we are using with objects. 








//Includes 

//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
   array.includes(searchElement);


// Calling includes() on non-array objects
// The includes() method reads the length property of this and then accesses each integer index.

const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.includes.call(arrayLike, 2));
// true
console.log(Array.prototype.includes.call(arrayLike, 1));
// false


// one of the good examples about using includes is in (folder)good exercises/array delete.js