import React from "react";

// Events page to display upcoming RWE wrestling shows
// Owners can later add/edit events through an admin panel
export default function EventsPage() {
  const events = [
    {
      id: 1,
      name: "RWE Summer Slam",
      date: "2025-08-15",
      venue: "Jonesboro Arena",
      ticketLink: "https://tickets.rwe.com/summerslam"
    },
    {
      id: 2,
      name: "RWE Fall Brawl",
      date: "2025-10-05",
      venue: "Blytheville Coliseum",
      ticketLink: "https://tickets.rwe.com/fallbrawl"
    }
    // More events can be added here
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">Upcoming Events</h1>

      <section className="space-y-6">
        {events.map((event) => (
          <div key={event.id} className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-3xl font-semibold mb-2">{event.name}</h2>
            <p className="text-gray-300">Date: {new Date(event.date).toLocaleDateString()}</p>
            <p className="text-gray-300">Venue: {event.venue}</p>
            <a
              href={event.ticketLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Buy Tickets
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}

