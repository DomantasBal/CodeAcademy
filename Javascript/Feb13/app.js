
// Codewars stuff

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

let names = ["Alex", "Jacob", "Mark", "Max"]

likes(names);

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}








// //////////////////////////////////////////
//               FORM                      //
// //////////////////////////////////////////

// function Movie(name, year, director, budget, income) {
//     this.name = name;
//     this.year = year;
//     this.director = director;
//     this.budget = budget;
//     this.income = income;
//     this.getIntroduction = function() {
//       return `${this.name} ${this.year} ${this.director}`;
//     };
//     this.getProfit = function() {
//       return this.income - this.budget;
//     };
//     this.addToList = function() {
//       const movieList = document.getElementById('movie-list');
//       const li = document.createElement("li");
//       li.innerHTML = this.name;
//       li.addEventListener("click", () => {
//         alert(this.getIntroduction());
//       });
//       const profitBtn = document.createElement("button");
//       profitBtn.innerHTML = "Profit";
//       profitBtn.addEventListener("click", () => {
//         alert(this.getProfit());
//       });
//       li.appendChild(profitBtn);
//       movieList.appendChild(li);
//     };
//   }
  
//   const movieForm = document.querySelector("form");
//   movieForm.addEventListener("submit", (event) => {
//     event.preventDefault();
  
//     const name = document.getElementById("name").value;
//     const year = parseInt(document.getElementById("year").value);
//     const director = document.getElementById("director").value;
//     const budget = parseInt(document.getElementById("budget").value);
//     const income = parseInt(document.getElementById("income").value);
//     const movie = new Movie(name, year, director, budget, income);
//     movie.addToList();
//     movieForm.reset();
//   });
  

// //////////////////////////////////////////
//               Constructor               //
// //////////////////////////////////////////

// //ex Hotel
// function Hotel (name, rooms, bookedRooms){
//     this.name = name;
//     this.rooms = rooms;
//     this.bookedRooms = bookedRooms;
//     //Kiek kambariu yra laisvu
//     this.availableRooms = function (){
//         return this.rooms - bookedRooms
//     }
// }

// const guest = new Hotel ("jonas",3, 1);

// console.log(guest);

// //ex Book
// function Book (name, author, year){
//     this.name = name;
//     this.author = author;
//     this.year = year;
//     this.printAuthor = function () {
//         console.log(this.author);
//     }
//     this.printOld = function (){
//         console.log(this.year);
//     }
// }

// const book = new Book ("LOTR", "J. R. R. Tolkien", "1954")

// console.log(book);