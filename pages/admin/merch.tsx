import React, { useState } from "react";
import Image from "next/image";

// Admin Merch Manager for RWE
// Lets owners add and manage merchandise for sale
export default function AdminMerch() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "RWE T-Shirt",
      price: 25,
      stock: 100,
      imageUrl: "/merch/tshirt.jpg",
    },
  ]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      stock: parseInt(stock),
      imageUrl,
    };
    setItems([...items, newItem]);
    setName("");
    setPrice("");
    setStock("");
    setImageUrl("");
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-red-600 mb-10 text-center">
        🛍️ Manage Merchandise
      </h1>

      <section className="max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4">Add New Item</h2>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-2 rounded text-black"
        />
        <input
          type="number"
          placeholder="Price ($)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 mb-2 rounded text-black"
        />
        <input
          type="number"
          placeholder="Stock Quantity"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="w-full p-2 mb-2 rounded text-black"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full p-2 mb-4 rounded text-black"
        />
        <button
          onClick={addItem}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Add Item
        </button>
        <p className="text-sm text-gray-400 mt-2">
          📌 Tip: You can later connect this with Stripe or Snipcart for payments and order tracking.
        </p>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Inventory</h2>
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 p-4 rounded-xl mb-4 shadow flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-gray-300">${item.price} | Stock: {item.stock}</p>
            </div>
            <div className="w-16 h-16 relative">
              <Image src={item.imageUrl || '/placeholder-store.jpg'} alt={item.name} fill className="object-cover rounded border" />
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="ml-4 px-3 py-1 text-sm bg-gray-700 hover:bg-red-700 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
