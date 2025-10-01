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

const categories = [
  { title: "Sundaes", img: "src/images/sundes.png" },
  { title: "Ice Cream Cones", img: "src/images/cones.png" },
  { title: "Milkshakes", img: "src/images/mikshakes.png" },
  { title: "Seasonal Flavors", img: "src/images/flavers.png" },
];

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
    <div>
      {/* Hero section */}
      <div className="flex justify-center bg-amber-50 relative overflow-hidden">
        <img
          src="src/images/shadow-icecreamchik.png"
          alt=""
          className="hidden md:block absolute left-0 top-10 w-40 md:w-60"
        />
        <main className="flex flex-col md:flex-row items-center justify-between py-12 md:py-20 max-w-7xl mx-auto gap-10 md:gap-20 px-4">
          <div className="max-w-lg text-center md:text-left">
            <p className="text-gray-600 mb-3">— Welcome to The</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Discover <span className="text-pink-500">Sweet</span> Delights!
            </h1>
            <p className="text-gray-600 mb-8">
              Relish the timeless taste of handcrafted ice cream, made with
              passion and the finest ingredients.
            </p>
            <button className="px-6 py-3 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700 transition">
              Browse Our Classic Flavors →
            </button>
          </div>

          <div className="mt-10 md:mt-0 md:ml-10">
            <img
              src="src/images/shadowimg.png"
              className="w-64 md:w-[420px] drop-shadow-2xl mx-auto"
            />
          </div>
        </main>
      </div>

      {/* Cart sections */}
      <div className="w-full py-16 flex flex-col items-center justify-center bg-[linear-gradient(301.26deg,#EFD7EF_8%,#F5F9FC_43%,#F8EAE1_64%,#EAF8F9_87%)] relative overflow-hidden">
        <img
          src="src/images/classic-leftimage.png.png"
          className="hidden lg:block absolute left-0 bottom-0 w-40"
          alt=""
        />
        <div className="flex flex-col gap-3 px-4 w-full max-w-7xl">
          <h1 className="text-3xl md:text-5xl font-bold text-center">
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
        <h2 className="text-3xl font-bold mb-2">
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
          Our <span className="text-pink-500">Best</span> Sellers
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
                    className={`${
                      i < item.rating ? "text-yellow-400" : "text-gray-300"
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
              className={`w-3 h-3 rounded-full cursor-pointer ${
                current === i ? "bg-pink-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
