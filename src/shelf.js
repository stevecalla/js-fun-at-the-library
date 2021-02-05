const { on } = require("nodemon");

function shelfBook(title, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(title)
  }
}

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (title === shelf[i].title) {
      shelf.splice(1, 1);
    }
  }
}

function listTitles(fantasyShelf) {
  var titles = '';
  for (var i = 0; i < fantasyShelf.length; i++) {
    titles = titles + ', ' + fantasyShelf[i].title;
  }
  return titles.slice(2)
}

function searchShelf(shelf, title) {
  var onShelf = false;
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      onShelf = true;
    } 
  }
  return onShelf;
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};