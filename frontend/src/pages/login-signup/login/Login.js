import React, { useState, useContext } from 'react';
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import UserContext from '../../../contexts/user-context/UserContext.js';

function Login() {
  const { loginUser } = useContext(UserContext);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const response = await loginUser(formData.email,formData.password);
        console.log("Login successful", response)
        // Reset form fields after submission
        setFormData({
            email: '',
            password: ''
        });
    }catch(e){
        console.log("Login failed",e)
    }
  };

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-black text-base font-light mb-2" >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-50 text-black border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-black text-base font-light mb-2">
            Password
          </label>
          <input
            className="appearance-none block w-full bg-gray-50 text-black border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="password"
            placeholder="Enter password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex start">
        <p>
            Create an account?
            <Link to="/signup" className=" text-lime-500 text-xl font-normal ">
                Signup
            </Link>
        </p>
      </div>
      <div className="flex justify-center">
        <Button type="submit" className="bg-lime-700 m-2 p-2 text-white text-center ">
            <span>Login </span>
        </Button>  
      </div>
    </form>
  );
}

export default Login;
