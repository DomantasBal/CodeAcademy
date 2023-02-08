// //////////////////////////////////////////
//               MAP Objects arrays        //
// //////////////////////////////////////////


const budgets = [
    {
        name: "Rytis",
        budget: 50,
    },
    {
        name: "Saulė",
        budget: 230,
    },
    {
        name: "Paulius",
        budget: 1500,
    },
    {
        name: "Gytis",
        budget: 92,
    },
    {
        name: "Sandra",
        budget: 7,
    },
];


function extractNames(budgets) {
    let names = [];
    for (let i = 0; i < budgets.length; i++) {
        names.push(budgets[i].name);
    }
    return names;
}
console.log(extractNames(budgets));




function sumBudgets(budgets) {
    let sum = 0;
    for (let i = 0; i < budgets.length; i++) {
        sum += budgets[i].budget;
    }
    return sum;
}
console.log(sumBudgets(budgets));


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