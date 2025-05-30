import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
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
    if (path === "/feedback") {
      const feedbackUrl = "https://forms.office.com/r/R9WUwnXRV2";
      window.open(feedbackUrl, "_blank");
    } else if (path === "/document") {
      const documentUrl = "https://docs.thub.tech/";
      window.open(documentUrl, "_blank");
    } else {
      setActivePage(path);
      navigate(path);
    }
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
    // { name: "Feedback", path: "/feedback" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Login", path: "/auth/login" },
  ];
  let url;
  const hostname = window.location.hostname;
  console.log(hostname, "hostname");

  console.log("VITE_GOOGLE_CLIENT_ID:", VITE_GOOGLE_CLIENT_ID);
  
  switch (hostname) {
    case "localhost":
      url = `http://localhost:8080`;
      break;
    case "thub-web-demo-378678297066.europe-west1.run.app":
      url = `https://demo.thub.tech`;
      break;
    default:
      url = `https://app.thub.tech`;
      break;
  }
  console.log(url, "url");

  return (
    <nav className="h-auto fixed top-0 left-0 right-0 z-50 bg-white px-2 py-5 flex dark:bg-secondary shadow-lg">
      <div className="mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={ThubLogo} className="h-10 w-38" alt="THub Logo" />
        </Link>
        <div className="flex-wrap items-center justify-between gap-8 ml-16 hidden md:flex">
          {navItems.map((item) =>
            item.name === "Login" ? (
              <a
                key={item.path}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`cursor-pointer ${
                  activePage === item.path
                    ? "text-primary dark:text-primary-dark"
                    : "text-secondary hover:text-primary dark:text-secondary-dark dark:hover:text-primary-dark"
                }`}
              >
                {item.name}
              </a>
            ) : (
              <div
                key={item.path}
                className={`cursor-pointer ${
                  activePage === item.path
                    ? "text-primary dark:text-primary-dark"
                    : "text-secondary hover:text-primary dark:text-secondary-dark dark:hover:text-primary-dark"
                }`}
                onClick={() => handleNavigation(item.path)}
              >
                {item.name}
              </div>
            ),
          )}

          <div>
            <a
              href={`${url}/signup`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-primary text-primary px-4 py-2 rounded transition-all duration-300 hover:bg-primary hover:text-black hover:border-primary dark:border-primary-dark dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-black"
            >
              Get started
            </a>
          </div>
          <div onClick={handleToggleClick} className="cursor-pointer">
            <img src={isDarkMode ? TogglMode1 : TogglMode2} alt="toggle_mode" />
          </div>
        </div>
      </div>
      <div
        className="text-2xl cursor-pointer md:hidden mr-8 text-primary dark:text-primary-dark"
        onClick={handleOpen}
      >
        {open ? <IoMdClose /> : <GrMenu />}
      </div>
      <div
        className={`gap-6 absolute top-16 right-0 bg-background dark:bg-secondary flex flex-col py-12 px-8 lg:hidden md:hidden duration-300 z-[-1] ease-in-out ${
          open ? "top-16" : "top-[-700px]"
        }`}
      >
        {navItems.map((item) => (
          <div
            key={item.path}
            className={`cursor-pointer ${
              activePage === item.path
                ? "text-primary dark:text-primary-dark "
                : "text-secondary hover:text-primary dark:text-secondary-dark dark:hover:text-primary-dark"
            }`}
            onClick={() => handleNavigation(item.path)}
          >
            {item.name}
          </div>
        ))}

        <div>
          <a
            href={`${url}/signup`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-primary text-primary px-4 py-2 rounded transition-all duration-300 hover:bg-primary hover:text-black hover:border-primary dark:border-primary-dark dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-black"
          >
            Get started
          </a>
        </div>
        <div
          onClick={handleToggleClick}
          className="cursor-pointer dark:text-primary-dark"
        >
          <img src={isDarkMode ? TogglMode1 : TogglMode2} alt="toggle_mode" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
