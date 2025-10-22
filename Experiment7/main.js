import { renderBooks } from './bookList.js';
import { addToCart, removeFromCart } from './cartManager.js';
import { updateCartUI } from './uiUpdater.js';
import bookData from './books.json' assert { type: 'json' };

const bookContainer = document.getElementById('book-list');
const cartContainer = document.getElementById('cart');

renderBooks(bookData, bookContainer);

bookContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const bookId = Number(e.target.dataset.id);
    const book = bookData.find(b => b.id === bookId);
    if (book && book.availability === 'in stock') {
      addToCart(book);
      updateCartUI(cartContainer);
    }
  }
});

cartContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const bookId = Number(e.target.dataset.id);
    removeFromCart(bookId);
    updateCartUI(cartContainer);
  }
});