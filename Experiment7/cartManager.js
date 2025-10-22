let cart = [];

export function addToCart(book) {
  cart.push(book);
}

export function removeFromCart(bookId) {
  cart = cart.filter(item => item.id !== bookId);
}

export function getCart() {
  return cart;
}

export function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.price, 0);
}