"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-sky-100">
      <div className="flex justify-between items-center h-16 px-4">
        <div className="text-sky-700 font-bold text-xl">TONMAN</div>
        <button
          className="md:hidden text-sky-700 hover:text-sky-900 transition-colors focus:outline-none h-[90%] aspect-square flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="text-3xl leading-none">
            {isMenuOpen ? "×" : "☰"}
          </span>
        </button>
        <ul className="hidden md:flex space-x-4">
          {["Home", "History", "Project", "My Passionate"].map((item) => (
            <li key={item}>
              <Link
                href={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "-")}`
                }
                className="text-sky-600 hover:text-sky-800 hover:bg-sky-200 px-3 py-2 rounded transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {isMenuOpen && (
        <ul className="md:hidden px-4 py-2 bg-sky-50">
          {["Home", "History", "Project", "My Passionate"].map((item) => (
            <li key={item}>
              <Link
                href={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "-")}`
                }
                className="block text-sky-600 hover:text-sky-800 hover:bg-sky-200 px-3 py-2 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
