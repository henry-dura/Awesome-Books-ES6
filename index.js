import addBook, { Book } from './modules/Book-Methods.js';
import navLink, { Navigation } from './modules/Navigation.js';
import { DateTime } from './modules/luxon.js';

navLink();
addBook();

// Displays date in page
const currentDate = () => {
  const now = DateTime.now();
  const dateShow = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  document.querySelector('.date').innerHTML = dateShow;
  setTimeout(currentDate, 1000);
};

// triggered immediately the page loads
document.addEventListener('DOMContentLoaded', () => {
  Navigation.listDisplay();
  Book.loadBooksInStorage();
  currentDate();
});
