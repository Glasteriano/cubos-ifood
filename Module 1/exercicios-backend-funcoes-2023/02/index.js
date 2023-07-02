const car = {
    turnedOn : false,
    speed    : 0,
    //_______________________________________________________________
    status   : function(){
        const carStatus = (this.turnedOn) ? "Car on" : "Car off";
        
        console.log(`${carStatus}. Speed: ${this.speed}`)
    },
    //_______________________________________________________________
    turnOn   : function(){
        if (!this.turnedOn) {
            this.turnedOn = true;
            this.status()
        }
        else {
            console.log("This automobile is already on!");
        }
    },
    //_______________________________________________________________
    turnOff  : function(){
        if (this.turnedOn && this.speed === 0){
            this.turnedOn = false;
            // this.speed = 0;
            this.status();
        }
        else if (this.turnedOn && this.speed !== 0) {
            console.log("Stop the automobile first to turn it off!")
        }
        else {
            console.log("This automobile is already off!");
        }
    },
    //_______________________________________________________________
    speedUp  : function(){
        if (this.turnedOn) {
            this.speed += 10;
            this.status();
        }
        else {
            console.log("It's not possible accelerate a car with engines off!");
        }
    },
    //_______________________________________________________________
    slowDown : function(){
        if (this.turnedOn) {
            this.speed -= 10;
            this.status();
        }
        else {
            console.log("It's not possible decelerate a car with engines off!");
        }
    },
    //_______________________________________________________________
};

car.turnOff();
car.turnOn();
car.turnOn();
car.speedUp();
car.speedUp();
car.slowDown();
car.turnOff();
car.speedUp();
car.slowDown();
car.slowDown();
car.turnOff();
