import React from "react";
import Image from "next/image";

export default function RosterPage() {
  const wrestlers = [
    {
      name: "Blaze Carter",
      nickname: "The Southern Storm",
      image: "/images/blaze.jpg",
      bio: "A fan favorite known for his high-flying moves and fearless attitude.",
      socials: {
        twitter: "https://twitter.com/blazecarter",
        instagram: "https://instagram.com/blazecarter",
      },
    },
    {
      name: "Rico V",
      nickname: "The Iron Brawler",
      image: "/images/rico.jpg",
      bio: "Tough as nails, Rico brings street style and brute strength to the ring.",
      socials: {
        twitter: "https://twitter.com/ricov",
        instagram: "https://instagram.com/ricov",
      },
    },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">Meet the Roster</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {wrestlers.map((w, index) => (
          <div key={index} className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-60 w-full">
              <Image src={w.image || '/placeholder-wrestler.jpg'} alt={w.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold text-red-500">{w.name}</h2>
              <p className="italic text-gray-400 mb-2">{w.nickname}</p>
              <p className="text-gray-300 mb-4">{w.bio}</p>
              <div className="flex space-x-4">
                <a href={w.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400">Twitter</a>
                <a href={w.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-400">Instagram</a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
