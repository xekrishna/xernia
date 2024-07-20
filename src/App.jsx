import ReactDom from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

import React, { useEffect } from "react";
import Home from "./Home";

import { Nav } from "./components";
import Register from "./Register";

import Preloader from "./components/preloader/preloader";

function App() {
  function ScrollToTop() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  return (
    <BrowserRouter>
      <Preloader />
      <ScrollToTop />
      <nav className="max-h-[10vh] w-full fixed z-50">
        <Nav />
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
