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