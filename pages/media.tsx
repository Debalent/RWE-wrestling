import React, { useState } from "react";

// Media page for RWE Wrestling
// Allows fans and owners to browse photos, videos, and promos
export default function MediaPage() {
  const [mediaItems, setMediaItems] = useState([
    {
      id: 1,
      type: "photo",
      title: "Main Event Highlights",
      url: "/media/event1.jpg"
    },
    {
      id: 2,
      type: "video",
      title: "Blaze Carter Promo",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ]);

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">Media Library</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mediaItems.map((item) => (
          <div key={item.id} className="bg-gray-800 rounded-2xl p-4 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
            {item.type === "photo" ? (
              <img src={item.url} alt={item.title} className="rounded-lg max-h-72 object-cover w-full" />
            ) : (
              <iframe
                className="w-full h-48 rounded-lg"
                src={item.url}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
