export function renderBooks(bookData, container) {
  container.innerHTML = '';
  bookData.forEach(book => {
    const bookEl = document.createElement('div');
    bookEl.className = 'book';
    bookEl.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Price: ₹${book.price}</p>
      <p>Status: ${book.availability}</p>
      <button ${book.availability !== 'in stock' ? 'disabled' : ''} data-id="${book.id}">
        Add to Cart
      </button>
    `;
    container.appendChild(bookEl);
  });
}