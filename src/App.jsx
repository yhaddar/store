import React from 'react';
import { NavSearch } from "./components/NavBar/NavSearch";
import { NavBar } from "./components/NavBar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from './components/Home/Home';
import { Shop } from './components/Shop/Shop';
import { ProductShow } from './components/ProductShow';
import { Blog } from './components/Blog/Blog';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Profile } from './components/Profile/Profile';
import { ShoppingCart } from './components/Shopping/ShoppingCart';
import { Footer1 } from './Footer1';
import { FooterFinal } from './FooterFinal';
import $ from 'jquery';



export const App = () => {
  return (
    <>
      <div className="App">
        <NavSearch />
        <NavBar />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/shop" element={ <Shop /> } />
            <Route path="/ProductShow/:id" element={<ProductShow />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/shoppingCart" element={<ShoppingCart />} />
          </Routes>
        <Footer1 />
        <FooterFinal />
      </div>
    </>
  );
}
