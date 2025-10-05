import React from 'react';

interface Props {
  title: string;
  date?: string;
  venue?: string;
  ticketLink?: string;
}

export default function EventCard({ title, date, venue, ticketLink }: Props) {
  return (
    <div className="bg-gradient-to-tr from-gray-800 to-gray-900 rounded-2xl p-4 shadow-md">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      {date && <p className="text-sm text-gray-300">{new Date(date).toLocaleDateString()}</p>}
      {venue && <p className="text-sm text-gray-400">{venue}</p>}
      {ticketLink && (
        <a href={ticketLink} target="_blank" rel="noreferrer" className="mt-3 inline-block bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
          Buy Tickets
        </a>
      )}
    </div>
  );
}
