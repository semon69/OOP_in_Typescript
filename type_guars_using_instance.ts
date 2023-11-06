{
    
    //  type guard using instanceOf

class Animal {
    name: string;
    species: string;

    constructor(name: string  , species: string){
        this.name = name
        this.species = species
    }

    makeSound(){
        console.log("I make sound");
    }
}

class Dog extends Animal {
    constructor(name: string, species: string){
        super(name, species)
    }
    makeBark(){
        console.log("I am barking");
        
    }
}

class Cat extends Animal {
    constructor(name: string, species: string){
        super(name, species)
    }
    makeMeau(){
        console.log("I am Meauing");
        
    }
}

// Smart way to handle is it dog or cat
const isDog = (animal : Animal) : animal is Dog => {
    return animal instanceof Dog
}
const isCat = (animal : Animal): animal is Cat => {
    return animal instanceof Cat
}

const getAnimal = (animal: Animal) => {
    if(isDog(animal)){
        animal.makeBark()
    } else if(isCat(animal)){
        animal.makeMeau()
    } else{
        animal.makeSound()
    }
}
// const getAnimal = (animal: Animal) => {
//     // animal.makeSound()
//     if(animal instanceof Dog){
//         animal.makeBark()
//     } else if(animal instanceof Cat){
//         animal.makeMeau()
//     } else{
//         animal.makeSound()
//     }
// }

const dog = new Dog("Dog Bhai ", "dog")
const cat = new Cat("Cat Bhai ", "cat")

// dog.makeBark()
// cat.makeMeau()
getAnimal(dog)
getAnimal(cat)















// 
}