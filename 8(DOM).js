// To select element from html we have 5 ways for it.

// GetElementById("")  , u can select element by using it's id
//example>
document.getElementById("#whatever id is")

//GetElementByClassName("")
//example>
document.getElementsByClassName(".whatever class is") 

//GetElementByTagName("") , gets Elements by tag name which are (h1, li , p and etc) you get it.
//example>
document.getElementsByTagName("div")

//querySelector("") , selects one and first item , for example if you have multiple items with same class or same id or same tag it will select first of them.
//example>
document.querySelector("div")
document.querySelector("container")
document.querySelector("image")

//querySelectorAll("") selects all element with same id , class , tag.

document.querySelector("div")





// BLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANK 


// Styling an element
//example> 

document.querySelector("div").style.color = "blue"; // this is inline styling , which works on only one element.
//query  //css  // css property // value


//While using style we cant use properties like > background-color , if we want to use it we must use it like this backgroundColor.


// If we want to style multiple elements we need to use for loop with inline styling . 
//example > 

for(var i=0;i<document.querySelectorAll("li").length;i++){
    document.querySelectorAll("li")[i].style.color = "orange";
}


// BLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANK 


//Creating Elements
let ul = document.querySelector("ul");
let li = document.createElement("li");
ul.append(li);

// if we want to be more secure about adding it as a child element we can use 
// >  
ul.appendChild(li);

//modifying text

let mod = document.querySelector(".list-items");

console.log(mod.textContent); // if there is span or something in text it displays text on different lines.

console.log(mod.innerHTML); // displays html tags within text.

console.log(mod.innerText); // displays just text .

    // we can add text with this modifyers.
        //example> 
li.innerText = "Random Ass";


    // modifying attributes & classes
         //example>
li.setAttribute("class","list-items");
//seting atribute // tag,class or id // tag ,class or id name.


    //removing
li.removeAttribute("class");
// removing attribute // class,tag or id , whatever we want to remove from element.


console.log(li.getAttribute("class"));
//getting attribute of elment // id,class or tag in brackets as usual.


li.classList.add("random-class");
//we can add class like this to element.

li.classList.remove("random-class");
//we can remove class from element as adding it.

    //to check which class has certain element we can use 
        // >
console.log(li.classList.contains("random-class"));
// it will return boolean  true or false.


    // removing element 
        //>
li.remove();

// element we want // remove and empty brackets  // dats all.
