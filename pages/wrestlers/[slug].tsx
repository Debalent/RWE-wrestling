import React from "react";

// This is a public-facing profile page for a wrestler
// Owners can update this info from an admin panel later
export default function WrestlerProfilePage() {
  const wrestler = {
    name: "Nova Black",
    bio: "A high-flying underdog with a mean moonsault. Trained in Memphis, feared in the Midwest.",
    record: "12-3",
    weight: "205 lbs",
    hometown: "Little Rock, AR",
    socials: {
      twitter: "https://twitter.com/novablack",
      instagram: "https://instagram.com/novablack"
    },
    image: "/wrestlers/nova.jpg"
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">👊 Wrestler Profile</h1>

      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-6">
        <img
          src={wrestler.image}
          alt={wrestler.name}
          className="w-64 h-64 object-cover rounded-xl shadow"
        />

        <div>
          <h2 className="text-3xl font-bold text-white mb-2">{wrestler.name}</h2>
          <p className="text-gray-400 mb-4">{wrestler.bio}</p>
          <p className="text-gray-300 mb-1">Record: {wrestler.record}</p>
          <p className="text-gray-300 mb-1">Weight: {wrestler.weight}</p>
          <p className="text-gray-300 mb-4">Hometown: {wrestler.hometown}</p>

          <div>
            <h3 className="text-xl text-red-500 font-semibold mb-2">Social Links</h3>
            <ul className="list-disc list-inside text-blue-400">
              <li>
                <a href={wrestler.socials.twitter} target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href={wrestler.socials.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
