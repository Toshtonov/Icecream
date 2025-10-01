import { useState } from "react";
import { Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogCards() {
  const allPosts = [
    {
      id: 1,
      title: "Why You Need Virtual Assistant for Your Company",
      category: "Virtual Assistant",
      author: "Admin",
      date: "Dec 20, 2022",
      image: "src/images/277.png",
    },
    {
      id: 2,
      title: "Best Practices for Remote Teams",
      category: "Virtual Assistant",
      author: "Admin",
      date: "Dec 21, 2022",
      image: "src/images/278.png",
    },
    {
      id: 3,
      title: "How to Improve Productivity with VA",
      category: "Virtual Assistant",
      author: "Admin",
      date: "Dec 22, 2022",
      image: "src/images/279 (1).png",
    },
    {
      id: 4,
      title: "Top 5 Tools for Virtual Assistants",
      category: "Virtual Assistant",
      author: "Admin",
      date: "Dec 23, 2022",
      image: "src/images/280.png",
    },
    // qolgan postlar ham shu tarzda...
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allPosts.slice(0, visibleCount).map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 sm:h-56 lg:h-64 object-cover"
            />
            <div className="p-4">
              {/* Author & Category */}
              <div className="flex flex-wrap items-center text-sm text-gray-500 gap-2 mb-2">
                <User size={14} className="text-pink-500" />
                <span>By : {post.author}</span>
                <span className="text-pink-500">💖 {post.category}</span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-4">{post.title}</h3>

              {/* Date + Button */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={14} className="mr-1 text-pink-500" />
                  {post.date}
                </div>
                <Link to={"/Columnsidebar"}>
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
