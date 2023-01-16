import Book,{bookList,bookTable} from './modules/Book-Methods.js';
import Navigation,{listLink,addLink,contactLink} from './modules/Navigation.js';


addLink.addEventListener('click', Navigation.addDisplay);
contactLink.addEventListener('click', Navigation.contactDisplay);
listLink.addEventListener('click', Navigation.listDisplay);



// triggered immediately the page loads
document.addEventListener('DOMContentLoaded', () => {
    Book.loadBooksInStorage();
    Navigation.listDisplay();
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