import { IoMdLink } from "react-icons/io";
import Image from "next/image";

const team = [
  {
    name: "Kofi Mensah",
    role: "Chief Executive Officer",
    image: "/team1.png",
    initials: "KM",
  },
  {
    name: "Zainab Abid",
    role: "Head of Operations",
    image: "/team2.jpeg",
    initials: "ZA",
  },
  {
    name: "David Okoro",
    role: "Chief Technology Officer",
    image: "/team3.jpeg",
    initials: "DO",
  },
  {
    name: "Amara Diop",
    role: "Impact Director",
    image: "/team4.jpeg",
    initials: "AD",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Leadership Team
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Guided by a team of energy experts and local visionaries committed to
          transforming Africa&apos;s energy landscape.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <div key={index} className="group">
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-6 bg-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-500 text-4xl font-bold">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
              <p className="text-[#047857] text-xs font-bold uppercase tracking-wider mb-2">
                {member.role}
              </p>
              <a
                href="#"
                className="text-gray-400 hover:text-[#0077b5] transition-colors"
              >
                <IoMdLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
