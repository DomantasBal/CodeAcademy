// //////////////////////////////////////////
//               Constructor               //
// //////////////////////////////////////////

//ex Hotel
function Hotel (name, rooms, bookedRooms){
    this.name = name;
    this.rooms = rooms;
    this.bookedRooms = bookedRooms;
    //Kiek kambariu yra laisvu
    this.availableRooms = function (){
        return this.rooms - bookedRooms
    }
}


const guest = new Hotel ("jonas",3, 1);

console.log(guest);




//ex Book
function Book (name, author, year){
    this.name = name;
    this.author = author;
    this.year = year;
    this.printAuthor = function () {
        console.log(this.author);
    }
    this.printOld = function (){
        console.log(this.year);
    }
}

const book = new Book ("LOTR", "J. R. R. Tolkien", "1954")

console.log(book);