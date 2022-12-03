//Dom Manipulation

//Traverse the DOM

//Parent Node Traversal 
    //>
    let ul = document.querySelector("ul");
    console.log(ul.parentNode);
                                // to find  parent of element.
    console.log(ul.parentElement);


    console.log(ul.parentNode.parentNode);
                                // to find  parent of element's parent.
    console.log(ul.parentElement.parentElement);

//Child Node traversal
    let ul1 = document.querySelector("ul");
    console.log(ul1.childNodes); // displays child elements.
    console.log(ul1.firstChild); // displays first child elements.
    console.log(ul1.lastChild); // displays last child element.

        //styling child element.
    ul1.childNodes[numeration of child].style.color ='';

//Sibling Node Traversal

    let ul2 = document.querySelector("ul");

    console.log(ul2.previousSibling);
    // this 2 is kind of useless because node's prev and next sibling will be text ,to avoid that , line 34.
    console.log(ul2.nextSibling); 

    //example >
    console.log(ul2.previousElementSibling);
    console.log(ul2.nextElementSibling);