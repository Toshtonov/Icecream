import { Search, ShoppingBag, ArrowRight, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Logo from "../images/Group1(1).png";
import Mobilemenu from "../pages/Mobilemenu"; // ✅ To‘g‘ri import yo‘li

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenn, setIsOpenn] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <>
      <header className="bg-white sticky top-0 z-50 shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <Link to={"/"}>
            <div className="flex items-center gap-2 cursor-pointer">
              <img src={Logo} alt="Logo" className="h-10 w-auto" />
            </div>
          </Link>

          {/* Navbar (desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <Link to={"/"}>
              <p className="hover:text-pink-500 transition">Home</p>
            </Link>
            <Link to={"/about"}>
              <p className="hover:text-pink-500 transition">About Us</p>
            </Link>

            {/* Pages dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-pink-500 transition cursor-pointer"
              >
                Pages
              </button>

              {isOpen && (
                <div className="absolute bg-white shadow-lg rounded-md mt-2 w-32">
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
            <div className="relative">
              <button
                onClick={() => setIsOpenn(!isOpenn)}
                className="hover:text-pink-500 transition cursor-pointer"
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
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4 md:gap-5">
            {/* Search */}
            <div className="flex items-center gap-3 relative">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="hidden md:flex items-center gap-2 text-gray-600 hover:text-pink-500 transition"
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
              <button className="relative">
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

            {/* Bars (Mobile menu) */}
            <button
              onClick={() => setMobileMenu(true)}
              className="md:hidden text-gray-700 hover:text-pink-500 transition"
            >
              <Menu size={25} />
            </button>

            {/* Contact */}
            <Link to={"/Contact"}>
              <button className="hidden md:flex items-center gap-2 px-10 py-2 rounded-full bg-[#F83D8E] text-white shadow-md hover:opacity-90 transition">
                Contact Us <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile sidebar menu */}
      <Mobilemenu
        isOpen={mobileMenu}
        onClose={() => setMobileMenu(false)}
        cartCount={cart?.length || 0}
      />
    </>
  );
}
