import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRoute = () => setOpen(false);
    router.events.on("routeChangeComplete", handleRoute);
    return () => router.events.off("routeChangeComplete", handleRoute);
  }, [router.events]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/roster", label: "Roster" },
    { href: "/events", label: "Events" },
    { href: "/media", label: "Media" },
    { href: "/store", label: "Store" },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <a className="flex items-center" aria-label="RWE home">
                <Logo />
              </a>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {links.map((l) => {
              const active = router.pathname === l.href;
              return (
                <Link key={l.href} href={l.href}>
                  <a className={`hover:text-red-400 ${active ? "text-red-400 font-semibold" : "text-gray-200"}`}>{l.label}</a>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-1 bg-gray-900" role="menu">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              <a onClick={() => setOpen(false)} className={`block px-3 py-2 rounded-md text-base hover:bg-gray-800 ${router.pathname === l.href ? "text-red-400 font-semibold" : "text-gray-200"}`}>{l.label}</a>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
