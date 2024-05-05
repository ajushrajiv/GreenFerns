import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { HiOutlineUser } from "react-icons/hi2";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import CardCategory from "../card-category/CardCategory";

export default function NavbarTop() {
  const [currentCategory, setCurrentCategory] = useState("Indoor Plants");

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  return (
    <div>
      <Navbar className="p-8 border border-slate-200">
        <NavbarBrand>
          <p className="font-bold text-3xl text-lime-700 pr-8 md:pr-16 lg:pr-32 pl-8 md:pl-16 lg:pl-32">GreenFerns</p>
        </NavbarBrand>
        <NavbarContent className="flex justify-center text-lg font-normal text-teal-950 space-x-2 md:space-x-4 lg:space-x-16">
          <NavbarItem>
            <Link
              to="/indoorplants"
              className={`outline-none ${currentCategory === 'Indoor Plants' ? 'text-lime-500' : 'text-gray-700'}`}
              onClick={() => handleCategoryChange('Indoor Plants')}
            >
              Indoor Plants
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="/beefriendly"
              className={`outline-none ${currentCategory === 'Bee Friendly' ? 'text-lime-500' : 'text-gray-700'}`}
              onClick={() => handleCategoryChange('Bee Friendly')}
            >
              Bee Friendly
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="/balconyplants"
              className={`outline-none ${currentCategory === 'Balcony Plants' ? 'text-lime-500' : 'text-gray-700'}`}
              onClick={() => handleCategoryChange('Balcony Plants')}
            >
              Balcony Plants
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="/fruitsvegetables"
              className={`outline-none ${currentCategory === 'Fruits & Vegetables' ? 'text-lime-500' : 'text-gray-700'}`}
              onClick={() => handleCategoryChange('Fruits & Vegetables')}
            >
              Fruits & Vegetables
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="flex justify-center  text-2xl text-lime-700 font-semibold  ">
          <NavbarItem className="pl-2 md:pl-4 lg:pl-8 pr-8">
            <Link to="/login"
              className={`outline-none ${currentCategory === 'User Account' ? 'text-lime-500' : 'text-gray-700'}`}
              onClick={() => handleCategoryChange('User Account')}>
              <HiOutlineUser className=" h-8 w-8 "/>
            </Link>
          </NavbarItem>
          <NavbarItem className="pl-2 md:pl-4 lg:pl-8 pr-24">
            <Button as={Link} 
              to="/shopping-cart" 
              color="primary" 
              variant="flat" 
              className={`outline-none ${currentCategory === 'Shopping cart' ? 'text-lime-500' : 'text-gray-700'}`}
              onClick={() => handleCategoryChange('Shopping cart')}>
              <FiShoppingCart className=" h-8 w-8 "/>          
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      

      <CardCategory currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
    </div>
  );
}
