import {
  ArrowRight,
  MoveLeft as ChevronLeft,
  MoveRight as ChevronRight,
  Frown,
} from "lucide-react";
import { Link } from "react-router-dom";
import girlsIcecream from "../images/girls-icecream.png";
import Loveicecream from "../images/love-icecream.png"
import Righticecream from "../images/right-12.png"
import MissionImg from "../images/mission-wave.png.png"
import MissionTringle from "../images/mission-triangle.png.png"
import MissionCros from "../images/mission-cross.png.png"

export default function AboutHeader() {
  return (
    <div>
      <section className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-r from-pink-100 via-white to-blue-100">
        <h1 className="text-4xl md:text-5xl font-bold text-black font-serif mb-6">
          About Us
        </h1>

        <div className="flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-md">
          <span className="text-pink-500 font-medium">Home</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">About Us</span>
        </div>
      </section>

      <div className="mt-[5%] mb-[5%]">
        <div className="w-[70%] flex justify-center items-center m-auto">
          <div className="w-[90%]">
            <img src={Loveicecream} alt="love icecream" />
          </div>
          <div className="ml-[10%]">
            <h1 className="font-['Berkshire_Swash'] text-5xl font-bold w-[80%] mb-5">
              Our <span className="text-red-500">Journey</span> Began
              With a Simple Dream
            </h1>
            <p className="w-[65%] mb-5">
              Our goal is to make the best ice cream using only the finest,
              natural ingredients. From rich, creamy classics to adventurous
              new creations, every flavor is meticulously crafted in-house to
              ensure the highest quality and freshness.
            </p>
            <p className="w-[45%] mb-5">
              We take pride in offering a diverse range of options, including
              dairy-free, vegan, and gluten-free choices, so everyone can find
              their perfect scoop.
            </p>
            <Link to="/Onecolumn" className="block px-4 py-2 hover:bg-pink-50">
              <button className="bg-[#F83D8E] rounded-full flex gap-6 p-3 items-center text-white">
                Read More <ArrowRight size={15} />
              </button>
            </Link>
          </div>
          <img
            className="absolute right-0"
            src={Righticecream}
            alt="right icecream"
          />
        </div>
      </div>

      <div className="w-full bg-[#683292] flex justify-end">
        <div className="w-[75%] flex justify-end">
          <div className="m-auto items-center relative">
            <img
              src={MissionTringle}
              className="absolute left-[10%] mt-[3%]"
              alt="triangle"
            />
            <img
              src={MissionCros}
              className="absolute left-[8%] mt-[11%]"
              alt="cross"
            />
            <h1 className="text-5xl w-[50%] text-white mb-[5%] font-['Berkshire_Swash']">
              Our Mission is to Create Moments
            </h1>
            <p className="text-white w-[50%] mb-[5%]">
              We strive to foster a welcoming and joyful environment
              where customers of all ages can gather, celebrate, and
              make lasting memories. Our commitment extends beyond
              serving great ice cream.
            </p>
            <button className="bg-[#F83D8E] rounded-full flex gap-6 p-3 items-center text-white">
              Read More <ArrowRight size={15} />
            </button>
            <img
              src={MissionImg}
              className="absolute right-[30%] mt-[-3%]"
              alt="wave"
            />
          </div>
          <div>
            <img src={girlsIcecream} alt="photo" />
          </div>
        </div>
      </div>

      <div className="mt-[5%] mb-[5%]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl mb-2 font-['Berkshire_Swash']">
            Our <span className="text-[#F83D8E]">Statistics</span>
          </h1>
          <p>What makes us special through our impressive statistics.</p>
        </div>
        <div className="w-[50%] flex m-auto justify-between mt-[3%]">
          {[
            { num: "91+", text: "Awards Win" },
            { num: "95%", text: "Satisfied Clients" },
            { num: "48+", text: "Years of Experience" },
            { num: "143+", text: "Employees Working" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-2xl border-b-2 border-[#F83D8E]"
            >
              <h1 className="text-5xl flex font-bold justify-center">
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
