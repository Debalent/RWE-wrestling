import React, { useState } from "react";

// Fantasy League page for RWE
// Fans can draft wrestlers and compete for points
export default function FantasyPage() {
  const roster = [
    "Blaze Carter",
    "Rico V",
    "Nova Black",
    "Thunder Wolf",
    "El Diablo"
  ];

  const [drafted, setDrafted] = useState([]);

  const toggleDraft = (name) => {
    if (drafted.includes(name)) {
      setDrafted(drafted.filter((w) => w !== name));
    } else {
      setDrafted([...drafted, name]);
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-8">🏆 Fantasy Roster Draft</h1>
      <p className="text-center text-gray-300 mb-10">
        Tap wrestlers below to add/remove from your fantasy team.
      </p>

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {roster.map((name, idx) => (
          <button
            key={idx}
            onClick={() => toggleDraft(name)}
            className={`p-4 rounded-xl font-bold text-center shadow-lg transition-colors duration-300
              ${drafted.includes(name) ? "bg-green-600" : "bg-gray-800 hover:bg-gray-700"}`}
          >
            {name}
          </button>
        ))}
      </section>

      {/* Summary of drafted team */}
      <div className="mt-10 max-w-xl mx-auto bg-gray-800 p-4 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-4 text-red-500">Your Fantasy Team</h2>
        {drafted.length === 0 ? (
          <p className="text-gray-400">No wrestlers selected yet.</p>
        ) : (
          <ul className="list-disc pl-6 text-gray-300">
            {drafted.map((name, idx) => (
              <li key={idx}>{name}</li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
