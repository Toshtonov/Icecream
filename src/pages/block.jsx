import { useState } from "react";

// 📌 Rasmlar import
import Img276 from "../images/276.png";
import Img277 from "../images/277.png";
import Img278 from "../images/278.png";
import Img279 from "../images/279 (1).png";
import Img280 from "../images/280.png";
import Img281 from "../images/281.png";
import Img282 from "../images/282.png";
import Img283 from "../images/283.png";
import Img284 from "../images/284 (1).png";
import Img285 from "../images/285.png";

const categories = [
  "All",
  "Articles",
  "Announcements",
  "News",
  "Consultation",
  "Development",
];

const posts = [
  {
    title: "Our strength: Your Business",
    date: "September 20, 2023",
    category: "Announcements",
    img: Img276,
  },
  {
    title: "How's the Economy?",
    date: "September 18, 2023",
    category: "News",
    img: Img277,
  },
  {
    title: "Our strength: Your Business",
    date: "September 17, 2023",
    category: "Articles",
    img: Img278,
  },
  {
    title: "How's the Economy?",
    date: "September 16, 2023",
    category: "News",
    img: Img279,
  },
  {
    title: "How's the Economy?",
    date: "September 15, 2023",
    category: "Announcements",
    img: Img280,
  },
  {
    title: "How's the Economy?",
    date: "September 14, 2023",
    category: "Development",
    img: Img281,
  },
  {
    title: "Our strength: Your Business",
    date: "September 13, 2023",
    category: "Consultation",
    img: Img282,
  },
  {
    title: "Our strength: Your Business",
    date: "September 12, 2023",
    category: "Development",
    img: Img283,
  },
  {
    title: "Our strength: Your Business",
    date: "September 11, 2023",
    category: "News",
    img: Img284,
  },
  {
    title: "Our strength: Your Business",
    date: "September 10, 2023",
    category: "Articles",
    img: Img285,
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto">
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-pink-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">{post.date}</p>
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-pink-500 font-medium">
                {post.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
