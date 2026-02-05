"use client";

import Link from "next/link";
import { MdBolt } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 mx-auto bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl flex items-center justify-between w-full mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="text-[#047857]">
            <MdBolt size={30} />
          </div>
          <span className="text-xl md:text-2xl font-extrabold text-[#047857] tracking-tight">
            CleanSpark
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
          <Link href="/" className="hover:text-[#047857]">
            Home
          </Link>
         <Link href="/solar-home-systems" className="hover:text-[#047857]">
            Products
          </Link>
          <Link href="/shop" className="hover:text-[#047857]">
            Shop
          </Link>
          <Link href="#" className="hover:text-[#047857]">
            About Us
          </Link>
          <Link href="/support" className="hover:text-[#047857]">
            Support
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* <button className="text-gray-500 hover:cursor-pointer hover:text-[#047857]">
            <IoMdSearch size={25} />
          </button> */}
          <Link
            href="/shop"
            className="bg-[#047857] hover:cursor-pointer hover:bg-[#036c4e] text-white font-semibold py-3 px-8 rounded-full transition-colors"
          >
            Get Solar Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg md:hidden flex flex-col p-4 space-y-4">
            <Link
              href="#"
              className="text-gray-600 font-semibold hover:text-[#047857]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/solar-home-systems"
              className="text-gray-600 font-semibold hover:text-[#047857]"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/shop"
              className="text-gray-600 font-semibold hover:text-[#047857]"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="#"
              className="text-gray-600 font-semibold hover:text-[#047857]"
              onClick={() => setIsMenuOpen(false)}
            >
              Monitoring
            </Link>
            <Link
              href="#"
              className="text-gray-600 font-semibold hover:text-[#047857]"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/support"
              className="text-gray-600 font-semibold hover:text-[#047857]"
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </Link>
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
              <button className="flex items-center gap-2 text-gray-500 hover:text-[#047857]">
                <IoMdSearch size={20} />
                <span>Search</span>
              </button>
              <Link
                href="/shop"
                className="bg-[#047857] text-white font-semibold py-3 px-6 rounded-full w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Solar Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
