import React from "react";

// Event Page for RWE
// Displays upcoming shows with venue, date, ticket links, and map previews
export default function EventPage() {
  const events = [
    {
      id: 1,
      title: "Fall Brawl 2025",
      date: "October 12, 2025",
      venue: "Jonesboro Sports Arena",
      address: "123 Arena Blvd, Jonesboro, AR",
      ticketUrl: "https://buy.rwe.com/fallbrawl",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.5647024711783!2d-90.704569!3d35.842059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d4d768f08ffb07%3A0xa11c93c5213d6d74!2sJonesboro%20Sports%20Arena!5e0!3m2!1sen!2sus!4v1622323012345!5m2!1sen!2sus"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">🗓️ Upcoming Events</h1>

      {events.map((event) => (
        <div
          key={event.id}
          className="bg-gray-800 rounded-2xl p-6 mb-8 max-w-4xl mx-auto shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-2 text-white">{event.title}</h2>
          <p className="text-gray-300 mb-1">📍 {event.venue}</p>
          <p className="text-gray-300 mb-1">📅 {event.date}</p>
          <p className="text-gray-400 mb-4">{event.address}</p>

          <iframe
            src={event.mapEmbed}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-xl mb-4"
          ></iframe>

          <a
            href={event.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Get Tickets
          </a>
        </div>
      ))}
    </main>
  );
}
