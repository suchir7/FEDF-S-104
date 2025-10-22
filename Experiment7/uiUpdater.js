import { getCart, removeFromCart, calculateTotal } from './cartManager.js';

export function updateCartUI(container) {
  const cartItems = getCart();
  container.innerHTML = '';
  cartItems.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.innerHTML = `
      <span>${item.title} - ₹${item.price}</span>
      <button data-id="${item.id}">Remove</button>
    `;
    container.appendChild(itemEl);
  });

  const totalEl = document.createElement('p');
  totalEl.textContent = `Total: ₹${calculateTotal()}`;
  container.appendChild(totalEl);
}