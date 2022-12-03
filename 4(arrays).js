const cars = ["BMW" , "Mercedes" , "Audi"]  // ARRAYS
console.log(cars)


console.log(cars[0]) // arrays counting starts from 0 , if we want to display second element of array we need to choose varName[1].
console.log(cars[2])

cars.push("Mazda")  // adds element at end of an array.
console.log(cars)  
console.log(cars[3])

cars.push("Hyundai","Opel") // just test
console.log(cars)

console.log(cars.slice(0, 3)) // If we want to display certain array elements(from 0 to number we want or from any number to any number) and not just only one of them, we use slice.
console.log(cars.slice(2 , 5)) // [3,4,5]


// ARRAY METHODS (slice, push , indexOf , length)

console.log(cars.indexOf("Mazda")) // So what indexof does is that when we have certain element from an array and we want to find it's numiration as index it is best(if we had big arrays).

console.log(cars.length) // length is useful to  check how many elements are in specific arrays.



// also we can add arrays as one argument inside of function's argument . for example > 

function random(a){
  let sum = []
  for (i=0;i<a.length;i++){
    sum.push(a[i])
  }
  return sum
}

console.log(random([1,5,10,2,50,100,20]))