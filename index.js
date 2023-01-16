import Book,{bookList,bookTable} from './modules/Book-Methods.js';


// triggered immediately the page loads
document.addEventListener('DOMContentLoaded', () => {
    Book.loadBooksInStorage();
    listDisplay();
    currentDate();
  });
  
  // triggered when the add button is clicked
  add.addEventListener('click', () => {
    const newBook = new Book(title.value, author.value);
    Book.addToHtml(newBook);
    bookList.push(newBook);
    localStorage.setItem('books', JSON.stringify(bookList));
    Book.clearInputFields();
  });
  
  // removing book using event propogation
  bookTable.addEventListener('click', Book.removeBook);