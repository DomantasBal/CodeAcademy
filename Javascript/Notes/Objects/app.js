// let address = {
//     street: "a",
//     city: "b",
//     zipCode: "c"
// };

//Factory function

let address = createAddress("a","b","c")
console.log(address);
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

//Constructor function

function Constructor(street, city, zipCode) {
  (this.street = street), (this.city = city), (this.zipcode = zipCode);
}

let house = new Constructor("conA","conB","conC");
console.log(house);

/////////////////////////////////////
// String - Primitive - Object     //
////////////////////////////////////

// // String primitive
// const message = "hey";
// console.log(message[0]);

// // String object
// const another = new String ("yo");
// console.log(another);

///////////////////////////////
// Value vs Reference       //
/////////////////////////////

// let obj = {value: 10};
// function increase(obj) {
//     obj.value++;
//   console.log(obj.value);
// }

// increase(obj);

// console.log(obj);

//////////////////////////////////

// let number = 10;
// function increase(number) {
//   number++;
//   console.log(number);
// }

// increase(number);

// console.log(number);

///////////////////////////////
// Constructor functions    //
/////////////////////////////
//PASCAL NOTATION

// function Circle (radius){
//     this.radius = radius;
//     this.draw = ()=>{
//         console.log("draw")
//     }
// }
// const shape = new Circle();

// console.log(Circle);

///////////////////////////////
// Factory functions        //
/////////////////////////////
//CAMEL NOTATION

// function circle (radius) {
//     return {
//         radius,
//         draw (){
//             console.log("circleee");
//         }
//         };
// }

//   const circle1 = circle(123);
//   circle1.draw();
//   console.log(circle1);

///////////////////////////////
// Objects   - Method       //
/////////////////////////////

// const circle = {
//     radius: 1,
//     location: {
//         x:1,
//         y:1
//     },
//     invisible: true,

//     draw: function (){
//         console.log("circle");
//     }
//     };

//     circle.draw();
