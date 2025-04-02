import { createBrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";
import Forgot_Password from "../components/auth/Forgot_Password";
import ResetPassword from "../components/auth/Reset_Password";
import BlogVoiceBots from "../pages/BlogVoiceBots";

const Home = loadable(() => import("../pages/Home"));
const UseCases = loadable(() => import("../pages/UseCases"));
const Pricing = loadable(() => import("../pages/Pricing"));
const Blog = loadable(() => import("../pages/Blog"));
const AboutUs = loadable(() => import("../pages/AboutUs"));
const BlogDetails = loadable(() => import("../pages/BlogDetails"));
const BlogDetails2 = loadable(() => import("../pages/BlogDetails2"));
const BlogDetails3 = loadable(() => import("../pages/BlogDetails3"));
const BlogDetails4 = loadable(() => import("../pages/BlogDetails4"));
const BlogDetails5 = loadable(() => import("../pages/BlogDetails5"));
const BlogDetails6 = loadable(() => import("../pages/BlogDetails6"));
const Academy = loadable(() => import("../pages/Academy"));
const Contact = loadable(() => import("../pages/Contact"));
const Login = loadable(() => import("../pages/Login"));
const ErrorPage = loadable(() => import("../pages/Error"));
const RootLayout = loadable(() => import("../layouts/RootLayout"));
const AuthLayout = loadable(() => import("../layouts/AuthLayout"));
const Register = loadable(() => import("../pages/Register"));
const MasterClass = loadable(
  () => import("../components/academy/details/MasterClass"),
);
const Leadership = loadable(
  () => import("../components/academy/details/Leadership"),
);
const Techie = loadable(() => import("../components/academy/details/Techie"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "use-cases",
        element: <UseCases />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/1",
        element: <BlogDetails />,
      },
      {
        path: "blog/2",
        element: <BlogDetails2 />,
      },
      {
        path: "blog/3",
        element: <BlogDetails3 />,
      },
      {
        path: "blog/4",
        element: <BlogDetails4 />,
      },
      {
        path: "blog/5",
        element: <BlogDetails5 />,
      },
      {
        path: "blog/6",
        element: <BlogDetails6 />,
      },
      {
        path: "voicebot",
        element: <BlogVoiceBots />,
      },
      {
        path: "academy",
        element: <Academy />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "academy/master-class",
        element: <MasterClass />,
      },
      {
        path: "academy/leadership",
        element: <Leadership />,
      },
      {
        path: "academy/techie",
        element: <Techie />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <Forgot_Password />,
      },
      {
        path: "reset-password/:token",
        element: <ResetPassword />,
      },
    ],
  },
]);
