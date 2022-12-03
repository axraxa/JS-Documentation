//event listeners

//onclick ev.listener goes into the html , not inside the java script .
//example>
//  <h1 onclick="function() or  java script here">AMADEUS</h1>




// adding click event listener in java script.
//>
element.addEventListener("click",function, boolean);
//queryselected element //adding ev.listener  //mouse event // function we want to execute // true or false , it is not necessary to use this.
//document.querySelector

// mouse over event listener.
 
document.querySelector("test").addEventListener("mouseover",function);

// mouse out event listener.

document.querySelector("test").addEventListener("mouseout",function);



//Removing event listener
element.removeEventListener("click", function);



// summing up 

//  so if we want to use event listener just once only on the element  first onclick method is best for it 
//but if we want to use it several times , addeventlistener is best fit for it.