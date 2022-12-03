// in general you have knowledge of for loops homie. you are just reminding and (if)deep diving into them.

const cars = ["BMW" , "Mercedes" , "Audi"]


//first
for(var i=0; i<cars.length; i++){
  console.log(cars[i])
}

//what this does is that , with 9 line it runs X times (i<cars.length) 10line which runs second for loop(j) 3times everytime line9 for loop runs .
for(var i=0; i<cars.length; i++){
  for(var j=0; j<cars.length;  j++){
    console.log(i, j ,cars[i] , cars[j]) // did i and j for number indication.
  }
}



// trash type of for loop(in my opinion)

for(const anyname of cars){
  console.log(anyname)
} // this is same as for loop with any (i) index , main thing about is that after var,const,let you can type any name for it then of and array or variables name. cars > line 4.
// and we have to use our defined name in for loop . line > 23.


//just reminding my self how to sum things from for loop
let sum = 0 
// >
for(var i=0; i<cars.length; i++){
  sum += i
}
console.log(sum)



// Trying to push doubled amount of array numbers into another array
const numbers = [1, 2 , 3 ,4 ,5 ,6 ,7 ,8 ,9 ,10]

const second = []
for(var i=1; i<numbers.length+1; i++){
  second.push(i*2)
}
console.log(second)

