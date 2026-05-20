import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Projects from "../pages/Projects/Projects";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;