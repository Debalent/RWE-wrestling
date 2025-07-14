import React from "react";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-red-600 mb-10 text-center">
        🛠️ RWE Admin Dashboard
      </h1>

      <section className="max-w-3xl mx-auto grid gap-6">
        <Link href="/admin/wrestlers">
          <a className="block bg-gray-800 p-6 rounded-xl shadow hover:bg-gray-700 transition">
            <h2 className="text-2xl font-semibold mb-2">👊 Manage Wrestlers</h2>
            <p className="text-gray-400">
              Add, update, or remove wrestler profiles and stats.
            </p>
          </a>
        </Link>

        <Link href="/admin/events">
          <a className="block bg-gray-800 p-6 rounded-xl shadow hover:bg-gray-700 transition">
            <h2 className="text-2xl font-semibold mb-2">🗓️ Manage Events</h2>
            <p className="text-gray-400">
              Create and edit show dates, venues, and ticket links.
            </p>
          </a>
        </Link>

        <Link href="/admin/media">
          <a className="block bg-gray-800 p-6 rounded-xl shadow hover:bg-gray-700 transition">
            <h2 className="text-2xl font-semibold mb-2">📤 Media Uploads</h2>
            <p className="text-gray-400">
              Upload photos, videos, promos, and manage archives.
            </p>
          </a>
        </Link>

        <Link href="/admin/merch">
          <a className="block bg-gray-800 p-6 rounded-xl shadow hover:bg-gray-700 transition">
            <h2 className="text-2xl font-semibold mb-2">🛍️ Merch & Store</h2>
            <p className="text-gray-400">
              Manage merchandise inventory, orders, and discounts.
            </p>
          </a>
        </Link>
      </section>
    </main>
  );
}
