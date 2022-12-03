


fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json()).then(json => document.querySelector("img").src = json.message);
//      fetch means getting it from somewhere and in brackets goes link of our api.
// .then response is must have and then json too

//      if we console log .then(json => console.log(json)) json outputs two values , first message which is link of random object
// second is status , so if we want to output random object on our screens we must give our element json.message.


//second way

//Async & Await
// rules for using async /await
        //you must create function
        //you must use the keyword async 
        // use the word await

        const test = async () => {
            const url = "https://dog.ceo/api/breeds/image/random";
            const fetching = await fetch(url);
            const testing = await fetching.json();
            console.log(testing);
        }
        
        test();


        // another example with async $ await.
        const example = new Promise((resolve,reject) => {
            isNotReady = false;
            isNotReady ? resolve("Oooh yeah") :
            reject("Oh Noooooo");
          })
          
          
          const testexample = async () => {
            try{
              const test = await example;
              console.log(test);
            }catch (error) {
              console.log(error);
            }
            
          }
          
          testexample();