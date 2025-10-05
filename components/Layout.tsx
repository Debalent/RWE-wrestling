import { useState, useEffect, ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="relative min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
      {/* Transparent logo background */}
      <div
        className="fixed inset-0 opacity-10 bg-no-repeat bg-center bg-contain pointer-events-none z-0"
        style={{ backgroundImage: "url('/rwe-logo.svg')" }}
      ></div>

      {/* Dark mode toggle button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 bg-royalblue-600 hover:bg-royalblue-700 text-white px-4 py-2 rounded"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10 p-6 pt-24 max-w-7xl mx-auto">{children}</main>
    </div>
  );
}

