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
      this.library.shelves.fantasy.splice(0, 1)
      return "Yes, we have The Fifth Season";
    } else {
      return "Sorry, we do not have Five Brief Lessons in Physics";
    }
  }

  calculateLateFee(daysLate) {
    return Math.ceil(daysLate * 0.25);
  }

}

module.exports = Librarian;