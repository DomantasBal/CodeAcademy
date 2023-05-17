// let { PI } = Math;
// console.log(PI);

// const robot = {
//   name: "Walee",
//   Hobbies: "Collecting garbage",
//   wheels: 8,
//   hands: 2,
//   LovesTech: true,
// };

// let keys = Object.keys(robot);
// let values = Object.values(robot);
// let entries = Object.entries(robot);

// console.log(keys);
// console.log(values);
// console.log(entries);

// SPEAD OPERATORS / UNPACK ARRAY
let cities = ["NY", "Chicago", "LA", "Toronto"];

function showCities(city1, city2, city3) {
  console.log(city1);
  console.log(city2);
  console.log(city3);
}

showCities(...cities);

// REST OPERATORS / PACK INTO

const top7 = ["Rome", "Paris", "Vilnius", "Berlin", "Prague", "Madrid"];

const [first, second, third, ...secondVisit] = top7;

console.log(secondVisit);
console.log(top7);

const meal = ["soup", "steak", "ice cream"];
let [starter, secondMeal] = meal;
console.log(starter, secondMeal);
