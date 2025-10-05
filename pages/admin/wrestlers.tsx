import React, { useState } from "react";
import Image from "next/image";

// Admin Wrestler Management Page
// Lets owners add/edit/remove wrestler profiles
export default function AdminWrestlers() {
  const [wrestlers, setWrestlers] = useState([
    {
      id: 1,
      name: "El Diablo",
      bio: "Undisputed champ known for ruthless power.",
      imageUrl: "/wrestlers/el-diablo.jpg",
    },
  ]);

  const [newName, setNewName] = useState("");
  const [newBio, setNewBio] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");

  const addWrestler = () => {
    const newWrestler = {
      id: Date.now(),
      name: newName,
      bio: newBio,
      imageUrl: newImageUrl,
    };
    setWrestlers([...wrestlers, newWrestler]);
    setNewName("");
    setNewBio("");
    setNewImageUrl("");
  };

  const removeWrestler = (id) => {
    setWrestlers(wrestlers.filter((w) => w.id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">
        👊 Wrestler Management
      </h1>

      <section className="max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl mb-4 font-semibold">Add New Wrestler</h2>
        <input
          type="text"
          placeholder="Wrestler Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="w-full p-2 mb-2 rounded text-black"
        />
        <textarea
          placeholder="Wrestler Bio"
          value={newBio}
          onChange={(e) => setNewBio(e.target.value)}
          className="w-full p-2 mb-2 rounded text-black"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newImageUrl}
          onChange={(e) => setNewImageUrl(e.target.value)}
          className="w-full p-2 mb-4 rounded text-black"
        />
        <button
          onClick={addWrestler}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Add Wrestler
        </button>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl mb-4 font-semibold">Current Roster</h2>
        {wrestlers.map((w) => (
          <div
            key={w.id}
            className="bg-gray-800 p-4 rounded-xl mb-4 flex items-center justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-white">{w.name}</h3>
              <p className="text-gray-300">{w.bio}</p>
            </div>
            <div className="w-20 h-20 ml-4 relative flex-shrink-0">
              <Image src={w.imageUrl || '/placeholder-wrestler.jpg'} alt={w.name} fill className="object-cover rounded-full border" />
            </div>
            <button
              onClick={() => removeWrestler(w.id)}
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

