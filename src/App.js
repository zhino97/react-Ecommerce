import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import TheNavbar from "./components/TheNavbar";
import Home from "./pages/Home";
import Brands from "./pages/Brands";
// import Products from "./pages/Products";
import Register from "./pages/Register";
import ProductCards from "./components/ProductCards";
import Footer from "./components/Footer";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Login from "./pages/Login";
import TheCards from "./components/TheCards";
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <div className="App">
      <TheNavbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/productcards/:name2" element={<ProductCards />} />
        <Route path="/women" element={<Women />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/men" element={<Men />} />
        <Route path="/thecards" element={<TheCards />} />
        <Route path="/login" element={<Login />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/favorite" element={<Favorite />} />

        {/* <Route path="/products" element={<Products />} /> */}
        {/* if the URL is /login  , render the Login component */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
