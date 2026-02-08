"use client";

import Link from "next/link";
import { MdBolt } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinkClass = (path: string): string => {
    const isActive =
      path === "/" ? pathname === "/" : pathname.startsWith(path);

    return `hover:text-[#047857] transition-colors ${
      isActive ? "text-[#047857] border-b-2 border-[#047857]" : "text-gray-600"
    }`;
  };

  const mobileNavLinkClass = (path: string): string => {
    const isActive =
      path === "/" ? pathname === "/" : pathname.startsWith(path);

    return `font-semibold transition-colors ${
      isActive ? "text-[#047857]" : "text-gray-500 hover:text-[#047857]"
    }`;
  };

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
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <Link href="/" className={navLinkClass("/")}>
            Home
          </Link>

          <Link href="/shop" className={navLinkClass("/shop")}>
            Shop
          </Link>

          <Link
            href="/solar-home-systems"
            className={navLinkClass("/solar-home-systems")}
          >
            For Homes
          </Link>

          <Link
            href="/portable-solar"
            className={navLinkClass("/portable-solar")}
          >
            Portables
          </Link>

          <Link href="/about-us" className={navLinkClass("/about-us")}>
            About Us
          </Link>

          <Link href="/support" className={navLinkClass("/support")}>
            Support
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/shop"
            className="bg-[#047857] hover:bg-[#036c4e] text-white font-semibold py-3 px-8 rounded-full transition-colors"
          >
            Get Solar Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span>
            {isMenuOpen ? <IoClose size={25} /> : <IoMenu size={25} />}
          </span>
        </button>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg md:hidden flex flex-col p-4 space-y-4">
            <Link
              href="/"
              className={mobileNavLinkClass("/")}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/shop"
              className={mobileNavLinkClass("/shop")}
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>

            <Link
              href="/solar-home-systems"
              className={mobileNavLinkClass("/solar-home-systems")}
              onClick={() => setIsMenuOpen(false)}
            >
              For Homes
            </Link>

            <Link
              href="/about-us"
              className={mobileNavLinkClass("/about-us")}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>

            <Link
              href="/support"
              className={mobileNavLinkClass("/support")}
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </Link>

            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
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
