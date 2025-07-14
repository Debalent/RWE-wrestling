import React, { useState } from "react";

// This page displays a user's profile
// In the future, this can adapt based on login/session info
export default function ProfilePage() {
  const [user] = useState({
    name: "Fan123",
    bio: "Diehard RWE fan from Jonesboro, AR!",
    favoriteWrestler: "Nova Black",
    socials: {
      twitter: "https://twitter.com/fan123",
      instagram: "https://instagram.com/fan123"
    }
  });

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">👤 Your Profile</h1>

      <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">Username: {user.name}</h2>
        <p className="text-gray-300 mb-4">Bio: {user.bio}</p>
        <p className="text-gray-300 mb-4">Favorite Wrestler: {user.favoriteWrestler}</p>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-red-500">Social Links</h3>
          <ul className="list-disc list-inside text-blue-400">
            <li>
              <a href={user.socials.twitter} target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href={user.socials.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
