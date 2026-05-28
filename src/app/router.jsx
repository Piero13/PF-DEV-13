/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import App from "../App";
import Home from "../pages/Home/Home";

const About = lazy(() =>
  import("../pages/About/About")
);

const Projects = lazy(() =>
  import("../pages/Projects/Projects")
);

const Services = lazy(() =>
  import("../pages/Services/Services")
);

const Contact = lazy(() =>
  import("../pages/Contact/Contact")
);

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