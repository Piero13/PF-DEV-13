import { Outlet } from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import ScrollToTop from "./components/shared/ScrollToTop/ScrollToTop";
import Loader from "./components/ui/Loader/Loader";
import { Suspense } from "react";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;