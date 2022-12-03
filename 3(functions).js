/* Functions
  example: nameOfFunction()

  making it : nameOfFunction(){
    entire code goes here
  }

  // ARGUMENT
  argument of function goes into the brackets , example : yourNetworth(x or whatever we want){
    code that goes here and needs that argument will use it , for example :
    >
    let total = x or whatever we want + your assets ;
    >
    so whatever we put in argument gets the meaning of used argument in function , we can use user inputs as argument too.
  }

  you can have multiple arguments , just use "," to divide them from each other . example: yourAdress(x , y , c , z){} 

  // RETURN
  we can use return in function , for example : sum(a, y){
    return a * y;
  }
  >
  so basically what it does is, that it returns the value of what we have put in and can be saved into the variable and after it's saved into it , we can use console.log(variable)
to print it out. for example, if we didn't type return in function and typed console.log(a * y) it would print out, but only once and we will not be able to save it into another 
variable. example: >
  let num1 = sum(15 , 20)
  let num2 = sum(10, 20)
  console.log(num1 - num2)
we would not be able to do this , because it would only print once without return(with console.log).



  // ARROW FUNCTIONS 

    // explicit return
  example: (variable) sumApples = (x, y) => {
    return x + y
  }
  >this is modern arrow functions with explicit return, in my opinion i prefer old function defining instead of this, but implicit return one is good 
because we can define function in one line and fastly.But as it turns out it's modern way and i have to stick with it EEEEEW.

    // implicit return
  example : (variable) sumApples = (x , y) => x + y 
  > this is good, because it's on one line and easy to use when we are writing simple functions


 */


/* Template literals
instead of using commas and + in string , we can use `` this and to recognise java script element we need to use ${} . for example : 

let finalText = `Woah, you have got an amazing name.I love ${name(it can be argument or anything else)}, I am going to name it my son`;
*/





/* Conditionals
>if(){}
>if(){
}else{}
>while(){}

>ternary operators  : = false   , ? = if codition = true;
condition ? code here  :  code here ;
*/