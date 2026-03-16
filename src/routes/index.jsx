import { createBrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";
import Forgot_Password from "../components/auth/Forgot_Password";
import ResetPassword from "../components/auth/Reset_Password";
import BlogVoiceBots from "../pages/BlogVoiceBots";
import BlogDetails810 from "../pages/BlogDetails810";

const Home = loadable(() => import("../pages/Home"));
const UseCases = loadable(() => import("../pages/UseCases"));
const Pricing = loadable(() => import("../pages/Pricing"));
const Blog = loadable(() => import("../pages/Blog"));
const AboutUs = loadable(() => import("../pages/AboutUs"));
const Terms = loadable(() => import("../pages/Terms"));
const Policy = loadable(() => import("../pages/Policy"));
const AIpolicy = loadable(() => import("../pages/AIpolicy"));
const BlogDetails = loadable(() => import("../pages/BlogDetails"));
const BlogDetails2 = loadable(() => import("../pages/BlogDetails2"));
const BlogDetails3 = loadable(() => import("../pages/BlogDetails3"));
const BlogDetails4 = loadable(() => import("../pages/BlogDetails4"));
const BlogDetails5 = loadable(() => import("../pages/BlogDetails5"));
const BlogDetails6 = loadable(() => import("../pages/BlogDetails6"));
const BlogDetails7 = loadable(() => import("../pages/BlogDetails7"));
const BlogDetails8 = loadable(() => import("../pages/BlogDetails8"));
const BlogDetails9 = loadable(() => import("../pages/BlogDetails9"));
const Academy = loadable(() => import("../pages/Academy"));
const Contact = loadable(() => import("../pages/Contact"));
const ErrorPage = loadable(() => import("../pages/Error"));
const RootLayout = loadable(() => import("../layouts/RootLayout"));
const AuthLayout = loadable(() => import("../layouts/AuthLayout"));
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
        path: "blog/understanding-retrieval-augmented-generation",
        element: <BlogDetails />,
      },
      {
        path: "blog/retrieval-augmented-generation-evolution-impact",
        element: <BlogDetails2 />,
      },
      {
        path: "blog/essential-6-rag-techniques-corrective-speculative-agentic-self-retrieval-augmented-generation",
        element: <BlogDetails3 />,
      },
      {
        path: "blog/next-6-rag-techniques-advanced-retrieval-augmented-generation-complex-use-cases",
        element: <BlogDetails4 />,
      },
      {
        path: "blog/techniques-in-retrieval-augmented-generation-reveal-replug-retro-atlas",
        element: <BlogDetails5 />,
      },
      {
        path: "blog/5-levels-of-ai-agents",
        element: <BlogDetails6 />,
      },
      {
        path: "blog/project-planning-automation-multi-agent-model-ai-workflow",
        element: <BlogDetails7 />,
      },
      {
        path: "blog/Finance-&-Accounting-Audits-Reimagined:-The-TensorHub-Approach",
        element: <BlogDetails8 />,
      },
      {
        path: "blog/Transforming-HR-&-Workforce-Audits-with-AI:-The-TensorHub-Revolution",
        element: <BlogDetails9 />,
      },
      {
        path: "blog/BlogDetails810",
        element: <BlogDetails810 />,
      },
      {
        path: "blog/rise-of-voicebot-with-genai",
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
      {
        path: "terms",
        element: <Terms />,
      },
      {
        path: "policy",
        element: <Policy />,
      },
      {
        path: "aipolicy",
        element: <AIpolicy />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <Home />,
      },
      {
        path: "login",
        element: <Home />,
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
