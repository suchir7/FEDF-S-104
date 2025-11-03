import { useState, useEffect } from "react";
import jsPDF from "jspdf";

const Products = () => {
  const productList = [
    { id: 1, name: "Wireless Headphones", price: 149.99, image: "/image1.jpg" },
    { id: 2, name: "Smartwatch", price: 199.99, image: "/image2.jpg" },
    { id: 3, name: "Laptop", price: 899.99, image: "/image3.jpg" },
  ];

  const [cart, setCart] = useState([]);

  // Load cart on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add product to cart
  const handleAddToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    let updatedCart;
    if (existing) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(updatedCart);
  };

  // Decrease quantity
  const handleDecrease = (id) => {
    const updated = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0); // remove if 0
    setCart(updated);
  };

  // Increase quantity
  const handleIncrease = (id) => {
    const updated = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updated);
  };

  // Remove item
  const handleRemove = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
  };

  // Buy Now + Invoice
  const handleBuyNow = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("🧾 Purchase Invoice", 70, 20);
    doc.setFontSize(12);

    let y = 40;
    doc.text("Product", 20, y);
    doc.text("Qty", 100, y);
    doc.text("Price", 150, y);
    y += 10;

    cart.forEach((item) => {
      doc.text(item.name, 20, y);
      doc.text(String(item.quantity), 100, y);
      doc.text(`$${(item.price * item.quantity).toFixed(2)}`, 150, y);
      y += 10;
    });

    y += 5;
    doc.text("------------------------------------------------------", 20, y);
    y += 10;
    doc.text(`Total: $${total.toFixed(2)}`, 20, y);
    y += 10;
    doc.text("Thank you for shopping with us!", 20, y + 10);

    doc.save("Invoice.pdf");

    alert("Purchase completed! Invoice downloaded.");
    localStorage.removeItem("cart");
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6">🛍️ Products</h2>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productList.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600 mt-2 mb-4">${product.price.toFixed(2)}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      {cart.length > 0 && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4">🛒 Cart</h3>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-3 border-b pb-2"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">
                  ${item.price.toFixed(2)} each
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDecrease(item.id)}
                  className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleIncrease(item.id)}
                  className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              <div className="flex items-center gap-4">
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <hr className="my-3" />
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <button
              onClick={handleBuyNow}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
