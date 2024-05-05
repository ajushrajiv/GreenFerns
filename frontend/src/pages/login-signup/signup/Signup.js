import React, { useState } from 'react';
import {Button} from "@nextui-org/react";

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send data to the server for authentication
    console.log('Form submitted:', formData);
    // Reset form fields after submission
    setFormData({
      username: '',
      password: '',
      email: ''
    });
  };

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-black text-base font-light mb-2" >
            User Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-50 text-black border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Enter a username"
            name="firstName"
            value={formData.username}
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
      </div>
      <div className="flex justify-center">
        <Button type="submit" className="bg-lime-700 m-4 p-2 text-white text-center ">
            <span>SignUp </span>
        </Button>  
      </div>
    </form>
  );
}

export default Signup;
