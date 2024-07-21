import ReactDom from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  useLocation,
} from "react-router-dom";

import React, { useEffect } from "react";
import Home from "./Home";

import { Nav } from "./components";
import Register from "./Register";
import Shop from "./sections/shop/Shop";
import Cart from "./sections/cart/Cart";
import Contact from "./sections/Contact";

import Preloader from "./components/preloader/preloader";

function App() {
  function ScrollToTop() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  const RedirectOnRefresh = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      if (location.pathname !== "/") {
        navigate("/");
      }
    }, []);

    return null;
  };

  return (
    <BrowserRouter>
      <Preloader />
      <ScrollToTop />
      <nav className="max-h-[10vh] w-full fixed z-50">
        <Nav />
      </nav>
      <RedirectOnRefresh />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
