// //////////////////////////////////////////
//               MAP Objects arrays        //
// //////////////////////////////////////////




    
    // const input = document.querySelector('input');
    // const persons = ['John', 'Jane', 'James', 'Joan'];
    
    // input.addEventListener('blur', function() {
    //   const name = this.value;
    //   isPersonInArray(persons, name);
    // });

    // function isPersonInArray(names, name) {
    //     if (names.includes(name)) {
    //       if (name.endsWith("s")) {
    //         console.log(`Welcome Mr. ${name}`);
    //       } else {
    //         console.log(`Welcome Miss. ${name}`);
    //       }
    //     } else {
    //       console.log(`Unfortunately ${name} is not in our list.`);
    //     }
    //   }

//pirmai uzduociai

// let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, 8, -4, 6];
// console.log(arrCountTwos(numbers, 2)); // viso: 3

// function arrCountTwos(numbers, target) {
//     return numbers.filter(num => num === target).length;
//   }


// //antra uzduotis
// const budgets = [
//   {
//     name: "Rytis",
//     budget: 50,
//   },
//   {
//     name: "Saulė",
//     budget: 230,
//   },
//   {
    
//     name: "Paulius",
//     budget: 1500,
//   },
//   {
//     name: "Gytis",
//     budget: 92,
//   },
//   {
//     name: "Sandra",
//     budget: 7,
//   },
// ];





/////////////////////////////////////////////////////////////////

// const budgets = [
//     {
//         name: "Rytis",
//         budget: 50,
//     },
//     {
//         name: "Saulė",
//         budget: 230,
//     },
//     {
//         name: "Paulius",
//         budget: 1500,
//     },
//     {
//         name: "Gytis",
//         budget: 92,
//     },
//     {
//         name: "Sandra",
//         budget: 7,
//     },
// ];


// function extractNames(budgets) {
//     let names = [];
//     for (let i = 0; i < budgets.length; i++) {
//         names.push(budgets[i].name);
//     }
//     return names;
// }
// console.log(extractNames(budgets));



// function sumBudgets(budgets) {
//     let sum = 0;
//     for (let i = 0; i < budgets.length; i++) {
//         sum += budgets[i].budget;
//     }
//     return sum;
// }
// console.log(sumBudgets(budgets));


// //////////////////////////////////////////
//               MAP  Arrays               //
// //////////////////////////////////////////

// let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, 8, -4, 6];

// let arrray = ["5", "1", "7", "2", "-9", "8", "2", "7", "9", "4", "-5", "2", "-6", "8", "-4", "6"];

// arrDoubled(arrray);

// function arrDoubled(arrray) {
//     const doubledArray = arrray.map(num => num * 2);
//     console.log(doubledArray);
//     return doubledArray;
// }

// arrMultiply(arrray, 88)

// function arrMultiply(arrray, multiply) {
//     const doubledArray = arrray.map(num => num * multiply);
//     console.log(doubledArray);
//     return doubledArray;
// }