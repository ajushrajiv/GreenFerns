import React, { useState,useContext } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import CardCategory from "../card-category/CardCategory";
import UserContext from "../../contexts/user-context/UserContext";

export default function NavbarTop() {
  const [currentCategory, setCurrentCategory] = useState("GreenFerns");
  const { user, logOutUser } = useContext(UserContext);

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  const loginLogout= ()=> {
    if (user){
      return(
        <Button 
          as={Link}
          radius="sm"
          to="/"
          className="border-solid border-2 border-lime-700 bg-lime-700 text-white rounded text-center"
          onClick={handleLogout}>
            Logout
        </Button>
      )
    }else{
      return(
        <Button 
          as={Link}
          radius="sm"
          to="/login"
          className="border-solid border-2 border-lime-700 bg-lime-700 text-white rounded text-center"
          onClick={() => handleCategoryChange('User Account')}>
            Login
        </Button>
      )
    }
  }

  const handleLogout = () => {
    logOutUser();
  };

  return (
    <div>
      <Navbar className="p-8 border border-slate-200">
        <NavbarBrand>
          <Link
            to="/"
            className={`outline-none ${currentCategory === 'GreenFerns' ? 'text-lime-500' : 'text-gray-700'}`}
            onClick={() => handleCategoryChange('GreenFerns')}
          >
              <p className="font-bold text-3xl text-lime-700 pr-8 md:pr-16 lg:pr-32 pl-8 md:pl-16 lg:pl-32">GreenFerns</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="flex justify-center text-lg font-normal text-teal-950 space-x-2 md:space-x-4 lg:space-x-8">
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

        <NavbarContent className=" text-xl text-lime-700 font-semibold  ">
          <NavbarItem className="pl-2 md:pl-4 lg:pl-8 pr-8">
            { loginLogout() }
          </NavbarItem>
          <NavbarItem className="md:pl-2 lg:pl-4 pr-24">
            <Button 
              as={Link} 
              radius="sm"
              to="/shopping-cart" 
              className="border-solid border-2 border-lime-700 rounded text-center"
              onClick={() => handleCategoryChange('Shopping cart')}>
                <FiShoppingCart className=" h-6 w-6 pr-1"/>Cart
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      

      <CardCategory currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
    </div>
  );
}
