function shelfBook(book, shelf) {
  console.log(shelf)
  shelf.unshift(book)
}


module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};