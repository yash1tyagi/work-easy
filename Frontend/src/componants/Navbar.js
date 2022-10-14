import React from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
    let navigate = useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem('token')
        navigate('/login')
    }
    // let location = useLocation();
    // useEffect(() => {
    //     console.log(location.pathname)
    // }, [location]);
    
    return (
        <div>
            
<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a href="https://flowbite.com" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Digital-Diary</span>
        </a>
        <div className="flex items-center">
            {/* {!localStorage.getItem('token')?<div>
                        <Link className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" to='/login'>Login</Link>
                        <Link className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" to="/signUp" >SignUp</Link>
                        </div>:<Link type="button" onClick={handleLogout} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">LogOut</Link>} */}
                        {/* <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">LogOut</button> */}

                        {

                        localStorage.getItem('token')?<button onClick={handleLogout} className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Log Out</button>:<div>
                            <Link to={'/login'} className ="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" >Login</Link>
                            <Link to={'/SignUp'}className ='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' >SignUp</Link>

                        </div>
                        }
        </div>
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
        <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                    <Link  className="text-gray-900 dark:text-white hover:underline" to="/">Home</Link>
                </li>
                <li>
                    <Link  className="text-gray-900 dark:text-white hover:underline" to="/addNote">Add</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>





 


        </div>
    )
}
