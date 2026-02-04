import Link from "next/link";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { LuAtSign } from "react-icons/lu";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiPaperAirplane } from "react-icons/hi2";
import { MdBolt } from "react-icons/md";

const contacts = [
  { id: 1, icon: <BsGlobeEuropeAfrica size={20} /> },
  { id: 2, icon: <LuAtSign size={20} /> },
  { id: 3, icon: <BsFillTelephoneFill /> },
];
export default function Footer() {
  return (
    <footer className="bg-white pt-12 md:pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#047857]">
              <MdBolt size={30} />
              <span className="text-xl font-bold tracking-tight">
                CleanSpark
              </span>
            </div>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
              Leading the transition to sustainable energy across the African
              continent. Expert solutions for a brighter future.
            </p>
            <div className="flex gap-4">
              {contacts.map((contact) => (
                <a
                  key={contact.id}
                  href="#"
                  className="w-10 h-10 p-2 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#047857]/10 hover:text-[#047857] transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Our Solutions</h4>
            <ul className="space-y-4 text-sm md:text-base text-gray-600">
              <li>
                <Link href="#" className="hover:text-[#047857]">
                  Portable Lanterns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#047857]">
                  Home Solar Systems
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#047857]">
                  Business Continuity
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#047857]">
                  Custom Installations
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Resources</h4>
            <ul className="space-y-4 text-sm md:text-base text-gray-600">
              <li>
                <Link href="#" className="hover:text-[#047857]">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#047857]">
                  Technical Docs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#047857]">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#047857]">
                  Sustainability Report
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Subscribe</h4>
            <p className="text-sm md:text-base text-gray-500 mb-4">
              Get the latest news on clean energy projects and offers.
            </p>
            <div className="flex gap-2 w-full">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 min-w-0 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#047857]"
              />
              <button className="shrink-0 bg-[#047857] hover:cursor-pointer hover:bg-[#036c4e] text-white p-2 rounded-lg transition-colors">
                <HiPaperAirplane size={25} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs  md:text-sm text-gray-400 gap-4">
          <p>© 2026 CleanSpark Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gray-600">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-600">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
