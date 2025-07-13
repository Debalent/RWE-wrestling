import React from "react";

// This page will show all the RWE wrestlers
// Owners can later add a form to update or add wrestler profiles
export default function RosterPage() {
  const wrestlers = [
    {
      name: "Blaze Carter",
      nickname: "The Southern Storm",
      image: "/images/blaze.jpg",
      bio: "A fan favorite known for his high-flying moves and fearless attitude.",
      socials: {
        twitter: "https://twitter.com/blazecarter",
        instagram: "https://instagram.com/blazecarter"
      }
    },
    {
      name: "Rico V",
      nickname: "The Iron Brawler",
      image: "/images/rico.jpg",
      bio: "Tough as nails, Rico brings street style and brute strength to the ring.",
      socials: {
        twitter: "https://twitter.com/ricov",
        instagram: "https://instagram.com/ricov"
      }
    }
    // More wrestlers can be added here
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">Meet the Roster</h1>

      {/* List of Wrestler Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {wrestlers.map((wrestler, index) => (
          <div key={index} className="bg-gray-800 rounded-2xl p-4 shadow-lg">
            <img
              src={wrestler.image}
              alt={wrestler.name}
              className="w-full h-60 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold text-red-500">{wrestler.name}</h2>
            <p className="italic text-gray-400 mb-2">{wrestler.nickname}</p>
            <p className="text-gray-300 mb-4">{wrestler.bio}</p>
            <div className="flex space-x-4">
              <a href={wrestler.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400">Twitter</a>
              <a href={wrestler.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-400">Instagram</a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
