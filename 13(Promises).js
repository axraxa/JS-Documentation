//Asynchronous programming(APi fetch , setTimeout, promises, )

// you order breakfast
//you continue to speak to your friends
// RESOLVED - server brings you line 3
// REJECTED - server can't bring you line 3

// this is what asynchronous programing means.

// in code >

// setTimeout(function, delay(ms));

//>
setTimeout(() => console.log("test"),100);



//const example = new Promise((resolve,reject) => {function here});

//fetch is also promise.


// promise example in depth here > > 
// > 

const examplePromise = new Promise((resolve,reject) => {
    isNotReady = true;
    isNotReady ? resolve("Oooh yeah") : // resolve and reject (two arguments of promise) are like console log , or just return.
    reject("Oh Noooooo");
})


examplePromise
.then(ready => console.log(ready)) // we use then if it is true 
.catch(notready => console.log(notready)); // we use catch in order to output , if there is some error.










// ....................................


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




// line 27 to line 36 with async $ await.
const example = new Promise((resolve,reject) => {
    isNotReady = false;
    isNotReady ? resolve("Oooh yeah Take This Tip") :
    reject("Oh Noooooo  You are not Getting any Tip");
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