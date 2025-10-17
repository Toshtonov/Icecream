import { useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Kevin Andrew",
    role: "Happy Customer",
    text: "Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophia Miller",
    role: "Ice Cream Lover",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "John Carter",
    role: "Sweet Tooth",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-gradient-to-r from-pink-50 to-blue-50 py-20 relative overflow-hidden">
      <div className="text-center max-w-3xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Berkshire_Swash']">
          Hear from Our <span className="text-pink-500">Happy</span>{" "}
          <span className="text-purple-600">Ice Cream</span> Lovers
        </h2>

        {/* Testimonial Content */}
        <div
          key={current}
          className="transition-opacity duration-700 ease-in-out"
        >
          <p className="text-gray-700 mb-6 leading-relaxed text-lg italic">
            “{testimonials[current].text}”
          </p>

          {/* Avatar + Info */}
          <div className="flex flex-col items-center">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-16 h-16 rounded-full shadow-lg mb-3 object-cover"
            />
            <h4 className="text-pink-500 font-semibold">
              {testimonials[current].name}
            </h4>
            <p className="text-gray-500 text-sm mb-2">
              {testimonials[current].role}
            </p>
          </div>

          {/* Stars */}
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-yellow-400 fill-yellow-400 hover:scale-110 transition-transform"
              />
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === current ? "bg-pink-500 scale-110" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Floating Avatars (Desktop Only) */}
      <img
        src="https://randomuser.me/api/portraits/men/1.jpg"
        alt=""
        className="hidden md:block absolute top-10 left-10 w-16 h-16 rounded-full shadow-lg"
      />
      <img
        src="https://randomuser.me/api/portraits/women/22.jpg"
        alt=""
        className="hidden md:block absolute top-20 right-10 w-16 h-16 rounded-full shadow-lg"
      />
      <img
        src="https://randomuser.me/api/portraits/men/33.jpg"
        alt=""
        className="hidden md:block absolute bottom-10 left-20 w-16 h-16 rounded-full shadow-lg"
      />
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt=""
        className="hidden md:block absolute bottom-20 right-20 w-16 h-16 rounded-full shadow-lg"
      />
    </section>
  );
}
