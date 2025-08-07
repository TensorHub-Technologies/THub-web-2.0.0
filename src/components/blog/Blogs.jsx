import { useNavigate } from "react-router-dom";
import { blogPosts } from "./blogData";
import "../../index.css";
import { useSelector } from "react-redux";

const Blogs = () => {
  const navigate = useNavigate();
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);

  return (
    <div
      className={`border-red-400 dark:bg-secondary py-5 mt-20 ${isDarkMode ? "hero-card-global-subtle-dark" : "hero-card-global-subtle-light"}`}
    >
      <div className="text-center">
        <h3 className="text-secondary text-3xl font-bold dark:text-background">
          Blog Posts
        </h3>
        <div className="mt-2">
          <span className="dark:text-secondary-dark">Home / </span>
          <span className="text-secondary-dark">Blog Posts</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-4 sm:mx-8 lg:mx-10 my-8 sm:my-10 lg:my-14">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 cursor-pointer"
            onClick={() => navigate(post.path)}
          >
            <img
              className="p-2 rounded-t-lg w-[580px]"
              src={post.image}
              alt="blog thumbnail"
            />
            <div className="px-5 pb-2">
              <h5 className="text-xl font-semibold tracking-tight text-secondary dark:text-secondary-dark mt-5">
                {post.title}
              </h5>
              <div className="flex items-center mb-12"></div>
              <div className="flex items-center justify-between">
                <h4 className="text-secondary dark:text-secondary-dark">
                  {post.readTime}
                </h4>
                <h4 className="text-secondary dark:text-secondary-dark">
                  {post.date}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
