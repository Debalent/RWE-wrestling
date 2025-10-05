import React from "react";
import Image from "next/image";

export default function StorePage() {
  const items = [
    {
      id: 1,
      name: "RWE Logo T-Shirt",
      price: "$25.00",
      image: "/store/shirt.jpg",
      link: "https://buy.rwe.com/shirt",
    },
    {
      id: 2,
      name: "Front Row Ticket - Fall Brawl",
      price: "$60.00",
      image: "/store/ticket.jpg",
      link: "https://buy.rwe.com/fallbrawl-ticket",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">Official RWE Store</h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.id} className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-60 w-full">
              <Image src={item.image || '/placeholder-store.jpg'} alt={item.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white">{item.name}</h2>
              <p className="text-red-400 mb-4">{item.price}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
