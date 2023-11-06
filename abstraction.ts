{
    interface Vehicle {
        startEngine() : void;
        stopEngine(): void;
        move(): void
    }

     class Car implements Vehicle{

        startEngine(): void{
            console.log("Start the car");
        }
        stopEngine(): void {
            console.log("Stop the car");
        }
        move(): void {
            console.log("car is started to move");
        }

    }

    const car = new Car()
  car.startEngine()
    




    // 
}