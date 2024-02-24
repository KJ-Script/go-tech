import { useNavigate } from "react-router-dom";
const Navbar = () => {
    
    const navigate = useNavigate()

    return ( 
        <div className="w-full h-[15%] flex justify-between p-5">
          <div className="text-xl font-bold text-orange-500">Go-Inventory</div>
          <div className="flex space-x-6 text-orange-500 ">
            <div onClick={navigate('/')}>Home</div>
            <div>Dashboard</div>
            <div>About</div>
          </div>

          <div className="flex space-x-6">
            <div className="px-4 py-2 border border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white" onClick={navigate('/signup')}>Signup</div>
            <div className="px-4 py-2 border border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white" onClick={navigate('/signin')}>Login</div>
          </div>

        </div>

     );
}
  
export default Navbar;