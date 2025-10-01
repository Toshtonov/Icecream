import { useState } from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Onecolumn() {
  const allPosts = [
    {
      id: 1,
      title: "Why You Need Virtual Assistant for Your Company",
      author: "Admin",
      category: "Virtual Assistant",
      date: "Dec 20, 2022",
      image: "src/images/post-featured.jpg.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius enim at dui consequat...",
      type: "image",
    },
    {
      id: 2,
      title: "Ice Cream Trends 2023",
      author: "Admin",
      category: "Virtual Assistant",
      date: "Dec 20, 2022",
      image: "src/images/post-featured2.jpg.png",
      text: "Aenean commodo ligula eget dolor. Nullam quis risus eget urna mollis ornare vel eu leo.",
      type: "image",
    },
    {
      id: 3,
      title: "Best Ice Cream for Summer",
      author: "Admin",
      category: "Virtual Assistant",
      date: "Dec 20, 2022",
      image: "src/images/post-featured4.jpg.png",
      text: "Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis.",
      type: "image",
    },
    {
      id: 4,
      author: "Admin",
      category: "Virtual Assistant",
      date: "Dec 20, 2022",
      video: true,
      img: "src/images/311.png",
      type: "video",
    },
    {
      id: 5,
      title: "Interview: Ice Cream Startup Founder",
      author: "Admin",
      category: "Virtual Assistant",
      date: "Dec 20, 2022",
      image: "src/images/YouTube Video Player.png",
      text: "Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor.",
      type: "image",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      {allPosts.slice(0, visibleCount).map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
        >
          {/* Image or Video */}
          {post.type === "image" ? (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover"
            />
          ) : (
            <div className="w-full h-56 sm:h-72 md:h-80 lg:h-96 flex flex-col items-center justify-center bg-black text-white text-lg text-center px-4">
              <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
                Sorry
              </h1>
              <p className="text-sm sm:text-base">This video doesn’t exist.</p>
            </div>
          )}

          <div className="p-5">
            {/* Author & Category */}
            <div className="flex flex-wrap items-center text-sm text-gray-500 space-x-2 mb-2">
              <User size={14} className="text-pink-500" />
              <span>By : {post.author}</span>
              <span className="hidden sm:inline mx-1">|</span>
              <span className="text-pink-500">💖 {post.category}</span>
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg sm:text-xl mb-2">
              {post.title}
            </h3>

            {/* Text */}
            {post.text && (
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                {post.text}
              </p>
            )}

            {/* Date + Button */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar size={14} className="mr-1 text-pink-500" />
                {post.date}
              </div>
              <Link to={"/BlogSingle"}>
                <button className="bg-[#F83D8E] rounded-full flex gap-2 sm:gap-3 px-4 py-2 items-center text-white text-sm sm:text-base hover:bg-pink-600 transition">
                  Read More <ArrowRight size={15} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Load More */}
      {visibleCount < allPosts.length && (
        <div className="text-center">
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
