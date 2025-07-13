import React from "react";
import Link from "next/link";

// This is the top navigation bar for RWE
// Owners can add or remove links below to customize navigation
export default function Navbar() {
  return (
    <nav className="bg-gray-950 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or site name */}
        <div className="text-2xl font-bold text-red-600">
          <Link href="/">RWE</Link>
        </div>

        {/* Navigation links */}
        <ul className="flex space-x-6 text-sm md:text-base">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/roster">Roster</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/media">Media</Link>
          </li>
          <li>
            <Link href="/store">Store</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
