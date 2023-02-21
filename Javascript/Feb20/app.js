// //////////////////////////////////////////
//                  Promises               //
// //////////////////////////////////////////

function makePizza(toppings) {
    return new Promise((resolve, reject) => {
      if (toppings && toppings.length > 0) {
        const pizza = `Pica su: ${toppings.join(", ")}`;
        resolve(pizza);
      } else {
        reject("Nurodykite bent viena ingredienta.");
      }
    });
  }
  
  makePizza(["pomidorai", "grybai"])

    .then((result) => console.log(result))
    .catch((error) => console.log(error));
    
    
//////////////////////////////////////////////////

// let makePizza = function (toppings) {
    
//     new Promise((resolve, reject) => {

//         if(toppings !== "ananasas"){
//             resolve(console.log(`Tavo pica su ${toppings}`))
//         }else{
//             reject("FUJ!!");
//         }
    
    
//     })
//     return Promise;
// }
// makePizza("Ananasai")



  


// //////////////////////////////////////////
//                  Async                  //
// //////////////////////////////////////////

// setTimeout(goodMorning, 1000);
// setTimeout(goodAfternoon, 1000);
// setTimeout(goodEvening, 1000);

// function goodMorning (){
//     console.log("good morning")
// }

// function goodAfternoon (){
//     console.log("good afternoon")
// }

// function goodEvening () {
//     console.log("good evening");
// }