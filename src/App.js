import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home1 from "./pages/Home1";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import Recipes from "./pages/Recipes";
import Recipes1 from "./pages/Recipes1";
import Recipes2 from "./pages/Recipes2";
import Recipes3 from "./pages/Recipes3";
import Recipes4 from "./pages/Recipes4";
import Recipes5 from "./pages/Recipes5";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/blog":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home1 />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/Recipes" element={<Recipes />} />
      <Route path="/Recipes1" element={<Recipes1 />} />
      <Route path="/Recipes2" element={<Recipes2 />} />
      <Route path="/Recipes3" element={<Recipes3 />} />
      <Route path="/Recipes4" element={<Recipes4 />} />
      <Route path="/Recipes5" element={<Recipes5 />} />
    </Routes>
  );
}
export default App;
