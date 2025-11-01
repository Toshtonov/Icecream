import { Search, ShoppingBag, ArrowRight, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { CartContext } from "../context/CartContext";
import Logo from "../images/Group1(1).png";
import Mobilemenu from "../pages/Mobilemenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenn, setIsOpenn] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { cart } = useContext(CartContext);

  const pagesRef = useRef(null);
  const blogRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        pagesRef.current &&
        !pagesRef.current.contains(e.target) &&
        blogRef.current &&
        !blogRef.current.contains(e.target) &&
        searchRef.current &&
        !searchRef.current.contains(e.target)
      ) {
        setIsOpen(false);
        setIsOpenn(false);
        setShowSearch(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <header className="bg-white sticky top-0 z-50 shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* ✅ Chap tomonda - Logo */}
          <Link to={"/"}>
            <div className="flex items-center gap-2 cursor-pointer">
              <img src={Logo} alt="Logo" className="h-10 w-auto" />
            </div>
          </Link>

          {/* ✅ O‘rtada - Navigatsiya */}
          <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <Link to={"/"}>
              <p className="hover:text-pink-500 transition">Home</p>
            </Link>

            <Link to={"/about"}>
              <p className="hover:text-pink-500 transition">About Us</p>
            </Link>

            {/* Pages dropdown */}
            <div className="relative" ref={pagesRef}>
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  setIsOpenn(false);
                  setShowSearch(false);
                }}
                className="hover:text-pink-500 transition cursor-pointer flex items-center"
              >
                Pages
              </button>
              {isOpen && (
                <div className="absolute bg-white shadow-lg rounded-md mt-2 w-44">
                  <Link
                    to={"/Ourteam"}
                    className="block px-4 py-2 hover:bg-pink-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Our Team
                  </Link>
                  <Link
                    to={"/Review"}
                    className="block px-4 py-2 hover:bg-pink-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Review
                  </Link>
                  <Link
                    to={"/ShopPage"}
                    className="block px-4 py-2 hover:bg-pink-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Shopping Card
                  </Link>
                  <Link
                    to={"/Offers"}
                    className="block px-4 py-2 hover:bg-pink-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Special Offers
                  </Link>
                  <Link
                    to={"/Product"}
                    className="block px-4 py-2 hover:bg-pink-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Product
                  </Link>
                  <Link
                    to={"/TermsAndConditions"}
                    className="block px-4 py-2 hover:bg-pink-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Terms & Cond.
                  </Link>
                </div>
              )}
            </div>

            {/* Blog dropdown */}
            <div className="relative" ref={blogRef}>
              <button
                onClick={() => {
                  setIsOpenn(!isOpenn);
                  setIsOpen(false);
                  setShowSearch(false);
                }}
                className="hover:text-pink-500 transition cursor-pointer flex items-center"
              >
                Blog
              </button>
              {isOpenn && (
                <div className="absolute bg-white shadow-lg rounded-md mt-2 w-32">
                  <Link
                    to={"/Blog"}
                    className="block px-4 py-2 hover:bg-pink-50"
                    onClick={() => setIsOpenn(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    to={"/Loadmore"}
                    className="block px-4 py-2 hover:bg-pink-50"
                    onClick={() => setIsOpenn(false)}
                  >
                    Load More
                  </Link>
                </div>
              )}
            </div>

            <Link to={"/faq"}>
              <p className="hover:text-pink-500 transition">Faq's</p>
            </Link>
          </div>

          {/* ✅ O‘ng tomonda - Search, Cart, Contact */}
          <div className="hidden md:flex items-center gap-6">
            {/* Search */}
            <div className="relative flex items-center" ref={searchRef}>
              <button
                onClick={() => {
                  setShowSearch(!showSearch);
                  setIsOpen(false);
                  setIsOpenn(false);
                }}
                className="flex items-center text-gray-600 hover:text-pink-500 transition"
              >
                <Search size={20} />
              </button>
              {showSearch && (
                <input
                  type="text"
                  placeholder="Search..."
                  autoFocus
                  className="absolute top-10 right-0 border rounded-full px-4 py-2 w-56 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                />
              )}
            </div>

            {/* Shopping Cart */}
            <Link to={"/shoppingcart"}>
              <button className="relative flex items-center">
                <ShoppingBag
                  size={22}
                  className="text-gray-600 hover:text-pink-500 transition"
                />
                {cart && cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {cart.length}
                  </span>
                )}
              </button>
            </Link>

            {/* Contact Button */}
            <Link to={"/Contact"}>
              <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#F83D8E] text-white shadow-md hover:opacity-90 transition text-sm">
                Contact Us <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          {/* ✅ Mobil menyu tugmasi */}
          <button
            onClick={() => setMobileMenu(true)}
            className="md:hidden text-gray-700 hover:text-pink-500 transition"
          >
            <Menu size={25} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <Mobilemenu
        isOpen={mobileMenu}
        onClose={() => setMobileMenu(false)}
        cartCount={cart?.length || 0}
      />
    </>
  );
}
