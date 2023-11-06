{
    // Polymorphism

    class Person {
        getSleep(){
            console.log("Sleep 8 hours in a day")
        }
    }
    class Students extends Person {
        getSleep(){
            console.log("Sleep 7 hours in a day");
        }
    }
    class Developer extends Person {
        getSleep(){
            console.log("Sleep 6 hours in a day");
        }
    }

    const getSleepHours = (param: Person) =>{
        return param.getSleep()
    }

    const person1 =  new Person()
    const person2 =  new Students()
    const person3 =  new Developer()

    // console.log(person1.getSleep());
    // console.log(person2.getSleep());
    // console.log(person3.getSleep());

    // getSleepHours(person1)



    class Shape {
        getArea(): number{
            return 0
        }
    }

    class Circle extends Shape{
        radius: number;
        constructor(radius: number){
            super()
            this.radius = radius
        }
        getArea(): number {
            return Math.PI * this.radius * this.radius
        }
    }
    class Rectangle extends Shape{
        height: number;
        width: number;
        constructor(height: number, width: number){
            super()
            this.height = height
            this.width = width
        }
        getArea(): number {
            return this.height * this.width
        }
    }

    const getAreaConsole = (param: Shape) =>{
        console.log(param.getArea());
        
    }

    const shape1 = new Shape()
    const shape2 = new Circle(11)
    const shape3 = new Rectangle(12, 14)

    getAreaConsole(shape1)
    getAreaConsole(shape2)
    getAreaConsole(shape3)





}