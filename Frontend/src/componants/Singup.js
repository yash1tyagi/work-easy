import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
const Port = 5000 || process.env.PORT    
const Singup = () => {
  const host = `http://localhost:${Port}`
  const[credentials, setCredentials] = useState({name: "",email: "",password: "",cpassword: ""})
  let navigate = useNavigate();
  const handleSubmit = async (e)=>{
      e.preventDefault();
      const{name , email , password} = credentials
      const response = await fetch(`${host}/api/auth/`,{
          method: "POST",
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({name ,email, password})
      })
      const json = await response.json();
      console.log(json)
  
          localStorage.setItem('token',json.authtoken);
          navigate("/"); 
  }
  const onChange = (e) =>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }
  return <div className='w-full flex justify-center mt-4'>
    <form onSubmit={handleSubmit} className = 'w-1/2'>
      <div className='text-center text-2xl'>Sing Up</div>
    <div className="mt-5">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='name' id="name" onChange={onChange} aria-describedby="emailHelp" />
        </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='email' id="emial" onChange={onChange} aria-describedby="emailHelp" />
        </div>
      <div className="mb-3">
        <label htmlFor="Password" className="form-label">Password</label>
        <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='password' onChange={onChange} id="Password" />
      </div>
      <div className="mb-3">
        <label htmlFor="cPassword" className="form-label">Confirm Password</label>
        <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='cpassword'  onChange={onChange} id="cPassword" />
      </div>
      <button type="submit" className="ext-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 h-10 mt-5">Submit</button>
    </form>
  </div>;
};

export default Singup;


