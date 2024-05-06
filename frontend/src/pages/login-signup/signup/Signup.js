import React, { useState, useContext } from 'react';
import {Button} from "@nextui-org/react";
import UserContext from '../../../contexts/user-context/UserContext';

function Signup() {
  
  const { dataSignUpUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await dataSignUpUser(formData.username, formData.password, formData.email);

      console.log('Form submitted:', response);
      // Reset form fields after submission
      setFormData({
        username: '',
        password: '',
        email: ''
      });
    }catch(e){
      console.log("Signup failed",e)
    }
    
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
            name="username"
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
      <div className="flex justify-center mt-4">
        <Button type="submit" className="bg-lime-700 text-white rounded text-center px-6 py-1">
            <span>SignUp </span>
        </Button>  
      </div>
    </form>
  );
}

export default Signup;
