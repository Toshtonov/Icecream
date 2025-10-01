import {
  MapPin,
  MailOpen,
  PhoneCall,
  Facebook,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-[#683292] relative text-[#CFB6E2]">
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <img src="src/images/Group 1 (1).png" alt="Logo" className="w-32" />
        </div>

        {/* Navigation */}
        <div>
          <h1 className="text-xl font-semibold mb-4">Navigation</h1>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p>Home</p>
              <p>About</p>
              <p>Services</p>
            </div>
            <div className="space-y-2">
              <p>Blog</p>
              <p>Shop</p>
              <p>Contact</p>
            </div>
          </div>
        </div>

        {/* Address & Email */}
        <div className="space-y-5 text-sm">
          <div className="flex items-start gap-2">
            <MapPin />
            <div>
              <h3 className="font-medium">Address</h3>
              <p>121 King Street Melbourne, 3000, Australia</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MailOpen />
            <div>
              <h3 className="font-medium">Email</h3>
              <p>info@yoursite.com</p>
              <p>support@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Phone & Socials */}
        <div className="space-y-5">
          <div className="flex items-start gap-2">
            <PhoneCall />
            <div>
              <h3 className="font-medium">+123 4567 80123</h3>
              <p className="text-sm">Got Questions? Call us 24/7</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-[#FFFFFF1A] rounded-full">
              <Instagram size={18} />
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-[#FFFFFF1A] rounded-full">
              <Facebook size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#74737326]" />

      {/* Bottom text */}
      <div className="py-4 text-center text-xs text-white">
        <p>
          Copyright © 2024 BlackRise Themes Inc. All rights reserved.
        </p>
      </div>

      {/* Background image (absolute) */}
      <img
        src="src/images/977b0075aff18e92a704e7c5b3f4e5bb61216844.png"
        className="absolute left-0 bottom-0 w-40 opacity-50"
        alt="Decoration"
      />
    </div>
  );
}
