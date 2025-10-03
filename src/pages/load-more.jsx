import { useState } from "react";
import { Calendar, User , Tag } from "lucide-react";
import { Link } from "react-router-dom";

// Rasmlarni import qilib oldik
import Img277 from "../images/277.png";
import Img278 from "../images/278.png";
import Img279 from "../images/279.png";   // ⚠️ 279 (1).png ni qayta nomlab 279.png qiling
import Img280 from "../images/280.png";
import Img281 from "../images/281.png";
import Img282 from "../images/282.png";
import Img283 from "../images/283.png";
import Img284 from "../images/284.png";   // ⚠️ 284 (1).png ni qayta nomlang
import Img285 from "../images/285.png";
import Img290 from "../images/290.png";
import Img293 from "../images/293.png";
import Img301 from "../images/301.png";

export default function BlogCards() {
  const allPosts = [
    {
      id: 1,
      title: "Why You Need Virtual Assistant for Your Company",
      category: "Virtual Assistant",
      author: "Admin",
      date: "Dec 20, 2022",
      image: Img277,
    },
    {
      id: 2,
      title: "Top Benefits of Hiring Virtual Assistants",
      category: "Virtual Assistant",
      author: "Admin",
      date: "Dec 21, 2022",
      image: Img278,
    },
    {
      id: 3,
      title: "Save Time with Virtual Assistants",
      category: "Virtual Assistant",
      author: "Admin",
      date: "Dec 22, 2022",
      image: Img279,
    },
    {
      id: 4,
      title: "Virtual Assistant for Startups",
      category: "Virtual Assistant",
      author: "Admin",
      date: "Dec 23, 2022",
      image: Img280,
    },
    {
      id: 5,
      title: "Grow Your Business with VAs",
      category: "Virtual Assistant",
      author: "Admin",
      date: "Dec 24, 2022",
      image: Img281,
    },
    {
      id: 6,
      title: "Why Small Teams Need Virtual Assistants",
      category: "Virtual Assistant",
      author: "Admin",
      date: "Dec 25, 2022",
      image: Img282,
    },
    {
      id: 7,
      title: "Remote Work Made Easy",
      category: "Virtual Assistant",
      author: "Admin",
      date: "Dec 26, 2022",
      image: Img283,
    },
    {
      id: 8,
      title: "Boost Productivity with VAs",
      category: "Virtual Assistant",
      author: "Admin",
      date: "Dec 27, 2022",
      image: Img284,
    },
    {
      id: 9,
      title: "Affordable Business Scaling",
      category: "Virtual Assistant",
      author: "Admin",
      date: "Dec 28, 2022",
      image: Img285,
    },
    {
      id: 10,
      title: "24/7 Business Support",
      category: "Virtual Assistant",
      author: "Admin",
      date: "Dec 29, 2022",
      image: Img290,
    },
    {
      id: 11,
      title: "Virtual Assistants for E-commerce",
      category: "Virtual Assistant",
      author: "Admin",
      date: "Dec 30, 2022",
      image: Img293,
    },
    {
      id: 12,
      title: "Customer Service with VAs",
      category: "Virtual Assistant",
      author: "Admin",
      date: "Dec 31, 2022",
      image: Img301,
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-25">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allPosts.slice(0, visibleCount).map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              {/* Author & Category */}
              <div className="flex items-center text-sm text-gray-500 space-x-2 mb-2">
                <User size={14} className="text-pink-500" />
                <span>By : {post.author}</span>
                <span className="mx-1">|</span>
                <Tag size={14} className="text-pink-500"/>
                <span className="text-pink-500"> {post.category}</span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-4">{post.title}</h3>

              {/* Date + Button */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={14} className="mr-1 text-pink-500" />
                  {post.date}
                </div>
                <Link
                  to={"/Columnsidebar"}
                  className="block px-4 py-2 hover:bg-pink-50"
                >
                  <button className="px-4 py-1 bg-pink-500 text-white text-sm rounded-full hover:bg-pink-600 transition">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < allPosts.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
