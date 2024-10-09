import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThubLogo from "../../assets/images/THub.svg";
import TogglMode1 from "../../assets/icons/toggle_mode-1.svg";
import TogglMode2 from "../../assets/icons/toggle_mode-2.svg";
import { GrMenu } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../store/modeSlice";

const Navbar = () => {
  const [activePage, setActivePage] = useState("/");
  const [open, setOpen] = useState(false);

  // redux
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);

  console.log(isDarkMode, "isDarkMode");

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const navigate = useNavigate();
  const handleNavigation = (path) => {
    setActivePage(path);
    navigate(path);
  };

  const handleToggleClick = () => {
    dispatch(toggleMode());
  };

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Use Cases", path: "/use-cases" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Academy", path: "/academy" },
    { name: "Document", path: "/document" },
    { name: "Feedback", path: "/feedback" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/auth/login" },
  ];

  return (
    <nav className="w-screen h-auto bg-white px-2 py-5 flex dark:bg-secondary">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between relative">
        <img src={ThubLogo} className="h-10 w-38 mr-6" alt="THub Logo" />
        <div className="flex-wrap items-center justify-between gap-8 ml-16 hidden md:flex">
          {navItems.map((item) => (
            <div
              key={item.path}
              className={`cursor-pointer ${
                activePage === item.path
                  ? "text-primary dark:text-primary-dark "
                  : "text-black hover:text-primary dark:text-secondary-dark dark:hover:text-primary-dark"
              }`}
              onClick={() => handleNavigation(item.path)}
            >
              {item.name}
            </div>
          ))}
          <div>
            <button
              className="border border-primary text-primary px-4 py-2 ml-3 rounded transition-all duration-300 hover:bg-primary hover:text-black hover:border-primary
              dark:border-primary-dark dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-black
              "
              onClick={() => handleNavigation("/auth/register")}
            >
              Get started
            </button>
          </div>
          <div onClick={handleToggleClick} className="cursor-pointer">
            <img src={isDarkMode ? TogglMode2 : TogglMode1} alt="toggle_mode" />
          </div>
        </div>
      </div>
      <div
        className="text-2xl cursor-pointer md:hidden mr-8 text-primary"
        onClick={handleOpen}
      >
        {open ? <IoMdClose /> : <GrMenu />}
      </div>
      <div
        className={`gap-6 absolute top-16 left-0 w-screen flex flex-col py-12 px-8 lg:hidden md:hidden duration-300 z-[-1] ease-in-out ${open ? "top-16" : "top-[-500px]"}`}
      >
        {navItems.map((item) => (
          <div
            key={item.path}
            className={`cursor-pointer ${
              activePage === item.path ? "text-primary" : "text-secondary-dark"
            } hover:text-primary`}
            onClick={() => handleNavigation(item.path)}
          >
            {item.name}
          </div>
        ))}
        <div>
          <button
            className="border border-primary text-primary px-4 py-2 rounded transition-all duration-300 hover:bg-primary hover:text-black hover:border-primary"
            onClick={() => handleNavigation("/auth/register")}
          >
            Get started
          </button>
        </div>
        <div onClick={handleToggleClick} className="cursor-pointer">
          <img src={isDarkMode ? TogglMode2 : TogglMode1} alt="toggle_mode" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
