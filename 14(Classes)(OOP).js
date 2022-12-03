//methods 

//properties

//classes

class Car {
    //creating class's arguments.
    constructor(name, color , speed) {
        //properties.
        this.name = name;
        this.color = color;
        this.speed = 0;    
    }
    

    //getters and setters.
    getCurrentSpeed(){
        return speed;
    }
    
    setCurrentSpeed(num){
        return speed = num;
    }

    //creating methods.
    drive(){
        this.speed += 10; // we can increase properties values , with/from methods too.
        console.log("Just drove 2 miles");
    }

    brake(){
        console.log("braking: coming to a screeching halt!")
    }

    stop(){
        console.log("Car just stopped.")
    }
}

const porsche = new Car("Porsche", "blue" , 200);
console.log(porsche);

porsche.drive();
porsche.brake();
porsche.stop();


//use of prototype
//> 
//Class name // prototype //Naming method.
Array.prototype.myPush = function (num){
    this[this.length] = num;
}


const testArray = [1,2,3,4,5,6];
testArray.myPush(5);
console.log(testArray);


// so you can use prototype thing to implement your own methods in already existing classes. line 52-54. and use it like other methods line 58.
