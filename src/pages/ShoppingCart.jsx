import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart } = useContext(CartContext);

  // umumiy summa
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 md:px-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
        🛒 Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-4 md:p-5 rounded-xl shadow-md hover:shadow-lg transition"
              >
                {/* Product info */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg border"
                  />
                  <div>
                    <h2 className="font-semibold text-base md:text-lg">
                      {item.name}
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <span className="text-pink-600 font-bold text-base md:text-lg">
                  ${item.price}
                </span>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white p-5 md:p-6 rounded-xl shadow-md h-fit">
            <h2 className="text-lg md:text-xl font-bold mb-4">
              Order Summary
            </h2>
            <div className="flex justify-between mb-2 text-sm md:text-base">
              <span className="text-gray-600">Items ({cart.length})</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2 text-sm md:text-base">
              <span className="text-gray-600">Shipping</span>
              <span className="font-semibold">Free</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-base md:text-lg font-bold">
              <span>Total</span>
              <span className="text-pink-600">${total.toFixed(2)}</span>
            </div>

            {/* Checkout Button */}
            <Link to={"/Checkout"}>
              <button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition text-sm md:text-base">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
