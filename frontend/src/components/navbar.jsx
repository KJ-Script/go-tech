import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    
    const navigate = useNavigate()

    return ( 
        <div className="w-full flex justify-between px-5 py-3 bg-orange-50 border-l shadow-lg">
          
          <div className="text-xl font-bold text-orange-500">Go-Inventory</div>
          
          <div className="flex space-x-6 text-orange-500 ">
            <div onClick={() => {navigate('/')}}>Home</div>
            <div onClick={() => {navigate('/dashboard')}}>Dashboard</div>
            <div>About</div>
          </div>

          <div className="flex space-x-6">
            <button className="px-4 py-2 border border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white" onClick={() => {navigate('/signup')}}>Signup</button>
            <button className="px-4 py-2 border border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white" onClick={() => {navigate('/signin')}}>Login</button>
          </div>

        </div>

     );
}
  
export default Navbar;