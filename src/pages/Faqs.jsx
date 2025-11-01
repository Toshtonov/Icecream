import { ArrowRight } from "lucide-react";

// Rasmlarni import qilish
import img361 from "../images/361.png";
import img359 from "../images/359.png";
import img360 from "../images/360.png";
import img362 from "../images/362.png";
import imgRound from "../images/round.png";
import imgTringl from "../images/tringl.png";

export default function Faq() {
  const faqs = [
    "Do you offer dairy-free or vegan options?",
    "Can I order ice cream online?",
    "What ingredients do you use in your ice cream?",
    "Do you have nutritional information available?",
    "Do you have gluten-free ice cream?",
    "Can I book your store for private events?",
  ];

  return (
    <div className="w-full">
         <section className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-r from-pink-100 via-white to-blue-100">
        <h1 className="text-4xl md:text-5xl font-bold text-black font-serif mb-6">
         Faq's
        </h1>

        <div className="flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-md">
          <span className="text-pink-500 font-medium">Home</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">Faq's</span>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-white text-center px-4">
        <h2 className="text-3xl font-bold">
          Frequently Asked <span className="text-pink-600">Questions</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Some of the queries you want to know about us.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {faqs.map((q, i) => (
            <div
              key={i}
              className="bg-gray-50 hover:bg-gray-100 transition rounded-lg shadow-sm py-4 px-6 text-left cursor-pointer"
            >
              <p className="text-gray-700 font-medium">{q}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Offer Section */}
      <section className="bg-pink-600 relative overflow-hidden py-16 text-center text-white">
        <div className="relative z-10 w-[90%] lg:w-[70%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Ice Cream */}
          <img
            src={img361}
            alt="ice cream left"
            className="w-48 sm:w-72 lg:w-80"
          />

          {/* Decorative image */}
          <img
            className="absolute hidden sm:block left-[15%] top-[20%] w-16 lg:w-24"
            src={img359}
            alt=""
          />

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-3xl lg:text-4xl font-bold leading-snug">
              Limited <br /> Time <span className="text-yellow-300">Offer!</span>
            </h3>
            <p className="mt-4 text-lg">
              Get <span className="font-bold">20% Off</span> All Vegan Ice Creams!
            </p>
            <button className="mt-6 bg-indigo-900 px-6 py-3 rounded-full font-medium hover:bg-indigo-800 transition">
              Get This Deal
            </button>
            <p className="mt-2 text-sm">
              Use code: <b>VEGAN20</b> at checkout.
            </p>
          </div>

          {/* Decorative image */}
          <img
            className="absolute hidden sm:block right-[20%] bottom-[15%] w-16 lg:w-24"
            src={img360}
            alt=""
          />

          {/* Right Ice Cream */}
          <img
            src={img362}
            alt="ice cream right"
            className="w-48 sm:w-72 lg:w-80"
          />
        </div>
      </section>

      {/* Subscribe Section */}
      <div className="w-full py-16 px-4 relative flex justify-center items-center">
        <div className="flex flex-col gap-5 max-w-xl text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Sign up For{" "}
            <span className="text-[#ff08ff]">Exclusive Deals</span> <br />
            and Updates
          </h1>
          <p className="text-[#646464] text-sm">
            Get 10% off your next order and stay updated with our latest offers.
          </p>

          {/* Form */}
          <form className="flex flex-col sm:flex-row gap-4 mt-5">
            <input
              className="bg-white rounded-full flex-1 shadow-xl py-3 px-4 text-sm"
              placeholder="Enter Your Email Address"
              type="text"
            />
            <button className="bg-pink-500 flex gap-2 items-center justify-center text-white py-3 px-6 rounded-full hover:bg-pink-600 transition">
              Subscribe
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="flex gap-2 items-center justify-center text-sm">
            <input type="checkbox" />
            <p>
              I agree to the{" "}
              <span className="text-[#F83D8E] underline">Privacy Policy</span>.
            </p>
          </div>
        </div>

        {/* Background shapes */}
        <img
          src={imgRound}
          className="absolute hidden sm:block left-[10%] bottom-[15%] w-16 lg:w-24"
          alt=""
        />
        <img
          src={imgTringl}
          className="absolute hidden sm:block right-[10%] top-[15%] w-16 lg:w-24"
          alt=""
        />
      </div>
    </div>
  );
}
