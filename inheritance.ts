class Person {
    name: string;
    age: number;
    email: string;

    constructor(name: string, age: number, email: string) {
        this.name = name,
            this.age = age,
            this.email = email
    }
    getSleep(hours: number) {
        console.log(`${this.name} sleeps ${hours} hours`);
    }
}


// Inherit from Person
class Student extends Person {

    constructor(name: string, age: number, email: string) {
       super(name, age, email)
    }
}
const student1 = new Student("Mr. Emon", 22, "e@ffff")
// student1.getSleep(7)


// Inherit from Person
class Teacher extends Person {
    designation: string;

    constructor(name: string, age: number, email: string, designation: string) {
        super(name, age, email)
        this.designation = designation
    }
    takesClass(classes: number) {
        console.log(`${this.name} is a ${this.designation}, who takes ${classes} class in a week. Contact with him ${this.email}`);

    }
}
const teacher1 = new Teacher("Mr. Matin", 42, "matin@ffff", "Ass. Teacher")
teacher1.getSleep(8)
teacher1.takesClass(4)