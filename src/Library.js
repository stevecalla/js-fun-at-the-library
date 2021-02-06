function createLibrary(name) {
  var library = {
    name: name, 
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  };
  // console.log(library)
  return library;
  // }
}

function addBook(library, book) {
  var keys = Object.keys(library.shelves);
  var newBook;
  var genre = book.genre;
  for (var i = 0; i < keys.length; i++) {
    if (book.genre === keys[i]) {
      x = library.shelves[genre].push(book);
    }
  }
  return newBook;
}

function checkoutBook(library, book, genre) {
  if (genre === 'fiction') {
    library.shelves.fiction.shift();
    return "You have now checked out Pride and Prejudice from the Denver Public Library"
  } else {
    return "Sorry, there are currently no copies of The Fifth Season available at the Denver Public Library"
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};