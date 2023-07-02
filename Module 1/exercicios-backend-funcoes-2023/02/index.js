const car = {
    turnedOn : false,
    speed    : 0,
    //_______________________________________________________________   
    status   : function(){
        const carStatus = (this.turnedOn) ? "Car on" : "Car off";
        
        console.log(`${carStatus}. Speed: ${this.speed}`)
    },
    //_______________________________________________________________       
    startStop : function(){
        if (this.speed === 0 && this.turnedOn){
            this.turnedOn = false;
        }
        // link to the same "if else bock" to check only once then stop that part
        else if (!this.turnedOn){
            this.turnedOn = true;;
            this.speed += 10;
        }
        // print the status only once when startStop is called
        this.status();
    },
    //_______________________________________________________________
    turnOn : function(){
        if (!this.turnedOn) {
            this.turnedOn = true;
            this.status()
        }
        else {
            console.log("This automobile is already on!");
        }
    },
    //_______________________________________________________________   
    turnOff : function(){
        if (this.turnedOn && this.speed === 0){
            this.turnedOn = false;
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
    speedUp : function(){
        if (!this.turnedOn) {
            this.startStop();
        }
        else {
            this.speed += 10;
            this.status();
        }
    },
    //_______________________________________________________________   
    slowDown : function(){
        if (this.turnedOn) {
            this.speed -= 10;
            this.startStop();
        }
    },
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
car.speedUp();
car.slowDown();
car.speedUp();
car.slowDown();
car.slowDown()

car.turnOff();
car.turnOff();

car.turnOn()
console.log("---------------------------------------")
console.log(car.turnedOn, car.speed)