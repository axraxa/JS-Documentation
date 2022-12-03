//Event Propagation

//event capturing
//>
// to cause this  we need to set true value on event listeners
//  and it will display target at the bottom of console log.

//target

//event bubbling
//>
// to cause this  we need to set false value on event listeners
//  and it will display target at the top of console log.




// to stop propagation we can use >
//>
// e.stopPropagation(); in function, were e is argument for function and means element.




// if we want element to be in console log only once we can set it's value to certain thing instead of true and false.
// > 
// {once: true} , this is what makes element appear only once in console log.





// to prevent default behaviour of elment we must use 
// > 
// e.preventDefault(); this works as line 18.


//Examples of above

        document.querySelector(".test").addEventListener("click",function(e){
            e.preventDefault();
            e.stopPropagation();
            console.log("rac gagixardeba oqro");

            e.target // and whatever we want  // we can style element with e.target
        },{once : true})




// ...........................................................


//Event Delagation


// Matches Method
//>
// someVariable.matches("some tag class or id");


// we can use matches() method in functions too.
// > 
 
document.querySelector(".test").addEventListener("click",function(e){
    console.log("rac gagixardeba oqro");
    var target = e.target;
    if(target.matches("tag name here")){ // in matches method bracket goes tag name mostly , we can use class and id in too .
        target // style or something to it xD
    }
})



// > good example would be if we had any food list and we had #food on div 

document.querySelector("#food").addEventListener("click",function(e){
    var target = e.target;
    console.log(target.getAttribute("id") + "is Clicked."); // targe.getAttribute("id") types Id of target in string .
    if(target.matches("li")){
        target.style.backgroundColor = "red";
        target.style.color = "black";
    }
})






// if we add element in div as a child it takes the same styling as other with that tag had.
// for example our food example on 77 

const foodDiv = document.querySelector("#food");
const newFood = document.createElement("li");

newFood.innerText = "Khinkali";
newFood.setAttribute("id","Khinkali");

foodDiv.appendChild(newFood);

// so khinkali would take same styling as other list items had in food div.







//  to loop through elements we can use this method
// > 
//query selector all for certain class or tags , make variable with it 

// variable name that we gave to query selector all.forEach(any  => console.log(any.value));
