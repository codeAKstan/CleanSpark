import Link from "next/link";
import { MdBolt } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 mx-auto bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl flex items-center justify-between w-full mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-[#047857]">
            <MdBolt size={30} />
          </div>
          <span className="text-xl md:text-2xl font-extrabold text-[#047857] tracking-tight">
            CleanSpark
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
          <Link href="#" className="hover:text-[#047857]">
            Home
          </Link>
          <Link href="#" className="hover:text-[#047857]">
            Shop
          </Link>
          <Link href="#" className="hover:text-[#047857]">
            Monitoring
          </Link>
          <Link href="#" className="hover:text-[#047857]">
            About Us
          </Link>
          <Link href="#" className="hover:text-[#047857]">
            Support
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:cursor-pointer hover:text-[#047857]">
            <IoMdSearch size={25} />
          </button>
          <button className="bg-[#047857] hover:cursor-pointer hover:bg-[#036c4e] text-white font-semibold py-3 px-8 rounded-full transition-colors">
            Get Solar Now
          </button>
        </div>
      </div>
    </header>
  );
}
