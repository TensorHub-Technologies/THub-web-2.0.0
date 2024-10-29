import { createBrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";

const Home = loadable(() => import("../pages/Home"));
const UseCases = loadable(() => import("../pages/UseCases"));
const UseCasesDetails = loadable(
  () => import("../components/usecases/UsecasesDetails"),
);
const Pricing = loadable(() => import("../pages/Pricing"));
const Blog = loadable(() => import("../pages/Blog"));
const AboutUs = loadable(() => import("../pages/AboutUs"));
const BlogDetails = loadable(() => import("../pages/BlogDetails"));
const BlogDetails2 = loadable(() => import("../pages/BlogDetails2"));
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
        path: "use-cases-details",
        element: <UseCasesDetails />,
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
    ],
  },
]);
