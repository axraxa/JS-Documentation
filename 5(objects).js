//OBJECTS

// in object instead of element it's key value.

const anything = {
  name: "Jemali" , 
  secondname: "Qarchxadze",
  age: 50
} // objects are variables which's data are maintained in {} these .
// To access objects specific key we use name of object , dot and name of key. example : object.firstkey   and this is all . line 9 to 11 for example.
console.log(anything.age)
console.log(anything.name)
console.log(anything.secondname)

//Also we can access entire object like his keys
// example >
console.log(anything)


// dot notation vs bracket notation
// >
// on line 9 we used dot notation which is like this >
console.log(anything.age)
// >
// bracket notation
console.log(anything["age"])
// I think that dot notation is better , instead of bracket notation.



// Assign object
anything.color = "Green" ; // We can assign object key like this and than we can access them like others.
anything.value = 1000

//  this is a method where we have existing variable or element and we want to add it to objects. we must use [] this instead of dot > line 37 ,
// but important thing is  that we must remember we can only add existing var , elements with this method.
let random = "Goal"
anything[random] = "Dollar bills" // anything is objects name and random inside of brackets is variable or elements name we want to put in object, then comes value as usual.

// example > 
console.log(anything.color)
console.log(anything.value)

console.log(anything)



//Methods in object

//We can call functions in object example >
const test = {
  name: 'John',
  secondname: 'Doe',
  payment: 2000,
  tax: function (){
    return this.payment/100 * 20
  },
  income: function(){
    return this.payment - this.tax()
  }
}

//  so functions in objects are called methods as you can see. to use them first we need to define key : then function () and write whatever we want inside of it
// to use object methods anywhere we need to add () this to key value , for example > test.tax() > line 47.
//  in order to use object's own keyvalues inside of our function(method) we need to use this.keyvalue , instead of test.keyvalue > line 48.


console.log(`Hi! I am ${test.name} ${test.secondname} and I have ${test.income()}$ income.`)











// to convert object into array we use 
// > 

Object.keys(object here);