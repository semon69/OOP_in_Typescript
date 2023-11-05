class Animal {
    name: string ;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string ){
        this.name = name,
        this.species = species,
        this.sound = sound
    }
    getName(){
        return this.name + " " + this.sound
    }
}
const dog = new Animal("Kuttar baccha", "dog", "Gheu Gheu")
// console.log(dog.getName());

// same things using public parameters property
class Animal2 {

    constructor(public name: string, public species: string, public sound: string ){
        
    }
    getName(){
        return this.name + " " + this.sound
    }
}
const dog2 = new Animal2("Kuttar baccha", "dog", "Gheu Gheu")
console.log(dog2.getName());
