import React from 'react';
import Link from 'next/link';
import WrestlerCard from '../components/WrestlerCard';
import EventCard from '../components/EventCard';

export default function RweHomepage() {
	const wrestlers = [
		{ name: 'Blaze Carter', nickname: 'The Southern Storm', image: '/images/blaze.jpg', bio: 'High-flying daredevil.' },
		{ name: 'Rico V', nickname: 'The Iron Brawler', image: '/images/rico.jpg', bio: 'Powerful and relentless.' },
		{ name: 'Nova Black', nickname: 'The Shadow', image: '/images/nova.jpg', bio: 'Swift and cunning.' },
	];

	const events = [
		{ title: 'RWE Fall Brawl', date: '2025-10-05', venue: 'Blytheville Coliseum', ticketLink: '#' },
		{ title: 'RWE Winter Slam', date: '2025-12-15', venue: 'Jonesboro Arena', ticketLink: '#' },
	];

	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white p-6">
			<header className="text-center max-w-3xl mx-auto mb-12">
				<h1 className="text-5xl font-extrabold text-red-500 mb-3">RWE Wrestling</h1>
				<p className="text-gray-300 text-lg">The official digital arena for northeast Arkansas wrestling. Events, roster, merch and more.</p>
			</header>

			<section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
				<div className="lg:col-span-2 space-y-6">
					<div className="bg-gray-800 p-6 rounded-2xl shadow">
						<h2 className="text-2xl font-bold text-white mb-2">🔥 Latest Matches</h2>
						<p className="text-gray-300">Replays and curated highlights from recent RWE events.</p>
						<div className="mt-4">
							<Link href="/media"><a className="inline-block bg-red-600 hover:bg-red-700 px-4 py-2 rounded">Watch Now</a></Link>
						</div>
					</div>

					<div className="bg-gray-800 p-6 rounded-2xl shadow">
						<h2 className="text-2xl font-bold text-white mb-2">🤼 Meet the Roster</h2>
						<p className="text-gray-300">Explore bios, highlights and upcoming matchups.</p>
						<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
							{wrestlers.map((w, i) => (
								<WrestlerCard key={i} {...w} />
							))}
						</div>
					</div>
				</div>

				<aside className="space-y-6">
					<div className="bg-gray-800 p-6 rounded-2xl shadow">
						<h3 className="text-xl font-bold text-white mb-3">📅 Upcoming Events</h3>
						<div className="space-y-3">
							{events.map((e, i) => (
								<EventCard key={i} {...e} />
							))}
						</div>
					</div>

					<div className="bg-gray-800 p-6 rounded-2xl shadow">
						<h3 className="text-xl font-bold text-white mb-2">🛒 Official Store</h3>
						<p className="text-gray-300">Grab merch and tickets. Fast shipping and digital tickets available.</p>
						<div className="mt-4">
							<Link href="/store"><a className="inline-block bg-red-600 hover:bg-red-700 px-4 py-2 rounded">Shop Now</a></Link>
						</div>
					</div>
				</aside>
			</section>

			<footer className="max-w-6xl mx-auto text-center text-gray-500 py-6">
				<p>© {new Date().getFullYear()} RWE Wrestling — Built with passion</p>
			</footer>
		</main>
	);
}
