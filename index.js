import addBook,{Book} from './modules/Book-Methods.js';
import navLink,{Navigation} from './modules/Navigation.js';


navLink();
addBook();
// triggered immediately the page loads
document.addEventListener('DOMContentLoaded', () => {
    Book.loadBooksInStorage();
    Navigation.listDisplay();
    currentDate();
  });
  
