import React from "react";

// This is the main homepage for RWE Wrestling
// Everything inside <main> shows up when someone visits the site
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-4">

      {/* Header Section with title and subtitle */}
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-red-600">RWE Wrestling</h1>
        <p className="text-lg md:text-2xl mt-2 text-gray-300">
          The Official Digital Arena of Northeast Arkansas Wrestling
        </p>
      </header>

      {/* This section includes clickable boxes for the main features */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Link or content box for watching match videos */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2">🔥 Latest Matches</h2>
          <p className="text-gray-400">Watch replays and highlights from recent events.</p>
        </div>

        {/* Box for upcoming shows and tickets */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2">🎟️ Upcoming Events</h2>
          <p className="text-gray-400">Don’t miss a show—check dates, venues, and ticket info.</p>
        </div>

        {/* Online shop and ticket store */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2">🛍️ Merch & Tickets</h2>
          <p className="text-gray-400">Grab exclusive gear and secure your seat at the next match.</p>
        </div>

        {/* Roster section for showing wrestlers */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2">👊 Meet the Roster</h2>
          <p className="text-gray-400">Check out bios, stats, and photos of your favorite wrestlers.</p>
        </div>
      </section>
    </main>
  );
}
