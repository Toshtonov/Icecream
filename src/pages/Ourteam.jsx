import { Facebook, Instagram, Youtube } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Marvin Joner",
    role: "Bakery Worker",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
    },
  },
  {
    id: 2,
    name: "Patricia Woodrum",
    role: "Staff Worker",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
    },
  },
  {
    id: 3,
    name: "Hannaz Stone",
    role: "Shop Worker",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
    },
  },
  {
    id: 4,
    name: "Elina James",
    role: "Bakery Worker",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
    },
  },
  {
    id: 5,
    name: "Kevin Andrew",
    role: "Staff Worker",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
    },
  },
  {
    id: 6,
    name: "Lauren Trout",
    role: "Shop Worker",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
    },
  },
];

export default function Ourteam() {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-r from-pink-100 via-white to-blue-100">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-6 text-center font-['Berkshire_Swash']">
          Our Team
        </h1>
        <div className="flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-md text-sm md:text-base">
          <span className="text-pink-500 font-medium">Home</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">Team</span>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 font-['Berkshire_Swash']">
          Our <span className="text-pink-500">Team</span> Members
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto text-sm md:text-base">
          Get to know the friendly faces behind your favorite flavors.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="text-center bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-pink-200"
              />
              <h3 className="mt-4 text-lg md:text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500 text-sm md:text-base">{member.role}</p>

              {/* Socials */}
              <div className="flex justify-center gap-3 mt-4">
                <a
                  href={member.socials.facebook}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href={member.socials.instagram}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={member.socials.youtube}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
