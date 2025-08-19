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
          <span className="text-black dark:text-white">Home / </span>
          <span className="text-black dark:text-white">Blog Posts</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-4 sm:mx-8 lg:mx-10 my-8 sm:my-10 lg:my-14 ">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="w-full group relative max-w-sm shadow rounded-xl bg-white/10 dark:bg-black/50 backdrop-blur-xl h-[26rem] border border-white/20 dark:border-white/10 cursor-pointer"
            onClick={() => navigate(post.path)}
          >
            <img
              className="p-2 rounded-t-lg w-[580px] h-[15rem]"
              src={post.image}
              alt="blog thumbnail"
            />
            <div className="px-5 pb-2">
              <h5 className="text-xl font-semibold tracking-tight text-secondary dark:text-secondary-dark my-5">
                {post.title}
              </h5>
              <hr className="w-[98%] border-t border-white dark:border-black/80 my-4" />
              <div className="flex items-center justify-between">
                <h4 className="text-secondary dark:text-secondary-dark">
                  {post.readTime}
                </h4>
                <h4 className="text-secondary dark:text-secondary-dark">
                  {post.date}
                </h4>
              </div>
            </div>
            <div className="absolute overflow-hidden inset-0 rounded-xl bg-gradient-to-r from-[rgba(60,91,164,0.3)] to-[rgba(226,42,144,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg -z-10"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
