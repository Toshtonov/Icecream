import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Checkout() {
  const [payment, setPayment] = useState("card");

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      {/* Header */}
      <section className="w-full flex flex-col items-center justify-center py-16">
        <h1 className="text-5xl font-serif font-bold text-black mb-6">
          Checkout
        </h1>
        <div className="flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow">
          <span className="text-pink-500 font-medium">Home</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">Cart</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">Checkout</span>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left - Form */}
        <form className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm space-y-8">
          <div>
            <h2 className="font-semibold text-lg mb-3">Billing Address:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  First name
                </label>
                <input
                  type="text"
                  className="border rounded-full px-4 py-2 w-full focus:ring-2 focus:ring-pink-300 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Last name
                </label>
                <input
                  type="text"
                  className="border rounded-full px-4 py-2 w-full focus:ring-2 focus:ring-pink-300 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  className="border rounded-full px-4 py-2 w-full focus:ring-2 focus:ring-pink-300 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  State
                </label>
                <select className="border rounded-full px-4 py-2 w-full text-gray-500 focus:ring-2 focus:ring-pink-300 outline-none">
                  <option>Select State</option>
                  <option>Tashkent</option>
                  <option>Samarkand</option>
                  <option>Bukhara</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  City
                </label>
                <select className="border rounded-full px-4 py-2 w-full text-gray-500 focus:ring-2 focus:ring-pink-300 outline-none">
                  <option>Select City</option>
                  <option>Tashkent</option>
                  <option>Namangan</option>
                  <option>Andijan</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Zip/ postal code
                </label>
                <input
                  type="text"
                  className="border rounded-full px-4 py-2 w-full focus:ring-2 focus:ring-pink-300 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h2 className="font-semibold text-lg mb-3">Payment Method:</h2>

            {/* Credit Card Option */}
            <label className="flex items-center justify-between border rounded-full px-4 py-2 mb-3 cursor-pointer hover:bg-gray-50 transition">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={payment === "card"}
                  onChange={() => setPayment("card")}
                />
                <span className="font-medium">Credit card</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                  alt="visa"
                  className="h-4"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Mastercard-logo.png"
                  alt="mc"
                  className="h-4"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_(2018).svg"
                  alt="amex"
                  className="h-4"
                />
              </div>
            </label>

            {payment === "card" && (
              <>
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Card number
                  </label>
                  <input
                    type="text"
                    className="border rounded-full px-4 py-2 w-full focus:ring-2 focus:ring-pink-300 outline-none"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Expiration date
                    </label>
                    <div className="flex gap-2">
                      <select className="border rounded-full px-3 py-2 w-full text-gray-500 focus:ring-2 focus:ring-pink-300 outline-none">
                        <option>Month</option>
                      </select>
                      <select className="border rounded-full px-3 py-2 w-full text-gray-500 focus:ring-2 focus:ring-pink-300 outline-none">
                        <option>Year</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Security Code
                    </label>
                    <input
                      type="text"
                      className="border rounded-full px-4 py-2 w-full focus:ring-2 focus:ring-pink-300 outline-none"
                    />
                  </div>
                </div>
              </>
            )}

            {/* Cash Option */}
            <label className="flex items-center gap-2 border rounded-full px-4 py-2 mt-4 cursor-pointer hover:bg-gray-50 transition">
              <input
                type="radio"
                checked={payment === "cash"}
                onChange={() => setPayment("cash")}
              />
              <span className="font-medium">Cash on Delivery</span>
            </label>
          </div>

          <p className="text-sm text-gray-500 text-center">
            By clicking the button, you agree to the{" "}
            <span className="text-pink-500 font-medium cursor-pointer">
              Terms and Conditions
            </span>
          </p>

          <Link to="/ThankYou">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-full shadow-md transition text-lg"
            >
              Place Order Now <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </form>

        {/* Right - Summary */}
        <div className="bg-white rounded-2xl shadow-md p-6 h-fit">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-700 font-semibold border-b">
                <th className="text-left pb-2">Items</th>
                <th className="text-right pb-2">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-3">
                  <p className="font-medium">3 × Classic Vanilla</p>
                  <p className="text-gray-500 text-xs">
                    Creamy vanilla ice cream topped with cherry.
                  </p>
                </td>
                <td className="text-right align-top">$13.00</td>
              </tr>
              <tr>
                <td className="py-3">
                  <p className="font-medium">6 × Chocolate Brownie</p>
                  <p className="text-gray-500 text-xs">
                    Rich chocolate ice cream with chunks of brownie.
                  </p>
                </td>
                <td className="text-right align-top">$23.00</td>
              </tr>
              <tr>
                <td className="py-3">
                  <p className="font-medium">4 × Strawberry Cake</p>
                  <p className="text-gray-500 text-xs">
                    Strawberry ice cream layered with shortcake.
                  </p>
                </td>
                <td className="text-right align-top">$22.00</td>
              </tr>
              <tr>
                <td className="py-3">
                  <p className="font-medium">2 × Mint Chocolate</p>
                  <p className="text-gray-500 text-xs">
                    Refreshing mint ice cream with chocolate chips.
                  </p>
                </td>
                <td className="text-right align-top">$07.00</td>
              </tr>
            </tbody>
          </table>

          <div className="border-t mt-4 pt-4 flex justify-between text-lg font-semibold">
            <span>Grand Total</span>
            <span className="text-pink-500">$83.99</span>
          </div>
        </div>
      </div>
    </div>
  );
}
