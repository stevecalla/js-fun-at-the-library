function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return character;

}

function saveReview(comment, reviews) {
  if (!reviews.includes(comment)) {
    return reviews.push(comment);
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(title, mainCharacter, genre) {
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre,
  }
  return book;
}

function editBook(title) {
  var newPageCount = title.pageCount * 0.75;
  title.pageCount = newPageCount;
  return title;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}