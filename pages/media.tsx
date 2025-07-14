import React, { useState } from "react";

// Admin Event Manager for RWE
// Lets owners create and edit show details
export default function AdminEvents() {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "RWE Winter Slam",
      date: "2025-12-15",
      venue: "Jonesboro Arena",
      ticketLink: "https://tickets.rwe.com/winter-slam",
    },
  ]);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [ticketLink, setTicketLink] = useState("");

  const addEvent = () => {
    const newEvent = {
      id: Date.now(),
      name,
      date,
      venue,
      ticketLink,
    };
    setEvents([...events, newEvent]);
    setName("");
    setDate("");
    setVenue("");
    setTicketLink("");
  };

  const removeEvent = (id) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-red-600 mb-10 text-center">
        🗓️ Manage Events
      </h1>

      <section className="max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl mb-4 font-semibold">Add New Event</h2>
        <input
          type="text"
          placeholder="Event Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-2 rounded text-black"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 mb-2 rounded text-black"
        />
        <input
          type="text"
          placeholder="Venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          className="w-full p-2 mb-2 rounded text-black"
        />
        <input
          type="text"
          placeholder="Ticket Link (URL)"
          value={ticketLink}
          onChange={(e) => setTicketLink(e.target.value)}
          className="w-full p-2 mb-4 rounded text-black"
        />
        <button
          onClick={addEvent}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Add Event
        </button>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl mb-4 font-semibold">Upcoming Events</h2>
        {events.map((e) => (
          <div
            key={e.id}
            className="bg-gray-800 p-4 rounded-xl mb-4 shadow flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-bold text-white">{e.name}</h3>
              <p className="text-gray-300">
                📍 {e.venue} | 📅 {e.date}
              </p>
              <a
                href={e.ticketLink}
                className="text-sm text-blue-400 underline"
                target="_blank"
              >
                Buy Tickets
              </a>
            </div>
            <button
              onClick={() => removeEvent(e.id)}
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
