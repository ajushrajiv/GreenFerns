import { useState, useEffect } from 'react';
import './App.css';
import { NextUIProvider } from "@nextui-org/react";
import PlantGrid from './pages/plant-grid/PlantGrid';
import PlantDescription from './pages/plant-description/PlantDescription';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import NavbarTop from './pages/navbar-green/NavbarTop';
import ShoppingCart from './pages/shopping-cart/ShoppingCart';
import Login from './pages/login-signup/login';
import Signup from './pages/login-signup/signup';
import Profile from './pages/login-signup/profile';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <NextUIProvider className="flex flex-col items-center min-h-screen">
      <div className="bg-cover bg-center w-full h-full bg-slate-100 fixed inset-0 z-0" />
      <div className="relative z-10 flex flex-col items-center w-full">
          <NavbarTop />
          
          <div className="px-4 md:px-8 lg:px-32 flex-grow">
            <Routes>
              <Route path="/login" element={<Login currentCategory="Login"/>} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/:category" element={<PlantGrid  />} />
              <Route path="/description" element={<PlantDescription />} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
            </Routes>
          </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
