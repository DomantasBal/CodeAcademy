/////////////////////////////////////
//            Objects              //
////////////////////////////////////

// const person = {
//     name: "DOM",
//     job: "DEV",
//     interests: ["Gaming", "Table Games"],
//     get headline () {
//         return `${this.name} is a ${this.job} and he likes ${this.interests}`;
//     },
//     set primaryInterest(val){
//         console.log("Testing setter...")
//         this.interests.unshift(val);
//     }
// }

// person.primaryInterest = "Music";
// console.log(person.headline);

/////////////////////////////////////
//            Classes              //
////////////////////////////////////

class Car {

    constructor(make,model,year,color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive(){
        console.log("go go");
    }

    break(){
        console.log("Stoooop");
    }
}

let car1 = new Car("Form", "Mustang", 2022, "Black");
let car2 = new Car("Chevy", "Corvette", 2021, "blue");

console.log(car1.make)
console.log(car1.model)
console.log(car1.year)
console.log(car1.color)
console.log(car1.drive())

