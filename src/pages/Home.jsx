import { ArrowRight, Star, Heart, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Testimonials from "./Testimonials";
// product images
import product1 from "../images/prodect-1.png";
import product2 from "../images/prodect-2.png";
import product3 from "../images/prodect-3.png";
import product4 from "../images/prodect-4.png";

// best sellers images
import bs1 from "../images/prodect-1.png";
import bs2 from "../images/prodect-2.png";
import bs3 from "../images/prodect-3.png";
import bs4 from "../images/prodect-4.png";

// context
import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";


import Sundes from "../images/sundes.png";
import Cones from "../images/cones.png";
import Milkshakes from "../images/mikshakes.png";
import Flavors from "../images/flavers.png";

const categories = [
  { title: "Sundaes", img: Sundes },
  { title: "Ice Cream Cones", img: Cones },
  { title: "Milkshakes", img: Milkshakes },
  { title: "Seasonal Flavors", img: Flavors },
];
import Shadowicecream from "../images/shadow-icecreamchik.png"
import Shadowimg from "../images/shadowimg.png"
import girlimage from "../images/icecreamgirl.png"
import Rightimg from "../images/right-12.png"
import Summerspecial from "../images/summerspecial.png"
export default function Home() {
  // product
  const products = [
    {
      id: 1,
      img: product1,
      title: "Chocolate Brownie Sundae",
      desc: "Rich chocolate ice cream with chunks of brownie.",
      price: 5.49,
      bg: "#F7F2F7",
    },
    {
      id: 2,
      img: product2,
      title: "Strawberry Shortcake",
      desc: "Strawberry ice cream layered with shortcake",
      price: 5.29,
      bg: "#F7F2F7",
    },
    {
      id: 3,
      img: product3,
      title: "Mint Chocolate Chip Cone",
      desc: "Refreshing mint ice cream with chocolate chips.",
      price: 3.99,
      bg: "#F7F2F7",
    },
    {
      id: 4,
      img: product4,
      title: "Classic Vanilla Ice Cream",
      desc: "Creamy vanilla ice cream topped with cherry.",
      price: 4.99,
      bg: "#F7F2F7",
    },
  ];

  const { setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const addToCart = (i) => {
    setCart((prev) => [...prev, i]);
  };

  // best sellers
  const bestSellers = [
    {
      id: 1,
      title: "Chocolate Chip Cookie Cone",
      desc: "Chocolate chip cookie dough ice cream in a cone.",
      price: 4.49,
      img: bs1,
      rating: 4,
    },
    {
      id: 2,
      title: "Rocky Road Sundae",
      desc: "Marshmallow and nutty rocky road ice cream.",
      price: 5.69,
      img: bs2,
      rating: 5,
    },
    {
      id: 3,
      title: "Peach Melba Sundae",
      desc: "Peach ice cream topped with raspberry sauce.",
      price: 5.39,
      img: bs3,
      rating: 4,
    },
    {
      id: 4,
      title: "Strawberry Sundae",
      desc: "Strawberry ice cream with fresh strawberries.",
      price: 5.99,
      img: bs4,
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <div className="">
      {/* Hero section */}
      <div className="relative bg-[#FFF8EE] overflow-hidden">
        {/* Chap tomonda fon rasmi */}
        <img
          src={Shadowicecream}
          alt=""
          className="hidden lg:block absolute left-0 top-10 w-40 lg:w-60 opacity-70"
        />

        <main className="flex flex-col lg:flex-row items-center justify-between py-20 max-w-[1280px] mx-auto px-8 relative">
          {/* Matn qismi */}
          <div className="flex-1 text-center lg:text-left z-10">
            <p className="text-gray-600 mb-3 text-lg">— Welcome to The</p>

            <h1 className="font-berkshire text-gray-900 font-normal leading-[108px] text-[56px] md:text-[84px]">
              Discover <span className="text-[#F83D8E]">Sweet</span> Delights!
            </h1>

            <p className="text-gray-600 mt-6 mb-10 max-w-md mx-auto lg:mx-0 text-base leading-relaxed">
              Relish the timeless taste of handcrafted ice cream, made with passion
              and the finest ingredients.
            </p>

            <button className="px-8 py-4 rounded-full bg-[#683292] text-white font-medium shadow-lg hover:bg-purple-700 transition">
              Browse Our Classic Flavors →
            </button>
          </div>

          {/* Rasm qismi */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <img
              src={Shadowimg}
              alt="Ice cream"
              className="w-[500px] md:w-[620px] lg:w-[720px] drop-shadow-2xl translate-x-[-60px] lg:translate-x-[-80px]"
            />
          </div>
        </main>


      </div>

      <section className="relative bg-white overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 relative z-10">

          {/* Chap rasm qismi */}
          <div className="relative flex justify-center md:w-1/2 mt-10 md:mt-0">
            {/* Orqa fon doira */}
            <div className="absolute w-[340px] h-[340px] bg-[#FFE4EE] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>

            {/* Rasmning o‘zi */}
            <img
              src={girlimage}
              alt="Girl eating ice cream"
              className="relative w-[320px] md:w-[380px] rounded-full z-10"
            />

            {/* Dekor — chap pastdagi pushti doira */}
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#F83D8E] rounded-full flex items-center justify-center shadow-lg">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
          </div>

          {/* O‘ng matn qismi */}
          <div className="md:w-1/2 text-center md:text-left space-y-6 relative">
            {/* Dekor — yuqori o‘ngdagi nuqtalar */}
            <div className="absolute -top-6 right-16 grid grid-cols-4 gap-1 opacity-70">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
              ))}
            </div>

            {/* Matn */}
            <h1 className="text-4xl md:text-5xl font-['Berkshire_Swash'] font-bold text-gray-900 leading-tight">
              Relive the Sweet <br />
              Memories of Classic{" "}
              <span className="text-[#F83D8E]">Ice Creams</span>
            </h1>

            <p className="text-gray-600 max-w-md mx-auto md:mx-0">
              From rich chocolate fudge to creamy vanilla sundaes,
              discover our menu of classic ice cream creations.
            </p>

            <button className="mt-4 px-8 py-3 bg-gradient-to-r from-[#F83D8E] to-[#FF5FB2] hover:opacity-90 text-white rounded-full shadow-md flex items-center gap-2 mx-auto md:mx-0 transition-all duration-300">
              Explore Our Menu <ArrowRight size={18} />
            </button>

            {/* Dekor — o‘ngdagi qog‘oz samolyot */}
            <svg
              className="absolute right-0 top-12 w-10 h-10 text-pink-400 rotate-12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9m0 0l-9 9m9-9l-9 9m0 0L3 12l6.5-6"
              />
            </svg>
          </div>
        </div>

        {/* Dekor — past o‘ngdagi yarim doira */}
        <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[200px] h-[200px] rounded-full border-[6px] border-pink-400"></div>
      </section>


      {/* Cart sections */}
      <div className="w-full py-16 flex flex-col items-center justify-center bg-[linear-gradient(301.26deg,#EFD7EF_8%,#F5F9FC_43%,#F8EAE1_64%,#EAF8F9_87%)] relative overflow-hidden">
        <img
          src="src/images/classic-leftimage.png.png"
          className="hidden lg:block absolute left-0 bottom-0 w-40"
          alt=""
        />
        <div className="flex flex-col gap-3 px-4 w-full max-w-7xl">
          <h1 className="text-3xl md:text-5xl font-['Berkshire_Swash'] font-bold text-center">
            Our <span className="text-[#F83D8E]">Classic</span> Favorites
          </h1>
          <p className="text-sm text-[#646464] text-center">
            Check out our top products that our customers love.
          </p>

          {/* cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {products.map((i) => (
              <div
                key={i.id}
                onClick={() => navigate(`/product/${i.id}`, { state: i })}
                className="relative w-full bg-white rounded-2xl shadow-md p-4 cursor-pointer mx-auto"
              >
                <div className="bg-[#F7F2F7] rounded-lg py-5 flex justify-center relative">
                  <button className="absolute top-3 left-3 text-gray-500 hover:text-pink-500 bg-white p-2 rounded-full">
                    <Heart size={20} />
                  </button>
                  <img
                    src={i.img}
                    alt={i.title}
                    className="w-32 h-32 md:w-40 md:h-40 object-contain"
                  />
                </div>

                <div className="flex justify-between">
                  <h3 className="font-bold text-lg mt-4 max-w-[70%]">
                    {i.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                    <Star size={16} className="text-yellow-500 fill-yellow-500" />
                    <span>4.9/5</span>
                  </div>
                </div>

                <p className="text-gray-500 text-sm mt-2">{i.desc}</p>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-pink-600 font-bold text-lg">${i.price}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(i);
                    }}
                    className="p-3 rounded-full bg-[#683292] text-white hover:bg-pink-600"
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src="src/images/classic-rightimage.png.png"
          className="hidden lg:block absolute right-0 bottom-0 w-40"
          alt=""
        />
      </div>

      {/* Categories section */}
      <section className="py-12 bg-white text-center px-4">
        <h2 className="text-3xl font-['Berkshire_Swash'] font-bold mb-2">
          Explore Our <span className="text-pink-500">Categories</span>
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Browse through our different categories to find your favorite ice
          cream treats.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-40 md:h-56 object-cover"
              />
              <div className="flex justify-between items-center p-4 ">
                <h3 className="font-semibold text-gray-800">{cat.title}</h3>
                <button className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
   

      {/* Best sellers */}
      <section className="text-center py-12 px-4">
        <h2 className="text-3xl font-bold mb-2">
          Our <span className="text-pink-500 font-['Berkshire_Swash']">Best</span> Sellers
        </h2>
        <p className="text-gray-500 mb-8">
          Discover the favorites that keep our customers coming back for more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {bestSellers.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`, { state: item })}
              className="bg-white rounded-2xl shadow-md p-4 flex flex-col relative cursor-pointer hover:shadow-lg transition"
            >
              <button className="absolute top-3 left-3 bg-white rounded-full p-2 shadow hover:bg-pink-100">
                <Heart className="w-4 h-4 text-pink-500" />
              </button>

              <img
                src={item.img}
                alt={item.title}
                className="w-full rounded-lg h-32 md:h-40 mx-auto object-contain mb-4"
              />

              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{item.desc}</p>

              <div className="flex justify-center mb-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`${i < item.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-auto">
                <span className="text-pink-600 font-semibold">
                  ${item.price.toFixed(2)}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(item);
                  }}
                  className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600"
                >
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* dots */}
        <div className="flex justify-center mt-6 gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${current === i ? "bg-pink-500" : "bg-gray-300"
                }`}
            ></span>
          ))}
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
