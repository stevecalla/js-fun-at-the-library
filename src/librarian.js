class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(name, isMorning) {
    if (isMorning === true) {
      return `Good morning, ${name}!`;     
    } else {
      return `Hello, ${name}!`;
    }
  }

  findBook(requestedBook) {
    if (requestedBook === "The Fifth Season") {
      // console.log(this.library.checkOutBook)
      console.log(this.library.shelves)
      this.library.shelves.fantasy.splice()
      console.log(this.library.shelves)

      // this.library.checkOutBook(library, book, genre)
      return "Yes, we have The Fifth Season";
    } else {
      return "Sorry, we do not have Five Brief Lessons in Physics";
    }
  }

}

module.exports = Librarian;