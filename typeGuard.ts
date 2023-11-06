// type guard with typeOf

const add = (param1: string | number, param2 : string | number): string | number => {
    if(typeof param1 === "number" && typeof param2 === "number"){
        return param1 + param2
    } else{
        return param1.toString() + param2.toString()
    }
}
// console.log(add(12, "12"));

// in guard

type NormalUser = {
    name: string
}
type AdminUser = {
    name: string;
    role: "admin"
}

const user = (person: NormalUser | AdminUser) => {
    console.log(person.name);
    if("role" in person){
       console.log( person.role);
    }
}
user({
    name: "Emon",
})
