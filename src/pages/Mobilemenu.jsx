import { X, Search, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../images/Group1(1).png";

export default function Mobilemenu({ isOpen, onClose, cartCount = 2 }) {
  if (!isOpen) return null; // faqat ochilganda chiqadi

  return (
    <div className="fixed inset-0 bg-black/40 z-[999] flex justify-end">
      <div className="w-3/4 bg-white h-full shadow-lg p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <Link to="/" onClick={onClose}>
            <img src={Logo} alt="logo" className="w-24" />
          </Link>
          <button
            onClick={onClose}
            className="text-gray-800 hover:text-pink-600 transition"
          >
            <X size={28} />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-5 text-gray-800 font-medium text-lg">
          <li>
            <Link to="/" onClick={onClose} className="hover:text-pink-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/ShopPage" onClick={onClose} className="hover:text-pink-600">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/Product" onClick={onClose} className="hover:text-pink-600">
              Product
            </Link>
          </li>
          <li>
            <Link to="/Offers" onClick={onClose} className="hover:text-pink-600">
              Pages
            </Link>
          </li>
          <li>
            <Link to="/Contact" onClick={onClose} className="hover:text-pink-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* Footer icons */}
        <div className="flex items-center gap-4 mt-10">
          <button
            onClick={() => alert("Search modal ochiladi (keyin qo‘shamiz)")}
            className="text-gray-800 hover:text-pink-600 transition"
          >
            <Search size={22} />
          </button>
          <Link to="/shoppingcart" onClick={onClose}>
            <button className="relative text-gray-800 hover:text-pink-600 transition">
              <ShoppingBag size={24} />
              <span className="absolute -top-1 -right-2 bg-black text-white text-[10px] font-semibold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
