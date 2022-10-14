import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
const Port = 5000 || process.env.PORT 

const Login = () => {
    const host = `http://localhost:${Port}`
    const[credentials, setCredentials] = useState({email: "",password: ""})
    let navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`,{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email:credentials.email, password:credentials.password })
        })
        const json = await response.json();
        console.log(json)
        if (json.success) {
            localStorage.setItem('token',json.authtoken);
            navigate("/");
        }
        else{
            alert("invalid credentials")
        }
    }
    const onChange = (e) =>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    return <div className= 'w-full flex justify-center mt-5'>
        <form onSubmit={handleSubmit} className = 'w-1/2'>
        <div className='text-2xl text-center'>Login</div>
            <div className="mb-3 mt-5">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={credentials.email} onChange={onChange} id="email" name='email' aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange}   value={credentials.password}  name='password' id="password" />
            </div>
            <button type="submit" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 h-10 mt-5">Submit</button>
        </form>
    </div>;
};

export default Login;
