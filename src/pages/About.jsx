import {
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import girlsIcecream from "../images/girls-icecream.png";

export default function AboutHeader() {
  return (
    <div>
      {/* Top Hero */}
      <section className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-r from-pink-100 via-white to-blue-100 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-black font-serif mb-6">
          About Us
        </h1>
        <div className="flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-md text-sm md:text-base">
          <span className="text-pink-500 font-medium">Home</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">About Us</span>
        </div>
      </section>

      {/* Journey Section */}
      <div className="mt-10 mb-10 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto relative">
          {/* Left image */}
          <div className="w-full md:w-1/2">
            <img
              src="src/images/love-icecream.png"
              alt="love icecream"
              className="w-full rounded-xl"
            />
          </div>

          {/* Text content */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-snug">
              Our <span className="text-red-500">Journey</span> Began
              With a Simple Dream
            </h1>
            <p className="mb-5 text-gray-700">
              Our goal is to make the best ice cream using only the finest,
              natural ingredients. From rich, creamy classics to adventurous
              new creations, every flavor is meticulously crafted in-house to
              ensure the highest quality and freshness.
            </p>
            <p className="mb-5 text-gray-700">
              We take pride in offering a diverse range of options, including
              dairy-free, vegan, and gluten-free choices, so everyone can find
              their perfect scoop.
            </p>
            <Link to="/Onecolumn" className="inline-block">
              <button className="bg-[#F83D8E] rounded-full flex gap-3 px-6 py-3 items-center text-white hover:bg-pink-600">
                Read More <ArrowRight size={18} />
              </button>
            </Link>
          </div>

          {/* Right icecream image (only large screen) */}
          <img
            className="absolute right-0 top-0 hidden lg:block w-40"
            src="src/images/right-icecream.png"
            alt="right icecream"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="w-full bg-[#683292]">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-16 gap-10">
          <div className="relative text-white flex-1">
            {/* Decorative images only on medium+ */}
            <img
              src="src/images/mission-triangle.png.png"
              className="absolute left-[5%] top-[10%] hidden md:block w-10"
              alt="triangle"
            />
            <img
              src="src/images/mission-cross.png.png"
              className="absolute left-[8%] top-[40%] hidden md:block w-8"
              alt="cross"
            />

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-snug">
              Our Mission is to Create Moments
            </h1>
            <p className="mb-6 max-w-lg">
              We strive to foster a welcoming and joyful environment where
              customers of all ages can gather, celebrate, and make lasting
              memories. Our commitment extends beyond serving great ice cream.
            </p>
            <button className="bg-[#F83D8E] rounded-full flex gap-3 px-6 py-3 items-center text-white hover:bg-pink-600">
              Read More <ArrowRight size={18} />
            </button>

            <img
              src="src/images/mission-wave.png.png"
              className="absolute right-[10%] top-0 hidden md:block w-20"
              alt="wave"
            />
          </div>

          {/* Right image */}
          <div className="flex-1 flex justify-center">
            <img
              src={girlsIcecream}
              alt="photo"
              className="w-full max-w-sm md:max-w-md rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mt-16 mb-16 px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl mb-2 font-bold">
            Our <span className="text-[#F83D8E]">Statistics</span>
          </h1>
          <p className="text-gray-600">What makes us special through our impressive statistics.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-10">
          {[
            { num: "91+", text: "Awards Win" },
            { num: "95%", text: "Satisfied Clients" },
            { num: "48+", text: "Years of Experience" },
            { num: "143+", text: "Employees Working" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border-b-4 border-[#F83D8E] shadow-sm"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
                {item.num}
              </h1>
              <p className="text-[#646464] text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
